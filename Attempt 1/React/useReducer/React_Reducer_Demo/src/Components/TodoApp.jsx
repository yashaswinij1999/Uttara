import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const initialData = [{ id: 1, task: "buyMilk" }];

function TodoApp() {
  const [inval, setVal] = useState("");
  const [todos, setTodos] = useState(initialData);
  const [isUpdate, setUpdate] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  function addTodo(todo) {
    const newTodo = [...todos, { id: uuidv4(), task: todo }];
    setTodos(newTodo);
  }

  function updateTodo(newTask) {
    const update = todos.map((el) =>
      el.id === currentId ? { ...el, task: newTask } : el
    );
    setTodos(update);
    setUpdate(false);
    reset();
  }

  function getTodo(id) {
    const getData = todos.map((el) => {
      if (el.id === id) {
        console.log(el.task);
        return el.task;
      }
    });
    setVal(getData);
    setUpdate(true);
    setCurrentId(id);
  }

  function handleSubmit() {
    console.log(inval);
    addTodo(inval);
    reset();
  }

  function reset() {
    setVal("");
    currentId(null);
  }

  return (
    <>
      <input
        value={inval}
        placeholder="add Todo"
        type="text"
        onChange={(e) => setVal(e.target.value)}
      />

      {isUpdate ? (
        <button onClick={() => updateTodo(inval)}>update</button>
      ) : (
        <button onClick={handleSubmit}>add</button>
      )}

      <TodoList todos={todos} getTodo={getTodo} />
    </>
  );
}

export default TodoApp;
