// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import BottomNav from "../Slidess/BottomNav";

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const userId = "687211c0889794ff996ce1f7";

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(`https://glitzzera-backend.vercel.app/api/wishlists/${userId}`);
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Wishlist data received from API:", data);
//         setWishlist(data);
//       } catch (err) {
//         console.error("Error fetching wishlist:", err);
//         setError("Failed to load wishlist. Please try again. Check console for details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId && userId !== "your_actual_user_id_here") {
//       fetchWishlist();
//     } else {
//       setLoading(false);
//       setError("Please set a valid user ID to fetch the wishlist.");
//     }
//   }, [userId]);

//   const handleRemove = async (wishlistItemId) => {
//     setWishlist((prev) => prev.filter((item) => item._id !== wishlistItemId));
//     try {
//       const response = await fetch(`https://glitzzera-backend.vercel.app/api/wishlists/${wishlistItemId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `Failed to remove item! Status: ${response.status}`);
//       }

//       console.log(`Wishlist item with ID ${wishlistItemId} removed successfully from backend.`);
//     } catch (err) {
//       console.error("Error removing item from wishlist:", err);
//       setError(`Failed to remove item: ${err.message}. Please refresh.`);
//     }
//   };

//   const handleAddToCart = (product) => {
//     console.log(`Added ${product.longTitle} to cart!`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex flex-col items-center justify-center">
//         <p className="text-xl text-gray-500">Loading wishlist...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-white flex flex-col items-center pt-6 px-2 sm:px-4">
//         <h1 className="text-3xl font-bold mb-2">WISHLIST</h1>
//         <p className="text-red-500 text-lg mt-4">{error}</p>
//         <p className="text-sm text-gray-600 mt-2">
//           Please ensure your backend is running and the user ID is correct, and that the API returns valid JSON.
//         </p>
//         <BottomNav />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center pt-6 px-2 sm:px-4">
//       <h1 className="text-3xl font-bold mb-2">WISHLIST</h1>
//       <p className="text-sm text-gray-600">
//         To save your wishlist please{" "}
//         <Link to="/login" className="text-blue-600 underline">login</Link> or{" "}
//         <Link to="/signup" className="text-blue-600 underline">sign up</Link>.
//       </p>

//       <div className="mt-4 text-gray-600 flex items-center gap-1 cursor-pointer">
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 17h5l-1.405-1.405M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
//           />
//         </svg>
//         <span>Share wishlist</span>
//       </div>

//       <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
//         {wishlist.length === 0 ? (
//           <div className="text-xl text-gray-400 font-semibold py-16">
//             No items in your wishlist.
//           </div>
//         ) : (
//           wishlist.map((item) => (
//             <div
//               key={item._id}
//               className="w-full max-w-md sm:w-80 border rounded-md shadow-md p-4 flex flex-col items-center"
//             >
//               <img
//                 src={item.productId.images[0]}
//                 alt={item.productId.shortTitle}
//                 className="w-full h-40 sm:h-52 object-cover rounded"
//               />
//               <div className="text-sm text-center mt-2">
//                 <p className="text-gray-700">{item.productId.longTitle}</p>
//                 <p className="mt-1">
//                   <span className="line-through text-gray-400 text-sm mr-2">
//                     ₹{item.productId.price} INR
//                   </span>
//                   <span className="text-green-600 text-sm font-semibold">
//                     ₹{item.productId.discountPrice} INR
//                   </span>
//                 </p>
//               </div>
//               <button
//                 className="w-full mt-3 bg-black text-white py-2 text-sm hover:bg-gray-800"
//                 onClick={() => handleAddToCart(item.productId)}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 className="w-full mt-2 bg-red-500 text-white py-2 text-sm rounded hover:bg-red-600"
//                 onClick={() => handleRemove(item._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//       <BottomNav />
//     </div>
//   );
// };

// export default Wishlist;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Slidess/BottomNav";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = "687211c0889794ff996ce1f7";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="border rounded p-4 shadow">
              <img
                src={item.productId.images[0]}
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
                Add to Cart
              </button>
              <button
                className="w-full mt-2 bg-red-500 text-white py-2 text-sm rounded"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Wishlist;
