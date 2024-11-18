import React, { useState, useEffect } from "react";
import { FoodSafety } from "./columns";

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
  isAddingNew,
  onSave, // New prop to handle save
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: Partial<FoodSafety>;
  isAddingNew: boolean;
  onSave: (data: FoodSafety) => void; // Callback function to save the data
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData as FoodSafety); // Pass the data to onSave prop
  };

  // Ensure that causes and prevention are arrays before calling `.join()`
  const safeJoin = (data: any) => (Array.isArray(data) ? data.join(", ") : data);

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full h-full max-h-screen sm:max-h-[90vh] lg:max-h-[85vh] md:max-h-[90vh] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white-bg dark:bg-[#1a1a1a] p-6 rounded-lg shadow-lg overflow-y-auto">
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
          {!isAddingNew && initialData && (
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
                <strong>Causes:</strong> {safeJoin(initialData?.causes)}
              </div>
              <div>
                <strong>Prevention:</strong> {safeJoin(initialData?.prevention)}
              </div>
              <div>
                <strong>Comments:</strong> {initialData?.comments}
              </div>
            </div>
          )}

          {/* Form for Adding New or Editing */}
          {isAddingNew && (
            <form>
              {Object.keys(formFields).map((field) => {
                const fieldData = formFields[field];
                return (
                  <div key={field} className="mb-4">
                    <label className="block font-semibold text-lg dark:text-gray-50">{fieldData.label}</label>
                    {fieldData.type === "textarea" ? (
                      <textarea
                        name={field}
                        value={(Array.isArray(formData[field]) ? formData[field] : [formData[field] || ""]).join(", ")}

                        onChange={handleInputChange}
                        placeholder={fieldData.placeholder}
                        className="border border-gray-300 dark:border-black
                              rounded-md !bg-white-whites dark:bg-[#000] text-black dark:text-white-bg
                              focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
                              transition duration-300 ease-in-out shadow-sm hover:shadow-md no-spin"
                      />
                    ) : (
                      <input
                        type={fieldData.type}
                        name={field}
                        value={formData[field] || ''}
                        onChange={handleInputChange}
                        placeholder={fieldData.placeholder}
                        className="border border-gray-300 dark:border-black
                              rounded-md !bg-white-whites dark:bg-[#000] text-black dark:text-white-bg
                              focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
                              transition duration-300 ease-in-out shadow-sm hover:shadow-md no-spin"
                      />
                    )}
                  </div>
                );
              })}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex justify-between border-transparent border-2 rounded-md px-5 py-2 text-[1.3rem] transition-all duration-300 ease-in-out bg-gray-300 hover:bg-transparent hover:border-[#0e100f] hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white-bg shadow-lg dark:hover:shadow-none hover:scale-110"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex justify-between border-transparent border-2 rounded-md px-8 py-2 text-[1.3rem] transition-all duration-300 ease-in-out bg-[#0e100f] hover:bg-transparent hover:border-[#0e100f] hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white-bg shadow-lg dark:hover:shadow-none hover:scale-110"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
