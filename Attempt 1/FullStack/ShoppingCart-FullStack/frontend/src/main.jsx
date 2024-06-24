import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./Hooks/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartContext>
);
