import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../Slidess/BottomNav";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const userId = "687211c0889794ff996ce1f7";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `https://glitzzera-backend.vercel.app/api/wishlists/${userId}`
        );
        if (!response.ok) throw new Error("Failed to fetch wishlist");
        const data = await response.json();
        setWishlist(data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError("Failed to load wishlist.");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [userId]);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(cart);
    };

    // Initial load
    updateCartItems();

    // Listen for storage changes
    window.addEventListener("storage", updateCartItems);

    return () => window.removeEventListener("storage", updateCartItems);
  }, []);

  const handleRemove = async (wishlistItemId) => {
    setWishlist((prev) => prev.filter((item) => item._id !== wishlistItemId));
    try {
      const response = await fetch(
        `https://glitzzera-backend.vercel.app/api/wishlists/${wishlistItemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item from wishlist.");
    }
  };

  const handleAddToCart = (product) => {
    const isInCart = cartItems.some((item) => item._id === product._id);

    if (isInCart) {
      // Navigate to cart if already in cart
      navigate("/cart");
    } else {
      // Add to cart logic
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      const index = cart.findIndex((item) => item._id === product._id);

      if (index > -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));
      setCartItems(cart); // Update state to change button text
      alert("Item added to cart!");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">Loading wishlist...</div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 px-4">
      <h1 className="text-3xl font-bold mb-4">WISHLIST</h1>

      <p className="text-sm text-gray-600 mb-2">
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

      {wishlist.length === 0 ? (
        <div className="text-xl text-gray-400 font-semibold py-16">
          No items in your wishlist.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {wishlist.map((item) =>
            item.productId ? (
              <div key={item._id} className="border rounded p-4 shadow">
                <img
                  src={item.productId.images?.[0]}
                  alt={item.productId.shortTitle}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-3 text-center">
                  <h2 className="font-medium text-gray-800">
                    {item.productId.longTitle}
                  </h2>
                  <p className="mt-1">
                    <span className="line-through text-gray-400 text-sm mr-2">
                      ₹{item.productId.price}
                    </span>
                    <span className="text-green-600 font-semibold">
                      ₹{item.productId.discountPrice}
                    </span>
                  </p>
                </div>
                <button
                  className="w-full mt-3 bg-black text-white py-2 text-sm"
                  onClick={() => handleAddToCart(item.productId)}
                >
                  {cartItems.some(
                    (cartItem) => cartItem._id === item.productId._id
                  )
                    ? "Go to Cart"
                    : "Add to Cart"}
                </button>
                <button
                  className="w-full mt-2 bg-red-500 text-white py-2 text-sm rounded"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ) : null
          )}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Wishlist;
