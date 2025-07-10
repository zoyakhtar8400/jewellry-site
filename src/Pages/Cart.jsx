import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col items-end mt-8 mb-4 pr-4">
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
      <div className="flex flex-col flex-1 w-full max-w-[1600px] mx-auto px-1 pb-10">
        <h1 className="text-xl font-extrabold mb-8 text-left text-[#f43249] tracking-wide drop-shadow-lg pl-4">
          Home-cart
        </h1>
        <h1 className="text-4xl font-extrabold mb-8 text-left text-black tracking-wide drop-shadow-lg pl-4">
          Product Cart
        </h1>
        {/* Cart Table */}
        {cartItems.length > 0 && (
          <div className="w-full bg-white rounded-2xl shadow-xl p-6 border border-pink-100 min-h-[350px] max-w-[1100px] mx-auto">
            <table className="min-w-full text-left">
              <thead className="bg-pink-50">
                <tr>
                  <th className="p-4 font-bold text-pink-700 text-lg">Image</th>
                  <th className="p-4 font-bold text-pink-700 text-lg">
                    Product Name
                  </th>
                  <th className="p-4 font-bold text-pink-700 text-lg">
                    Unit Price
                  </th>
                  <th className="p-4 font-bold text-pink-700 text-lg">
                    Weight (g)
                  </th>
                  <th className="p-4 font-bold text-pink-700 text-lg">
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
                    <td className="p-4">
                      <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-pink-200 shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="font-semibold text-lg text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {item.description}
                      </div>
                    </td>
                    <td className="p-4 align-middle font-bold text-pink-700 text-lg">
                      INR {item.price}
                    </td>
                    <td className="p-4 align-middle text-center">
                      {item.weight}
                    </td>
                    <td className="p-4 align-middle text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-lg"
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
          <div className="flex flex-col items-center justify-center gap-4 w-full bg-white rounded-2xl shadow-xl p-6 border border-pink-100 min-h-[350px]">
            <span className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
              Your Cart is Empty! 💍
            </span>
            <span className="text-lg md:text-xl text-gray-500 max-w-xl text-center">
              It looks like your cart is missing some sparkle! Explore our
              exquisite collection of traditional and modern jewelry, from
              dazzling gold-plated necklaces to elegant earrings and statement
              rings. Add your favorites now and shine with timeless beauty.
            </span>
            <span className="text-2xl mt-2">
              ✨🛒 Start Shopping &amp; Adorn Yourself! ✨
            </span>
          </div>
        )}
        {/* Cart Totals */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-pink-100 h-fit min-h-[350px] mt-8 ml-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#f43249] text-left tracking-wide">
            Cart Totals
          </h2>

          {/* Your Order Section */}
          <div
            className="mb-6"
            style={{ minHeight: "auto", height: "auto" }}
          ></div>
          <div className="flex justify-between mb-4 text-lg">
            <span>Subtotal</span>
            <span className="font-semibold">
              INR{" "}
              {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-4 text-lg">
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
          <div className="flex justify-between mb-4 text-lg">
            <span>Total</span>
            <span className="font-semibold">
              INR{" "}
              {(
                cartItems.reduce((sum, item) => sum + item.price, 0) * 1.09
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-4 text-lg">
            <span>Total Weight</span>
            <span className="font-semibold">{totalWeight} g</span>
          </div>
          <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
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
            className={`w-full mt-8 bg-gradient-to-r from-[#f43249] to-red-500 text-white py-3 px-6 rounded-lg hover:opacity-90 font-bold text-lg shadow transition ${
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
    </div>
  );
};

export default Cart;
