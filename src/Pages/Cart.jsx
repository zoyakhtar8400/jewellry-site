import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../Slidess/BottomNav";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Trigger storage event to update ProductGrid buttons
    window.dispatchEvent(new Event("storage"));
  };
  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.18).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));
  const totalWeight = cartItems.reduce(
    (sum, item) => sum + (item.weight || 0) * item.quantity,
    0
  );

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <div className="cart-items w-full max-w-[1600px] mx-auto mb-2">
          <div className="flex justify-between items-center px-4">
            <div className="text-sm sm:text-base text-gray-700 ml-0">
              <span className="font-semibold text-black">Cart</span>
              <span className="mx-2 text-gray-300">—</span>
              <span className="text-gray-400">Cart Items</span>
            </div>
            <div className="flex justify-end mt-2 mb-4 pr-14">
              <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer font-light bg-gradient-to-r from-amber-400 to-rose-800 bg-clip-text text-transparent">
                Glitzzera
              </h2>
            </div>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="overflow-x-auto border border-red-100 rounded-xl">
            <table className="w-full text-sm sm:text-base table-auto">
              <thead className="bg-red-50 text-black">
                <tr className="text-left">
                  <th className="px-4 py-3">Images</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  let rawImage = item.image || item.images?.[0] || "";
                  let cleanImage = rawImage.replace(".jpg.jpg", ".jpg");

                  return (
                    <tr key={item._id} className="border-t hover:bg-red-50">
                      <td className="px-4 py-4">
                        <img
                          src={cleanImage || "/placeholder.jpg"}
                          alt={item.name || "Product image"}
                          className="w-20 h-20 object-cover rounded-lg border border-red-200"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </td>
                      <td className="px-4 py-4 font-medium">
                        {item.name || item.longTitle}
                      </td>
                      <td className="px-4 py-4">INR {item.price}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-between w-28 h-10 border border-gray-300 rounded-md px-2">
                          <button
                            onClick={() => decreaseQuantity(item._id)}
                            className="text-red-600 font-bold text-lg px-2"
                          >
                            −
                          </button>
                          <span className="text-base font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item._id)}
                            className="text-red-600 font-bold text-lg px-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        INR {(item.quantity * item.price).toFixed(2)}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-red-600 text-xl font-bold"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-12 text-center bg-white p-6 border border-red-100 rounded-xl">
            <h2 className="text-2xl font-bold text-[#f43249] mb-2">
              Your Cart is Empty!
            </h2>
            <p className="text-gray-600 mb-4">
              Your jewelry box is waiting to be filled! 💍
              <br />
              Explore timeless pieces – from elegant earrings to dazzling rings.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#f43249] hover:opacity-90 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="w-full sm:max-w-md ml-auto mt-12 bg-white rounded-2xl shadow-lg p-6 border border-red-100">
            <h2 className="text-xl font-bold text-[#f43249] mb-4">
              Cart Totals
            </h2>
            <table className="w-full text-sm sm:text-base border border-gray-200">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Subtotal</td>
                  <td className="py-2 px-4 text-right">
                    INR {subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Tax (18%)</td>
                  <td className="py-2 px-4 text-right">INR {tax.toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-medium">Total Weight</td>
                  <td className="py-2 px-4 text-right">
                    {totalWeight.toFixed(1)} g
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-lg">Total</td>
                  <td className="py-3 px-4 text-right font-bold text-lg text-[#f43249]">
                    INR {total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-[#f43249] hover:opacity-90 text-white font-semibold py-3 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
