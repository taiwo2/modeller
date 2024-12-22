import React from "react";

const AdditionalPortfolio = () => {
  const images = [
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
    "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <img src={images[0]} alt="Portfolio 5" className="w-full h-auto rounded-lg shadow-lg" />
        <img src={images[1]} alt="Portfolio 6" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default AdditionalPortfolio;