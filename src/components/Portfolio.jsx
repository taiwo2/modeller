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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div className="md:col-span-2">
          <img src={images[0]} alt="Portfolio 1" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img src={images[1]} alt="Portfolio 2" className="w-full h-auto rounded-lg shadow-lg" />
          <img src={images[2]} alt="Portfolio 3" className="w-full h-auto rounded-lg shadow-lg" />
          <img src={images[3]} alt="Portfolio 4" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;