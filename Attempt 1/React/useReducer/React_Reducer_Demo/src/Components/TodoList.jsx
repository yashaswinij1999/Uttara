import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, getTodo }) {
  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} id={el.id} task={el.task} getTodo={getTodo} />
      ))}
    </>
  );
}

export default TodoList;
