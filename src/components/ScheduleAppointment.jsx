import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaEdit } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const ScheduleAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();
  const { selectedServices, totalDuration } = location.state || { selectedServices: [], totalDuration: 0 };

  const events = [
    // Add your events here
  ];

  const handleSelectSlot = useCallback(
    ({ start }) => {
      setSelectedDate(start);
    },
    []
  );

  const handleSelectEvent = useCallback(
    (event) => {
      setSelectedDate(event.start);
    },
    []
  );

  const minTime = new Date();
  minTime.setHours(9,0,0);
  const maxTime = new Date();
  maxTime.setHours(16,0,0);

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
    navigate('/', { state: { editMode: true, selectedServices } });
  };
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Schedule your appointment</h1>
      <p className="mb-8">Check out our availability and book the date and time that works for you</p>
      
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
                alert('Booking confirmed for ' + moment(selectedDate).format('MMMM D, YYYY h:mm A'));
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
              <button 
               onClick={handleEditClick}
                className="flex items-center text-sm"
              >
                <FaEdit className="mr-1" /> Edit
              </button>
            </div>
          </div>
          <button className="bg-gray-800 text-white px-4 py-2 w-full">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
