import React from "react";
import { CardDeck, CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
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
