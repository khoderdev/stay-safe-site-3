// import React, { useState, useEffect } from 'react';
// import InputField from '../inputs/InputField';

// interface TemperatureWheelProps {
//   label?: string; // Add label prop
//   min?: number;
//   max?: number;
//   step?: number;
//   defaultValue?: string;
//   onChange?: (value: string) => void; // Add onChange prop
//   formatValue?: (value: string) => string; // Add formatValue prop
// }

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   label, // Destructure label prop
//   min = 35.0, // Updated min to 35.0 to include 35.0 and below
//   max = 39.0, // Set max to 39.0
//   step = 0.1,
//   defaultValue = '37.0',
//   onChange, // Destructure onChange prop
//   formatValue, // Destructure formatValue prop
// }) => {
//   // State to manage the input value
//   const [value, setValue] = useState(defaultValue);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setValue(newValue);

//     // Call the onChange prop if provided
//     if (onChange) {
//       onChange(newValue);
//     }
//   };

//   // Format the displayed value
//   const formattedValue = formatValue ? formatValue(value) : value;

//   return (
//     <InputField
//       type="number"
//       label={label} // Pass the label prop to InputField
//       min={min}
//       max={max}
//       step={step}
//       value={formattedValue}
//       onChange={handleChange}
//       aria-label="Temperature Input"
//       className="w-full" // Add any necessary className
//     />
//   );
// };

// export default TemperatureWheel;

import React from 'react';
import InputField from '../inputs/InputField';

interface TemperatureWheelProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: string; // Ensure value is a string
  onChange: (value: string) => void; // Ensure onChange is a function that takes a string
}

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  label,
  min = 35.0,
  max = 39.0,
  step = 0.1,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue); // Pass the new value to the parent component
  };

  return (
    <InputField
      type="text"
      label={label}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      aria-label="Temperature Input"
      className="w-full" name={undefined}    />
  );
};

export default TemperatureWheel;