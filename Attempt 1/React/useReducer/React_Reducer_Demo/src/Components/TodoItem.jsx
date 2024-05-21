import React from "react";

function TodoItem({ id, task, getTodo }) {
  return (
    <>
      <div key={id}>
        {task}{" "}
        <button className="bg-blue-400" onClick={() => getTodo(id)}>
          {" "}
          edit{" "}
        </button>
      </div>
    </>
  );
}

export default TodoItem;
