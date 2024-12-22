import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const NavLinks = ({ className }) => (
  <>
    <Link to="/gallery" className={className}>Gallery</Link>
    <Link to="/booking" className={className}>Booking</Link>
    <Link to="/journal" className={className}>Journal</Link>
  </>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative">
      <Carousel />
      <nav className="absolute top-0 left-0 w-full p-4 bg-opacity-50 flex justify-between items-center">
        {/* Logo */}
        <img src="path/to/logo.png" alt="Logo" className="h-8" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-white text-lg">
          <NavLinks className="hover:underline" />
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white flex flex-col space-y-4 p-4 lg:hidden">
            <NavLinks className="hover:underline" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
