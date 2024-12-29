import React, { useState, useRef, useEffect } from 'react';

const ModernDropdown = ({
  options = [],
  placeholder = 'Select an option',
  value,
  onChange,
  fluid = true,
  search = true,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = search
    ? options.filter(option =>
        option.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    onChange(null, { value: option.value });
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${fluid ? 'w-full' : 'w-64'}`}
      {...props}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 cursor-pointer flex justify-between items-center"
      >
        <span className={`${!selectedOption && 'text-gray-500'}`}>
          {selectedOption ? selectedOption.text : placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
          {search && (
            <div className="p-2 border-b dark:border-gray-600">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full p-1 border border-gray-300 dark:border-gray-600 rounded-sm dark:bg-gray-800 dark:text-white"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <div className="max-h-60 overflow-auto">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  value === option.value ? 'bg-gray-100 dark:bg-gray-600' : ''
                }`}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernDropdown;
