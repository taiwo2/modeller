// ConfirmationModal.jsx
import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onLeave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-sm mx-4 md:mx-0 p-6 rounded-lg shadow-lg h-auto md:h-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Leave without booking?</h2>
          <button onClick={onClose} className="text-black text-2xl">&times;</button>
        </div>
        <p className="mb-6">If you leave now, your appointment won’t be saved.</p>
        <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
          <button onClick={onLeave} className="bg-white border border-black text-black px-4 py-2 rounded">
            Leave Booking
          </button>
          <button onClick={onClose} className="bg-black text-white px-4 py-2 rounded">
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;