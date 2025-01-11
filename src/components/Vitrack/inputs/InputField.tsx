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
// 	max,
// 	className = '',
// 	step = 0.1,
// 	textarea = false,
// 	ref,
// }) => {
// 	const handleChange = (e) => {
// 		const newValue = e.target.value;

// 		if (type === 'number') {
// 			// Allow empty string, digits, one decimal point, and minus sign at the start
// 			if (/^-?\d*\.?\d*$/.test(newValue)) {
// 				const numericValue = parseFloat(newValue);
// 				if (
// 					newValue === '' ||
// 					((isNaN(min) || numericValue >= min) &&
// 						(isNaN(max) || numericValue <= max))
// 				) {
// 					onChange(e);
// 				}
// 			}
// 		} else {
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
// 					className={inputClasses}
// 					ref={undefined}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default InputField;

import React, { forwardRef } from 'react';
import { inputStyles } from '../../../utils/styles';

interface InputFieldProps {
	label?: string;
	name: string;
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	type?: string;
	placeholder?: string;
	min?: number;
	max?: number;
	className?: string;
	step?: number;
	textarea?: boolean;
}

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
	(
		{
			label,
			name,
			value = '',
			onChange,
			type = 'text',
			placeholder = '',
			min = 0,
			max= undefined,
			className = '',
			step = 0.1,
			textarea = false,
		},
		ref
	) => {
		const handleChange = (e) => {
			const newValue = e.target.value;

			if (type === 'number') {
				// Allow empty string, digits, one decimal point, and minus sign at the start
				if (/^-?\d*\.?\d*$/.test(newValue)) {
					const numericValue = parseFloat(newValue);
					if (
						newValue === '' ||
						((isNaN(min) || numericValue >= min) &&
							(isNaN(max) || numericValue <= max))
					) {
						onChange(e);
					}
				}
			} else {
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
						ref={ref} // Forward the ref to the input element
					/>
				)}
			</div>
		);
	}
);

export default InputField;
