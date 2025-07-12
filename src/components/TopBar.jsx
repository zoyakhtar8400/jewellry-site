import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Sidebar from "../Slidess/Slidebar.jsx";

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white  py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left Side - Hamburger Menu */}
          <div className="flex items-center">
            <button
              className="text-gray-700 hover:text-gray-900 p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>

          {/* Middle - Logo in Cursive */}
          <div className="flex-1 flex justify-center mt-2 mb-4">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 ml-2 tracking-wider"
              style={{
                fontFamily: '"Dancing Script", "Brush Script MT", cursive',
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Rubans
            </h1>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-gray-700 hover:text-gray-900 p-1 sm:p-2">
              <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 p-1 sm:p-2">
              <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 p-1 sm:p-2">
              <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 p-1 sm:p-2 relative"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default TopBar;
