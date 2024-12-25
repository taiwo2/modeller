// ImageSlider.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FaExpand, FaCompress } from 'react-icons/fa';

const ImageSlider = ({ images }) => {
  const { imageIndex } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const currentIndex = parseInt(imageIndex, 10);

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
    navigate(`/${location.pathname.split('/')[1]}/${newIndex}`);
    setDirection(newDirection);
  };

  const closeSlider = () => {
    navigate(`/${location.pathname.split('/')[1]}`);
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
        className="absolute top-4 right-4 text-black text-3xl z-60"
      >
        &times;
      </button>

      <button
        onClick={toggleFullScreen}
        className="absolute top-4 left-4 text-black text-2xl z-60 hidden md:block"
      >
        {isFullScreen ? <FaCompress /> : <FaExpand />}
      </button>

      <motion.div 
        className="relative w-full max-w-4xl h-[90vh] flex items-center justify-center"
      >
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
              x: { type: "spring", stiffness: 300, damping: 30 },
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
            className="absolute left-2 top-1/2 -translate-y-1/2 text-black text-4xl cursor-pointer select-none z-10"
          >
            ❮
          </div>
        )}

        {currentIndex < images.length - 1 && (
          <div 
            onClick={() => paginate(1)} 
            className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-4xl cursor-pointer select-none z-10"
          >
            ❯
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ImageSlider;