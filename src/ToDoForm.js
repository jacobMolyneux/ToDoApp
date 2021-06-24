import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter Task"
        ></input>
        <Button variant="primary" size="lg">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default ToDoForm;
