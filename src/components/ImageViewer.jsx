import React, { useState } from "react";

const ImageViewer = ({ images = [] }) => {
  // const images = [
  //   "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509958.jpg",
  //   "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509959.webp",
  //   "/src/assets/gallery/rubans-rhodium-plated-multicolor-cubic-zirconia-studded-premium-bangles-bangles-bracelets-1127509960.jpg",
  // ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrevious = () => {
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-full">
        No images available
      </div>
    );
  }

  return (
    <div className="flex gap-4 p-4 h-full">
      {/* Image Selector - Left Side */}
      <div className="hidden lg:flex flex-col gap-2 w-24">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer border-2 rounded ${
              selectedIndex === index ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Main Image Display - Right Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded relative overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition-all"
        >
          ←
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 z-10 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
