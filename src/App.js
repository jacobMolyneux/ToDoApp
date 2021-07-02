import React, { useState } from "react";
import Header from "./Components/Header.js";
import data from "./data.json";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";
import Timer from "./Components/timer";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };
  return (
    <div className="App">
      <div id="headerContainer">
        <Header />
        <ToDoForm addTask={addTask} />
      </div>
      <ToDoList toDoList={toDoList} />
      <Timer />
    </div>
  );
}

export default App;
