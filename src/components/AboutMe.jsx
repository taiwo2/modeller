import React from 'react';

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-gradient-to-r from-gray-200 to-yellow-100">
      <div className="w-full md:w-1/2 px-4">
        <img
          src="https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg"
          alt="Tola"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Hey Beautiful!</h2>
        <p className="mb-4 text-center md:text-left">
          I'm Tola! With over a decade of experience, I specialize in flawless makeup application,
          creating signature soft glam looks for iconic and elegant women. Whether for bridal or
          special events, my team and I are dedicated to transforming you into effortlessly
          glamorous in the most subtle way ever. I'm based in Calgary and I can't wait to meet you!
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-black text-white py-2 px-4 rounded">BOOK A SESSION</button>
          <button className="border border-black text-black py-2 px-4 rounded">
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
