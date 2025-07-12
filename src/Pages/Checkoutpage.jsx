import React, { useState } from "react";

const CheckoutPage = () => {
  // Simulate cart items (replace with real cart state in production)
  const [cartItems] = useState([
    // Uncomment below to test empty cart state
    //
    // Empty array means cart is empty
    //
    // { id: 1, name: "Test Sweet product", quantity: 1, price: 233 },
  ]);

  return (
    <div className="w-full min-h-screen p-0 m-0 text-black font-sans bg-white flex flex-col justify-start text-base sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.35rem] mt-4 sm:mt-8">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8 flex-1 w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pb-6 sm:pb-10">
        {/* Billing Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-pink-100 min-h-[250px] sm:min-h-[350px] text-[1em] sm:text-[1.1em] md:text-[1.2em]">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Saved Addresses</h2>
          <h3 className="font-medium mb-2 sm:mb-4 text-2xl sm:text-3xl">Billing Details</h3>

          <form className="space-y-3 sm:space-y-4">
            {/* Address Type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2 text-base" defaultValue="">
                <option value="" disabled hidden className="text-base">
                  Select Address Type
                </option>
                <option value="home" className="text-base">Home</option>
                <option value="office" className="text-base">Office</option>
              </select>
            </div>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
            </div>

            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border rounded p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
                className="w-full border rounded p-2"
              />
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded p-2" />
            </div>

            {/* State and Postcode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  State / County <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postcode / Zip <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input type="tel" className="w-full border rounded p-2" />
              </div>
            </div>

            {/* Order Notes */}
            <div>
              <label className="block text-sm font-medium mb-1">Order Notes</label>
              <textarea
                className="w-full border rounded p-2"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>

        {/* Your Order Section */}
        <div className="w-full max-w-full sm:max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-pink-100 h-fit min-h-[200px] sm:min-h-[350px] ml-auto text-[1em] sm:text-[1.1em] md:text-[1.22em] overflow-x-auto" style={{ background: 'white' }}>
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f43249] text-left tracking-wide">Your Order</h2>
          <table className="w-full min-w-[350px] text-xs sm:text-sm mb-2 sm:mb-4 border-t border-gray-200">
            <thead>
              <tr>
                <th className="py-1 sm:py-2 text-left font-medium">Product</th>
                <th className="py-1 sm:py-2 text-left font-medium">Quantity</th>
                <th className="py-1 sm:py-2 text-left font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-2 sm:py-4 text-gray-400">No products in cart.</td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr className="border-t" key={item.id}>
                    <td className="py-1 sm:py-2">{item.name}</td>
                    <td className="py-1 sm:py-2">{item.quantity || 1}</td>
                    <td className="py-1 sm:py-2">INR {item.price ? item.price.toFixed(2) : '0.00'}</td>
                  </tr>
                ))
              )}
              {/* Example summary rows, replace with real calculations */}
              <tr>
                <td colSpan="2" className="py-1 sm:py-2 font-medium">
                  Cart Subtotal
                </td>
                <td className="py-1 sm:py-2">INR {cartItems.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2" className="py-1 sm:py-2 font-medium">
                  Tax
                </td>
                <td className="py-1 sm:py-2">INR {(cartItems.reduce((sum, item) => sum + (item.price || 0), 0) * 0.09).toFixed(2)}</td>
              </tr>
              <tr className="border-t font-bold text-xs sm:text-base">
                <td colSpan="2" className="py-2 sm:py-3">
                  Order Total
                </td>
                <td className="py-2 sm:py-3">INR {(cartItems.reduce((sum, item) => sum + (item.price || 0), 0) * 1.09).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="w-full mt-4 bg-[#f43249] text-white font-medium py-2 sm:py-3 rounded hover:opacity-90 text-base sm:text-lg">
            Place order
          </button>
        </div>
      </div>
    </div>
  );

};

export default CheckoutPage;
