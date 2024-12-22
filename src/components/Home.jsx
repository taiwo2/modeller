import React from "react";
import Carousel from "./Carousel";
import Footer from "../pages/Footer";
import ReviewSlider from "../pages/ReviewSlider"

const Home = () => {
  return (
    <div>
      <header className="relative">
        {/* <Carousel /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">CAPTURING LOVE</h1>
          <p className="text-xl mt-2">FREEZING A MOMENT</p>
        </div>
      </header>

      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Mide Wey Studios</h2>
          <p className="mb-4">
            Mide Wey Studios is aimed at telling captivating stories through our lens, capturing the essence of moments and creating lasting memories for our clients.
          </p>
          <p className="mb-4">
            Led by a dynamic and personable founder, our brand has been built on a foundation of creativity, professionalism, and a deep understanding of the craft.
          </p>
          <p>
            Based in the vibrant Atlanta Metro Area, we draw inspiration from the city's rich cultural tapestry and diverse landscapes. We love to explore new environments, seeking out unique backdrops and authentic moments that reflect the true essence of our subjects. From lifestyle shoots and documentary photography to events and portraiture, our portfolio encompasses a wide range of genres, each embedded with our distinctive storytelling approach.
          </p>
        </div>
      </section>

      <section className="bg-cover bg-center py-16" style={{ backgroundImage: "url('path/to/your/image.jpg')" }}>       
        <div className="container mx-auto text-white text-center px-4">
          <div className="flex justify-around items-center space-x-8">
            <div>
              <h3 className="text-2xl font-bold">Introduction</h3>
              <p className="mt-2">GET TO KNOW ME</p>
              <a href="#introduction" className="inline-block mt-4 text-lg hover:underline">
                →
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Portfolio</h3>
              <p className="mt-2">CHECK OUT MY WORK</p>
              <a href="#portfolio" className="inline-block mt-4 text-lg hover:underline">
                →
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Investment</h3>
              <p className="mt-2">WHAT DOES IT COST?</p>
              <a href="#investment" className="inline-block mt-4 text-lg hover:underline">
                →
              </a>
            </div>
          </div>
          <div className="mt-16">
            <blockquote className="italic text-lg">“MIDE WEY SABI”</blockquote>
            <p className="mt-4">— Tomike A.</p>
          </div>
        </div>
      </section>

      <ReviewSlider />

      <Footer />
    </div>
  );
};

export default Home;