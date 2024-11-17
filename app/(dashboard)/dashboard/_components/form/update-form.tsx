'use client'

import React, { useState } from 'react';
import FormModal from './form-modal';
import { updateUserWeight } from '@/lib/actions/user/update-user-weight';

interface Props {}

const UpdateForm: React.FC<Props> = () => {
  const [weight, setWeight] = useState<string>('');  // Store the weight
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  // Modal visibility
  const [userId] = useState<string>('67390bfcdd59c20db9828f70'); // Assuming the user ID is available

  const handleOpenModal = () => setIsModalOpen(true); // Open modal
  const handleCloseModal = () => setIsModalOpen(false); // Close modal

  const handleWeightSubmit = (newWeight: string) => {
    console.log("New weight submitted: ", newWeight);  // Debugging line
    setWeight(newWeight);  // Update the weight when submitted

    // Prepare the formData for submitting
    const formData = new FormData();
    formData.append("weight", newWeight);
    formData.append("id", userId);

    // Call the backend function to update the weight
    updateUserWeight(formData).catch((error) => {
      console.log("Error submitting weight:", error);
    });
  };

  return (
    <div className='bg-white p-4'>
      <div className='flex flex-col mx-auto max-w-screen-md border-b'>
        <h2 className='pt-8 text-5xl pb-10 font-semibold text-gray-600'>Settings</h2>
      </div>
      <div className='pt-8 lg:pt-6 mx-auto max-w-screen-md'>
        <form className='mt-8'>
          {/* Weight Field */}
          <div className='flex items-center justify-between p-4 border rounded-lg'>
            <div>
              <label
                onClick={handleOpenModal}  // Open modal when clicked
                className="text-lg font-medium"
              >
                Weight
              </label>
            </div>
            <div>
              <span
                className="text-xl cursor-pointer text-blue-600 hover:underline"
                onClick={handleOpenModal}  // Open modal when clicked
              >
                {weight || "Not Set"} {/* Show the weight or "Not Set" */}
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Modal for updating weight */}
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleWeightSubmit}  // Pass the handleWeightSubmit to modal
      />
    </div>
  );
};

export default UpdateForm;
