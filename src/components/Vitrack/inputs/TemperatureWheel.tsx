// // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // import Picker from 'react-mobile-picker';

// // // // interface TemperatureWheelProps {
// // // //   min?: number;
// // // //   max?: number;
// // // //   step?: number;
// // // //   defaultValue?: string;
// // // //   className?: string;
// // // //   onChange?: (value: string) => void;
// // // //   formatValue?: (value: string) => string;
// // // // }

// // // // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// // // //   min = 35.0,
// // // //   max = 39.0,
// // // //   step = 0.1,
// // // //   defaultValue = '37.0',
// // // //   className = '',
// // // //   onChange,
// // // //   formatValue,
// // // // }) => {
// // // //   // Generate temperature values dynamically
// // // //   const tempValues = useMemo(() => {
// // // //     const values: string[] = [];
// // // //     for (let i = min; i <= max; i += step) {
// // // //       values.push(i.toFixed(1)); // Ensure 1 decimal place
// // // //     }
// // // //     // Explicitly include 39.0 if it's not already included due to floating-point precision
// // // //     if (!values.includes('39.0')) {
// // // //       values.push('39.0');
// // // //     }
// // // //     return values;
// // // //   }, [min, max, step]);

// // // //   // Ensure the default value is within the range
// // // //   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

// // // //   const [pickerValue, setPickerValue] = useState({
// // // //     tempValues: initialValue,
// // // //   });

// // // //   // Call onChange when the picker value changes
// // // //   useEffect(() => {
// // // //     if (onChange) {
// // // //       onChange(pickerValue.tempValues);
// // // //     }
// // // //   }, [pickerValue.tempValues, onChange]);

// // // //   return (
// // // //     <Picker
// // // //       value={pickerValue}
// // // //       onChange={setPickerValue}
// // // //       wheelMode="normal"
// // // //       aria-label="Temperature Picker"
// // // //       className={`${className} w-full`}
// // // //     >
// // // //       <Picker.Column key="tempValues" name="tempValues">
// // // //         {tempValues.map((option) => (
// // // //           <Picker.Item
// // // //             key={option}
// // // //             value={option}
// // // //             aria-label={`Temperature ${option}`}
// // // //             className={`transition-all duration-200 ${pickerValue.tempValues === option
// // // //               ? 'text-black dark:text-[#fff] scale-110 font-bold'
// // // //               : 'text-gray-400 dark:text-gray-400'
// // // //               }`}
// // // //           >
// // // //             {formatValue ? formatValue(option) : option}
// // // //           </Picker.Item>
// // // //         ))}
// // // //       </Picker.Column>
// // // //     </Picker>
// // // //   );
// // // // };

// // // // export default TemperatureWheel;

// // // import React, { useState, useMemo, useEffect } from 'react';
// // // import Picker from 'react-mobile-picker';

// // // interface TemperatureWheelProps {
// // //   min?: number;
// // //   max?: number;
// // //   step?: number;
// // //   defaultValue?: string;
// // //   className?: string;
// // //   onChange?: (value: string) => void;
// // //   formatValue?: (value: string) => string;
// // //   unit?: 'C' | 'F'; // New prop to handle unit
// // // }

// // // const celsiusToFahrenheit = (celsius: number): number => (celsius * 9 / 5) + 32;
// // // const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;

// // // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// // //   min = 35.0,
// // //   max = 39.0,
// // //   step = 0.1,
// // //   defaultValue = '37.0',
// // //   className = '',
// // //   onChange,
// // //   formatValue,
// // //   unit = 'C', // Default to Celsius
// // // }) => {
// // //   const tempValues = useMemo(() => {
// // //     const values: string[] = [];
// // //     for (let i = min; i <= max; i += step) {
// // //       const value = unit === 'C' ? i.toFixed(1) : celsiusToFahrenheit(i).toFixed(1);
// // //       values.push(value);
// // //     }
// // //     if (!values.includes(unit === 'C' ? '39.0' : celsiusToFahrenheit(39).toFixed(1))) {
// // //       values.push(unit === 'C' ? '39.0' : celsiusToFahrenheit(39).toFixed(1));
// // //     }
// // //     return values;
// // //   }, [min, max, step, unit]);

// // //   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

// // //   const [pickerValue, setPickerValue] = useState({
// // //     tempValues: initialValue,
// // //   });

// // //   useEffect(() => {
// // //     if (onChange) {
// // //       onChange(pickerValue.tempValues);
// // //     }
// // //   }, [pickerValue.tempValues, onChange]);

// // //   return (
// // //     <Picker
// // //       value={pickerValue}
// // //       onChange={setPickerValue}
// // //       wheelMode="normal"
// // //       aria-label="Temperature Picker"
// // //       className={`${className} w-full`}
// // //     >
// // //       <Picker.Column key="tempValues" name="tempValues">
// // //         {tempValues.map((option) => (
// // //           <Picker.Item
// // //             key={option}
// // //             value={option}
// // //             aria-label={`Temperature ${option}`}
// // //             className={`transition-all duration-200 ${pickerValue.tempValues === option
// // //               ? 'text-black dark:text-[#fff] scale-110 font-bold'
// // //               : 'text-gray-400 dark:text-gray-400'
// // //               }`}
// // //           >
// // //             {formatValue ? formatValue(option) : `${option}°${unit}`}
// // //           </Picker.Item>
// // //         ))}
// // //       </Picker.Column>
// // //     </Picker>
// // //   );
// // // };

// // // export default TemperatureWheel;


// // import React, { useState, useMemo, useEffect } from 'react';
// // import Picker from 'react-mobile-picker';

// // interface TemperatureWheelProps {
// //   min?: number;
// //   max?: number;
// //   step?: number;
// //   defaultValue?: string;
// //   className?: string;
// //   onChange?: (value: string) => void;
// //   formatValue?: (value: string) => string;
// //   unit?: 'C' | 'F'; // New prop to handle unit
// // }

// // const celsiusToFahrenheit = (celsius: number): number => (celsius * 9 / 5) + 32;
// // const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;

// // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// //   min = 35.0,
// //   max = 39.0,
// //   step = 0.1,
// //   defaultValue = '37.0',
// //   className = '',
// //   onChange,
// //   formatValue,
// //   unit = 'C', // Default to Celsius
// // }) => {
// //   const tempValues = useMemo(() => {
// //     const values: string[] = [];
// //     for (let i = min; i <= max; i += step) {
// //       const value = unit === 'C' ? i.toFixed(1) : celsiusToFahrenheit(i).toFixed(1);
// //       values.push(value);
// //     }
// //     // Ensure the max value is included
// //     if (!values.includes(unit === 'C' ? max.toFixed(1) : celsiusToFahrenheit(max).toFixed(1))) {
// //       values.push(unit === 'C' ? max.toFixed(1) : celsiusToFahrenheit(max).toFixed(1));
// //     }
// //     return values;
// //   }, [min, max, step, unit]);

// //   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

// //   const [pickerValue, setPickerValue] = useState({
// //     tempValues: initialValue,
// //   });

// //   useEffect(() => {
// //     if (onChange) {
// //       onChange(pickerValue.tempValues);
// //     }
// //   }, [pickerValue.tempValues, onChange]);

// //   return (
// //     <Picker
// //       value={pickerValue}
// //       onChange={setPickerValue}
// //       wheelMode="normal"
// //       aria-label="Temperature Picker"
// //       className={`${className} w-full`}
// //     >
// //       <Picker.Column key="tempValues" name="tempValues">
// //         {tempValues.map((option) => (
// //           <Picker.Item
// //             key={option}
// //             value={option}
// //             aria-label={`Temperature ${option}`}
// //             className={`transition-all duration-200 ${pickerValue.tempValues === option
// //               ? 'text-black dark:text-[#fff] scale-110 font-bold'
// //               : 'text-gray-400 dark:text-gray-400'
// //               }`}
// //           >
// //             {formatValue ? formatValue(option) : `${option}°${unit}`}
// //           </Picker.Item>
// //         ))}
// //       </Picker.Column>
// //     </Picker>
// //   );
// // };

// // export default TemperatureWheel;


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
//   unit?: 'C' | 'F'; // New prop to handle unit
// }

// const celsiusToFahrenheitMapping: { [key: string]: string } = {
//   '35.0': '95.0',
//   '35.1': '95.2',
//   '35.2': '95.4',
//   '35.3': '95.5',
//   '35.4': '95.7',
//   '35.5': '95.9',
//   '35.6': '96.1',
//   '35.7': '96.3',
//   '35.8': '96.4',
//   '35.9': '96.6',
//   '36.0': '96.8',
//   '36.1': '97.0',
//   '36.2': '97.2',
//   '36.3': '97.3',
//   '36.4': '97.5',
//   '36.5': '97.7',
//   '36.6': '97.9',
//   '36.7': '98.1',
//   '36.8': '98.2',
//   '36.9': '98.4',
//   '37.0': '98.6',
//   '37.1': '98.8',
//   '37.2': '99.0',
//   '37.3': '99.1',
//   '37.4': '99.3',
//   '37.5': '99.5',
//   '37.6': '99.7',
//   '37.7': '99.9',
//   '37.8': '100.0',
//   '37.9': '100.2',
//   '38.0': '100.4',
//   '38.1': '100.6',
//   '38.2': '100.8',
//   '38.3': '100.9',
//   '38.4': '101.1',
//   '38.5': '101.3',
//   '38.6': '101.5',
//   '38.7': '101.7',
//   '38.8': '101.8',
//   '38.9': '102.0',
//   '39.0': '102.2',
//   '40.0': '104.0',
// };

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   min = 35.0,
//   max = 39.0,
//   step = 0.1,
//   defaultValue = '',
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
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
  formatValue?: (value: string) => string;
  unit?: 'C' | 'F'; // New prop to handle unit
}



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