import React from "react";
import logo from "../../../assets/logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = (
        <>
           <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
        </>
    )
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn  btn-ghost text-xl"><img className="h-[90%]" src={logo} alt="img" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="btn btn-accent">Login</Link>
      <button className="btn btn-md btn-outline border-[#FF3811] hover:bg-[#FF3811]  text-[#FF3811]">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
