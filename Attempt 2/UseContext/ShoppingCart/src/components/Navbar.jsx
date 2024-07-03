import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-11 bg-slate-500 flex justify-between text-white p-4 items-center">
      <Link to={"/"}>Home</Link>
      <div className="flex items-center gap-2">
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
