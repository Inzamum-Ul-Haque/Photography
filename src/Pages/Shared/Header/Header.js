import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/logos/icons8-slr-large-lens-96.png";
import "./Header.css";
import { AiOutlineLogout } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const activeStyle = {
    fontWeight: "bold",
    color: "black",
    background: "#d1d5db",
  };

  return (
    <div className="navbar bg-stone-100 text-black h-28 header">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link>Add Service</Link>
                </li>
                <li>
                  <Link>MyReviews</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:bg-transparent logo"
        >
          <img className="w-16" src={logo} alt="" />
          <div className="flex flex-col text-start text-sky-800">
            <p className="text-4xl">Photography</p>
            <span className="text-lg">Live your memories!</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-gray-300 hover:font-bold ml-3"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="hover:bg-gray-300 hover:font-bold ml-3"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/add-service"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="hover:bg-gray-300 hover:font-bold ml-3"
                >
                  Add Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-reviews"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="hover:bg-gray-300 hover:font-bold ml-3"
                >
                  My Reviews
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        {user ? (
          <button className="btn ml-3 hover:bg-slate-800">
            Log Out <AiOutlineLogout className="ml-2 text-xl" />
          </button>
        ) : (
          <Link to="/signin" className="btn ml-3 hover:bg-slate-800">
            Sign In <FaSignInAlt className="ml-2 text-xl" />
          </Link>
        )}
      </div>
      <div className="navbar-end lg:hidden">
        {user ? (
          <button className="btn ml-3 hover:bg-slate-800">
            Log Out <AiOutlineLogout className="ml-2 text-xl" />
          </button>
        ) : (
          <Link to="/signin" className="btn ml-3 hover:bg-slate-800">
            Sign In <FaSignInAlt className="ml-2 text-xl" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
