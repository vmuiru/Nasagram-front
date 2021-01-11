import  Apod  from './components/Apod';
import Home from './components/pages/Home';
import MonthlyView from './components/pages/MonthlyView';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


import { getUser, logout } from './services/UserService';
import { getApod } from './services/Apod-api';
import { Switch, Route } from 'react-router-dom';

import { useState, useEffect, Redirect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }


  const [apodData, setApodData] = useState({
    results: []
  })

  async function getApodData() {
    const apodData = await getApod();
    console.log(apodData);
    setApodData({
      results: apodData
    
    });

  }

  useEffect(() => {
    getApodData();
    console.log('effect')
  }, []);
  console.log(apodData)


  function handleLogout() {
    logout();

    setUserState({ user: null });
    props.history.push('/');
  }

  return (
<div className="App">
<Home handleLogout={handleLogout} user={userState.user} />
      
      <section>
        <Switch>
            <Route exact path="/pod" render={props => 
            userState.user ?
              <Apod apodData={apodData.results} />
              :
              <Redirect to='/login' />
            } />
            <Route exact path="/signup" render={props => 
              <Signup {...props} handleSignupOrLogin={handleSignupOrLogin} />
            } />
            <Route exact path="/login" render={props => 
              <Login {...props} handleSignupOrLogin={handleSignupOrLogin}/>
            } />

        </Switch>
      </section>
    </div>
  );
}

export default App;
