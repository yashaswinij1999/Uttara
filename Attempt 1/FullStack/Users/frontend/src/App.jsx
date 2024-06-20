import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
