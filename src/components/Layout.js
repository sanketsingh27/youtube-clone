import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className=" min-h-screen  max-w-[1400px] mx-auto border-2 border-black ">
        <NavBar />
        <div className="flex md:h-[720px] border-2 border-blue-600">
          <Sidebar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
