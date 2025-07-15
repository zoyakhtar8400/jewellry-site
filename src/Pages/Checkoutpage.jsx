import React, { useState, useEffect } from "react";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse cart items:", err);
      }
    }
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const tax = parseFloat((subtotal * 0.18).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));

  return (
    <div className="w-full min-h-screen p-0 m-0 text-black font-sans bg-white flex flex-col justify-start text-base sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.35rem] mt-4 sm:mt-8">
      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 mb-2">
        <div className="flex justify-between items-center">
          <div className="text-sm sm:text-base text-gray-700">
            <span className="font-semibold text-black">Home</span>
            <span className="mx-2 text-gray-300">—</span>
            <span className="text-gray-400">Checkout</span>
          </div>

          <div className="flex-1 flex justify-end mt-2 mb-4">
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer font-light bg-gradient-to-r from-amber-400 to-rose-800 bg-clip-text text-transparent">
              Glitzzera
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pb-6 sm:pb-10">
        {/* Billing Form */}
        <div className="w-full sm:max-w-md bg-white rounded-2xl border border-pink-100 p-4 sm:p-6 md:p-8">
          <h2 className="text-base sm:text-lg font-semibold mb-1">
            Saved Addresses
          </h2>
          <h3 className="font-medium mb-4 text-2xl sm:text-3xl">
            Billing Details
          </h3>

          <form className="space-y-4">
            {/* Address type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address Type *
              </label>
              <select className="w-full h-10 px-3 py-2 border rounded text-sm">
                <option value="" disabled>
                  Select Address Type
                </option>
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address *
              </label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full h-10 px-3 py-2 border rounded text-sm mb-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc."
                className="w-full h-10 px-3 py-2 border rounded text-sm"
              />
            </div>

            {/* City, State, Zip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  State *
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postcode *
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  className="w-full h-10 px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>

            {/* Email & Notes */}
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                className="w-full h-10 px-3 py-2 border rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Order Notes
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded text-sm"
                rows="3"
                placeholder="Notes about your order..."
              />
            </div>
          </form>
        </div>

        {/* Your Order */}
        <div className="flex-1 bg-white rounded-2xl border border-pink-100 p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 text-[#f43249]">
            Your Order
          </h2>

          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">Product</th>
                <th className="py-2 px-4 border">Qty</th>
                <th className="py-2 px-4 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-gray-400 py-6">
                    No items in cart
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item._id || item.id}>
                    <td className="border px-4 py-2">
                      {item.name || item.longTitle}
                    </td>
                    <td className="border px-4 py-2">{item.quantity || 1}</td>
                    <td className="border px-4 py-2">
                      INR {(item.price * (item.quantity || 1)).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
              <tr>
                <td colSpan="2" className="border px-4 py-2 font-semibold">
                  Subtotal
                </td>
                <td className="border px-4 py-2">INR {subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2" className="border px-4 py-2 font-semibold">
                  Tax (18%)
                </td>
                <td className="border px-4 py-2">INR {tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2" className="border px-4 py-2 font-bold">
                  Total
                </td>
                <td className="border px-4 py-2 font-bold text-[#f43249]">
                  INR {total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>

          <button className="w-full mt-6 bg-[#f43249] text-white font-semibold py-3 rounded hover:opacity-90">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
