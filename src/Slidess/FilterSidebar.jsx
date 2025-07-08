import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";

const FilterSidebar = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [priceRange, setPriceRange] = useState(5000);

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50" onClick={onClose}>
      {/* Filter Sidebar */}
      <div
        className="fixed left-0 top-0 h-full w-100 text-xl bg-white shadow-lg z-60 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-4 space-y-4">
          {/* Price */}
          <div>
            <button
              onClick={() => toggleDropdown("price")}
              className="w-full flex justify-between items-center py-3 text-gray-800 hover:text-gray-900 font-semibold "
            >
              Price
              {openDropdowns.price ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>

            {openDropdowns.price && (
              <div className="space-y-4 ml-4 mt-2">
                {/* Price Range Slider */}
                <div className="px-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>₹0</span>
                    <span>₹10,000</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all duration-200 ease-in-out"
                    style={{
                      background: `linear-gradient(to right, black 0%, black ${
                        (priceRange / 10000) * 100
                      }%,  #e5e7eb  ${
                        (priceRange / 10000) * 100
                      }%, black 100%)`,
                    }}
                  />

                  <div className="text-center mt-2">
                    <span className="text-sm font-medium text-black">
                      Up to ₹{priceRange.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Type */}
          <div>
            <button
              onClick={() => toggleDropdown("productType")}
              className="w-full flex justify-between items-center py-3 text-gray-800 hover:text-gray-900 font-semibold border-t border-red-700"
            >
              Product Type
              {openDropdowns.productType ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.productType && (
              <div className="space-y-2 ml-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Rings</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Necklaces</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Earrings</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Bracelets</span>
                </label>
              </div>
            )}
          </div>

          {/* Color */}
          <div>
            <button
              onClick={() => toggleDropdown("color")}
              className="w-full flex justify-between items-center py-3 text-gray-800 hover:text-gray-900 font-semibold border-t border-red-700"
            >
              Color
              {openDropdowns.color ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.color && (
              <div className="space-y-2 ml-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Gold</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Silver</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Rose Gold</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Multi-Color</span>
                </label>
              </div>
            )}
          </div>

          {/* Collections */}
          <div>
            <button
              onClick={() => toggleDropdown("collections")}
              className="w-full flex justify-between items-center py-3 text-gray-800 hover:text-gray-900 font-semibold border-t border-red-700"
            >
              Collections
              {openDropdowns.collections ? (
                <FaChevronDown className="w-4 h-4" />
              ) : (
                <FaChevronRight className="w-4 h-4" />
              )}
            </button>
            {openDropdowns.collections && (
              <div className="space-y-2 ml-4 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Temple Jewelry</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">
                    Bridal Collection
                  </span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">Daily Wear</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 w-4 h-4" />
                  <span className="text-sm text-gray-700">
                    Festive Collection
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
