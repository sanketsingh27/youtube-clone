import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav className=" bg-gray-100 md:h-16 border-2 md:flex md:justify-around items-center mx-auto">
        <h1 className=" text-4xl font-extrabold text-blue-400">LOGO-PLACEHOLDER</h1>

        <input type="search" className=" rounded-md border-2 h-8 bg-white w-[250]" />

        <div className=" text-2xl text-gray-600 flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </>
  );
}
