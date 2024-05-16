import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RandomUsers from "./Components/RandomUsers";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-50">
        <RandomUsers />
      </div>
    </>
  );
}

export default App;
