import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaLinkedin,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white mb-2 ">
      <div className="max-w-7xl mx-auto  flex justify-between items-center ">
        {/* Navigation Menu - Left Side (Hidden on mobile) */}
        <nav className="hidden md:flex space-x-4  ">
          <span
            className="text-gray-700 hover:text-red-700 px-3 py-2 text-[15px] font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            className="text-gray-700 hover:text-red-700 px-3 py-2 text-[15px] font-medium cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About Us
          </span>

          {/* Products with Dropdown */}
          <div className="relative">
            <span
              className="text-gray-700 hover:text-red-700 px-3 py-2 text-[15px] font-medium cursor-pointer flex items-center"
              onClick={() => navigate("/category")}
            >
              Category
              {/* <FaChevronDown className="ml-1 w-3 h-3" /> */}
            </span>

            {/* {isProductDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border shadow-lg rounded-md z-50">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Rings
                </span>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Necklaces
                </span>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Earrings
                </span>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Bracelets
                </span>
              </div>
            )} */}
          </div>

          <span className="text-gray-700 hover:text-red-700 px-3 py-2 text-[15px] font-medium cursor-pointer">
            Style Guide
          </span>
          <span
            className="text-gray-700 hover:text-red-700 px-3 py-2  text-[15px] font-medium cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </span>
        </nav>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div> */}

        {/* Social Media Icons - Right Side (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-2 ">
          <div className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">
            <FaInstagram className="w-5 h-5" />
          </div>
          <div className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
            <FaPinterest className="w-5 h-5" />
          </div>
          <div className="text-gray-600 hover:text-blue-400 cursor-pointer transition-colors">
            <FaTwitter className="w-5 h-5" />
          </div>
          <div className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
            <FaFacebook className="w-5 h-5" />
          </div>
          <div className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-2 space-y-2">
            <span className="block py-2 text-gray-700 cursor-pointer">
              Home
            </span>
            <span className="block py-2 text-gray-700 cursor-pointer">
              About Us
            </span>
            <span className="block py-2 text-gray-700 cursor-pointer">
              Products
            </span>
            <span className="block py-2 text-gray-700 cursor-pointer">
              Style Guide
            </span>
            <span className="block py-2 text-gray-700 cursor-pointer">
              Contact Us
            </span>

            {/* Mobile Social Icons 
            <div className="flex items-center space-x-4 pt-4">
              <FaInstagram className="w-5 h-5 text-gray-600" />
              <FaPinterest className="w-5 h-5 text-gray-600" />
              <FaTwitter className="w-5 h-5 text-gray-600" />
              <FaFacebook className="w-5 h-5 text-gray-600" />
              <FaEnvelope className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
