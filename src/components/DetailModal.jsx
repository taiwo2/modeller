// ConfirmationModal.jsx
import React, { useState } from 'react';
import moment from 'moment';
import { FaTimes } from 'react-icons/fa';

const DetailModal = ({ isOpen, onClose, selectedDate, selectedServices, totalDuration, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Confirm Booking</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Selected Services:</h3>
          <ul>
            {selectedServices.map((service, index) => (
              <li key={index}>{service.title} - {service.price}</li>
            ))}
          </ul>
          <p>Total Duration: {totalDuration}</p>
          <p>Date: {moment(selectedDate).format('MMMM D, YYYY')}</p>
          <p>Time: {moment(selectedDate).format('h:mm A')}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Deposit Amount:</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          onClick={() => onSubmit(email, depositAmount)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Confirm and Pay Deposit
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
