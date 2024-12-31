// Portfolio.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PortfolioImage from './PortfolioImage';
export const images = [
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
  'https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg',
];
const Portfolio = () => {
  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
  });

  return (
    <section className="pb-4 bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center mb-8"
      >
        <h2 className="text-3xl font-bold">PORTFOLIO</h2>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-4">
        <div className="flex-1">
          <PortfolioImage src={images[0]} alt="Portfolio 1" index={0} portfolioType="portfolio" />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <PortfolioImage
                src={images[1]}
                alt="Portfolio 2"
                index={1}
                portfolioType="portfolio"
              />
            </div>
            <div className="w-full md:w-1/2">
              <PortfolioImage
                src={images[2]}
                alt="Portfolio 3"
                index={2}
                portfolioType="portfolio"
              />
            </div>
          </div>
          <div>
            <PortfolioImage src={images[3]} alt="Portfolio 4" index={3} portfolioType="portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
