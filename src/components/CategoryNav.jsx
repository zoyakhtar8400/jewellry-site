import React, { useState } from "react";
import VideoModal from "../Slidess/VideoModal";
import CircularDivs from "./CircularDivs";

const CategoryNav = () => {
  return (
    <>
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Home/</p>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-4xl  text-gray-800">SHOP BY CATEGORY</h2>
          </div>

          <CircularDivs />
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
