import  Apod  from './components/Apod';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import AlbumView from './components/pages/AlbumView';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


import { getUser, logout } from './services/UserService';
import { getApod, getAlbums } from './services/Apod-api';
import { Switch, Route } from 'react-router-dom';

import { useState, useEffect, Redirect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App(props) {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

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

  const [albumData, setAlbumData] = useState({
    results: []
  })

  async function getApodData() {
    const apodData = await getApod();
    console.log(apodData);
    setApodData({
      results: apodData,
    
    });

  }

  async function getAlbumData() {
    const albumData = await getAlbums();
    console.log(albumData);
    setAlbumData({
      results: albumData
    
    });

  }

  useEffect(() => {
    getApodData();
    getAlbumData();
    console.log('effect')
  }, []);
  console.log(apodData)





  function handleLogout() {
    logout();

    setUserState({ user: null });
    props.history.push('/');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
<div className="App">
<button onClick={themeToggler}>Switch Theme</button>
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
            <Route exact path="/album" render={props => 
              <AlbumView {...props} albumData={albumData.results}/>
            } />

        </Switch>
      </section>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
