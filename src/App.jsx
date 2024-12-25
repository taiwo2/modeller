import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio2 from "./components/Gallery";
import Booking from "./components/Booking";
import Journal from "./components/Journal";
import Portfolio from './components/Portfolio';
import Portfolio4 from "./components/AdditionalPortfolio";
import Portfolio3 from "./components/Portfolio3";
import Home from "./components/Home";
import ImageSlider from './components/ImageSlider';

const App = () => {
  return (
    <Router>
      <div className="relative bg-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio2/:imageIndex" element={<ImageSlider portfolioType="portfolio2" />} />
          <Route path="/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio3/:imageIndex" element={<ImageSlider portfolioType="portfolio3" />} />          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio4" element={<Portfolio4 />} />
          <Route path="/portfolio4/:imageIndex" element={<ImageSlider portfolioType="portfolio4" />} />
          <Route path="/portfolio/:imageIndex" element={<ImageSlider portfolioType="portfolio" />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
