import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Hooks/UseContext";

function Navbar() {
  const { state } = useContext(cartContext);

  return (
    <nav className="h-12 bg-slate-500 text-white flex justify-between items-center text-xl p-2 ">
      <Link to={"/"}>Home</Link>
      <div className="gap-4 flex">
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
