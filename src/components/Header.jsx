import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ className, onClick }) => (
  <>
    <Link to="/gallery" className={`${className} mt-4`} onClick={onClick}>Gallery</Link>
    <Link to="/booking" className={`${className} mt-4`} onClick={onClick}>Booking</Link>
    <Link to="/journal" className={`${className} mt-4`} onClick={onClick}>Journal</Link>
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
        {/* Mobile View: Menu Icon on the Right */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
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
          </button>
        </div>

        {/* Desktop View: Logo and Menu Icon */}
        <div className="hidden md:flex justify-between items-center">
          <img src="https://static.wixstatic.com/media/ecdce6_808c17b5adff454aa10ffbf5758648df~mv2.png/v1/fill/w_200,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ecdce6_808c17b5adff454aa10ffbf5758648df~mv2.png" alt="Logo" className="h-16" />
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
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
          </button>
        </div>

        {/* Centered Text and Buttons */}
        <div className="text-center mt-4">
          <img src="https://static.wixstatic.com/media/ecdce6_808c17b5adff454aa10ffbf5758648df~mv2.png/v1/fill/w_200,h_199,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ecdce6_808c17b5adff454aa10ffbf5758648df~mv2.png" alt="Logo" className="h-16 mx-auto mb-4 md:hidden" />
          <p className="text-xs md:text-lg font-semibold">Expert At Creating The Most Exquisite Makeup Experiences</p>
          <div className="my-2 border-t-2 border-white w-16 mx-auto"></div>
          <p className="text-lg md:text-sm italic">Experience the Difference!</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 w-full">
            <button className="bg-black text-white py-2 px-4 rounded-full w-full max-w-[200px]">BOOK US</button>
            <button className="bg-black text-white py-2 px-4 rounded-full w-full max-w-[200px]">SHOP PRODUCTS</button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-start pt-16 p-4">
          <button
            className="absolute top-4 right-4 text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
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
          </button>
          <NavLinks className="hover:underline text-black text-xl" onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
