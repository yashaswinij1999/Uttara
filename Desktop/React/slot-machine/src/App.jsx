import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Slot from "./Slot.jsx";

function App() {
  return (
    <>
      <Slot val1="hello" val2="hello" val3="hello" />
      <Slot val1="a" val2="b" val3="a" />
    </>
  );
}

export default App;
