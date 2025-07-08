import React, { useState } from "react";
import { FaTimes, FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50 " onClick={onClose}>
      {/* Sidebar */}
      <div
        className="fixed left-0 top-0 h-full w-100 text-xl  bg-white shadow-lg z-60 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <button className="w-full text-left py-2 text-gray-700 hover:text-gray-900">
              What's New
            </button>
            <button className="w-full  border-t  border-red-700 text-left py-2 text-gray-700 hover:text-gray-900">
              Gifting
            </button>
            <button className="w-full border-t  border-red-700  text-left py-2 text-gray-700 hover:text-gray-900">
              Best Seller
            </button>
          </div>

          {/* Shop by Categories - Dropdown */}
          <div className="border-t  border-red-700 pt-4">
            <button
              onClick={() => toggleDropdown("categories")}
              className="w-full flex justify-between items-center py-2 text-gray-800 hover:text-gray-900 font-semibold"
            >
              Shop by Categories
              {openDropdowns.categories ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.categories && (
              <div className="space-y-2 ml-4 mt-2">
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Rings
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Necklaces
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Earrings
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Bracelets
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Bangles
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Pendants
                </button>
              </div>
            )}
          </div>

          {/* Shop by Collections - Dropdown */}
          <div className="border-t  border-red-700 pt-4">
            <button
              onClick={() => toggleDropdown("collections")}
              className="w-full flex justify-between items-center py-2 text-gray-800 hover:text-gray-900 font-semibold"
            >
              Shop by Collections
              {openDropdowns.collections ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.collections && (
              <div className="space-y-2 ml-4 mt-2">
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Temple Jewelry
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Bridal Collection
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Daily Wear
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Festive Collection
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Antique Collection
                </button>
              </div>
            )}
          </div>

          {/* Occasion - Dropdown */}
          <div className="border-t  border-red-700 pt-4">
            <button
              onClick={() => toggleDropdown("occasion")}
              className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-gray-900"
            >
              Occasion
              {openDropdowns.occasion ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.occasion && (
              <div className="space-y-2 ml-4 mt-2">
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Wedding
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Party
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Office
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Casual
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Festival
                </button>
              </div>
            )}
          </div>

          {/* Voguish - Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("voguish")}
              className="w-full flex border-t  border-red-700 justify-between items-center py-2 text-gray-700 hover:text-gray-900"
            >
              Voguish
              {openDropdowns.voguish ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.voguish && (
              <div className="space-y-2 ml-4 mt-2">
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Trendy Designs
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Statement Pieces
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Minimalist
                </button>
                <button className="w-full text-left py-1 text-gray-600 hover:text-gray-800">
                  Bold & Beautiful
                </button>
              </div>
            )}
          </div>

          <div>
            <button className="w-full flex border-t  border-red-700 justify-between items-center py-2 text-gray-700 hover:text-gray-900">
              Voguish Men
            </button>
            <button className="w-full flex border-t  border-red-700 justify-between items-center py-2 text-gray-700 hover:text-gray-900">
              925 silver
            </button>
          </div>

          <div className="border-t border-red-700 pt-4">
            <button className="w-full text-left py-2 text-blue-600 hover:text-blue-800 font-medium">
              <FaUser className="inline w-4 h-4 mr-2" />
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
