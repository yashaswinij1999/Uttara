import { useContext, useState } from "react";
import { todoContext } from "../Hooks/UseContext";
import TodoList from "./TodoList";

function Form() {
  const [inval, setVal] = useState("");
  const { state, dispatch } = useContext(todoContext);
  const [currentId, setCurrentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    setVal(e.target.value);
  }

  function handleSubmit() {
    dispatch({ type: "add", payload: { todo: inval } });
    setVal("");
  }

  function getTodo(id) {
    const todo = state.map((el) => {
      if (el.id === id) {
        return el.todo;
      }
    });
    setVal(todo);
    setIsEdit(true);
    setCurrentId(id);
  }

  function handleUpdate() {
    dispatch({ type: "edit", payload: { id: currentId, todo: inval } });
    setIsEdit(false);
    setVal("");
  }

  return (
    <>
      <div className="flex gap-2 m-5">
        <input
          type="text"
          placeholder="Enter todo......"
          className="text-sm border-slate-600 border-2 p-2 rounded-lg"
          value={inval}
          onChange={handleChange}
        />
        {isEdit ? (
          <button
            className="bg-blue-500 rounded-lg p-2 text-white"
            onClick={handleUpdate}
          >
            Update Task
          </button>
        ) : (
          <button
            className="bg-blue-500 rounded-lg p-2 text-white"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        )}
      </div>
      <TodoList getTodo={getTodo} />
    </>
  );
}

export default Form;
