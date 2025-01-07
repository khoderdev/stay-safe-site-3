// import React, { useState, useMemo } from 'react';
// import Picker from 'react-mobile-picker';

// interface TemperatureWheelProps {
//   min?: number;
//   max?: number;
//   step?: number;
//   defaultValue?: string;
//   className?: string; 
// }

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   min = 35.1,
//   max = 40.1,
//   step = 0.1,
//   defaultValue = '37.0',
//   className = '', // Default to empty string
// }) => {
//   // Generate temperature values dynamically
//   const tempValues = useMemo(() => {
//     const values: string[] = [];
//     for (let i = min; i <= max; i += step) {
//       values.push(i.toFixed(1)); // Ensure 1 decimal place
//     }
//     return values;
//   }, [min, max, step]);

//   // Ensure the default value is within the range
//   const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

//   const [pickerValue, setPickerValue] = useState({
//     tempValues: initialValue,
//   });

//   return (
//     <Picker
//       value={pickerValue}
//       onChange={setPickerValue}
//       wheelMode="natural"
//       aria-label="Temperature Picker"
//       className={className}
//     >
//       <Picker.Column key="tempValues" name="tempValues">
//         {tempValues.map((option) => (
//           <Picker.Item key={option} value={option} aria-label={`Temperature ${option}`}>
//             {option}
//           </Picker.Item>
//         ))}
//       </Picker.Column>
//     </Picker>
//   );
// };

// export default TemperatureWheel;


import React, { useState, useMemo } from 'react';
import Picker from 'react-mobile-picker';

interface TemperatureWheelProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string;
  className?: string;
}

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  min = 35.1,
  max = 40.1,
  step = 0.1,
  defaultValue = '37.0',
  className = '',
}) => {
  // Generate temperature values dynamically
  const tempValues = useMemo(() => {
    const values: string[] = [];
    for (let i = min; i <= max; i += step) {
      values.push(i.toFixed(1)); // Ensure 1 decimal place
    }
    return values;
  }, [min, max, step]);

  // Ensure the default value is within the range
  const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

  const [pickerValue, setPickerValue] = useState({
    tempValues: initialValue,
  });

  return (
    <Picker
      value={pickerValue}
      onChange={setPickerValue}
      wheelMode="natural"
      aria-label="Temperature Picker"
      className={className}
    >
      <Picker.Column key="tempValues" name="tempValues">
        {tempValues.map((option) => (
          <Picker.Item
            key={option}
            value={option}
            aria-label={`Temperature ${option}`}
            className={`transition-all duration-200 ${pickerValue.tempValues === option
              ? 'text-[#fff] scale-110 transition-all duration-75'
              : 'text-gray-400'
              }`}
          >
            {option}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};

export default TemperatureWheel;