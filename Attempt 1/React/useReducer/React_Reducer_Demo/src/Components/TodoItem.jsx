import React from "react";

function TodoItem({ id, task, getTodo, deleteTodo }) {
  return (
    <>
      <div key={id}>
        {task}{" "}
        <button className="bg-blue-400" onClick={() => getTodo(id)}>
          {" "}
          edit{" "}
        </button>
        <button className="bg-red-500 m-2" onClick={() => deleteTodo(id)}>
          {" "}
          delete{" "}
        </button>
      </div>
    </>
  );
}

export default TodoItem;
