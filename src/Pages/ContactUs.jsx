import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Home/</p>
          </div>
          <h1 className="text-4xl  text-gray-800 mb-4">CONTACT US</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-red-600 w-5 h-5" />
                  <span className="text-gray-700">+91 12345 67890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-red-600 w-5 h-5" />
                  <span className="text-gray-700">info@Glitzzera.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-red-600 w-5 h-5" />
                  <span className="text-gray-700">123 ABC</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>✓ Premium Quality Jewelry</p>
                <p>✓ Certified Authentic Materials</p>
                <p>✓ 30-Day Return Policy</p>
                <p>✓ Free Shipping on Orders Above ₹2000</p>
                <p>✓ Lifetime Warranty Available</p>
              </div>
            </div>

            {/* <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  Instagram
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  Pinterest
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h2>

            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
