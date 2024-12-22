import React from "react";
import Slider from "react-slick";


const Slide = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="w-full h-[80vh] object-cover" />
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { src: "https://via.placeholder.com/800x600", alt: "A placeholder image for slide 1" },
    { src: "https://via.placeholder.com/800x600", alt: "A placeholder image for slide 2" },
    { src: "https://via.placeholder.com/800x600", alt: "A placeholder image for slide 3" },
  ];

  return (
    <div className="w-full h-[80vh]">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <Slide key={index} src={slide.src} alt={slide.alt} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;