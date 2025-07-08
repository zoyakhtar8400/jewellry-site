import React from "react";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              Rubans
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Discover exquisite jewelry that brings out your inner sparkle.
              From traditional to contemporary designs.
            </p>
            <div className="flex space-x-4">
              <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <FaPinterest className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <FaFacebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Rings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Necklaces
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Earrings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Bracelets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Temple Jewelry
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rubans. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>

            <div className="flex space-x-6 text-sm">
              Developed By
              <b>
                {" "}
                <a
                  href="https://www.shineinfosolutions.in/services.html"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  : Shine Infosolutions
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
