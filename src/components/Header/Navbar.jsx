import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-4 pt-10">
      {/* Logo - Left */}
      <div className="navbar-start">
        <a className="text-2xl font-bold text-gray-800">Book Vibe</a>
      </div>

      {/* Nav Links - Center (hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-3 border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-medium"
                  : "px-5 py-3 text-gray-600 hover:text-[#23BE0A]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-3 border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-medium"
                  : "px-5 py-3 text-gray-600 hover:text-[#23BE0A]"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-3 border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-medium"
                  : "px-5 py-3 text-gray-600 hover:text-[#23BE0A]"
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Buttons - Right */}
      <div className="navbar-end gap-3">
        <a className="btn bg-[#23BE0A] border-none text-white rounded-lg px-6 py-6 font-medium hover:opacity-90">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] border-none text-white rounded-lg px-6 py-6 font-medium hover:opacity-90">
          Sign Up
        </a>

        {/* Mobile menu button */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listed-books">Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="/pages-to-read">Pages to Read</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
