import React, { useState, useEffect } from "react";

const OfferBanner = () => {
  const offers = [
    "EXTRA 15% OFF ON ALL ORDERS - auto applied sitewide offer",
    "FREE SHIPPING ON ORDERS ABOVE $50 - no code needed",
    "BUY 2 GET 1 FREE - limited time offer",
    "FLAT 20% OFF ON JEWELRY SETS - use code JEWELRY20",
  ];

  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="bg-red-500 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <p className="text-white text-sm font-medium transition-opacity duration-500">
          {offers[currentOffer]}
        </p>
      </div>
    </div>
  );
};

export default OfferBanner;
