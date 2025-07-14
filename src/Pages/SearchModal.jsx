// SearchModal.jsx
import React, { useState, useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Mock search results - replace with actual API call
  const mockResults = [
    {
      id: 1,
      title: "Diamond Earrings",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100",
    },
    {
      id: 2,
      title: "Gold Necklace",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100",
    },
    {
      id: 3,
      title: "Silver Rings",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100",
    },
  ];

  useEffect(() => {
    if (searchQuery.length > 2) {
      // Filter mock results based on search query
      const filtered = mockResults.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black/20 backdrop-blur-xs  z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 ">
          <h2 className="text-lg font-semibold">Search Products</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for jewelry, earrings, necklaces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.length > 2 ? (
            searchResults.length > 0 ? (
              <div className="p-4 space-y-3">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => {
                      // Navigate to product
                      onClose();
                    }}
                  >
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-600">{result.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )
          ) : (
            <div className="p-8 text-center text-gray-500">
              Type at least 3 characters to search
            </div>
          )}
        </div>

        {/* Popular Searches */}
        {searchQuery.length === 0 && (
          <div className="p-4 ">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Earrings",
                "Necklaces",
                "Rings",
                "Bracelets",
                "Silver",
                "Gold",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
