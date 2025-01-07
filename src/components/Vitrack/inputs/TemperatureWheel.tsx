// import React from 'react'
// import { useState } from 'react'
// import Picker from 'react-mobile-picker'

// const selections = {
//   tempValues: [
//     '35.1', '35.2', '35.3', '35.4', '35.5', '35.6', '35.7', '35.8', '35.9', '36.0',
//     '36.1', '36.2', '36.3', '36.4', '36.5', '36.6', '36.7', '36.8', '36.9', '37.0',
//     '37.1', '37.2', '37.3', '37.4', '37.5', '37.6', '37.7', '37.8', '37.9', '38.0',
//     '38.1', '38.2', '38.3', '38.4', '38.5', '38.6', '38.7', '38.8', '38.9', '39.0',
//     '39.1', '39.2', '39.3', '39.4', '39.5', '39.6', '39.7', '39.8', '39.9', '40.0',
//     '40.1'
//   ],
// }

// function TemperatureWheel() {
//   const [pickerValue, setPickerValue] = useState({
//     tempValues: '37.0'
//   })

//   return (
//     <Picker value={pickerValue} onChange={setPickerValue} wheelMode="natural">
//       {Object.keys(selections).map(name => (
//         <Picker.Column key={name} name={name}>
//           {selections[name].map(option => (
//             <Picker.Item key={option} value={option}>
//               {option}
//             </Picker.Item>
//           ))}
//         </Picker.Column>
//       ))}
//     </Picker>
//   )
// }
// export default TemperatureWheel

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
  className = '', // Default to empty string
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
          <Picker.Item key={option} value={option} aria-label={`Temperature ${option}`}>
            {option}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};

export default TemperatureWheel;