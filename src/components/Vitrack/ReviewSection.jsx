import React from "react";
import { getWarnings } from "./conditions";

const ReviewSection = ({ formData }) => {
  // Get the list of warnings based on the form data
  const warnings = getWarnings(formData);

  return (
    <div className="p-6 shadow-md rounded-lg space-y-4">
      <div className="dark:bg-dark p-4 rounded-lg">
        <h2 className="dark:text-white-whites font-semibold text-2xl text-center mb-2">
          Health Warnings
        </h2>
        {warnings.length > 0 ? (
          <ul className="pl-6 space-y-2">
            {warnings.map((warning, index) => (
              <li
                key={index}
                style={{ color: warning.color || "red" }}
                className="font-semibold"
              >
                {warning.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-400 mt-6">
            All metrics are within normal ranges. No immediate action required.
          </p>
        )}

        <h2 className="dark:text-white-whites font-semibold text-2xl my-6">
          Form Data
        </h2>
        <ul className="space-y-2">
          {Object.entries(formData).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="font-semibold dark:text-white-bg2 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="dark:text-white-bg2">
                {typeof value === "object"
                  ? JSON.stringify(value, null, 2)
                  : value || "N/A"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Display the generated warnings */}
    </div>
  );
};

export default ReviewSection;
