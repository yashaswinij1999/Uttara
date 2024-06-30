import { useContext } from "react";
import { useState } from "react";
import { todoContext } from "../Hooks/UseContext";
import TodoList from "./TodoList";

function Form() {
  const [inval, setState] = useState("");
  const { addTodo, todos, editTodo } = useContext(todoContext);
  const [edit, setEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");

  function handleSubmit() {
    addTodo(inval);
    reset("");
  }

  function reset() {
    setState("");
  }

  function getTodo(id) {
    const todo = todos.map((el) => {
      if (el.id === id) {
        return el.todo;
      }
    });
    setState(todo);
    setEdit(true);
    setCurrentId(id);
  }

  function handleUpdate() {
    editTodo(currentId, inval);
    setEdit(false);
    reset("");
  }

  return (
    <>
      <div className="m-2">
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo ..... "
          className="border-gray-500 border-2 p-2 rounded-md text-sm"
          onChange={(e) => setState(e.target.value)}
          value={inval}
        />
        {edit ? (
          <button
            className="ml-2 bg-blue-500 p-2 border-gray-500 border-2 rounded-md "
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            className="ml-2 bg-blue-500 p-2 border-gray-500 border-2 rounded-md "
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        )}
      </div>
      <TodoList getTodo={getTodo} />
    </>
  );
}

export default Form;
