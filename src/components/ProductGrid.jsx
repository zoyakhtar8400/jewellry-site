import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";

const API_URL = "https://glitzzera-backend.vercel.app/api/products";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(new Set());
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cart);
  }, []);

  // In ProductGrid.jsx, update the useEffect
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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-white mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[36rem] group"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              {/* Product Image */}
              <div className="h-100 bg-gray-200 relative overflow-hidden">
                <img
                  src={product.images?.[0]}
                  alt={product.shortTitle}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                {product.images?.[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.shortTitle}
                    className="w-full h-full object-cover cursor-pointer absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}

                {/* Wishlist Heart Icon */}
                <button
                  className="absolute top-2 left-2 p-2 rounded-full transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product._id);
                  }}
                >
                  <FaHeart
                    className={`w-6 h-6 transition-colors ${
                      wishlist.has(product._id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-4 h-30 flex-col justify-between cursor-pointer">
                {/* Product Title */}
                <h3 className="text-sm font-medium text-gray-600  hover:text-gray-800 line-clamp-3 mb-2">
                  {product.longTitle}
                </h3>

                {/* Price Section */}
                <div>
                  <p className="text-xs text-gray-500 mb-1">Regular price</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs text-gray-500">MRP :</span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.price?.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      Now ₹{product.discountPrice?.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                {/* Add to Cart Button */}

                {/* Add to Cart Button or Quantity Controls */}
                {cartItems.some((item) => item._id === product._id) ? (
                  <div className="flex items-center justify-between w-full  p-2">
                    {/* Cart Icon - Left */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/cart");
                      }}
                      className="text-red-600 hover:text-red-800 "
                    >
                      <FaShoppingCart className="w-4 h-4" />
                    </button>

                    {/* Quantity Controls - Middle */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const cart =
                            JSON.parse(localStorage.getItem("cartItems")) || [];
                          const index = cart.findIndex(
                            (item) => item._id === product._id
                          );

                          if (index > -1) {
                            if (cart[index].quantity > 1) {
                              cart[index].quantity -= 1;
                            } else {
                              cart.splice(index, 1);
                            }
                            localStorage.setItem(
                              "cartItems",
                              JSON.stringify(cart)
                            );
                            setCartItems(cart);
                            window.dispatchEvent(new Event("storage"));
                          }
                        }}
                        className="text-black w-6 h-6  flex items-center justify-center text-sm  hover:bg-gray-200 rounded-lg"
                      >
                        -
                      </button>

                      <span className="text-sm font-medium">
                        {cartItems.find((item) => item._id === product._id)
                          ?.quantity || 1}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const cart =
                            JSON.parse(localStorage.getItem("cartItems")) || [];
                          const index = cart.findIndex(
                            (item) => item._id === product._id
                          );

                          if (index > -1) {
                            cart[index].quantity += 1;
                            localStorage.setItem(
                              "cartItems",
                              JSON.stringify(cart)
                            );
                            setCartItems(cart);
                            window.dispatchEvent(new Event("storage"));
                          }
                        }}
                        className=" hover:bg-gray-200 rounded-lg text-black w-6 h-6  flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Delete Icon - Right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const cart =
                          JSON.parse(localStorage.getItem("cartItems")) || [];
                        const updatedCart = cart.filter(
                          (item) => item._id !== product._id
                        );
                        localStorage.setItem(
                          "cartItems",
                          JSON.stringify(updatedCart)
                        );
                        setCartItems(updatedCart);
                        window.dispatchEvent(new Event("storage"));
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full bg-black hover:bg-gray-700 text-white font-thin py-2 px-4 rounded-md transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();

                      const cart =
                        JSON.parse(localStorage.getItem("cartItems")) || [];
                      cart.push({ ...product, quantity: 1 });
                      localStorage.setItem("cartItems", JSON.stringify(cart));
                      setCartItems(cart);
                      window.dispatchEvent(new Event("storage"));
                    }}
                    style={{
                      fontFamily:
                        '"Inter", "Helvetica Neue", Arial, sans-serif',
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
