import React, { useState } from "react";
import {
  FaPlay,
  FaHeart,
  FaShare,
  FaBookmark,
  FaCalendar,
} from "react-icons/fa";

const StyleGuide = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [likedItems, setLikedItems] = useState(new Set());

  const categories = [
    { id: "all", name: "All Styles" },
    { id: "earrings", name: "Earrings" },
    { id: "necklaces", name: "Necklaces" },
    { id: "occasions", name: "Occasions" },
    { id: "trends", name: "Trends" },
  ];

  const styleGuides = [
    {
      id: 1,
      title: "Why 925 Silver Jewellery is Every Indian Woman's Everyday Luxury",
      description:
        "Explore the timeless appeal of 925 silver jewelry and why it's perfect for daily wear.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      video: null,
      category: "necklaces",
      date: "May 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Why Jewellery Makes the Most Emotional Mother's Day Gift",
      description:
        "Understanding the emotional connection between jewelry and meaningful gifting occasions.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      video: null,
      category: "occasions",
      date: "May 03, 2024",
      readTime: "4 min read",
    },
    {
      id: 3,
      title:
        "Rubans Regal Edit: Maatha Pattis That Add Drama to Your Head-Turner Look",
      description:
        "Elevate your traditional look with stunning maatha pattis that command attention.",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      category: "trends",
      date: "Apr 28, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Statement Earrings That Transform Your Office Look",
      description:
        "Professional styling tips for incorporating bold earrings into your work wardrobe.",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
      video: null,
      category: "earrings",
      date: "Apr 25, 2024",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Layering Necklaces: The Art of Effortless Elegance",
      description:
        "Master the technique of layering necklaces for a sophisticated, modern look.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      video: null,
      category: "necklaces",
      date: "Apr 20, 2024",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Chandelier Earrings: Perfect for Festive Celebrations",
      description:
        "How to style chandelier earrings for Indian festivals and special occasions.",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400",
      video: null,
      category: "earrings",
      date: "Apr 15, 2024",
      readTime: "3 min read",
    },
  ];

  const filteredGuides =
    activeCategory === "all"
      ? styleGuides
      : styleGuides.filter((guide) => guide.category === activeCategory);

  const toggleLike = (id) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Home/</p>
          </div>

          <h1 className="text-4xl md:text-4xl  text-gray-800 mb-4">
            STYLE GUIDE
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover styling tips, trends, and inspiration for every occasion.
            Learn how to make our jewelry work perfectly with your personal
            style.
          </p> */}
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gray-800 text-white "
                  : "bg-white text-gray-700 hover:bg-gray-100 "
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Style Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              className=" rounded-lg  overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Image/Video Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Video Play Button */}
                {guide.video && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
                      <FaPlay className="w-5 h-5 text-gray-700 ml-1" />
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(guide.id);
                    }}
                    className="absolute top-2 left-2 p-2 rounded-full transition-colors z-10"
                  >
                    <FaHeart
                      className={`w-6 h-6 ${
                        likedItems.has(guide.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and Read Time */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    <span>{guide.date}</span>
                  </div>
                  <span>{guide.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-gray-600 transition-colors">
                  {guide.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {guide.description}
                </p>

                {/* Read More Button */}
                <button className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
