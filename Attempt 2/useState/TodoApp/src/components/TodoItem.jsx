import { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { todoContext } from "../Hooks/UseContext";

function TodoItem({ id, todo, getTodo }) {
  const { removeTodo } = useContext(todoContext);

  return (
    <>
      <div
        key={id}
        className="m-1 w-64 p-2 rounded-lg border-2 bg-yellow-200 h-14 flex justify-between items-center"
      >
        <div>{todo}</div>
        <div className="flex gap-2">
          <MdEdit onClick={() => getTodo(id)} />
          <MdDelete onClick={() => removeTodo(id)} />
        </div>
      </div>
    </>
  );
}

export default TodoItem;
