import React from "react";
import {
  FaStar,
  FaGift,
  FaShoppingCart,
  FaTrophy,
  FaTag,
} from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-6 sm:px-4 py-8 sm:py-3 z-50 mb-2 sm:mb-4  w-11/12 sm:w-auto max-w-md hidden sm:block">
      <div className="flex items-center justify-around space-x-1 sm:space-x-4 ">
        <div className="flex flex-col items-center text-gray-700 cursor-pointer">
          <FaStar className="w-6 h-6 mb-1" />
          <span className="text-xs">Best Sellers</span>
        </div>

        <div className="flex flex-col items-center  text-gray-700 mr-4 cursor-pointer">
          <FaGift className="w-6 h-6 mb-1" />
          <span className="text-xs">What's New</span>
        </div>

        <div className="flex flex-col items-center bg-red-600 text-white px-5 py-3 rounded-full z-10 cursor-pointer transform -translate-y-5">
          <span className="text-l">2 @ ₹999</span>
        </div>

        <div className="flex flex-col items-center text-gray-700  ml-4 cursor-pointer ">
          <FaTrophy className="w-6 h-6 mb-1 " />
          <span className="text-xs">Rewards</span>
        </div>

        <div className="flex flex-col items-center text-gray-700  ml-4  cursor-pointer">
          <FaTag className="w-6 h-6 mb-1" />
          <span className="text-xs">Sale</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
