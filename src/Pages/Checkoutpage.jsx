import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    addressType: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);

    try {
      // Prepare products from cart
      const products = cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity || 1,
        size: item.selectedSize || undefined,
      }));

      const orderData = {
        userId: "687211c0889794ff996ce1f7", // Replace with actual user ID
        addressId: "64fabc9999999999abc12345", // You'll need to create address first
        products: products,
        paymentInfo: {
          method: "Online",
          transactionId: `TXN${Date.now()}`,
          status: "Success",
        },
        orderStatus: "Processing",
        totalAmount: total,
        discount: 0,
        isPaid: true,
      };

      const response = await fetch(
        "https://glitzzera-backend.vercel.app/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const result = await response.json();

      // Clear cart after successful order
      localStorage.removeItem("cartItems");

      alert("Order placed successfully!");
      navigate("/"); // Redirect to home or order confirmation page
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

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
    <div className="  text-gray-800 font-sans bg-white flex flex-col  text-base sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.35rem] mt-4 sm:mt-8">
      <div className=" mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 mb-2 ">
        <div className="flex justify-between items-center">
          <div className="text-sm sm:text-base text-gray-700 ">
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

      <div className="flex flex-col md:flex-row gap-4  sm:gap-8 w-full max-w-[1400px] mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 pb-6 sm:pb-10 ">
        {/* Billing Form */}
        <div className="w-full flex-1 sm:max-w-md border p-6 rounded-lg border-gray-200 ">
          <h2 className="text-base sm:text-2xl font-semibold mb-2">
            Saved Addresses
          </h2>
          <h3 className="text-base sm:text-2xl font-semibold mb-2">
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
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
        <div className="w-full lg:w-1/2 p-4 sm:p-6 border border-pink-400 rounded-lg  max-h-max ml-0 md:ml-20">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-4 text-[#f43249]">
            Your Order
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-2 sm:px-4 text-left">Product</th>
                  <th className="py-2 px-2 sm:px-4 text-center">Qty</th>
                  <th className="py-2 px-2 sm:px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center text-gray-400 py-6 text-xs sm:text-sm"
                    >
                      No items in cart
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item._id || item.id}>
                      <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-xs sm:text-sm">
                        {item.name || item.longTitle}
                      </td>
                      <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">
                        {item.quantity || 1}
                      </td>
                      <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">
                        INR {(item.price * (item.quantity || 1)).toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
                <tr>
                  <td
                    colSpan="2"
                    className="border-t border-gray-500 px-2 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    Subtotal
                  </td>
                  <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">
                    INR {subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="2"
                    className="border-t border-gray-500 px-2 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    Tax (18%)
                  </td>
                  <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">
                    INR {tax.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="2"
                    className="border-t border-gray-500 px-2 sm:px-4 py-2 text-sm sm:text-base font-semibold"
                  >
                    Total
                  </td>
                  <td className="border-t border-gray-500 px-2 sm:px-4 py-2 text-right text-sm sm:text-base font-semibold">
                    INR {total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="w-full mt-4 text-xs sm:text-sm bg-[#f43249] text-white font-semibold py-2 sm:py-3 rounded hover:opacity-90 disabled:opacity-50"
          >
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
