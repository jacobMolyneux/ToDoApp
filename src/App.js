import React, { useState } from "react";
import Header from "./Header.js";
import data from "./data.json";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="App" className="d-flex">
      <div className="d-flex-column margin-10rem">
        <Header />
        <ToDoForm addTask={addTask} />
      </div>
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
