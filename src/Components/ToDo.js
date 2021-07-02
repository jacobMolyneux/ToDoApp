import React from "react";
import "./ToDoCardStyle.css";

const ToDo = ({ todo }) => {
  return <div className="toDoCard">{todo.task}</div>;
};
export default ToDo;
