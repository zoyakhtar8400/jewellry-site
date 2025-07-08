import React, { useState } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import FilterSidebar from "../Slidess/FilterSidebar";
const ProductFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBestSellerOpen, setIsBestSellerOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-4 md:py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Filter Options */}
          <div className="w-full md:w-auto">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-full md:w-auto flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 bg-white shadow-sm"
            >
              <FaFilter className="w-4 h-4 text-gray-600" />
              <span className="text-sm md:text-base font-medium text-gray-800">
                Filter
              </span>
            </button>
          </div>

          {/* Middle - Total Products */}
          <div className="text-center order-first md:order-none">
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Total Products:{" "}
              <span className="font-bold text-blue-600">248</span>
            </p>
          </div>

          {/* Right Side - Best Seller Dropdown */}
          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setIsBestSellerOpen(!isBestSellerOpen)}
              className="w-full md:w-auto flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 bg-white shadow-sm"
            >
              <span className="text-sm md:text-base font-medium text-gray-800">
                Best Seller
              </span>
              <FaChevronDown className="w-3 h-3 text-gray-600" />
            </button>

            {isBestSellerOpen && (
              <div className="absolute top-full right-0 mt-2 w-full md:w-56 bg-white border-2 shadow-xl rounded-lg z-50">
                <div className="p-2">
                  <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded text-gray-700">
                    Best Seller
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded text-gray-700">
                    Newest First
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded text-gray-700">
                    Price: Low to High
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded text-gray-700">
                    Price: High to Low
                  </button>
                  <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 rounded text-gray-700">
                    Most Popular
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </>
  );
};

export default ProductFilter;
