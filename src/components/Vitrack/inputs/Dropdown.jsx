import React, { useState, useEffect, useRef } from 'react';
import { inputStyles } from '../../../utils/styles';
import { FaTimes } from 'react-icons/fa'; // Import X icon from react-icons

const Dropdown = ({ label, name, value, onChange, options, className }) => {
	const [filteredOptions, setFilteredOptions] = useState(options);
	const [showDropdown, setShowDropdown] = useState(false);
	const [inputValue, setInputValue] = useState(value || '');
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
	const dropdownRef = useRef(null);

	// Synchronize internal input value with the external value prop
	useEffect(() => {
		setInputValue(value || '');
	}, [value]);

	// Filter options based on input value
	useEffect(() => {
		const filtered = options.filter((option) =>
			option.toLowerCase().startsWith(inputValue.toLowerCase())
		);
		setFilteredOptions(filtered);
		setHighlightedIndex(-1);
	}, [inputValue, options]);

	// Handle input changes
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		setShowDropdown(true);
	};

	// Handle option selection
	const handleOptionClick = (option) => {
		setInputValue(option);
		setShowDropdown(false);
		onChange({ target: { name, value: option } });
	};

	// Handle keyboard navigation
	const handleKeyDown = (e) => {
		if (e.key === 'ArrowDown') {
			setHighlightedIndex((prevIndex) =>
				prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
			);
		} else if (e.key === 'ArrowUp') {
			setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
		} else if (e.key === 'Enter') {
			if (highlightedIndex >= 0) {
				handleOptionClick(filteredOptions[highlightedIndex]);
			}
		} else if (e.key === 'Escape') {
			setShowDropdown(false);
		}
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Handle clearing the input value
	const handleClear = () => {
		setInputValue('');
		onChange({ target: { name, value: '' } }); // Clear the value in parent component
	};

	return (
		<div ref={dropdownRef} className={`relative ${className}`}>
			<label className='block mb-2 text-sm !text-black dark:!text-white-bg'>
				{label}
			</label>
			<div className='relative'>
				<input
					type='text'
					name={name}
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder={`Select ${label}`}
					className={`${inputStyles()} !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black`}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					onFocus={() => setShowDropdown(true)}
				/>

				{/* Clear button (X icon) */}
				{inputValue && (
					<button
						type='button'
						onClick={handleClear}
						className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-white'
					>
						<FaTimes size={16} />
					</button>
				)}
			</div>

			{/* Dropdown Menu */}
			{showDropdown && filteredOptions.length > 0 && (
				<ul className='absolute z-10 dark:!text-white-bg bg-white-bg dark:bg-black w-full max-h-52 overflow-y-auto shadow-md mt-[1px] rounded'>
					{filteredOptions.map((option, index) => (
						<li
							key={option}
							onClick={() => handleOptionClick(option)}
							className={`px-4 py-2 cursor-pointer transition-all ${
								highlightedIndex === index ? 'bg-blue-500 text-white' : ''
							}`}
							onMouseEnter={() => setHighlightedIndex(index)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
