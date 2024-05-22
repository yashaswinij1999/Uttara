import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { reducer } from "./reducer";

const initialData = [{ id: 1, task: "buy milk" }];

function TodoApp() {
  const [inval, setVal] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [todos, dispatch] = useReducer(reducer, initialData, () => {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    dispatch({ type: "Add", payload: { id: uuidv4(), task: todo } });
    reset();
  }

  function updateTodo(newTask) {
    dispatch({ type: "update", payload: { id: currentId, task: newTask } });
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
    dispatch({ type: "delete", payload: id });
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
