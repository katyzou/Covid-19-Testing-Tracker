import React, { useState } from "react";
import axios from "axios";

import Scheduler from './Scheduler';
import Status from './Status';

import "./App.css";


function App() {
  // const [text, setText] = useState();
  // axios("http://localhost:5000/").then((d) => setText(d.data));

  const [pageName, setPageName] = useState('mike');
  
  // const defaultPageName = 'katy';
  // const state = useState(defaultPageName);
  // const pageName = state[0];
  // const setPageName = state[1];

  console.log({ pageName });

  // lambda: setPageName('katy')
  // if page is katy "covid-19 schedule "
  // if page is mike "status checker"
  return (
    <div className="App">
      <header className="App-header">
        <p>{pageName == 'katy' ? "Covid-19 Schedule Testing Appointment": "Status Checker"}</p>
      </header>
      <button className="button" onClick={() => setPageName('katy')}>
        Show Scheduler
      </button>
      <button className="button" onClick={() => setPageName('mike')}>Show Status</button>
      {pageName == 'katy' && (<Scheduler />)}
    
      {pageName == 'mike' && (<Status />)}

    </div>
  );
}

export default App;
