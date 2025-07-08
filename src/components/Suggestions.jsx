import React from "react";
import collectionImg from "../assets/collection/banner.webp";

const Suggestions = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="section-heading">HAND PICKED FOR YOU</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <img src={collectionImg} alt="" className="w-full object-cover h-56" />
        <img src={collectionImg} alt="" className="w-full object-cover h-56" />
        <img src={collectionImg} alt="" className="w-full object-cover h-56" />
      </div>
    </div>
  );
};

export default Suggestions;
