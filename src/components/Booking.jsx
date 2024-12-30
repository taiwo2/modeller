// Booking.jsx
import React,{useState, useEffect} from "react";
import { FaBars, FaChevronDown } from 'react-icons/fa';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';
import { useLocation, useNavigate } from 'react-router-dom';


const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [initialServices, setInitialServices] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    {
      title: "PICTURE-PERFECT GLAM (IN-STUDIO)",
      description: "Red-Carpet worthy glam looks. Best for photoshoots and celebrants. NON-BRIDAL.",
      duration: "1 hr 30 min",
      price: "$200",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
    {
      title: "SOFT GLAM (IN-STUDIO)",
      description: "Our signature glam looks; best for event guests, graduates, date nights e.t.c. NON BRIDAL.",
      duration: "1 hr 30 min",
      price: "$180",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
    {
      title: "GLAM SESSION OUTSIDE OUR STUDIO",
      description: "Non-bridal makeup at the comfort of any location you want.",
      duration: "1 hr 30 min",
      price: "From $240",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
    {
      title: "PICTURE-PERFECT GLAM (IN-STUDIO)",
      description: "Red-Carpet worthy glam looks. Best for photoshoots and celebrants. NON-BRIDAL.",
      duration: "1 hr 30 min",
      price: "$200",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
    {
      title: "SOFT GLAM (IN-STUDIO)",
      description: "Our signature glam looks; best for event guests, graduates, date nights e.t.c. NON BRIDAL.",
      duration: "1 hr 30 min",
      price: "$180",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
    {
      title: "GLAM SESSION OUTSIDE OUR STUDIO",
      description: "Non-bridal makeup at the comfort of any location you want.",
      duration: "1 hr 30 min",
      price: "From $240",
      image: "https://static.wixstatic.com/media/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg/v1/fill/w_163,h_164,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ecdce6_2928723aa58145aebce9262bb9637bf6~mv2.jpg",
    },
  ];
  useEffect(() => {
    if (location.state?.editMode) {
      setIsModalOpen(true);
      setInitialServices(location.state.selectedServices);
    }
  }, [location]);
  const handleBookNowClick = (service) => {
    setInitialServices([service]);
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsConfirmationOpen(true);
  };

  
  const handleLeaveBooking = () => {
    setIsConfirmationOpen(false);
    setIsModalOpen(false);
  };
  const handleScheduleClick = (selectedServices, totalDuration) => {
    navigate('/schedule-appointment', { 
      state: { 
        selectedServices,
        totalDuration,
        services // Pass all services
      } 
    });
  };
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
      <div className="container mx-auto text-center mb-8 flex justify-between items-center">
        <FaBars className="text-white text-2xl" />
        <h2 className="text-3xl font-bold text-white">Book A Service</h2>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300 flex items-center">
          <span>Toggle</span>
          <FaChevronDown className="ml-2" />
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="p-6">
            <img src={service.image} alt={service.title} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-200 mb-4">{service.description}</p>
            <p className="text-gray-100 font-bold">{service.duration}</p>
            <p className="text-gray-100 font-bold mb-4">{service.price}</p>
            <button
              onClick={() => handleBookNowClick(service)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} 
        onClose={handleCloseClick} 
        initialServices={initialServices} 
        services={services}
        onSchedule={handleScheduleClick}
      />
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onLeave={handleLeaveBooking}
      />
    </section>
  );
};

export default Booking;