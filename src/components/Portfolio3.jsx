// Portfolio.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioImage from "./PortfolioImage";
export const images = [
  "https://static.wixstatic.com/media/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png/v1/fit/w_649,h_525,q_90/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png",
  "https://static.wixstatic.com/media/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png/v1/fit/w_649,h_525,q_90/ecdce6_d7a5227e7cae4d6e805ce5972816ede5~mv2.png",
  "https://static.wixstatic.com/media/ecdce6_365f1e67619a4b02ab5e20807310699a~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_365f1e67619a4b02ab5e20807310699a~mv2.jpg",
];
const Portfolio3 = () => {
  const navigate = useNavigate();
 

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
            portfolioType="portfolio3"
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio3;