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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold">CAPTURING LOVE</h1>
        <p className="text-xl mt-2">FREEZING A MOMENT</p>
      </div>

      <nav className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 lg:bg-transparent flex justify-between items-center">
        <div className="hidden lg:flex space-x-6 text-white text-lg">
          <NavLinks className="hover:underline" />
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="absolute right-0 mt-2 bg-black bg-opacity-90 text-white flex flex-col space-y-4 p-4 rounded"
            >
              <NavLinks className="hover:underline" />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;