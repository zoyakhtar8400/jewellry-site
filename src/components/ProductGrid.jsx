import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://glitzzera-backend.vercel.app/api/products";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setProducts([]);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[36rem] group"
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
                    className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="p-4 h-30 flex-col justify-between">
                {/* Product Title */}
                <h3 className="text-sm font-medium text-gray-800 line-clamp-3 mb-2">
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
                <button
                  className="w-full bg-black hover:bg-gray-700 text-white font-thin py-2 px-4 rounded-md transition-colors duration-200"
                  style={{
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
