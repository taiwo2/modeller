// Portfolio.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PortfolioImage from './PortfolioImage';

// const PortfolioImage = ({ src, alt, index }) => {
//   const navigate = useNavigate();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//   });

//   const handleImageClick = () => {
//     navigate(`/portfolio/${index}`);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       className="relative group h-full cursor-pointer"
//       onClick={handleImageClick}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//     </motion.div>
//   );
// };
export const images = [
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
];
const Portfolio = () => {
  return (
    <section className="pb-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <PortfolioImage
                src={images[1]}
                alt="Portfolio 2"
                index={1}
                portfolioType="portfolio4"
              />
            </div>
            <div className="w-full md:w-1/2">
              <PortfolioImage
                src={images[2]}
                alt="Portfolio 3"
                index={2}
                portfolioType="portfolio4"
              />
            </div>
          </div>
          <div>
            <PortfolioImage
              src={images[3]}
              alt="Portfolio 4"
              index={3}
              portfolioType="portfolio4"
            />
          </div>
        </div>
        <div className="flex-1">
          <PortfolioImage src={images[0]} alt="Portfolio 1" index={0} portfolioType="portfolio4" />
        </div>
      </div>
      <div className="w-full h-[300px] flex justify-center items-center mt-8">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300">
          Book a Service
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
