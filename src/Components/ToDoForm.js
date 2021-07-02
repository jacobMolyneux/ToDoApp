import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="taskInputForm"
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter Task"
        ></input>
        <button id="submitForm">Submit</button>
      </form>
    </div>
  );
};
export default ToDoForm;
