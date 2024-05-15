import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import EditForm from "./EditForm";

function TodoApp() {
  const initialData = [
    { id: 1, task: "buy milk" },
    { id: 2, task: "eat food" },
  ];

  const [data, setData] = useState(initialData);
  const [isEdit, setEdit] = useState(false);

  const addTodo = function (todo) {
    const newTodo = { id: uuidv4(), task: todo };
    setData([...data, newTodo]);
  };

  const delTodo = function (id) {
    const filtered = data.filter((el) => el.id !== id);
    setData(filtered);
  };

  return (
    <>
      <div className=" w-6/12  m-auto">
        <Form addTodo={addTodo} />
        {isEdit ? (
          <EditForm />
        ) : (
          <ul>
            {data.map((el) => (
              <li
                className=" p-1 m-2 rounded-md bg-slate-100 flex justify-around items-center"
                key={el.id}
              >
                {el.task}
                <div className="flex gap-2">
                  <button
                    className="w-fit p-1 bg-violet-400 rounded-lg"
                    onClick={() => setEdit(true)}
                  >
                    edit
                  </button>
                  <button
                    className="w-fit p-1 bg-red-400 rounded-lg"
                    onClick={() => delTodo(el.id)}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default TodoApp;
