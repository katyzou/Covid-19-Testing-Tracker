import React, { useState } from "react";
import axios from "axios";
import surveyJson from "./surveyJson";

import IntakeSurvey from "./IntakeSurvey";

function Scheduler() {
  // const [text, setText] = useState();
  // axios("http://localhost:5000/").then((d) => setText(d.data));
  return (
    <div>
      <IntakeSurvey surveyJson={surveyJson} onComplete={(result) => {
        axios.post('http://localhost:5000/schedule', result)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }} />
    </div>
  );
}

export default Scheduler;
