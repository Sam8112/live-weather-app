import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Sam8112/live-weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/sameer-sharma-9a04762b3/">
          Sameer Sharma
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
