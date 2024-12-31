import React,{useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';
import { useLocation, useNavigate } from 'react-router-dom';
import {services} from './service'


const ServiceCard = ({ service, index, onBookNow }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-pink-100 p-6 rounded-lg shadow-lg text-center"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />

      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="mb-4">{service.description}</p>
        <p className="mb-2">{service.duration}</p>
        <p className="mb-4">{service.price}</p>
      </div>

      <button 
        onClick={() => onBookNow(service)}
        className="bg-black text-white py-2 px-4 rounded">
        Book Now
      </button>
    </motion.div>
  );
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [initialServices, setInitialServices] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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
        services, // Pass all services
      },
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index} 
            onBookNow={handleBookNowClick}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
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

export default Services;
