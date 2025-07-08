import React, { useState } from "react";

const BestSellers = () => {
  const [wishlist, setWishlist] = useState({});

  const products = [
    {
      id: 1,
      name: "Rhodium Plated Cubic Zirconia Bangles",
      image: "/src/assets/gallery/pendant.webp",
      hoverImage: "/src/assets/gallery/pendant2.webp",
      originalPrice: 4999,
      discountedPrice: 2499,
      discount: 50,
    },
    {
      id: 2,
      name: "Premium Gold Plated Earrings",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
      originalPrice: 3999,
      discountedPrice: 1999,
      discount: 50,
    },
    {
      id: 3,
      name: "Silver Studded Necklace Set",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509959.webp",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
      originalPrice: 5999,
      discountedPrice: 2999,
      discount: 50,
    },
    {
      id: 4,
      name: "Diamond Cut Ring Collection",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509959.webp",
      originalPrice: 7999,
      discountedPrice: 3999,
      discount: 50,
    },
    {
      id: 5,
      name: "Elegant Pearl Bracelet",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
      originalPrice: 2999,
      discountedPrice: 1499,
      discount: 50,
    },
    {
      id: 6,
      name: "Crystal Pendant Set",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509959.webp",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
      originalPrice: 4499,
      discountedPrice: 2249,
      discount: 50,
    },
    {
      id: 7,
      name: "Vintage Style Anklet",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509959.webp",
      originalPrice: 1999,
      discountedPrice: 999,
      discount: 50,
    },
    {
      id: 8,
      name: "Designer Chain Collection",
      image:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
      hoverImage:
        "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
      originalPrice: 6999,
      discountedPrice: 3499,
      discount: 50,
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="section-heading">BEST SELLERS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={product.hoverImage}
                alt={product.name}
                className="absolute inset-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-2 left-2 rounded-full w-6 h-6 bg-white/50 hover:bg-white/80 transition-colors ${
                  wishlist[product.id]
                    ? "bg-red-500 text-red-500"
                    : "bg-white text-gray-500"
                }`}
              >
                ♥
              </button>

              {/* Sale Tag */}
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                SALE
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              {/* Pricing */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">
                  ₹{product.discountedPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {product.name}
              </h3>
            </div>
            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
