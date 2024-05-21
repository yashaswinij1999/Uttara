import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const initialData = [{ id: 1, task: "buy milk" }];

function TodoApp() {
  const [inval, setVal] = useState("");
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos) || initialData;
  });
  const [isUpdate, setUpdate] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    setCurrentId(null);
  }

  function deleteTodo(id) {
    const removeTodo = todos.filter((el) => el.id !== id);
    setTodos(removeTodo);
  }

  return (
    <>
      <div></div>
      <div className="w-2/4 m-auto p-2 ">
        <input
          className="block p-2 m-2 w-full rounded-md "
          value={inval}
          placeholder="add Todo"
          type="text"
          onChange={(e) => setVal(e.target.value)}
        />

        {isUpdate ? (
          <button
            className="border-2 bg-blue-400 text-white p-2 w-full m-2"
            onClick={() => updateTodo(inval)}
          >
            update
          </button>
        ) : (
          <button
            className="border-2 bg-blue-400 text-white p-2 w-full m-2"
            onClick={handleSubmit}
          >
            add
          </button>
        )}
      </div>

      <TodoList todos={todos} getTodo={getTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoApp;
