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
            Professional make up services that are specially curated to make women feel and look
            elegant to events. Focused on achieving a luxurious and flawless skin finish with eyes
            and lips crafted to meet client’s desires and preferences.
          </p>
          <div className="mb-4 border-b pb-4">
            <h3 className="font-semibold">SOFT GLAM (IN-STUDIO) - $180</h3>
            <p>
              Our signature soft glam looks; best for event guests, graduates, date nights e.t.c.
            </p>
            <p className="text-sm mt-2">
              PS: If this booking is for your wedding book from the “bridal sessions” selection and
              not this one. This booking is closed to brides.
            </p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h3 className="font-semibold">CELEBRATIONS GLAM (IN-STUDIO) - $200</h3>
            <p>Red-carpet worthy glam looks. Best for photoshoots and celebrants. NON-BRIDAL</p>
            <p className="text-sm mt-2">
              NB: If this booking is for your wedding book from the “bridal sessions” selection and
              not this one. This booking is closed to brides.
            </p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h3 className="font-semibold">GLAM SESSION OUTSIDE OUR STUDIO</h3>
            <p>Non-bridal make up application at the comfort of your location.</p>
            <p className="text-sm mt-2">
              PS: If this booking is for your wedding book from the “bridal sessions” selection and
              not this one. This booking is closed to brides.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">BRIDALS (2025)</h2>
          <p className="mb-4">
            A special service curated to make brides feel and look elegant. Creating a luxurious,
            fresh, long lasting and flawless skin finish with eyes and lips crafted to meet your
            desires.
          </p>
          <div className="mb-4 border-b pb-4">
            <h3 className="font-semibold">CALGARY WEDDINGS - $750</h3>
            <p>Location: Anywhere in Calgary</p>
            <p className="text-sm mt-2">
              Bonus: Free bridal consultation(s), touch up kit, eye brow grooming, free false lash
              extensions & 20% off makeup for others in your bridal party including bridesmaids,
              parents and other guests (T&Cs apply).
            </p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h3 className="font-semibold">WEDDINGS OUTSIDE CALGARY</h3>
            <p>
              If you are getting married outside Calgary, please send me an email at
              tolabanksbeauty@gmail.com, send a message on Instagram or WhatsApp/text me on
              +5875743180 to get a quote.
            </p>
            <p className="font-bold">From $1,100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyServices;
