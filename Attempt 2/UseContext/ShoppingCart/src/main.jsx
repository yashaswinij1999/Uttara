import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContext from "./Hooks/UseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UseContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UseContext>
  </BrowserRouter>
);
