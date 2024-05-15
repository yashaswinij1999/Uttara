import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

function TodoApp() {
  const initialData = [
    { id: 1, task: "buy milk" },
    { id: 2, task: "eat food" },
  ];

  const [data, setData] = useState(initialData);

  const addTodo = function (todo) {
    const newTodo = { id: uuidv4(), task: todo };
    setData([...data, newTodo]);
  };

  return (
    <>
      <div className=" w-6/12 text-center m-auto">
        <Form addTodo={addTodo} />
        <ul>
          {data.map((el) => (
            <li className=" p-1 m-2 rounded-md  bg-slate-100" key={el.id}>
              {el.task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
