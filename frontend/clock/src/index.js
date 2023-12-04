import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import "./clock.css";

function App() {
  return (
    <div className="App">
      <Clock title="Clock" datediff={-6} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
