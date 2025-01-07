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
	max,
	className = '',
	step= 0.1,
	textarea = false,
}) => {
	const handleChange = (e) => {
		const newValue = e.target.value;

		// Allow only valid numeric values for number inputs
		if (type === 'number' && /^\d*$/.test(newValue)) {
			const numericValue = Number(newValue);

			if (
				(newValue === '' || numericValue >= min) &&
				(max === undefined || numericValue <= max)
			) {
				onChange(e);
			}
		} else if (type !== 'number') {
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
					min={type === 'number' ? min : undefined}
					max={type === 'number' ? max : undefined}
					className={inputClasses}
				/>
			)}
		</div>
	);
};

export default InputField;
