import React from "react";
import "./toDoCardStyle.css";

const ToDo = ({ todo }) => {
  return <div className="toDoCard">{todo.task}</div>;
};
export default ToDo;
