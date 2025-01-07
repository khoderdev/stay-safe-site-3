// // // // import React from 'react';
// // // // import InputField from '../inputs/InputField';

// // // // interface TemperatureWheelProps {
// // // //   label?: string;
// // // //   min?: number;
// // // //   max?: number;
// // // //   step?: number;
// // // //   value: string; // Ensure value is a string
// // // //   onChange: (value: string) => void; // Ensure onChange is a function that takes a string
// // // // }

// // // // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// // // //   label,
// // // //   min = 35.0,
// // // //   max = 39.0,
// // // //   step = 0.1,
// // // //   value,
// // // //   onChange,
// // // // }) => {
// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const newValue = e.target.value;
// // // //     onChange(newValue); // Pass the new value to the parent component
// // // //   };

// // // //   return (
// // // //     <InputField
// // // //       type="text"
// // // //       label={label}
// // // //       min={min}
// // // //       max={max}
// // // //       step={step}
// // // //       value={value}
// // // //       onChange={handleChange}
// // // //       aria-label="Temperature Input"
// // // //       className="w-full" name={undefined}    />
// // // //   );
// // // // };

// // // // export default TemperatureWheel;


// // // import React, { useState } from 'react';
// // // import InputField from '../inputs/InputField';

// // // interface TemperatureWheelProps {
// // //   label?: string;
// // //   value: string;
// // //   onChange: (value: string) => void;
// // // }

// // // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// // //   label,
// // //   value,
// // //   onChange,
// // // }) => {
// // //   const [isInvalid, setIsInvalid] = useState(false);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const newValue = e.target.value;
// // //     const numericValue = parseFloat(newValue);

// // //     onChange(newValue);
// // //     setIsInvalid(false);

// // //   };

// // //   return (
// // //     <div>
// // //       <InputField
// // //         type="number"
// // //         label={label}
// // //         value={value}
// // //         onChange={handleChange}
// // //         aria-label="Temperature Input"
// // //         className={`w-full ${isInvalid ? 'border-red-500' : ''}`}
// // //         name={undefined}
// // //       />

// // //     </div>
// // //   );
// // // };

// // // export default TemperatureWheel;


// // import React, { useState } from 'react';
// // import InputField from '../inputs/InputField';

// // interface TemperatureWheelProps {
// //   label?: string;
// //   value: string;
// //   onChange: (value: string) => void;
// // }

// // const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
// //   label,
// //   value,
// //   onChange,
// // }) => {
// //   const [isInvalid, setIsInvalid] = useState(false);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const newValue = e.target.value;
// //     const numericValue = parseFloat(newValue);

// //     // Check if the value is within the allowed range
// //     if (numericValue >= 35 && numericValue <= 39) {
// //       onChange(newValue);
// //       setIsInvalid(false);
// //     } else {
// //       setIsInvalid(true);
// //     }
// //   };

// //   return (
// //     <div>
// //       <InputField
// //         type="number"
// //         label={label}
// //         value={value}
// //         onChange={handleChange}
// //         aria-label="Temperature Input"
// //         className={`w-full ${isInvalid ? 'border-red-500' : ''}`}
// //         name={undefined}
// //         min={35}
// //         max={39}
// //         step={0.1}
// //       />
// //       {isInvalid && (
// //         <p className="text-red-500 text-sm mt-1">
// //           Temperature must be between 35 and 39.
// //         </p>
// //       )}
// //     </div>
// //   );
// // };

// // export default TemperatureWheel;


// import React, { useState } from 'react';
// import InputField from '../inputs/InputField';

// interface TemperatureWheelProps {
//   label?: string;
//   value: string;
//   onChange: (value: string) => void;
// }

// const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
//   label,
//   value,
//   onChange,
// }) => {
//   const [isInvalid, setIsInvalid] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     const numericValue = parseFloat(newValue);

//     // Check if the value is within the allowed range
//     if (numericValue >= 35 && numericValue <= 39) {
//       onChange(newValue);
//       setIsInvalid(false);
//     } else {
//       setIsInvalid(true);
//     }
//   };

//   return (
//     <div>
//       <InputField
//         type="number"
//         label={label}
//         value={value}
//         onChange={handleChange}
//         aria-label="Temperature Input"
//         className={`w-full ${isInvalid ? 'border-red-500' : ''}`}
//         name={undefined}
//         min={35}
//         max={39}
//         step={0.1}
//       />
//       {isInvalid && (
//         <p className="text-red-500 text-sm mt-1">
//           Temperature must be between 35 and 39.
//         </p>
//       )}
//     </div>
//   );
// };

// export default TemperatureWheel;


import React, { useState } from 'react';
import InputField from '../inputs/InputField';

interface TemperatureWheelProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow input that starts with '3' and optionally includes a decimal and one digit after it
    if (/^3(\d{0,1}(\.\d{0,1})?)?$/.test(inputValue)) {
      const numericValue = parseFloat(inputValue);

      // Validate if the value is within the allowed range
      if (!isNaN(numericValue) && numericValue >= 35 && numericValue <= 39) {
        setIsInvalid(false);
        onChange(inputValue); // Valid input
      } else if (inputValue === '') {
        setIsInvalid(false);
        onChange(inputValue); // Allow empty input for clearing
      } else {
        setIsInvalid(true); // Out-of-range input
        onChange(inputValue); // Pass raw input for controlled component behavior
      }
    }
  };

  return (
    <div>
      <InputField
        type="text"
        label={label}
        value={value}
        onChange={handleChange}
        aria-label="Temperature Input"
        className={`w-full ${isInvalid ? 'border-red-500' : ''}`}
      />
      {isInvalid && (
        <p className="text-red-500 text-sm mt-1">
          Temperature must start with 3 and be between 35.0 and 39.0.
        </p>
      )}
    </div>
  );
};

export default TemperatureWheel;
