// import React, { useState, useMemo, useEffect } from 'react';
// import Picker from 'react-mobile-picker';
// import { celsiusToFahrenheitMapping } from '../data';

// interface TemperatureWheelProps {
//   min?: number;
//   max?: number;
//   step?: number;
//   defaultValue?: string;
//   className?: string;
//   onChange?: (value: string) => void;
//   formatValue?: (value: string) => string;
//   unit?: 'C' | 'F'; // New prop to handle unit
// }

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   min = 35.0,
//   max = 39.0,
//   step = 0.1,
//   defaultValue = '37.0',
//   className = '',
//   onChange,
//   formatValue,
//   unit = 'C', // Default to Celsius
// }) => {
//   const tempValues = useMemo(() => {
//     const values: string[] = [];
//     for (let i = min; i <= max; i += step) {
//       const celsiusValue = i.toFixed(1);
//       const fahrenheitValue = celsiusToFahrenheitMapping[celsiusValue];
//       const value = unit === 'C' ? celsiusValue : fahrenheitValue;
//       values.push(value);
//     }
//     // Add "39 and Above" for Celsius and "104 and Above" for Fahrenheit
//     if (unit === 'C') {
//       values.push('39.0');
//     } else {
//       values.push('104.0');
//     }
//     return values;
//   }, [min, max, step, unit]);

//   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

//   const [pickerValue, setPickerValue] = useState({
//     tempValues: initialValue,
//   });

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
//             {formatValue ? formatValue(option) : `${option}°${unit}`}
//           </Picker.Item>
//         ))}
//       </Picker.Column>
//     </Picker>
//   );
// };

// export default TemperatureWheel;


import React, { useState, useMemo, useEffect } from 'react';
import Picker from 'react-mobile-picker';
import { celsiusToFahrenheitMapping } from '../data';

interface TemperatureWheelProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string; // Expects a string with unit, e.g., "37.0 °C" or "98.6 °F"
  className?: string;
  onChange?: (value: string) => void; // Returns the value with unit, e.g., "37.0 °C" or "98.6 °F"
  formatValue?: (value: string) => string;
  unit?: 'C' | 'F'; // New prop to handle unit
}

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  min = 35.0,
  max = 39.0,
  step = 0.1,
  defaultValue = '37.0 °C', // Default value with unit
  className = '',
  onChange,
  formatValue,
  unit = 'C', // Default to Celsius
}) => {
  // Extract the numeric value from the defaultValue (e.g., "37.0 °C" -> "37.0")
  const defaultNumericValue = defaultValue.split(' ')[0];

  // Generate temperature values based on the unit
  const tempValues = useMemo(() => {
    const values: string[] = [];
    for (let i = min; i <= max; i += step) {
      const celsiusValue = i.toFixed(1);
      const fahrenheitValue = celsiusToFahrenheitMapping[celsiusValue];
      const value = unit === 'C' ? celsiusValue : fahrenheitValue;
      values.push(value);
    }
    // Add "39 and Above" for Celsius and "104 and Above" for Fahrenheit
    if (unit === 'C') {
      values.push('39.0');
    } else {
      values.push('104.0');
    }
    return values;
  }, [min, max, step, unit]);

  // Set the initial picker value
  const initialValue = tempValues.includes(defaultNumericValue)
    ? defaultNumericValue
    : tempValues[Math.floor(tempValues.length / 2)];

  const [pickerValue, setPickerValue] = useState({
    tempValues: initialValue,
  });

  // Call the onChange callback with the selected value and unit
  useEffect(() => {
    if (onChange) {
      const valueWithUnit = `${pickerValue.tempValues} °${unit}`;
      onChange(valueWithUnit);
    }
  }, [pickerValue.tempValues, unit, onChange]);

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
            className={`transition-all duration-200 ${
              pickerValue.tempValues === option
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