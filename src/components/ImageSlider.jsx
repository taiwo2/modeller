// ImageSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FaExpand, FaCompress, FaArrowLeft } from 'react-icons/fa';
import { images as portfolio3Images } from './Portfolio3';
import { images as portfolio2Images } from './Gallery';
import { images as portfolio4Images } from './AdditionalPortfolio';
import { images as portfolioImages } from './Portfolio';

const ImageSlider = ({ portfolioType }) => {
  const { imageIndex } = useParams();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const currentIndex = parseInt(imageIndex, 10);

  const getImages = () => {
    switch (portfolioType) {
      case 'portfolio2':
        return portfolio2Images;
      case 'portfolio3':
        return portfolio3Images;
      case 'portfolio4':
        return portfolio4Images;
      case 'portfolio':
      default:
        return portfolioImages;
    }
  };

  const images = getImages();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + images.length) % images.length;
    navigate(`/${portfolioType}/${newIndex}`);
    setDirection(newDirection);
  };

  const closeSlider = () => {
    navigate('/');
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <button
        onClick={closeSlider}
        className="absolute top-4 left-4 text-black text-2xl z-60 md:hidden"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={closeSlider}
        className="absolute top-4 right-4 text-black text-3xl z-60 hidden md:block"
      >
        &times;
      </button>
      <button
        onClick={toggleFullScreen}
        className="absolute top-4 left-4 text-black text-2xl z-60 hidden md:block"
      >
        {isFullScreen ? <FaCompress /> : <FaExpand />}
      </button>
      <motion.div className="relative w-full max-w-4xl h-[90vh] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full object-contain max-w-[80%] sm:max-w-[60%] md:max-w-[50%] mx-auto"
          />
        </AnimatePresence>
        {currentIndex > 0 && (
          <div
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-4xl cursor-pointer select-none z-10 hidden md:block"
          >
            ❮
          </div>
        )}
        {currentIndex < images.length - 1 && (
          <div
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-4xl cursor-pointer select-none z-10 hidden md:block"
          >
            ❯
          </div>
        )}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <p className="text-black bg-white bg-opacity-50 px-2 py-1 rounded">
            {`${currentIndex + 1} / ${images.length}`}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
