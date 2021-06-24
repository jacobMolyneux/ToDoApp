import React from "react";
import Card from "react-bootstrap/Card";

const ToDo = ({ todo }) => {
  return (
    <Card border="secondary" className="mt-2 w-50">
      {todo.task}
    </Card>
  );
};
export default ToDo;
