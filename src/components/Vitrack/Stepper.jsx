import React, { useState } from 'react';

const Stepper = ({ steps, children, currentStep, setCurrentStep }) => {
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Render Step Content Dynamically */}
      <div>{children[currentStep]}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
