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
import SearchModal from "../Pages/SearchModal";

const TopBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white  py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left Side - Hamburger Menu */}
          <div className="flex items-center">
            <button
              className="text-gray-700 hover:text-gray-900 p-1 sm:p-2 cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Middle - Logo in Cursive */}
          <div className="flex-1 flex justify-center mt-2 mb-4 lg:ml-30 ">
            <h2
              className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl  cursor-pointer font-light bg-gradient-to-r from-amber-400 to-rose-800 bg-clip-text text-transparent"
              onClick={() => navigate("/")}
            >
              Glitzzera
            </h2>
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <button
              className="text-gray-700 hover:text-red-700 p-1 sm:p-2 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <FaUser className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
            <button
              className="text-gray-700 hover:text-red-700 p-1 sm:p-2 cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <FaSearch className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
            <button
              className="text-gray-700 hover:text-red-700 p-1 sm:p-2 cursor-pointer"
              onClick={() => navigate("/wishlist")}
            >
              <FaHeart className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
            <button
              className="text-gray-700 hover:text-red-700 p-1 sm:p-2 relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart className="w-3 h-3 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default TopBar;
