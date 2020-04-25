import React, { useState } from "react";
import axios from "axios";

import IntakeSurvey from "./IntakeSurvey";

import "./App.css";

function App() {
  const [text, setText] = useState();
  axios("http://localhost:5000/").then((d) => setText(d.data));
  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
      </header>
      <IntakeSurvey />
    </div>
  );
}

export default App;
