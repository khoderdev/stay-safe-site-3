import { FoodSafety } from "./columns";
import React, { useState, useEffect } from "react";

const formFields = {
  pathogen: {
    label: "Pathogen",
    type: "text",
    placeholder: "Enter the pathogen",
    value: "",
  },
  illness: {
    label: "Illness",
    type: "text",
    placeholder: "Enter the illness caused",
    value: "",
  },
  signsSymptoms: {
    label: "Signs & Symptoms",
    type: "textarea",
    placeholder: "Describe the signs and symptoms",
    value: "",
  },
  onsetTimeDuration: {
    label: "Onset Time Duration",
    type: "text",
    placeholder: "Enter the onset time duration",
    value: "",
  },
  causes: {
    label: "Causes",
    type: "textarea",
    placeholder: "Enter causes (comma-separated)",
    value: "",
  },
  prevention: {
    label: "Prevention",
    type: "textarea",
    placeholder: "Enter prevention measures (comma-separated)",
    value: "",
  },
  comments: {
    label: "Comments",
    type: "textarea",
    placeholder: "Enter additional comments",
    value: "",
  },
};

const Modal = ({
  isOpen,
  onClose,
  initialData = {},
  isAddingNew = false, // New prop to determine mode
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<FoodSafety>;
  isAddingNew?: boolean;
}) => {
  const [formValues, setFormValues] = useState({ ...formFields });

  useEffect(() => {
    if (!isAddingNew && initialData) {
      // Populate formValues with initialData if not in Add New mode
      const updatedFormValues = { ...formFields };
      Object.keys(initialData).forEach((key) => {
        if (updatedFormValues[key]) {
          updatedFormValues[key].value = initialData[key];
        }
      });
      setFormValues(updatedFormValues);
    } else {
      // Reset formValues for Add New mode
      setFormValues({ ...formFields });
    }
  }, [initialData, isAddingNew]);

  const handleInputsChanges = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldKey: string) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldKey]: {
        ...prevValues[fieldKey],
        value,
      },
    }));
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full h-full max-h-screen sm:max-h-[90vh] lg:max-h-[85vh] md:max-h-[90vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white-bg dark:bg-[#111] p-6 rounded-lg shadow-lg overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black dark:text-gray-400 hover:text-black hover:dark:text-white2"
          >
            <span className="sr-only">Close</span>
            &#x2715;
          </button>

          {/* Header */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            {isAddingNew ? "Add New Food Safety Record" : "Food Safety Details"}
          </h2>

          {/* Conditional Rendering for Full Data Display */}
          {!isAddingNew && (
            <div className="space-y-4 dark:text-gray-200">
              <div>
                <strong>Pathogen:</strong> {initialData?.pathogen}
              </div>
              <div>
                <strong>Illness:</strong> {initialData?.illness}
              </div>
              <div>
                <strong>Signs & Symptoms:</strong> {initialData?.signsSymptoms}
              </div>
              <div>
                <strong>Onset Time Duration:</strong> {initialData?.onsetTimeDuration}
              </div>
              <div>
                <strong>Causes:</strong> {initialData?.causes?.join(", ")}
              </div>
              <div>
                <strong>Prevention:</strong> {initialData?.prevention?.join(", ")}
              </div>
              <div>
                <strong>Comments:</strong> {initialData?.comments}
              </div>
            </div>
          )}

          {/* Form for Adding New or Editing */}
          <form className="space-y-4 dark:text-gray-200">
            {Object.keys(formValues).map((fieldKey) => {
              const field = formValues[fieldKey];
              return (
                <div key={fieldKey} className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      value={field.value || ""}
                      onChange={(e) => handleInputsChanges(e, fieldKey)}
                      className="p-2 border rounded w-full"
                      rows={3}
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value || ""}
                      onChange={(e) => handleInputsChanges(e, fieldKey)}
                      className="p-2 border rounded w-full"
                    />
                  )}
                </div>
              );
            })}
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;

// import { FoodSafety } from "./columns";
// import React, { useState, useEffect } from "react";

// const formFields = {
//   pathogen: {
//     label: "Pathogen",
//     type: "text",
//     placeholder: "Enter the pathogen",
//     value: "",
//   },
//   illness: {
//     label: "Illness",
//     type: "text",
//     placeholder: "Enter the illness caused",
//     value: "",
//   },
//   signsSymptoms: {
//     label: "Signs & Symptoms",
//     type: "textarea",
//     placeholder: "Describe the signs and symptoms",
//     value: "",
//   },
//   onsetTimeDuration: {
//     label: "Onset Time Duration",
//     type: "text",
//     placeholder: "Enter the onset time duration",
//     value: "",
//   },
//   causes: {
//     label: "Causes",
//     type: "textarea",
//     placeholder: "Enter causes (comma-separated)",
//     value: "",
//   },
//   prevention: {
//     label: "Prevention",
//     type: "textarea",
//     placeholder: "Enter prevention measures (comma-separated)",
//     value: "",
//   },
//   comments: {
//     label: "Comments",
//     type: "textarea",
//     placeholder: "Enter additional comments",
//     value: "",
//   },
// };

// const Modal = ({
//   isOpen,
//   onClose,
//   initialData = {},
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   initialData?: Partial<FoodSafety>;
// }) => {
//   const [formValues, setFormValues] = useState({ ...formFields });


//   const handleInputsChanges = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldKey: string) => {
//     const { value } = event.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [fieldKey]: {
//         ...prevValues[fieldKey],
//         value,
//       },
//     }));
//   };

//   return (
//     isOpen && (
//       <div
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300"
//         role="dialog"
//         aria-modal="true"
//       >
//         <div className="relative w-full h-full max-h-screen sm:max-h-[90vh] lg:max-h-[85vh] md:max-h-[90vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white-bg dark:bg-[#111] p-6 rounded-lg shadow-lg overflow-y-auto">
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-black dark:text-gray-400 hover:text-black hover:dark:text-white2"
//           >
//             <span className="sr-only">Close</span>
//             &#x2715;
//           </button>

//           {/* Header */}
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
//             Food Safety Details
//           </h2>

//           {/* Full Data Display */}
//           <div className="space-y-4 dark:text-gray-200">
//             <div>
//               <strong>Pathogen:</strong> {initialData?.pathogen}
//             </div>
//             <div>
//               <strong>Illness:</strong> {initialData?.illness}
//             </div>
//             <div>
//               <strong>Signs & Symptoms:</strong> {initialData?.signsSymptoms}
//             </div>
//             <div>
//               <strong>Onset Time Duration:</strong> {initialData?.onsetTimeDuration}
//             </div>
//             <div>
//               <strong>Causes:</strong> {initialData?.causes?.join(", ")}
//             </div>
//             <div>
//               <strong>Prevention:</strong> {initialData?.prevention?.join(", ")}
//             </div>
//             <div>
//               <strong>Comments:</strong> {initialData?.comments}
//             </div>
//           </div>

//           <form className="space-y-4 dark:text-gray-200">
//             {Object.keys(formValues).map((fieldKey) => {
//               const field = formValues[fieldKey];
//               return (
//                 <div key={fieldKey} className="mb-4">
//                   <label className="block text-sm font-medium mb-1">
//                     {field.label}
//                   </label>
//                   {field.type === "textarea" ? (
//                     <textarea
//                       placeholder={field.placeholder}
//                       value={field.value || ""}
//                       onChange={(e) => handleInputsChanges(e, fieldKey)}
//                       className="p-2 border rounded w-full"
//                       rows={3}
//                     />
//                   ) : (
//                     <input
//                       type={field.type}
//                       placeholder={field.placeholder}
//                       value={field.value || ""}
//                       onChange={(e) => handleInputsChanges(e, fieldKey)}
//                       className="p-2 border rounded w-full"
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </form>

//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;
