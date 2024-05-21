import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <>
      <nav className="bg-slate-500 text-white h-12 flex items-center justify-center">
        Todo List
      </nav>
      <div className="m-auto ">
        <TodoApp />
      </div>
    </>
  );
}

export default App;
