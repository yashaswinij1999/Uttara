import React, { useState } from "react";

function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleChange = function (e) {
    setTodo(e.target.value);
  };

  const handleSubmit = function () {
    addTodo(todo);
  };

   

  return (
    <div className="m-auto flex justify-center p-2 items-center ">
      <input
        className="p-2 m-2 rounded-md "
        type="text"
        placeholder="create a todo"
        value={todo}
        onChange={handleChange}
      />
      <button
        className="text-white p-2 h-fit rounded-md bg-green-400"
        onClick={handleSubmit}
      >
        Add todo
      </button>
    </div>
  );
}

export default Form;
