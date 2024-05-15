import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./Components/TodoApp";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <div className="min-h-screen bg-orange-100">
        <TodoApp />
      </div>
    </>
  );
}

export default App;
