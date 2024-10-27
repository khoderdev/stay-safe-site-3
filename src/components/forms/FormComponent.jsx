// // import React, { useState } from 'react';
// // import Stepper from './Stepper';
// // import { inputStyles } from '../../utils/styles';

// // const FormComponent = () => {
// //   const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Confirmation"];
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   // Store form data dynamically
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     country: "",
// //     address: ""
// //   });

// //   // Handle moving to the next or previous step
// //   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
// //   const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

// //   // Reset form state
// //   const resetForm = () => {
// //     setCurrentStep(0);
// //     setIsSubmitted(false);
// //     setFormData({
// //       firstName: "",
// //       lastName: "",
// //       email: "",
// //       phone: "",
// //       country: "",
// //       address: ""
// //     });
// //   };

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value
// //     }));
// //   };

// //   // Submit the form, mark final step as completed, and reset the form
// //   const handleSubmit = () => {
// //     setIsSubmitted(true);
// //     alert("Form Submitted");

// //     // Reset the form after a delay to allow user to see the submission status
// //     setTimeout(resetForm, 400);
// //   };

// //   return (
// //     <div className="form-component flex flex-col p-4 border space-y-8">
// //       {/* Stepper component */}
// //       <Stepper steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} />

// //       {/* Form content for each step */}
// //       <div className="form-content">
// //         {currentStep === 0 && (
// //           <div className="space-x-4">
// //             <h2>Personal Info</h2>
// //             <input
// //               type="text"
// //               name="firstName"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               placeholder="First Name"
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />
// //             <input
// //               type="text"
// //               name="lastName"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               placeholder="Last Name"
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />
// //           </div>
// //         )}
// //         {currentStep === 1 && (
// //           <div className="space-x-4">
// //             <h2>Contact Details</h2>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Email"
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />
// //             <input
// //               type="phone"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               placeholder="Phone Number"
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />

// //           </div>
// //         )}
// //         {currentStep === 2 && (
// //           <div className="space-x-4">
// //             <input
// //               type="country"
// //               name="country"
// //               value={formData.country}
// //               onChange={handleChange}
// //               placeholder="country"
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />
// //             <input
// //               type="address"
// //               name="address"
// //               value={formData.address}
// //               onChange={handleChange}
// //               placeholder="address "
// //               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
// //             />
// //           </div>
// //         )}
// //         {currentStep === 3 && (
// //           <div className="space-x-4">
// //             Step 4
// //           </div>
// //         )}
// //         {currentStep === 4 && (
// //           <div className="space-x-4">
// //             Step 5
// //           </div>
// //         )}
// //         {currentStep === 5 && (
// //           <div className="space-x-4">
// //             Step 6
// //           </div>
// //         )}
// //         {currentStep === 6 && (
// //           <div className="space-x-4">
// //             Step 7
// //           </div>
// //         )}

// //         {currentStep === steps.length - 1 && (
// //           <div className="space-y-6 border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center max-w-2xl mx-auto">
// //             <h2 className="text-2xl font-semibold">Confirmation</h2>
// //             <p className="text-gray-600 mb-4">Review and submit your information.</p>
// //             <div className="summary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full border-t pt-4">
// //               {Object.entries(formData).map(([key, value]) => (
// //                 <div
// //                   key={key}
// //                   className="flex justify-between items-center text-lg p-2 bg-gray-50 border-b w-full rounded-md shadow-sm"
// //                 >
// //                   <span className="text-gray-700 capitalize">{key}:</span>
// //                   <span className="text-gray-800">{value || "Not provided"}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}


// //       </div>

// //       {/* Navigation buttons */}
// //       <div className="button-group flex border justify-center space-x-8">
// //         {currentStep > 0 && (
// //           <button onClick={previousStep} className="btn-1">Previous</button>
// //         )}
// //         {currentStep < steps.length - 1 ? (
// //           <button onClick={nextStep} className="btn-1">Next</button>
// //         ) : (
// //           <button onClick={handleSubmit} className="btn-1">Submit</button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FormComponent;
// import React, { useState } from 'react';
// import Stepper from './Stepper';
// import { inputStyles } from '../../utils/styles';

// const FormComponent = () => {
//   const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7"];
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     address: ""
//   });

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
//   const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const resetForm = () => {
//     setCurrentStep(0);
//     setIsSubmitted(false);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       country: "",
//       address: ""
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     setIsSubmitted(true);
//     // Set the current step to the last step (confirmation step)
//     setCurrentStep(steps.length); // This will be the confirmation step index
//     alert("Form Submitted");

//     // Reset the form after a delay to allow user to see the submission status
//     setTimeout(resetForm, 4000); // Delay for 4 seconds before resetting the form
//   };

//   return (
//     <div className="form-component flex flex-col p-4 border space-y-8">
//       <Stepper steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} />

//       <div className="form-content">
//         {currentStep === 0 && (
//           <div className="space-x-4">
//             <h2>Personal Info</h2>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//           </div>
//         )}
//         {currentStep === 1 && (
//           <div className="space-x-4">
//             <h2>Contact Details</h2>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//             <input
//               type="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//           </div>
//         )}
//         {currentStep === 2 && (
//           <div className="space-x-4">
//             <input
//               type="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               placeholder="Country"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//             <input
//               type="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
//             />
//           </div>
//         )}
//         {currentStep === 3 && <div className="space-x-4">Step 4</div>}
//         {currentStep === 4 && <div className="space-x-4">Step 5</div>}
//         {currentStep === 5 && <div className="space-x-4">Step 6</div>}
//         {currentStep === 6 && <div className="space-x-4">Step 7</div>}

//         {/* Render confirmation step based on submission */}
//         { currentStep === steps.length && (
//           <div className="space-y-6 border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center max-w-2xl mx-auto">
//             <h2 className="text-2xl font-semibold">Confirmation</h2>
//             <p className="text-gray-600 mb-4">Review and submit your information.</p>
//             <div className="summary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full border-t pt-4">
//               {Object.entries(formData).map(([key, value]) => (
//                 <div
//                   key={key}
//                   className="flex justify-between items-center text-lg p-2 bg-gray-50 border-b w-full rounded-md shadow-sm"
//                 >
//                   <span className="text-gray-700 capitalize">{key}:</span>
//                   <span className="text-gray-800">{value || "Not provided"}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="button-group flex border justify-center space-x-8">
//         {currentStep > 0 && (
//           <button onClick={previousStep} className="btn-1">Previous</button>
//         )}
//         {currentStep < steps.length && (
//           <button onClick={nextStep} className="btn-1">Next</button>
//         )}
//         {currentStep === steps.length && !isSubmitted && (
//           <button onClick={handleSubmit} className="btn-1">Submit</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormComponent;
import { useState } from 'react';
import Stepper from './Stepper';
import { inputStyles } from '../../utils/styles';

const FormComponent = () => {
  // Only include the steps to be displayed in the stepper
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7"];
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Store form data dynamically
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: ""
  });

  // Handle moving to the next or previous step
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  // Reset form state
  const resetForm = () => {
    setCurrentStep(0);
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      address: ""
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Submit the form, mark final step as completed, and reset the form
  const handleSubmit = () => {
    setIsSubmitted(true);
    alert("Form Submitted");

    // Reset the form after a delay to allow user to see the submission status
    setTimeout(resetForm, 400);
  };

  return (
    <div className="form-component flex flex-col p-4 border space-y-8">
      {/* Stepper component */}
      <Stepper steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} />

      {/* Form content for each step */}
      <div className="form-content">
        {currentStep === 0 && (
          <div className="space-x-4">
            <h2>Personal Info</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
          </div>
        )}
        {currentStep === 1 && (
          <div className="space-x-4">
            <h2>Contact Details</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="space-x-4">
            <input
              type="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
            <input
              type="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
            />
          </div>
        )}
        {currentStep === 3 && <div className="space-x-4">Step 4</div>}
        {currentStep === 4 && <div className="space-x-4">Step 5</div>}
        {currentStep === 5 && <div className="space-x-4">Step 6</div>}
        {currentStep === 6 && <div className="space-x-4">Step 7</div>}

        {/* Render confirmation step only when the form is submitted */}
        {currentStep === steps.length && (
          <div className="space-y-6 border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold">Confirmation</h2>
            <p className="text-gray-600 mb-4">Review and submit your information.</p>
            <div className="summary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full border-t pt-4">
              {Object.entries(formData).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center text-lg p-2 bg-gray-50 border-b w-full rounded-md shadow-sm"
                >
                  <span className="text-gray-700 capitalize">{key}:</span>
                  <span className="text-gray-800">{value || "Not provided"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="button-group flex border justify-center space-x-8">
        {currentStep > 0 && (
          <button onClick={previousStep} className="btn-1">Previous</button>
        )}
        {currentStep < steps.length && (
          <button onClick={nextStep} className="btn-1">Next</button>
        )}
        {currentStep === steps.length && (
          <button onClick={handleSubmit} className="btn-1">Submit</button>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
