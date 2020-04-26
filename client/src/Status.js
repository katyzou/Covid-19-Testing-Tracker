import React, { useState } from "react";
import axios from "axios";

import IntakeSurvey from "./IntakeSurvey";

const json = {
      "pages": [
       {
        "name": "Status",
        "elements": [
         {
          "type": "text",
          "name": "id",
          "title": "Patient ID",
          "isRequired": true,
          "inputType": "number"
         },
         {
          "type": "text",
          "name": "question1",
          "title": "Date of Birth",
          "inputType": "date",
          "max": "2999-12-31"
         }
        ],
        "title": "Check your result status after testing"
       }
      ],
      "showPageTitles": false,
      "showQuestionNumbers": "off"
     }

function Status() {
  const [text, setText] = useState();
  axios("http://localhost:5000/").then((d) => setText(d.data));
  return (
    <div>
      {/* <header className="App-header">
        <p>{text}</p>
      </header> */}
      {/* <h1>
        Check your result status after testing 
      </h1> */}
      <IntakeSurvey surveyJson={json} onComplete={(result) => {
        axios.post('http://localhost:5000/status', result)
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

export default Status;