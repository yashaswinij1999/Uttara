import { useContext } from "react";
import { todoContext } from "../Hooks/UseContext";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TodoList({ getTodo }) {
  const { state, dispatch } = useContext(todoContext);

  function toggle(id) {
    dispatch({ type: "toggle", payload: { id: id } });
  }

  function removeTodo(id) {
    dispatch({ type: "delete", payload: { id: id } });
  }

  return (
    <>
      {state.map((el) => (
        <div
          key={el.id}
          className="h-13 p-2 w-64 rounded-lg border-2 m-2 flex justify-between"
        >
          <div className=" flex gap-1  ">
            <input
              type="checkbox"
              checked={el.completed}
              onClick={() => toggle(el.id)}
              className="border-slate-500 border-2"
            />
            {el.todo}
          </div>
          <div className="flex justify-center items-center gap-2">
            <MdEdit onClick={() => getTodo(el.id)} />
            <MdDelete onClick={() => removeTodo(el.id)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
