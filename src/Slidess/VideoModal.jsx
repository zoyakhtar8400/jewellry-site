import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const VideoModal = ({ isOpen, onClose, videos, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const prevVideo = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      scale: 0.8,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      scale: 0.8,
      opacity: 0,
    }),
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-30"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Video Carousel */}
        <div className="flex items-center justify-center space-x-8 py-8">
          {/* Left Video */}
          <motion.div
            key={`left-${currentIndex}`}
            initial={{ x: -100, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 0.75, opacity: 0.6 }}
            exit={{ x: -100, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-80 h-[700px] overflow-hidden opacity-60 cursor-pointer transform scale-75 transition-all duration-300 rounded-lg absolute left-1/50 z-0"
            onClick={prevVideo}
          >
            <video
              key={`left-${currentIndex}`}
              className="w-full h-full object-cover pointer-events-none"
              muted
              loop
              autoPlay
            >
              <source
                src={videos[(currentIndex - 1 + videos.length) % videos.length]}
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Main/Center Video */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`center-${currentIndex}`}
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-96 h-[700px] overflow-hidden shadow-2xl rounded-lg z-20 relative"
            >
              {" "}
              <video
                key={`center-${currentIndex}`}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                controls
              >
                <source src={videos[currentIndex]} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>

          {/* Right Video */}
          <motion.div
            key={`right-${currentIndex}`}
            initial={{ x: 100, scale: 0.5, opacity: 0 }}
            animate={{ x: 0, scale: 0.75, opacity: 0.6 }}
            exit={{ x: 100, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-85 h-[700px] overflow-hidden opacity-60 cursor-pointer transform scale-75 transition-all duration-300 rounded-lg absolute right-1/50 z-0"
            onClick={nextVideo}
          >
            <video
              key={`right-${currentIndex}`}
              className="w-full h-full object-cover pointer-events-none"
              muted
              loop
              autoPlay
            >
              <source
                src={videos[(currentIndex + 1) % videos.length]}
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
