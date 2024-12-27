import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FoodSafety } from "./columns";
import formFields from "./Form";

const Modal = ({
  isOpen,
  onClose,
  initialData = {},
  isAddingNew,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: Partial<FoodSafety>;
  isAddingNew: boolean;
  onSave: (data: FoodSafety) => void;
}) => {
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      await onSave(formData as FoodSafety);
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const safeJoin = (data: any) =>
    Array.isArray(data) ? data.join(", ") : data;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[80vh] bg-white-bg dark:bg-dark rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-3 bg-white-bg dark:bg-dark z-10 px-6 border-gray-200 flex justify-between items-center">
              <h2
                id="modal-title"
                className="text-2xl font-semibold text-gray-900 dark:text-white-bg"
              >
                {isAddingNew
                  ? "Add New Food Safety Record"
                  : "Food Safety Details"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div
              className="p-6 text-left overflow-y-auto pb-20 scrollbar-hide"
              style={{ maxHeight: "calc(90vh - 150px)" }}
            >
              {!isAddingNew && initialData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 text-gray-700 dark:text-gray-200"
                >
                  {Object.entries(initialData).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white-bg3 dark:bg-black p-4 rounded-lg"
                    >
                      <strong className=" text-gray-900 dark:text-white-bg2 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </strong>
                      <p className="text-[1rem] text-left mt-1">
                        {safeJoin(value)}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {isAddingNew && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {Object.entries(formFields).map(([field, fieldData]) => (
                    <div key={field} className="space-y-2">
                      <label className="block text-gray-900 dark:text-white-bg text-left">
                        {fieldData.label}
                      </label>
                      {fieldData.type === "textarea" ? (
                        <textarea
                          name={field}
                          value={(Array.isArray(formData[field])
                            ? formData[field]
                            : [formData[field] || ""]
                          ).join(", ")}
                          onChange={handleInputChange}
                          placeholder={fieldData.placeholder}
                          className="w-full min-h-[100px] rounded-lg border border-gray-300  bg-white-bg2 dark:bg-black text-gray-900 dark:text-white-bg2 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        />
                      ) : (
                        <input
                          type={fieldData.type}
                          name={field}
                          value={formData[field] || ""}
                          onChange={handleInputChange}
                          placeholder={fieldData.placeholder}
                          className="w-full rounded-lg border border-gray-300 bg-white-bg2 dark:bg-black text-gray-900 dark:text-white-bg2 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        />
                      )}
                    </div>
                  ))}
                </motion.form>
              )}
            </div>

            {/* Footer */}
            {isAddingNew && (
              <div className="sticky bottom-0 bg-gray-50 dark:bg-dark px-6 py-4  flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
