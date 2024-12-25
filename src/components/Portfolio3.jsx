// Portfolio.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioImage from "./PortfolioImage";

const Portfolio3 = () => {
  const navigate = useNavigate();
  const images = [
    "https://static.wixstatic.com/media/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png/v1/fit/w_649,h_525,q_90/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png",
    "https://static.wixstatic.com/media/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png/v1/fit/w_649,h_525,q_90/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png",
    "https://static.wixstatic.com/media/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png/v1/fit/w_649,h_525,q_90/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png",
  ];

  const handleImageClick = (index) => {
    navigate(`/portfolio3/${index}`, { state: { images } });
  };

  return (
    <section className="pb-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <PortfolioImage
            key={index}
            src={src}
            alt={`Portfolio ${index + 1}`}
            index={index}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio3;