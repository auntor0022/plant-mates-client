import React, { useState, useContext } from "react";
import logoimg from "../assets/logo.png";
import { Link, NavLink } from "react-router"; // Correct import
import { AuthContext } from "../provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOut } = useContext(AuthContext); // Correct usage of context

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setShowLogout(false);
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-accent transition"}>Home</NavLink></li>
      <li><NavLink to="/exploreGardeners" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-accent transition"}>Explore Gardeners</NavLink></li>
      <li><NavLink to="/browseTips" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-accent transition"}>Browse Tips</NavLink></li>
      <li><NavLink to="/shareTips" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-accent transition"}>Share a Garden Tip</NavLink></li>
      <li><NavLink to="/myTips" className={({ isActive }) => isActive ? "text-secondary font-semibold" : "hover:text-accent transition"}>My Tips</NavLink></li>
    </>
  );

  return (
    <div className="bg-[#FAFAF5] shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        {/* Start - Logo + Mobile Dropdown */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004B8D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 z-10">
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="w-12" src={logoimg} alt="Logo" />
            <span className="text-2xl font-bold text-[#004B8D] tracking-wide">Plant Mates</span>
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-[#2E2E2E] gap-2">
            {links}
          </ul>
        </div>

        {/* End - Auth + Theme */}
        <div className="navbar-end gap-2">
          <ThemeToggle />
          {user ? (
            <div className="relative flex items-center gap-3">
              <div className="relative group">
                <img
                  onClick={() => setShowLogout(!showLogout)}
                  className="rounded-full w-10 h-10 cursor-pointer border-2 border-primary"
                  src={user.photoURL}
                  alt="User"
                />
                <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-accent text-white rounded opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </span>
              </div>
              {showLogout && (
                <div className="absolute right-0 top-full mt-2 bg-white border rounded shadow-lg z-50 w-48">
                  <p className="px-4 pt-3 text-center text-base">Want to log out?</p>
                  <button
                    onClick={handleLogOut}
                    className="w-full bg-primary text-white py-2 hover:bg-accent text-base"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-primary text-white hover:bg-accent px-4 py-2 text-sm md:text-base"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
