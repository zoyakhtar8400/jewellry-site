import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../Slidess/BottomNav";

const Cart = () => {
  const unitPrice = 434;
  const tax = parseFloat((unitPrice * 0.09).toFixed(2));
  const total = parseFloat((unitPrice + tax).toFixed(2));

  // Demo cart items state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Test Patisa",
      description: "18K Gold Plated Necklace",
      image: "/assets/test-patisa.jpg",
      price: 434,
      weight: 12.5, // grams
    },
  ]);
  const totalWeight = cartItems.reduce((sum, item) => sum + item.weight, 0);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen p-0 m-0 text-black font-sans bg-white flex flex-col justify-start">
      <div className="flex flex-col items-end mt-8 mb-4 pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-64">
        <span
          className="text-6xl font-bold text-black mb-2 drop-shadow-lg"
          style={{
            fontFamily: '"Dancing Script", "Brush Script MT", cursive',
            letterSpacing: "0.05em",
          }}
        >
          Rubans
        </span>
      </div>
      <div className="flex flex-col flex-1 w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pb-10">
        <h1 className="text-base sm:text-xl font-extrabold mb-4 sm:mb-8 text-left text-[#f43249] tracking-wide drop-shadow-lg pl-2 sm:pl-4">
          Home-cart
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-8 text-left text-black tracking-wide drop-shadow-lg pl-2 sm:pl-4">
          Product Cart
        </h1>
        {/* Cart Table */}
        {cartItems.length > 0 && (
          <div className="w-full bg-white rounded-2xl shadow-xl p-2 sm:p-4 md:p-6 border border-pink-100 min-h-[350px] max-w-[1100px] mx-auto overflow-x-auto">
            <table className="min-w-full text-left text-xs sm:text-sm md:text-base">
              <thead className="bg-pink-50">
                <tr>
                  <th className="p-2 sm:p-4 font-bold text-pink-700 text-xs sm:text-lg">
                    Image
                  </th>
                  <th className="p-2 sm:p-4 font-bold text-pink-700 text-xs sm:text-lg">
                    Product Name
                  </th>
                  <th className="p-2 sm:p-4 font-bold text-pink-700 text-xs sm:text-lg">
                    Unit Price
                  </th>
                  <th className="p-2 sm:p-4 font-bold text-pink-700 text-xs sm:text-lg">
                    Weight (g)
                  </th>
                  <th className="p-2 sm:p-4 font-bold text-pink-700 text-xs sm:text-lg">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t hover:bg-pink-50 transition"
                  >
                    <td className="p-2 sm:p-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border-2 border-pink-200 shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 align-middle">
                      <div className="font-semibold text-xs sm:text-base md:text-lg text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                        {item.description}
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 align-middle font-bold text-pink-700 text-xs sm:text-lg">
                      INR {item.price}
                    </td>
                    <td className="p-2 sm:p-4 align-middle text-center">
                      {item.weight}
                    </td>
                    <td className="p-2 sm:p-4 align-middle text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-base sm:text-lg"
                        title="Remove"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-pink-100 min-h-[200px] sm:min-h-[350px]">
            <span className="text-xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2 text-center">
              Your Cart is Empty! 💍
            </span>
            <span className="text-sm sm:text-lg md:text-xl text-gray-500 max-w-xl text-center">
              It looks like your cart is missing some sparkle! Explore our
              exquisite collection of traditional and modern jewelry, from
              dazzling gold-plated necklaces to elegant earrings and statement
              rings. Add your favorites now and shine with timeless beauty.
            </span>
            <span className="text-lg sm:text-2xl mt-2 text-center">
              ✨🛒 Start Shopping &amp; Adorn Yourself! ✨
            </span>
          </div>
        )}
        {/* Cart Totals */}
        <div className="w-full max-w-full sm:max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-pink-100 h-fit min-h-[200px] sm:min-h-[350px] mt-8 ml-auto">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f43249] text-left tracking-wide">
            Cart Totals
          </h2>

          {/* Your Order Section */}
          <div
            className="mb-6"
            style={{ minHeight: "auto", height: "auto" }}
          ></div>
          <div className="flex justify-between mb-2 sm:mb-4 text-base sm:text-lg">
            <span>Subtotal</span>
            <span className="font-semibold">
              INR{" "}
              {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2 sm:mb-4 text-base sm:text-lg">
            <span>
              Tax <span className="text-xs">(9%)</span>
            </span>
            <span className="font-semibold">
              INR{" "}
              {(
                cartItems.reduce((sum, item) => sum + item.price, 0) * 0.09
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2 sm:mb-4 text-base sm:text-lg">
            <span>Total</span>
            <span className="font-semibold">
              INR{" "}
              {(
                cartItems.reduce((sum, item) => sum + item.price, 0) * 1.09
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2 sm:mb-4 text-base sm:text-lg">
            <span>Total Weight</span>
            <span className="font-semibold">{totalWeight} g</span>
          </div>
          <div className="flex justify-between font-bold text-lg sm:text-xl border-t pt-4 mt-4">
            <span>Final Total</span>
            <span className="text-[#f43249]">
              INR{" "}
              {(
                cartItems.reduce((sum, item) => sum + item.price, 0) * 1.09
              ).toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className={`w-full mt-6 sm:mt-8 bg-gradient-to-r from-[#f43249] to-red-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:opacity-90 font-bold text-base sm:text-lg shadow transition ${
              cartItems.length === 0
                ? "pointer-events-none opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => cartItems.length > 0 && navigate("/checkout")}
            disabled={cartItems.length === 0}
            tabIndex={cartItems.length === 0 ? -1 : 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Cart;
