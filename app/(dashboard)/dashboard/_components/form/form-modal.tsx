'use client'

import React, { useState } from 'react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (weight: string) => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [weight, setWeight] = useState<string>(''); // Store the user's input weight

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(weight);  // Pass the weight back to the parent component when submitted
    onClose(); // Close the modal after submission
  };

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-semibold mb-4">Enter Your Weight</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter your weight"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
