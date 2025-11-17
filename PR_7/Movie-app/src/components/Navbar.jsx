import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-wide text-white text-lg">
          MovieHub
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `bg-white/50 hover:bg-white text-black px-3 py-1.5 rounded-md transition-colors ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className="inline-flex items-center gap-2 font-medium bg-white/50 hover:bg-white text-black px-3 py-1.5 rounded-md transition-all duration-200"
          >
            + Add
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
