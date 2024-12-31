import React from 'react';
import Carousel from './Carousel';
import Footer from '../pages/Footer';
import ReviewSlider from '../pages/ReviewSlider';
import Services from './Services';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Portfolio4 from './AdditionalPortfolio';
import Portfolio2 from './Gallery';
import Servicess from './Booking';
import ScrollToTop from './ScrollToTop';
import Portfolio3 from './Portfolio3';

const Home = () => {
  return (
    <div>
      <Services />
      <div id="about">
        <AboutMe />
      </div>
      <div id="portfolio">
        <Portfolio />
        <Portfolio2 />
        <Portfolio3 />
        <Portfolio4 />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
