// // import React from 'react';
// // import { inputStyles } from '../../../utils/styles';

// // const InputField = ({
// // 	label,
// // 	name,
// // 	value = '',
// // 	onChange,
// // 	type = 'text',
// // 	placeholder = '',
// // 	min = 0,
// // 	max,
// // 	className = '',
// // 	step= 0.1,
// // 	textarea = false,
// // }) => {
// // 	const handleChange = (e) => {
// // 		const newValue = e.target.value;

// // 		// Allow only valid numeric values for number inputs
// // 		if (type === 'number' && /^\d*$/.test(newValue)) {
// // 			const numericValue = Number(newValue);

// // 			if (
// // 				(newValue === '' || numericValue >= min) &&
// // 				(max === undefined || numericValue <= max)
// // 			) {
// // 				onChange(e);
// // 			}
// // 		} else if (type !== 'number') {
// // 			onChange(e);
// // 		}
// // 	};

// // 	const inputClasses = `${inputStyles()} !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black ${className}`;

// // 	return (
// // 		<div className='input-field'>
// // 			{label && (
// // 				<label
// // 					htmlFor={name}
// // 					className='block mb-2 text-sm !text-black dark:!text-white-bg'
// // 				>
// // 					{label}
// // 				</label>
// // 			)}
// // 			{textarea ? (
// // 				<textarea
// // 					id={name}
// // 					name={name}
// // 					value={value}
// // 					autoComplete='off'
// // 					placeholder={placeholder}
// // 					onChange={handleChange}
// // 					className={inputClasses}
// // 				/>
// // 			) : (
// // 				<input
// // 					id={name}
// // 					name={name}
// // 					type={type}
// // 					value={value}
// // 					autoComplete='off'
// // 					placeholder={placeholder}
// // 					onChange={handleChange}
// // 					min={type === 'number' ? min : undefined}
// // 					max={type === 'number' ? max : undefined}
// // 					className={inputClasses}
// // 				/>
// // 			)}
// // 		</div>
// // 	);
// // };

// // export default InputField;

// import React from 'react';
// import { inputStyles } from '../../../utils/styles';

// const InputField = ({
// 	label,
// 	name,
// 	value = '',
// 	onChange,
// 	type = 'text',
// 	placeholder = '',
// 	min = 0,
// 	max = Infinity, // Default to Infinity if max is not provided
// 	className = '',
// 	step = 1, // Default step value
// 	textarea = false,
// }) => {
// 	const handleChange = (e) => {
// 		const newValue = e.target.value;

// 		// Allow only valid numeric values for number inputs
// 		if (type === 'number') {
// 			const numericValue = parseFloat(newValue);

// 			// Check if the value is within the min and max range
// 			if (
// 				(newValue === '' || !isNaN(numericValue)) &&
// 				numericValue >= min &&
// 				numericValue <= max
// 			) {
// 				onChange(e);
// 			}
// 		} else if (type !== 'number') {
// 			onChange(e);
// 		}
// 	};

// 	const inputClasses = `${inputStyles()} !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black ${className}`;

// 	return (
// 		<div className='input-field'>
// 			{label && (
// 				<label
// 					htmlFor={name}
// 					className='block mb-2 text-sm !text-black dark:!text-white-bg'
// 				>
// 					{label}
// 				</label>
// 			)}
// 			{textarea ? (
// 				<textarea
// 					id={name}
// 					name={name}
// 					value={value}
// 					autoComplete='off'
// 					placeholder={placeholder}
// 					onChange={handleChange}
// 					className={inputClasses}
// 				/>
// 			) : (
// 				<input
// 					id={name}
// 					name={name}
// 					type={type}
// 					value={value}
// 					autoComplete='off'
// 					placeholder={placeholder}
// 					onChange={handleChange}
// 					min={type === 'number' ? min : undefined}
// 					max={type === 'number' ? max : undefined}
// 					step={type === 'number' ? step : undefined}
// 					className={inputClasses}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default InputField;



import React from 'react';
import { inputStyles } from '../../../utils/styles';

const InputField = ({
  label,
  name,
  value = '',
  onChange,
  type = 'text',
  placeholder = '',
  min = 0,
  max = Infinity, // Default to Infinity if max is not provided
  className = '',
  step = 1, // Default step value
  textarea = false,
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;

    // Allow only valid numeric values for number inputs
    if (type === 'number') {
      const numericValue = parseFloat(newValue);

      // Check if the value is within the min and max range
      if (
        (newValue === '' || !isNaN(numericValue)) &&
        numericValue >= min &&
        numericValue <= max
      ) {
        onChange(e);
      }
    } else {
      // For non-number inputs, pass the value directly
      onChange(e);
    }
  };

  const inputClasses = `${inputStyles()} !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black ${className}`;

  return (
    <div className='input-field'>
      {label && (
        <label
          htmlFor={name}
          className='block mb-2 text-sm !text-black dark:!text-white-bg'
        >
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          autoComplete='off'
          placeholder={placeholder}
          onChange={handleChange}
          className={inputClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          autoComplete='off'
          placeholder={placeholder}
          onChange={handleChange}
          min={type === 'number' ? min : undefined} // Only apply min for number inputs
          max={type === 'number' ? max : undefined} // Only apply max for number inputs
          step={type === 'number' ? step : undefined} // Only apply step for number inputs
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputField;