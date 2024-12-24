import React from "react";

const services = [
  {
    title: "PICTURE-PERFECT GLAM (IN-STUDIO)",
    description: "Red-Carpet worthy glam looks. Best for photoshoots and celebrants. NON-BRIDAL",
    duration: "1 hr 30 min",
    price: "$200",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
  {
    title: "SOFT GLAM (IN-STUDIO)",
    description: "Our signature glam looks; best for event guests, graduands, date nights etc. NON-BRIDAL",
    duration: "1 hr 30 min",
    price: "$180",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
  {
    title: "GLAM SESSION OUTSIDE OUR STUDIO",
    description: "Non-bridal makeup at the comfort of any location you want.",
    duration: "1 hr 30 min",
    price: "From $240",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
  {
    title: "GLAM SESSION OUTSIDE OUR STUDIO",
    description: "Non-bridal makeup at the comfort of any location you want.",
    duration: "1 hr 30 min",
    price: "From $240",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
  {
    title: "GLAM SESSION OUTSIDE OUR STUDIO",
    description: "Non-bridal makeup at the comfort of any location you want.",
    duration: "1 hr 30 min",
    price: "From $240",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
  {
    title: "GLAM SESSION OUTSIDE OUR STUDIO",
    description: "Non-bridal makeup at the comfort of any location you want.",
    duration: "1 hr 30 min",
    price: "From $240",
    image: "https://static.wixstatic.com/media/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg/v1/fill/w_161,h_162,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_24f37a26e7ac43f99e02275e93aa7c41~mv2.jpg",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center">
    <img src={service.image} alt={service.title} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    
    {/* Use flexbox to align text items */}
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="mb-4">{service.description}</p>
      <p className="mb-2">{service.duration}</p>
      <p className="mb-4">{service.price}</p>
    </div>
    
    <button className="bg-black text-white py-2 px-4 rounded">Book Now</button>
  </div>
);



const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;