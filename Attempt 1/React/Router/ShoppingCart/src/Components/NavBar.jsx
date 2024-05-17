import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="bg-slate-500 text-white border-2 flex p-4 justify-between ">
        <Link to={"/"}>Home</Link>
        <div>
          <Link to={"/contact"}>Contact</Link>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
