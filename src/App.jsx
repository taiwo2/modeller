import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Portfolio2 = lazy(() => import('./components/Gallery'));
const Portfolio3 = lazy(() => import('./components/Portfolio3'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Portfolio4 = lazy(() => import('./components/AdditionalPortfolio'));
const Booking = lazy(() => import('./components/Booking'));
const Journal = lazy(() => import('./components/Journal'));
const ImageSlider = lazy(() => import('./components/ImageSlider'));
const ScheduleAppointment = lazy(() => import('./components/ScheduleAppointment'));
const BeautyServices = lazy(() => import('./components/BeautyServices'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <FaSpinner className="animate-spin text-4xl text-gray-600" />
      </div>
    );
  }

  return (
    <Router>
      <div className="relative bg-white min-h-screen">
        <Header />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen bg-white">
              <FaSpinner className="animate-spin text-4xl text-gray-600" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio2" element={<Portfolio2 />} />
            <Route
              path="/portfolio2/:imageIndex"
              element={<ImageSlider portfolioType="portfolio2" />}
            />
            <Route path="/portfolio3" element={<Portfolio3 />} />
            <Route
              path="/portfolio3/:imageIndex"
              element={<ImageSlider portfolioType="portfolio3" />}
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio4" element={<Portfolio4 />} />
            <Route
              path="/portfolio4/:imageIndex"
              element={<ImageSlider portfolioType="portfolio4" />}
            />
            <Route
              path="/portfolio/:imageIndex"
              element={<ImageSlider portfolioType="portfolio" />}
            />
            <Route path="/booking" element={<Booking />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
            <Route path="/beauty-services" element={<BeautyServices />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
