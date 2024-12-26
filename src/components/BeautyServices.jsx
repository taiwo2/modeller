// BeautyServices.jsx
import React from 'react';

const BeautyServices = () => {
  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Beauty Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">NON BRIDAL GLAM SESSIONS</h2>
          <p className="mb-4">
            Professional make up services that are specially curated to make women feel and look elegant to events. Focused on achieving a luxurious and flawless skin finish with eyes and lips crafted to meet client’s desires and preferences.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold">SOFT GLAM (IN STUDIO):</h3>
            <p>Our signature soft glam looks; best for event guests, graduates, date nights etc.</p>
            <p className="font-bold">$180</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">CELEBRATIONS GLAM (IN STUDIO):</h3>
            <p>Red-carpet worthy glam looks. Best for photoshoots and celebrants. NON-BRIDAL</p>
            <p className="font-bold">$200</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">GLAM SESSION OUTSIDE OUR STUDIO:</h3>
            <p>Non-bridal make up application at the comfort of your location.</p>
            <p className="font-bold">From $220</p>
            <ul className="list-disc ml-6">
              <li>NE/NW (0-5KM FROM LIVINGSTON) $220</li>
              <li>NE/NW (5-10KM FROM LIVINGSTON) $250</li>
              <li>NE/NW (10-15KM FROM LIVINGSTON) $280</li>
              <li>NE/NW (15-20KM FROM LIVINGSTON) $300</li>
              <li>DOWNTOWN CALGARY $300</li>
              <li>SW, SE & DEEP SOUTH CALGARY $350</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">BRIDALS (2025)</h2>
          <p className="mb-4">
            A special service curated to make brides feel and look elegant. Creating a luxurious, fresh, long lasting and flawless skin finish with eyes and lips crafted to meet your desires.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold">CALGARY WEDDINGS:</h3>
            <p>Location: Anywhere in Calgary</p>
            <p className="font-bold">$750</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">WEDDINGS OUTSIDE CALGARY:</h3>
            <p>If you are getting married outside Calgary, please send me an email to get a quote.</p>
            <p className="font-bold">From $1,100</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">HEAD GEAR STYLING (GELE):</h3>
            <p>Gele tying for party guests and celebrants.</p>
            <p className="font-bold">$50</p>
            <p className="font-bold">$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyServices;