import React from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    quote:
      'Mide was so fun to work with, he made my experience with him so enjoyable and memorable. I definitely recommend anytime.',
    author: 'Funmike Elumide',
  },
  {
    quote: 'An amazing photographer with a keen eye for detail. Every session is a delight!',
    author: 'John Doe',
  },
  {
    quote: 'Captures moments beautifully. Highly recommended for any event.',
    author: 'Jane Smith',
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      className="bg-cover bg-center py-16"
      style={{ backgroundImage: "url('path/to/your/review-image.jpg')" }}
    >
      <div className="container mx-auto text-white text-center px-4">
        <h3 className="text-xl font-bold mb-4">CLIENT REVIEWS</h3>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <blockquote className="italic text-lg">“{review.quote}”</blockquote>
              <p className="mt-4">— {review.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSlider;
