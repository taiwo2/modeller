import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio2 from "./components/Gallery";
import Booking from "./components/Booking";
import Journal from "./components/Journal";
import Carousel from "./components/Carousel";
import Portfolio from './components/Portfolio';
import Portfolio4 from "./components/AdditionalPortfolio"
import Portfolio3 from "./components/Portfolio3";
import Home from "./components/Home";
import ImageSlider from './components/ImageSlider';

  // Import the new component
  const images = [
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  ];

const App = () => {
  return (
    <Router>
      <div className="relative bg-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio2/:imageIndex" element={<ImageSlider images={images} />} />
          <Route path="/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio3/:imageIndex" element={<ImageSlider />} />          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio4" element={<Portfolio4 />} />
          <Route path="/portfolio4/:imageIndex" element={<ImageSlider images={images} />} />
          <Route 
          path="/portfolio/:imageIndex" 
          element={<ImageSlider images={images} />} 
        />
          <Route path="/booking" element={<Booking />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
