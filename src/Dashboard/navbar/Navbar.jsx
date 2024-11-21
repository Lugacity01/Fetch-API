import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Layout/Sidebar";
// import Topbar from "../../Layout/Topbar";

const Navbar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        
        <div className="flex-1  overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
