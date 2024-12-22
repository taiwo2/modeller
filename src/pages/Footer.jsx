import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex space-x-6">
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-center text-sm md:text-left">
          All content Copyright © 2024 Mide Wey
        </p>
        <a href="#top" className="hover:text-gray-400">
          <span className="sr-only">Back to top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;