import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ className }) => (
  <>
    <Link to="/gallery" className={className}>Gallery</Link>
    <Link to="/booking" className={className}>Booking</Link>
    <Link to="/journal" className={className}>Journal</Link>
  </>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-100 to-pink-200 py-4">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Icon */}
        <div className="flex justify-between items-center md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
          <img src="path/to/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Logo and Menu Icon for Desktop */}
        <div className="hidden md:flex justify-between items-center">
          <img src="path/to/logo.png" alt="Logo" className="h-16" />
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Centered Text and Buttons */}
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Expert At Creating The Most Exquisite Makeup Experiences</p>
          <p className="text-sm italic">Experience the Difference!</p>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-2">
            <button className="bg-black text-white py-2 px-4 rounded-full">BOOK US</button>
            <button className="bg-black text-white py-2 px-4 rounded-full">SHOP PRODUCTS</button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center space-y-4 p-4">
          <NavLinks className="hover:underline text-black" />
        </div>
      )}
    </header>
  );
};

export default Header;