import React from "react";
import * as Survey from "survey-react";


Survey.StylesManager.applyTheme("modern");

export default function IntakeSurvey({ surveyJson, onComplete }) {
  const survey = new Survey.Model(surveyJson);

  survey.onComplete.add(function (result) {
    console.log(alert(JSON.stringify(result.data)));
    if (onComplete != null) {
      onComplete(result.data);
    }
    // document.querySelector("#surveyResult").textContent =
    //   "Result JSON:\n" + JSON.stringify(result.data, null, 3);
  });

  return <Survey.Survey model={survey} />;
}
