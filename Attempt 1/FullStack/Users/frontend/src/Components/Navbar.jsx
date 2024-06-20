import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="h-16 bg-slate-600 text-white flex items-center text-lg font-bold">
        <Link to={"/"}>All Users</Link>
      </nav>
    </>
  );
}

export default Navbar;
