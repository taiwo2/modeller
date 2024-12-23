import React from "react";

const Portfolio = () => {
  const images = [
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">PORTFOLIO</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-4">
        <div className="flex-1 relative group">
          <img
            src={images[0]}
            alt="Portfolio 1"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative group w-full md:w-1/2">
              <img
                src={images[1]}
                alt="Portfolio 2"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group w-full md:w-1/2">
              <img
                src={images[2]}
                alt="Portfolio 3"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="relative group">
            <img
              src={images[3]}
              alt="Portfolio 4"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;