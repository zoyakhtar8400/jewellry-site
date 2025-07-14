import React from "react";
import CircularDivs from "../components/CircularDivs";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Suggestions from "../components/Suggestions";
import BottomNav from "../Slidess/BottomNav";

const Home = () => {
  return (
    <div className="bg-gray-50 py-4">
      <CircularDivs />
      <Banner />
      {/* Category Names Section */}
      <div className="bg-gray-50 py-8">
        <div className="">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {[
              "Western",
              "Demi Fine",
              "Luxe",
              "Traditional",
              "Minimalist",
              "Statement",
              "Vintage",
              "Contemporary",
            ].map((name, index) => (
              <div
                key={index}
                className="bg-[#ffe8de] border-2 border-cream-200 rounded-full w-42 h-42 flex items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#ffe8de" }}
              >
                <span
                  className="text-gray-800 font-medium text-lg px-2"
                  style={{ fontFamily: "cursive" }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductGrid />
      {/* <SBC /> */}
      <Suggestions />
      <BottomNav />
    </div>
  );
};

export default Home;
