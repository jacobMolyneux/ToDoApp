import React from "react";

import ToDo from "./ToDo";
const ToDoList = ({ toDoList }) => {
  return (
    <div className="container">
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};
export default ToDoList;
