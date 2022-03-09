import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountDownTimer from './CountdownComponent';

  
const getLocalStorageValue = (s: string) => localStorage.getItem(s);


function App() {
   const [data, setData] = useState(
    { date: Date.now(), delay: 60000 } //60 seconds
  );
  const wantedDelay = 60000; //60 s

  //[START] componentDidMount
  //Code runs only one time after each reloading
  useEffect(() => {
    if (localStorage.getItem("seconds") == null)
      localStorage.setItem(
        "seconds",
        "60"
      );
  }, []);
  //[END] componentDidMount
  
  return (
    <div className="App">
        <div>
        <CountDownTimer hours={1} minutes={15} seconds={parseInt(localStorage.getItem("seconds"))}/>
        </div>
    </div>
  );
}

export default App;
