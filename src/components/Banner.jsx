import React, { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "https://cdn.pixabay.com/photo/2017/12/30/13/25/jewelry-3050016_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/24/18/07/necklace-4359432_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/24/11/36/jewelry-5770045_1280.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const slideHeight = window.innerHeight / 4; // Smaller threshold for faster changes
      const newSlide = Math.floor(scrollY / slideHeight) % bannerImages.length;
      setCurrentSlide(newSlide);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerImages.length]);

  return (
    <div className="relative h-[60vh] overflow-hidden mt-4">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log(`Failed to load image: ${image}`);
              e.target.src =
                "https://via.placeholder.com/1200x600/cccccc/666666?text=Banner+Image";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Exquisite Jewelry
              </h2>
              <p className="text-lg md:text-xl">
                Discover our premium collection
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
