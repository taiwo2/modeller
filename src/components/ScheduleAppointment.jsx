import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaEdit } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import DetailModal from './DetailModal';

const localizer = momentLocalizer(moment);

const ScheduleAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState(location.state?.selectedServices || []);
  const [totalDuration, setTotalDuration] = useState(location.state?.totalDuration || '0 hr 0 min');
  // const { selectedServices, totalDuration } = location.state || { selectedServices: [], totalDuration: 0 };

  const events = [
    // Add your events here
  ];

  const handleNextClick = () => {
    if (selectedDate) {
      setIsConfirmationModalOpen(true);
    } else {
      alert('Please select a date and time before proceeding.');
    }
  };

  const handleSelectSlot = useCallback(({ start }) => {
    setSelectedDate(start);
  }, []);

  const handleSelectEvent = useCallback((event) => {
    setSelectedDate(event.start);
  }, []);

  const minTime = new Date();
  minTime.setHours(9, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(16, 0, 0);

  // Generate events for each day
  const generateDayEvents = useCallback(() => {
    const today = moment().startOf('day');
    const events = [];
    for (let i = 0; i < 30; i++) {
      const date = moment(today).add(i, 'days');
      events.push({
        title: 'Available',
        start: date.toDate(),
        end: date.toDate(),
        allDay: true,
      });
    }
    return events;
  }, []);
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScheduleUpdate = (updatedServices, updatedDuration) => {
    setSelectedServices(updatedServices);
    setTotalDuration(updatedDuration);
    setIsModalOpen(false);
  };

  const handleConfirmationSubmit = (email, depositAmount) => {
    // Here you would typically handle the booking confirmation logic
    console.log('Booking confirmed:', { email, depositAmount, selectedDate, selectedServices });
    alert('Booking confirmed! Check console for details.');
    setIsConfirmationModalOpen(false);
    // Navigate to a confirmation page or handle as needed
  };

  // const handleConfirmationSub = async (fullName, email, depositAmount) => {
  //   try {
  //     const templateParams = {
  //       to_email: email,
  //       to_name: fullName,
  //       from_name: fullName,  // Changed this line to use the user's full name
  //       from_email: email,
  //       message: `Booking confirmed for ${selectedServices.map(s => s.title).join(', ')} on ${moment(selectedDate).format('MMMM D, YYYY')} at ${moment(selectedDate).format('h:mm A')}. Deposit amount: $${depositAmount} ${email}`,
  //     };

  //     await emailjs.send(
  //       'service_3xo2yy3',
  //       'template_fl49sd8',
  //       templateParams,
  //       'ZdF0n59OwPqckARxj'
  //     );

  //     alert('Booking confirmed! Confirmation email sent.');
  //     setIsConfirmationModalOpen(false);
  //   // Navigate to a confirmation page or handle as needed
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to send confirmation. Please try again.');
  //   }
  // };

  const handleConfirmationSub = async (fullName, email, depositAmount) => {
    try {
      const templateParams = {
        user_email: email,
        to_name: fullName,
        from_name: fullName,
        reply_to: email,
        message: `
  
  Your booking has been confirmed!
  
  Details:
  - Services: ${selectedServices.map((s) => s.title).join(', ')}
  - Date: ${moment(selectedDate).format('MMMM D, YYYY')}
  - Time: ${moment(selectedDate).format('h:mm A')}
  - Deposit amount: $${depositAmount}
    
        `,
      };

      await emailjs.send(
        'service_3xo2yy3',
        'template_fl49sd8',
        templateParams,
        'ZdF0n59OwPqckARxj'
      );

      alert('Booking confirmed! Confirmation email sent.');
      setIsConfirmationModalOpen(false);

      // Navigate to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send confirmation. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Schedule your appointment</h1>
      <p className="mb-8">
        Check out our availability and book the date and time that works for you
      </p>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 md:mr-8">
          {!selectedDate ? (
            <Calendar
              localizer={localizer}
              events={generateDayEvents()}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              defaultView={Views.MONTH}
              views={['month']}
            />
          ) : (
            <div>
              <button
                onClick={() => setSelectedDate(null)}
                className="mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Back to Calendar
              </button>
              <Calendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable
                onSelectSlot={handleSelectSlot}
                defaultView={Views.DAY}
                views={['day']}
                min={minTime}
                max={maxTime}
                date={selectedDate}
                step={30}
                timeslots={1}
              />
            </div>
          )}
        </div>

        {selectedDate && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Selected Date and Time</h2>
            <p>Date: {moment(selectedDate).format('MMMM D, YYYY')}</p>
            <p>Time: {moment(selectedDate).format('h:mm A')}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                // Here you would typically handle the booking logic
                alert(
                  'Booking confirmed for ' + moment(selectedDate).format('MMMM D, YYYY h:mm A')
                );
              }}
            >
              Confirm Booking
            </button>
          </div>
        )}

        {/* Your existing booking details section */}
        <div className="flex-1 md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p>{selectedServices.length} service(s)</p>
                <p>{totalDuration} min</p>
                {selectedServices.map((service, index) => (
                  <p key={index}>{service.title}</p>
                ))}
              </div>
              <button onClick={handleEditClick} className="flex items-center text-sm">
                <FaEdit className="mr-1" /> Edit
              </button>
            </div>
          </div>
          <button onClick={handleNextClick} className="bg-gray-800 text-white px-4 py-2 w-full">
            Next
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialServices={selectedServices}
        services={location.state?.services || []}
        onSchedule={handleScheduleUpdate}
      />
      <DetailModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        selectedDate={selectedDate}
        selectedServices={selectedServices}
        totalDuration={totalDuration}
        onSubmit={handleConfirmationSub}
      />
    </div>
  );
};

export default ScheduleAppointment;
