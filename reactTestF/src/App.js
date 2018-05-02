import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <h3>Paweł you have done it!!</h3>
      <span id="test">One more time hello!!</span>
      <h1>React here!!</h1>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
