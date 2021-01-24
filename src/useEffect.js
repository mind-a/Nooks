import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const content = [
    {
        tab:"Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab:"Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  const[currentIndex, setCurrentIndex] = useState(initialTab);
  return{
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <div>Hi</div>      
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
