import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Hooks/UseContext";
import { IoCart } from "react-icons/io5";

function Navbar() {
  const { state } = useContext(cartContext);

  return (
    <nav className="h-11 bg-slate-500 flex justify-between text-white p-4 items-center">
      <Link to={"/"}>Home</Link>
      <div className="flex items-center gap-2">
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>
          <div className="flex items-center justify-center relative ">
            <IoCart className="text-2xl" />
            <div className="w-4 h-4 bg-red-500 rounded-full absolute  left-3 bottom-3 flex items-center justify-center text-sm">
              {state.length}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
