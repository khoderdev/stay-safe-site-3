// // import React, { useState } from 'react';

// // // Step component for individual steps
// // const Step = ({ step, isActive, isCompleted }) => {
// //   return (
// //     <div className="relative flex flex-col items-center">
// //       <div
// //         className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out ${
// //           isActive ? 'bg-blue' : isCompleted ? 'bg-green-600' : 'bg-gray-300'
// //         }`}
// //       >
// //         {step.id}
// //       </div>
// //       <div className={`mt-2 ${isActive || isCompleted ? 'font-bold' : 'text-gray-500'}`}>
// //         {step.title}
// //       </div>
// //       {isCompleted && (
// //         <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-600" />
// //       )}
// //     </div>
// //   );
// // };

// // // Main Stepper component
// // const Stepper = ({ steps }) => {
// //   const [currentStep, setCurrentStep] = useState(0);

// //   const handleNext = () => {
// //     if (currentStep < steps.length - 1) {
// //       setCurrentStep((prevStep) => prevStep + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (currentStep > 0) {
// //       setCurrentStep((prevStep) => prevStep - 1);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <div className="flex mb-8 justify-between">
// //         {steps.map((step, index) => (
// //           <Step
// //             key={step.id}
// //             step={step}
// //             isActive={index === currentStep}
// //             isCompleted={index < currentStep}
// //           />
// //         ))}
// //       </div>

// //       <div className="text-center">
// //         <p className="mb-4">{steps[currentStep].content}</p>
// //         <div>
// //           <button
// //             className="btn-1 px-4 py-2 bg-blue-600 text-white rounded mr-2 transition duration-300 hover:bg-blue-500"
// //             onClick={handlePrev}
// //             disabled={currentStep === 0}
// //           >
// //             Previous
// //           </button>
// //           <button
// //             className="btn-1 px-4 py-2 bg-blue-600 text-white rounded transition duration-300 hover:bg-blue-500"
// //             onClick={handleNext}
// //             disabled={currentStep === steps.length - 1}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Stepper;
// import React, { useState } from 'react';

// // Step component for individual steps with connecting line
// const Step = ({ step, isActive, isCompleted, showConnector }) => {
//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Connector line */}
//       {showConnector && (
//         <div className="absolute top-5 left-96 w-[1000%] h-1 bg-green-600 transform -translate-x-1/2 transition-all duration-300 ease-in-out" />
//       )}

//       {/* Step circle */}
//       <div
//         className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition duration-300 ease-in-out ${
//           isActive ? 'bg-blue' : isCompleted ? 'bg-green-600' : 'bg-gray-300'
//         }`}
//       >
//         {step.id}
//       </div>

//       {/* Step title */}
//       <div className={`mt-2 ${isActive || isCompleted ? 'font-bold' : 'text-gray-500'}`}>
//         {step.title}
//       </div>
//     </div>
//   );
// };

// // Main Stepper component
// const Stepper = ({ steps }) => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prevStep) => prevStep - 1);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Stepper Indicator */}
//       <div className="flex mb-8 justify-between items-center">
//         {steps.map((step, index) => (
//           <Step
//             key={step.id}
//             step={step}
//             isActive={index === currentStep}
//             isCompleted={index < currentStep}
//             showConnector={index < steps.length - 1} // Show connector except for the last step
//           />
//         ))}
//       </div>

//       {/* Step Content */}
//       <div className="text-center">
//         <p className="mb-4">{steps[currentStep].content}</p>
//         <div>
//           <button
//             className="btn-1 px-4 py-2 bg-blue-600 text-white rounded mr-2 transition duration-300 hover:bg-blue-500"
//             onClick={handlePrev}
//             disabled={currentStep === 0}
//           >
//             Previous
//           </button>
//           <button
//             className="btn-1 px-4 py-2 bg-blue-600 text-white rounded transition duration-300 hover:bg-blue-500"
//             onClick={handleNext}
//             disabled={currentStep === steps.length - 1}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stepper;



// import React from 'react';

// const Stepper = ({ steps, currentStep, completedSteps }) => {
//   return (
//     <ol className="flex items-center w-full">
//       {steps.map((step, index) => {
//         const isCompleted = completedSteps.includes(index) && index !== 0; // Avoid showing check icon on first step initially
//         const isActive = index === currentStep;

//         return (
//           <li
//             key={index}
//             className={`flex w-full items-center ${
//               index < steps.length - 1
//                 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
//                 : ""
//             } ${
//               isCompleted
//                 ? "text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800"
//                 : "after:border-gray-100 dark:after:border-gray-700"
//             }`}
//           >
//             <span
//               className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
//                 isCompleted
//                   ? "bg-blue-100 dark:bg-blue-800"
//                   : isActive
//                   ? "bg-blue-500 text-white dark:bg-blue-500"
//                   : "bg-gray-100 dark:bg-gray-700"
//               }`}
//             >
//               {isCompleted ? (
//                 <svg
//                   className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 16 12"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5.917 5.724 10.5 15 1.5"
//                   />
//                 </svg>
//               ) : (
//                 index + 1
//               )}
//             </span>
//           </li>
//         );
//       })}
//     </ol>
//   );
// };

// export default Stepper;
import React from 'react';

const Stepper = ({ steps, currentStep, isSubmitted }) => {
  return (
    <ol className="flex items-center w-full">
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
              className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                isCompleted
                  ? "bg-blue-100 dark:bg-blue-800"
                  : isActive
                  ? "bg-blue-500 text-white dark:bg-blue-500"
                  : "bg-gray-100 dark:bg-gray-700"
              }`}
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
