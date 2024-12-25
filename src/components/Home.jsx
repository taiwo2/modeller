import React from "react";
import Carousel from "./Carousel";
import Footer from "../pages/Footer";
import ReviewSlider from "../pages/ReviewSlider"
import Services from "./Services"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio";
import Portfolio4 from "./AdditionalPortfolio"
import Portfolio2 from "./Gallery"
import Servicess from  './Booking'
import ScrollToTop from './ScrollToTop';
import Portfolio3 from "./Portfolio3"
const Home = () => {
  return (
    <div>
      {/* <header className="relative"> */}
        {/* <Carousel /> */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">CAPTURING LOVE</h1>
          <p className="text-xl mt-2">FREEZING A MOMENT</p>
        </div>
      </header> */}

      <Services />
      <AboutMe />
      <Portfolio />
      <Portfolio2/>
      <Portfolio3 />
      <Portfolio4 />
      {/* <ReviewSlider /> */}
{/* <Servicess /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;