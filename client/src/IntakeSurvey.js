import React from "react";
import * as Survey from "survey-react";

import surveyJson from "./surveyJson";

Survey.StylesManager.applyTheme("modern");

export default function IntakeSurvey() {
  const survey = new Survey.Model(surveyJson);

  survey.onComplete.add(function (result) {
    document.querySelector("#surveyResult").textContent =
      "Result JSON:\n" + JSON.stringify(result.data, null, 3);
  });

  return <Survey.Survey model={survey} />;
}
