import React from "react";
import "./toDoListStyle.css";

import ToDo from "./ToDo";
const ToDoList = ({ toDoList }) => {
  return (
    <div className="ListContainer">
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};
export default ToDoList;
