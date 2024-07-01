import { useState } from "react";
import RandomUserList from "./RandomUserList";

function Form() {
  const [inval, setInputVal] = useState(0);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center items-center flex-col">
        <div className="text-2xl m-5">Random Users List</div>
        <input
          type="number"
          placeholder="Enter no of users"
          className="border-gray-500 border-2 rounded-lg p-2 text-sm m-5"
          value={inval}
          onChange={handleChange}
        />

        <RandomUserList inval={inval} />
      </div>
    </>
  );
}

export default Form;
