import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const input = useRef();
//  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
