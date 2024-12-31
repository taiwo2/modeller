// Modal.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Modal = ({ isOpen, onClose, initialServices, services, onSchedule }) => {
  const [isAddingService, setIsAddingService] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState(initialServices || []);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (initialServices) {
  //     setSelectedServices([initialServices]);
  //   }
  // }, [initialServices]);
  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setSelectedServices(initialServices);
    }
  }, [initialServices]);

  if (!isOpen) return null;

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = (service) => {
    setSelectedServices([...selectedServices, service]);
    setIsAddingService(false);
  };

  const handleRemoveService = (index) => {
    const updatedServices = selectedServices.filter((_, i) => i !== index);
    setSelectedServices(updatedServices);
  };

  const calculateTotalDuration = (services) => {
    let totalMinutes = 0;
    services.forEach((service) => {
      const durationParts = service.duration.split(' ');
      durationParts.forEach((part, index) => {
        if (part.includes('hr')) {
          totalMinutes += parseInt(durationParts[index - 1]) * 60;
        } else if (part.includes('min')) {
          totalMinutes += parseInt(durationParts[index - 1]);
        }
      });
    });
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hr ${minutes} min`;
  };

  const handleScheduleClick = () => {
    const totalDuration = calculateTotalDuration(selectedServices);
    onSchedule(selectedServices, totalDuration);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-2xl h-full mx-4 md:mx-0 p-6 rounded-lg shadow-lg overflow-y-auto">
        {!isAddingService ? (
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Appointment Summary</h2>
                <button onClick={onClose} className="text-black text-2xl">
                  &times;
                </button>
              </div>
              <div className="mb-6">
                {selectedServices.map((service, index) => (
                  <div key={index} className="border p-4 mb-4 flex justify-between items-center">
                    <div>
                      <p>{service.title}</p>
                      <p>{service.price}</p>
                    </div>
                    {selectedServices.length > 1 && (
                      <button onClick={() => handleRemoveService(index)} className="text-red-500">
                        <FaTrash />
                      </button>
                    )}
                  </div>
                ))}
                <p className="mb-4">Do you want to add another service to this appointment?</p>
                <button
                  onClick={() => setIsAddingService(true)}
                  className="w-full border py-2 flex items-center justify-center mb-6"
                >
                  <span className="mr-2">+</span> Add Another Service
                </button>
              </div>
            </div>
            <button
              onClick={handleScheduleClick}
              className="w-full bg-black text-white py-3 border-t border-gray-300 mt-6"
            >
              Schedule Appointment
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Add to your appointment</h2>
                <button onClick={onClose} className="text-black text-2xl">
                  &times;
                </button>
              </div>
              <div className="mb-6">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-b p-2 pr-10"
                  />
                  <FaSearch className="absolute right-2 top-3 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="border-b py-4 flex justify-between cursor-pointer hover:bg-gray-100"
                    onClick={() => handleServiceClick(service)}
                  >
                    <span>{service.title}</span>
                    <span>{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => setIsAddingService(false)} className="text-left text-black mt-4">
              &larr; Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
