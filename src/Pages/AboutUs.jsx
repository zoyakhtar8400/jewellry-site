import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl  text-gray-800 mb-6">
            About Glitzzera
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            "Every piece of jewelry tells a story, and at Glitzzera, we craft
            stories that sparkle with elegance and grace."
          </p>
          <p className="text-lg text-gray-500 mt-4">– Founder, Glitzzera</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Glitzzera was born from a passion for creating jewelry that
                celebrates the unique beauty and strength of every individual.
                We believe that the right piece of jewelry doesn't just
                complement your outfit—it amplifies your confidence and brings
                out your inner radiance.
              </p>
              <p>
                Our journey began with a simple vision: to make exquisite,
                high-quality jewelry accessible to everyone. From delicate
                everyday pieces to statement jewelry that commands attention,
                Glitzzera offers designs that speak to every facet of your
                personality.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and
                crafted with precision, ensuring that when you wear Glitzzera,
                you're not just wearing jewelry—you're wearing a piece of art
                that tells your story.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <img
              src="/src/assets/about-jewelry.jpg"
              alt="Glitzzera Jewelry"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-600">
                Every piece is meticulously crafted using premium materials and
                traditional techniques combined with modern innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Timeless Elegance
              </h3>
              <p className="text-gray-600">
                Our designs blend contemporary trends with classic aesthetics,
                creating pieces that remain beautiful through the years.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personal Expression
              </h3>
              <p className="text-gray-600">
                We believe jewelry should reflect your unique personality and
                empower you to express yourself with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Collections Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Everyday Elegance
              </h3>
              <p className="text-gray-700 mb-4">
                Delicate pieces perfect for daily wear that add a touch of
                sophistication to any outfit. From minimalist rings to subtle
                necklaces, these pieces are designed to be your everyday
                companions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Statement Luxury
              </h3>
              <p className="text-gray-700 mb-4">
                Bold, eye-catching pieces that make a statement. Perfect for
                special occasions, these designs are crafted to turn heads and
                spark conversations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Bridal Heritage
              </h3>
              <p className="text-gray-700 mb-4">
                Traditional designs with a contemporary twist, perfect for
                weddings and celebrations. Each piece honors cultural heritage
                while embracing modern aesthetics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contemporary Chic
              </h3>
              <p className="text-gray-700 mb-4">
                Modern designs that reflect current trends while maintaining
                timeless appeal. These pieces are perfect for the
                fashion-forward individual.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  text: "Glitzzera's jewelry is absolutely stunning! The quality is exceptional and I always get compliments.",
                  rating: 5,
                },
                {
                  name: "Anita Patel",
                  text: "I love how their pieces make me feel confident and elegant. Perfect for both daily wear and special occasions.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience Glitzzera
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover jewelry that celebrates your unique story. Explore our
            collections and find pieces that resonate with your personal style
            and make you shine brighter.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Shop Our Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
