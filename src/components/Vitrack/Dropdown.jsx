import React, { useState, useEffect, useRef } from 'react';
import { inputStyles } from '../../utils/styles'; // Assuming you have a utility for input styles

const Dropdown = ({ label, name, value, onChange, options }) => {
	const [filteredOptions, setFilteredOptions] = useState(options);
	const [showDropdown, setShowDropdown] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
	const dropdownRef = useRef(null);

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

	return (
		<div ref={dropdownRef} className='relative'>
			<label className='block text-sm'>{label}</label>
			<input
				type='text'
				name={name}
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder={`Select ${label}`}
				className={inputStyles()}
				autoComplete='off'
				onFocus={() => setShowDropdown(true)}
			/>

			{/* Dropdown Menu */}
			{showDropdown && filteredOptions.length > 0 && (
				<ul className='absolute z-10 bg-white-bg dark:bg-black border border-gray-300 w-full max-h-52 overflow-y-auto shadow-md cursor'>
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
