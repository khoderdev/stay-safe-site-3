// import React, { useState, useMemo, useEffect } from 'react';
// import Picker from 'react-mobile-picker';

// interface TemperatureWheelProps {
//   min?: number;
//   max?: number;
//   step?: number;
//   defaultValue?: string;
//   className?: string;
//   onChange?: (value: string) => void;
//   formatValue?: (value: string) => string;
// }

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   min = 35.0,
//   max = 39.0,
//   step = 0.1,
//   defaultValue = '37.0',
//   className = '',
//   onChange,
//   formatValue,
// }) => {
//   // Generate temperature values dynamically
//   const tempValues = useMemo(() => {
//     const values: string[] = [];
//     for (let i = min; i <= max; i += step) {
//       values.push(i.toFixed(1)); // Ensure 1 decimal place
//     }
//     // Explicitly include 39.0 if it's not already included due to floating-point precision
//     if (!values.includes('39.0')) {
//       values.push('39.0');
//     }
//     return values;
//   }, [min, max, step]);

//   // Ensure the default value is within the range
//   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

//   const [pickerValue, setPickerValue] = useState({
//     tempValues: initialValue,
//   });

//   // Call onChange when the picker value changes
//   useEffect(() => {
//     if (onChange) {
//       onChange(pickerValue.tempValues);
//     }
//   }, [pickerValue.tempValues, onChange]);

//   return (
//     <Picker
//       value={pickerValue}
//       onChange={setPickerValue}
//       wheelMode="normal"
//       aria-label="Temperature Picker"
//       className={`${className} w-full`}
//     >
//       <Picker.Column key="tempValues" name="tempValues">
//         {tempValues.map((option) => (
//           <Picker.Item
//             key={option}
//             value={option}
//             aria-label={`Temperature ${option}`}
//             className={`transition-all duration-200 ${pickerValue.tempValues === option
//               ? 'text-black dark:text-[#fff] scale-110 font-bold'
//               : 'text-gray-400 dark:text-gray-400'
//               }`}
//           >
//             {formatValue ? formatValue(option) : option}
//           </Picker.Item>
//         ))}
//       </Picker.Column>
//     </Picker>
//   );
// };

// export default TemperatureWheel;

import React, { useState, useMemo, useEffect } from 'react';
import Picker from 'react-mobile-picker';

interface TemperatureWheelProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
  formatValue?: (value: string) => string;
  unit?: 'C' | 'F'; // New prop to handle unit
}

const celsiusToFahrenheit = (celsius: number): number => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  min = 35.0,
  max = 39.0,
  step = 0.1,
  defaultValue = '37.0',
  className = '',
  onChange,
  formatValue,
  unit = 'C', // Default to Celsius
}) => {
  const tempValues = useMemo(() => {
    const values: string[] = [];
    for (let i = min; i <= max; i += step) {
      const value = unit === 'C' ? i.toFixed(1) : celsiusToFahrenheit(i).toFixed(1);
      values.push(value);
    }
    if (!values.includes(unit === 'C' ? '39.0' : celsiusToFahrenheit(39).toFixed(1))) {
      values.push(unit === 'C' ? '39.0' : celsiusToFahrenheit(39).toFixed(1));
    }
    return values;
  }, [min, max, step, unit]);

  const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

  const [pickerValue, setPickerValue] = useState({
    tempValues: initialValue,
  });

  useEffect(() => {
    if (onChange) {
      onChange(pickerValue.tempValues);
    }
  }, [pickerValue.tempValues, onChange]);

  return (
    <Picker
      value={pickerValue}
      onChange={setPickerValue}
      wheelMode="normal"
      aria-label="Temperature Picker"
      className={`${className} w-full`}
    >
      <Picker.Column key="tempValues" name="tempValues">
        {tempValues.map((option) => (
          <Picker.Item
            key={option}
            value={option}
            aria-label={`Temperature ${option}`}
            className={`transition-all duration-200 ${pickerValue.tempValues === option
              ? 'text-black dark:text-[#fff] scale-110 font-bold'
              : 'text-gray-400 dark:text-gray-400'
              }`}
          >
            {formatValue ? formatValue(option) : `${option}°${unit}`}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};

export default TemperatureWheel;