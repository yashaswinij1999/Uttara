import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, getTodo, deleteTodo }) {
  return (
    <>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          id={el.id}
          task={el.task}
          getTodo={getTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
