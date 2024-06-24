import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Hooks/CartContext";

function NavBar() {
  const { state } = useContext(cartContext);

  return (
    <nav className="h-16 bg-slate-600 text-white text-xl flex items-center justify-between pl-2">
      <Link to={"/"}>Home</Link>
      <div className="flex gap-4">
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>
          <div className="mr-4 flex">
            <div className="">Cart</div>
            <div className="h-4 w-4 bg-red-500 rounded-full bottom-1 right-1 relative flex items-center justify-center text-xs">
              {state.length}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
