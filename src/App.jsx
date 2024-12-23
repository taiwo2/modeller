import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Journal from "./components/Journal";
import Carousel from "./components/Carousel";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="relative bg-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
