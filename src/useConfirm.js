import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function"){
    return;
  }
  if(onCancel && typeof onCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if(confirm(message)){
      onConfirm();
      //delete
    } else{
      onCancel();
      //abort
    }
  }
  return confirmAction;
};
/*
const useConfirm = (message = "", callback, rejection) => {
  if(typeof callback !== "function"){
    return;
  }
  const confirmAction = () => {
    if(confirm(message)){
      callback();
      //delete
    } else{
      rejection();
      //abort
    }
  }
  return confirmAction;
};
*/
const App = () => {

  const deleteWorld = () => console.log("deleting the world!");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return(
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
