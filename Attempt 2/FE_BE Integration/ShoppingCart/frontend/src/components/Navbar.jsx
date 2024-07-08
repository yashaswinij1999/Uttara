import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Hooks/UseContext";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const { state } = useContext(cartContext);

  return (
    <nav className="h-12 bg-slate-500 text-white flex justify-between items-center text-xl p-2 ">
      <Link to={"/"}>Home</Link>
      <div className="gap-2 flex">
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>
          <div className="flex justify-center items-center p-2 relative ">
            <FiShoppingCart />
            <div className="h-4 w-4 bg-red-500 rounded-lg flex justify-center items-center text-xs absolute left-5 bottom-5">
              {state.length}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
