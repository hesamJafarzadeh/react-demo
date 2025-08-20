import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../../contexts/AuthContext";

export default function Header() {
  const authContext = useAuth();

  const activeLinkClass =
    "text-gray-700 hover:text-blue-600 transition font-medium border-b border-blue-300";
  const deactiveLinkClass =
    "text-gray-700 hover:text-blue-600 transition font-medium";

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-x-6">
          {/* logo */}
          <Link to="/" className="font-bold mr-4">
            My First
            <span className="text-blue-600 mx-2 text-xl">React</span>
            App.
          </Link>

          {/* links */}

          <nav className="flex  items-center gap-4">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkClass : deactiveLinkClass
              }
            >
              Home
            </NavLink>

            {/* products */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? activeLinkClass : deactiveLinkClass
              }
            >
              Products
            </NavLink>
          </nav>
        </div>

        {/* auth actions */}
        <div className="flex  items-center gap-4">
          {authContext.getUserFullName}
          {authContext.isLoggedIn ? (
            <button
              onClick={authContext.handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
