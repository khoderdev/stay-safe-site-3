import React from 'react';

const Stepper = ({ steps, currentStep, isSubmitted, onStepClick }) => {
  return (
    <ol className="flex justify-center items-center w-full pl-4 md:pl-28">
      {steps.map((step, index) => {
        // Define completed status based on current step and submission status
        const isCompleted = index < currentStep || (isSubmitted && index === steps.length - 1);
        const isActive = index === currentStep && !isSubmitted;

        return (
          <li
            key={index}
            className={`flex w-full items-center ${
              index < steps.length - 1
                ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
                : ""
            } ${
              isCompleted
                ? "text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800"
                : "after:border-gray-100 dark:after:border-gray-700"
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                isCompleted
                  ? "bg-blue-100 dark:bg-blue-800"
                  : isActive
                  ? "bg-blue-500 text-white dark:bg-blue-500"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
              onClick={() => onStepClick(index)} // Add click handler
            >
              {/* Render checkmark for completed steps */}
              {isCompleted ? (
                <svg
                  className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
