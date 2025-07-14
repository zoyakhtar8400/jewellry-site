import React, { useState } from "react";
import VideoModal from "../Slidess/VideoModal";

const CircularDivs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const categories = [
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_bdbe7040-c7b7-466a-901c-9ecd1f0d17ad.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_85aa4492-fd9f-4b0b-a86b-1dc53569cd42.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_97784fa3-bac0-4e41-ac4f-1fadce111177.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_c9455b5b-dcf8-431a-8d77-91f4b4abd332.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_f82a38ba-b505-43d9-92d0-e53863c86815.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_4c423261-fb9a-4560-9fd6-53606420be62.mp4",
    },
    {
      video:
        "https://whatmore-brand-thumbnail-video-assets.b-cdn.net/rubans/tn_4c423261-fb9a-4560-9fd6-53606420be62.mp4",
    },
  ];

  const openModal = (index) => {
    setSelectedVideoIndex(index);
    setIsModalOpen(true);
  };

  const videos = categories.map((cat) => cat.video);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-1 p-1 border-red-500 rounded-full w-32 h-32 flex flex-col justify-center items-center text-center cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
              onClick={() => openModal(index)}
            >
              <video
                className="w-full h-full object-cover rounded-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={category.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videos={videos}
        initialIndex={selectedVideoIndex}
      />
    </>
  );
};

export default CircularDivs;
