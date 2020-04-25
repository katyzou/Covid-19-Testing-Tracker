import React, { useState } from "react";
import axios from "axios";
import surveyJson from "./surveyJson";

import IntakeSurvey from "./IntakeSurvey";

function Scheduler() {
  const [text, setText] = useState();
  axios("http://localhost:5000/").then((d) => setText(d.data));
  return (
    <div>
      {/* <header className="App-header">
        <p>{text}</p>
      </header> */}
      {/* <div style={{ width: '80vw', margin: '0 auto '}}>
        Input your name
        <input type="text" className="sv-text" />
      </div> */}
      <IntakeSurvey surveyJson={surveyJson} />
    </div>
  );
}

export default Scheduler;
