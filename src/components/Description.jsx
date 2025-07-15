// import React, { useState } from "react";

// const Description = ({ product }) => {
//   const [selectedSize, setSelectedSize] = useState("");
//   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

//   if (!product) {
//     return <div>Loading product details...</div>;
//   }

//   const handleAddToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const index = cart.findIndex((item) => item._id === product._id);

//     if (index > -1) {
//       cart[index].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     alert("Item added to cart!");
//   };

//   const handleAddToWishlist = () => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
//     const exists = wishlist.some((item) => item._id === product._id);

//     if (!exists) {
//       wishlist.push(product);
//       localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
//       alert("Item added to wishlist!");
//     } else {
//       alert("Item already in wishlist");
//     }
//   };

//   const discountPercentage = Math.round(
//     ((product.price - product.discountPrice) / product.price) * 100
//   );

//   const today = new Date().toLocaleDateString("en-GB");
//   const expectedDate = new Date(
//     Date.now() + 4 * 24 * 60 * 60 * 1000
//   ).toLocaleDateString("en-GB");

//   return (
//     <div className="p-8 space-y-6">
//       <h1 className="text-3xl font-bold text-gray-800">{product.longTitle}</h1>

//       {/* Price Section */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="text-lg text-gray-500 line-through">₹{product.price}</span>
//           <span className="text-2xl font-bold">₹{product.discountPrice}</span>
//         </div>
//         <span className="text-red-800 px-2 py-1 rounded text-sm font-semibold">
//           {discountPercentage}% OFF
//         </span>
//       </div>

//       {/* Info Chips */}
//       <div className="space-y-2 text-center">
//         <div className="relative group text-center">
//           <div className="bg-neutral-300 rounded-lg p-3 text-gray-800 text-sm cursor-pointer">
//             💰 Earn upto 84 Rubans Coins on this purchase
//           </div>
//           <div className="absolute inset-x-0 top-full bg-white text-black text-xs px-3 rounded-b-lg max-h-0 group-hover:max-h-16 group-hover:py-4 transition-all duration-300 overflow-hidden">
//             1 Coin = ₹1. Use coins for future purchases!
//           </div>
//         </div>

//         <div className="flex flex-col bg-gray-900 border border-green-200 rounded-lg p-3 text-white text-sm">
//           <span>EXTRA 15% OFF ON ALL ORDERS</span>
//           <span>auto applied at cart</span>
//         </div>

//         <div className="flex flex-col bg-gray-300 rounded-lg p-3 text-red-700 text-sm">
//           <span className="font-medium">BUY ANY 2 GET 20% OFF SITEWIDE</span>
//           <span>code auto applied at checkout</span>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-col gap-3">
//         <button
//           onClick={handleAddToCart}
//           className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={handleAddToWishlist}
//           className="border-2 border-black text-black py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer"
//         >
//           Add to Wishlist
//         </button>
//       </div>

//       {/* Low Stock Indicator */}
//       <div className="flex items-center gap-2 text-sm text-gray-700">
//         <div
//           className={`w-2 h-2 rounded-full animate-pulse shadow-lg ${
//             product.stockQty > 10
//               ? "bg-green-400 shadow-green-400/50"
//               : "bg-yellow-400 shadow-yellow-400/50"
//           }`}
//         ></div>
//         <span>
//           {product.stockQty > 10
//             ? `In stock - ${product.stockQty} items`
//             : `Low stock - ${product.stockQty} items left`}
//         </span>
//       </div>

//       {/* Size Selector */}
//       {product.sizes && product.sizes.length > 0 && (
//         <div className="space-y-3">
//           <h3 className="text-lg font-semibold">Size</h3>
//           <div className="flex gap-2">
//             {product.sizes.map((sizeObj) => (
//               <button
//                 key={sizeObj._id}
//                 onClick={() => !sizeObj.is_oos && setSelectedSize(sizeObj.sizeName)}
//                 disabled={sizeObj.is_oos}
//                 className={`relative px-4 py-2 border rounded-lg font-medium transition-colors ${
//                   sizeObj.is_oos
//                     ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
//                     : selectedSize === sizeObj.sizeName
//                     ? "bg-black text-white border-black"
//                     : "bg-white text-black border-gray-300 hover:border-black"
//                 }`}
//               >
//                 {sizeObj.sizeName}
//                 {sizeObj.is_oos && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
//                   </div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Delivery Info */}
//       <div className="flex gap-4">
//         <div className="flex-1 border rounded-lg p-4 text-center">
//           <img
//             src="/src/assets/icons/bag-check-svgrepo-com.svg"
//             alt="Order"
//             className="w-6 h-6 mx-auto mb-2"
//           />
//           <div className="font-medium text-sm">Order Now</div>
//           <div className="text-xs text-gray-600">{today}</div>
//         </div>
//         <div className="flex-1 border rounded-lg p-4 text-center">
//           <img
//             src="/src/assets/icons/location-pin-svgrepo-com.svg"
//             alt="Delivery"
//             className="w-6 h-6 mx-auto mb-2"
//           />
//           <div className="font-medium text-sm">Expected Delivery</div>
//           <div className="text-xs text-gray-600">{expectedDate}</div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="space-y-4">
//         <p className="text-lg text-gray-600">{product.longDesc}</p>

//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold">Product Details:</h3>
//           <ul className="list-disc list-inside space-y-1 text-gray-600">
//             <li>Rating: {product.ratings}/5 stars</li>
//             <li>Stock Quantity: {product.stockQty} pieces</li>
//             <li>Status: {product.status ? "Available" : "Unavailable"}</li>
//             <li>{product.shortDesc}</li>
//           </ul>
//         </div>

//         {/* Accordion */}
//         <div className="border rounded-lg overflow-hidden">
//           <button
//             onClick={() => setIsAccordionOpen(!isAccordionOpen)}
//             className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition-colors"
//           >
//             <span>Refunds and Exchange Policy</span>
//             <span
//               className={`transform transition-transform duration-300 ${
//                 isAccordionOpen ? "rotate-180" : ""
//               }`}
//             >
//               ▼
//             </span>
//           </button>
//           <div
//             className={`border-t bg-gray-50 text-sm text-gray-600 transition-all duration-300 ease-in-out ${
//               isAccordionOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
//             } overflow-hidden`}
//           >
//             <div className="p-4">
//               <ul className="space-y-2">
//                 <li>• 30-day return policy for unused items</li>
//                 <li>• Free exchange within 15 days of purchase</li>
//                 <li>• Items must be in original packaging</li>
//                 <li>• Refund processed within 5-7 business days</li>
//                 <li>• Custom or personalized items are non-returnable</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-800 mt-2 pb-6">
//           <p className="text-gray-600">
//             SKU: <span>RE20B407594</span>
//           </p>
//         </div>

//         <div>
//           <p>Country of Origin: INDIA</p>
//         </div>
//         <div>
//           <p>
//             Marketed By: Rubans Accessories Pvt Ltd, No. 1, 2nd Floor, 1st Main
//             Road, 2nd Block, Koramangala, Bengaluru - 560034, Karnataka
//           </p>
//         </div>
//         <div>
//           <p>
//             Manufacturer Details: Rubans Accessories Pvt Ltd, No. 1, 2nd Floor,
//             1st Main Road, 2nd Block, Koramangala, Bengaluru - 560034, Karnataka
//           </p>
//         </div>
//         <div className="border-b border-gray-800 pb-8">
//           <p>Grievance Redressal: care@rubans.in</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Description;
import React, { useState } from "react";

const Description = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const userId = "687211c0889794ff996ce1f7";

  if (!product) return <div>Loading product details...</div>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const index = cart.findIndex((item) => item._id === product._id);

    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  const handleAddToWishlist = async () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const existsLocally = wishlist.some((item) => item._id === product._id);

    if (!existsLocally) {
      wishlist.push(product);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
    }

    try {
      const response = await fetch(
        `https://glitzzera-backend.vercel.app/api/wishlists`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, productId: product._id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add to wishlist.");
      }

      alert(
        !existsLocally
          ? "Item added to wishlist!"
          : "Item already in wishlist (synced)."
      );
    } catch (err) {
      console.error("Wishlist sync failed:", err);
      if (!existsLocally) {
        alert("Saved locally, but server sync failed.");
      } else {
        alert("Already in local wishlist. Sync failed.");
      }
    }
  };

  const discountPercentage = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );
  const today = new Date().toLocaleDateString("en-GB");
  const expectedDate = new Date(
    Date.now() + 4 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-GB");

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{product.longTitle}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg text-gray-500 line-through">
            ₹{product.price}
          </span>
          <span className="text-2xl font-bold">₹{product.discountPrice}</span>
        </div>
        <span className="text-red-800 px-2 py-1 rounded text-sm font-semibold">
          {discountPercentage}% OFF
        </span>
      </div>

      <div className="space-y-2 text-center">
        <div className="relative group text-center">
          <div className="bg-neutral-300 rounded-lg p-3 text-gray-800 text-sm cursor-pointer">
            💰 Earn upto 84 Rubans Coins on this purchase
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 border border-green-200 rounded-lg p-3 text-white text-sm">
          <span>EXTRA 15% OFF ON ALL ORDERS</span>
          <span>auto applied at cart</span>
        </div>
        <div className="flex flex-col bg-gray-300 rounded-lg p-3 text-red-700 text-sm">
          <span className="font-medium">BUY ANY 2 GET 20% OFF SITEWIDE</span>
          <span>code auto applied at checkout</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleAddToCart}
          className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="border border-black  text-black hover:bg-gray-200   py-3 px-6 rounded-lg font-semibold"
        >
          Add to Wishlist
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <div
          className={`w-2 h-2 rounded-full animate-pulse shadow-lg ${
            product.stockQty > 10 ? "bg-green-400" : "bg-yellow-400"
          }`}
        ></div>
        <span>
          {product.stockQty > 10
            ? `In stock - ${product.stockQty} items`
            : `Low stock - ${product.stockQty} items left`}
        </span>
      </div>

      {product.sizes?.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Size</h3>
          <div className="flex gap-2">
            {product.sizes.map((sizeObj) => (
              <button
                key={sizeObj._id}
                onClick={() =>
                  !sizeObj.is_oos && setSelectedSize(sizeObj.sizeName)
                }
                disabled={sizeObj.is_oos}
                className={`px-4 py-2 border rounded-lg font-medium ${
                  sizeObj.is_oos
                    ? "bg-gray-100 text-gray-400"
                    : selectedSize === sizeObj.sizeName
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {sizeObj.sizeName}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex-1 border rounded-lg p-4 text-center">
          <div className="font-medium text-sm">Order Now</div>
          <div className="text-xs text-gray-600">{today}</div>
        </div>
        <div className="flex-1 border rounded-lg p-4 text-center">
          <div className="font-medium text-sm">Expected Delivery</div>
          <div className="text-xs text-gray-600">{expectedDate}</div>
        </div>
      </div>

      <p className="text-lg text-gray-600">{product.longDesc}</p>
    </div>
  );
};

export default Description;
