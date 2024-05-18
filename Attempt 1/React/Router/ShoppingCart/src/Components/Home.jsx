import React from "react";
import ShoppingCart from "./ShoppingCart";

function Home() {
  return (
    <>
      <div className="p-4">
        <div className="h-screen mt-4">
          <ShoppingCart />
        </div>
      </div>
    </>
  );
}

export default Home;
