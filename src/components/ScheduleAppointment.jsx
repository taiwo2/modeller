// ScheduleAppointment.jsx
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaEdit } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const ScheduleAppointment = () => {
  const events = [
    {
      title: 'Booked Service',
      start: new Date(2024, 11, 27, 11, 30), // December 27, 2024, 11:30 AM
      end: new Date(2024, 11, 27, 12, 30),   // December 27, 2024, 12:30 PM
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Schedule your appointment</h1>
      <p className="mb-8">Check out our availability and book the date and time that works for you</p>
      
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 md:mr-8">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectSlot={(slotInfo) => alert(`Selected slot: ${slotInfo.start}`)}
            onSelectEvent={(event) => alert(`Selected event: ${event.title}`)}
          />
        </div>

        <div className="flex-1 md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p>2 services</p>
                <p>3 hr 45 min</p>
                <p>Client's place</p>
              </div>
              <button className="flex items-center text-sm">
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