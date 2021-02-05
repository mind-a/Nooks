import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringfy(data)}`
  );
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
