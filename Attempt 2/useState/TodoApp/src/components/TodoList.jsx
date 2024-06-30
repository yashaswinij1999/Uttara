import { useContext } from "react";
import { todoContext } from "../Hooks/UseContext";
import TodoItem from "./TodoItem";

function TodoList({ getTodo }) {
  const { todos } = useContext(todoContext);

  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} id={el.id} todo={el.todo} getTodo={getTodo} />
      ))}
    </>
  );
}

export default TodoList;
