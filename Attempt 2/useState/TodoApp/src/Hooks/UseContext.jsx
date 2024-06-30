import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const todoContext = createContext();
const initialState = [{ id: 1, todo: "buy milk", completed: true }];

function UseContext({ children }) {
  const [todos, setTodos] = useState(initialState);

  function addTodo(newTodo) {
    setTodos([...todos, { id: uuidv4(), todo: newTodo, completed: false }]);
  }

  function removeTodo(id) {
    const todo = todos.filter((el) => el.id !== id);
    setTodos(todo);
  }

  function editTodo(id, editTodo) {
    const todo = todos.map((el) =>
      el.id === id ? { ...el, todo: editTodo } : el
    );
    setTodos(todo);
  }

  return (
    <todoContext.Provider value={{ addTodo, todos, removeTodo, editTodo }}>
      {children}
    </todoContext.Provider>
  );
}

export default UseContext;
