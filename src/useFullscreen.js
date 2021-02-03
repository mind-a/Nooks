import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};
const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App">
      <button onClick={triggerFull}>full</button>
      <br />
      <div ref={element}>
        <img src="" />
        <br />
        <button onClick={exitFull}>exit</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
