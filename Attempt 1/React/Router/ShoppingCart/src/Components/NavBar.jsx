import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Hook/Context";

function NavBar() {
  const { state } = useCart();

  return (
    <div>
      <nav className="bg-slate-500 text-white border-2 flex p-4 justify-between w-full sticky">
        <Link to={"/"}>Home</Link>
        <div className="flex gap-2">
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/cart"}>
            <div className="text-xl flex relative">
              🛒{" "}
              <div className="bg-red-500 w-4 h-4 rounded-full absolute left-4 text-xs">
                {state.length}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
