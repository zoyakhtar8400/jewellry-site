import React, { useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Slidess/BottomNav";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Rubans Rhodium Plated Multi Crystal Statement Necklace Set",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23596714/2023/6/23/f8d211fc-a53a-4b4a-8828-f62e9fdf68b91687614235895RubansRhodiumPlatedMultiCrystalStatementNecklaceSet1.jpg",
      oldPrice: 3712,
      price: 742,
    },
    {
      id: 2,
      name: "Rubans Gold Plated Pearl Drop Earrings",
      image:
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23596716/2023/6/23/2b7e2e7e-2e2e-4e2e-8e2e-2e2e2e2e2e2e1687614235895RubansGoldPlatedPearlDropEarrings1.jpg",
      oldPrice: 1999,
      price: 499,
    },
  ]);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 px-2 sm:px-4">
      <h1 className="text-3xl font-bold mb-2">WISHLIST</h1>
      <p className="text-sm text-gray-600">
        To save your wishlist please{" "}
        <Link to="/login" className="text-blue-600 underline">
          login
        </Link>{" "}
        or{" "}
        <Link to="/signup" className="text-blue-600 underline">
          sign up
        </Link>
        .
      </p>

      <div className="mt-4 text-gray-600 flex items-center gap-1 cursor-pointer">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
          />
        </svg>
        <span>Share wishlist</span>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
        {wishlist.length === 0 ? (
          <div className="text-xl text-gray-400 font-semibold py-16">
            No items in your wishlist.
          </div>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-xs sm:w-64 border rounded-md shadow-md p-3 sm:p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-72 object-cover rounded"
              />
              <div className="text-sm text-center mt-2">
                <p className="text-gray-700">{item.name}</p>
                <p className="mt-1">
                  <span className="line-through text-gray-400 text-sm mr-2">
                    ₹{item.oldPrice} INR
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    ₹{item.price} INR
                  </span>
                </p>
              </div>
              <button className="w-full mt-3 bg-black text-white py-2 text-sm hover:bg-gray-800">
                Add to Cart
              </button>
              <button
                className="w-full mt-2 bg-red-500 text-white py-2 text-sm rounded hover:bg-red-600"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Wishlist;
