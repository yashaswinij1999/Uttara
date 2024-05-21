import React from "react";

function TodoItem({ id, task, getTodo, deleteTodo }) {
  return (
    <>
      <div className="m-auto w-2/4 flex items-center  bg-purple-100 rounded-md mt-2 justify-between ">
        <div key={id} className="w-2/4">
          {task}{" "}
        </div>
        <div className="flex 2/4 ">
          <button
            className="bg-blue-400 p-2 m-2 rounded-md"
            onClick={() => getTodo(id)}
          >
            {" "}
            edit{" "}
          </button>
          <button
            className="bg-red-500 m-2 p-2 rounded-md"
            onClick={() => deleteTodo(id)}
          >
            {" "}
            delete{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
