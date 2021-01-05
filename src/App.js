import { Apod } from './components/Apod';
import { getApod } from './services/Apod-api';

import { useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {

  const [apodData, setApodData] = useState({
    Results: []
  })

  async function getApodData() {
    const data = await getApod();
    setApodData(data);

  }

  useEffect(() => {
    getApodData();
    console.log('effect')
  }, []);

  return (
<div className="App">
      <header className="App-header">
        <h1>Nasagram</h1>  
      </header>
      <div>
          return(
            <Apod />
          )





      </div>
    </div>
  );
}

export default App;
