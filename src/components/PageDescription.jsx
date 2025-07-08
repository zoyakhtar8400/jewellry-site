import React, { useState } from "react";

const PageDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Quote */}
        <div className="text-center mb-8">
          <blockquote className="text-xl italic text-gray-700 mb-2">
            "A woman who believes in herself sparkles like a diamond."
          </blockquote>
          <p className="text-sm text-gray-600">– Chinu Kala, Founder</p>
        </div>

        {/* Description Content */}
        <div className="prose prose-gray max-w-none">
          <div
            className={`text-gray-700 leading-relaxed ${
              !isExpanded ? "line-clamp-6" : ""
            }`}
          >
            <p className="mb-4">
              One of the most accurate representations of your personality and
              taste is how you dress or accessorize. Your outfit is an extension
              of yourself that highlights your best features. When you step out
              of the house, your charming personality is your best quality, and
              Rubans brings out your inner formidable diva! One of the vital
              parts of this glamorous you are a pair of stunning earrings.
            </p>

            {isExpanded && (
              <>
                <p className="mb-4">
                  Earrings directly affect the way your face looks and are
                  probably one of the first things people notice about you when
                  they look at you. This why Rubans has brought a collection so
                  vast; you won't run out of options to look your best every
                  time.
                </p>

                <p className="mb-4">
                  A pair of earrings can range from a single spot of sparkle to
                  an elaborate pair that can change how you look completely.
                  Whether you are looking for cool and casual stylish western
                  earrings or a pair of festive chand bali earrings, Rubans has
                  crafted designs so rare that you will stand out.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  The exquisite designs of earrings at Rubans
                </h3>
                <p className="mb-4">
                  There is a great demand for stylish Western earrings or
                  earrings for daily use in gold because of the spirited lives
                  of millennials and Gen Z. The daily wear that can make you go
                  for an office going professional to a party animal is in
                  demand, and flexibility is the need of the hour.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  A treasure chest for the festive and wedding season
                </h3>
                <p className="mb-4">
                  Rubans has taken care of your every kind of need for the
                  wedding or festive season. There are ample options that you
                  can pick from whether you are headed to a wedding or
                  consequent events like engagement, mehendi, sangeet, haldi, or
                  reception.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  What does Rubans have to offer you?
                </h3>
                <p className="mb-4">
                  Rubans has a collection to please your discerning eye. The
                  variety of earrings includes Stud earrings, Chandelier
                  earrings, Shoulder dusters, Fringe earrings, Chandbalis,
                  Jhumkas, Drop earrings, Huggies, Hoops, Temple jewellery
                  earrings, Enamelled earrings, and Antique finish pieces.
                </p>
              </>
            )}
          </div>

          {/* Read More/Less Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-black hover:text-gray-800 font-medium underline"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDescription;
