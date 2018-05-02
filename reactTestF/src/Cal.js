import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", function() {
  
  const numberA = parseInt(prompt("wpisz pierwszą liczbę"));
  const numberB = parseInt(prompt("wpisz grugą liczbę"));
  const calculation = prompt("wpisz znak +,-,* lub /");
  let info;
  if (calculation == "+") {
    info = <h1>{numberA + numberB}</h1>;
  } else if (calculation == "-") {
    info = <h2>{numberA - number2}</h2>;
  } else if (calculation == "*") {
    info = <h3>{numberA * number2}</h3>;
  } else {
    info = <h4>{numberA / numberB}</h4>;
  }

  ReactDOM.render(<div>{info}</div>, document.getElementById("app2"));
});

/* here I'm using an opportunity when I can render only the variable */
pawelkur;
