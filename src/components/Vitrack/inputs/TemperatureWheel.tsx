import React, { useState, useMemo, useEffect } from 'react';
import Picker from 'react-mobile-picker';

interface TemperatureWheelProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void; // Add onChange prop
  formatValue?: (value: string) => string; // Add formatValue prop
}

const TemperatureWheel: React.FC<TemperatureWheelProps> = ({
  min = 35.0, // Updated min to 35.0 to include 35.0 and below
  max = 39.0, // Set max to 39.0
  step = 0.1,
  defaultValue = '37.0',
  className = '',
  onChange, // Destructure onChange prop
  formatValue, // Destructure formatValue prop
}) => {
  // Generate temperature values dynamically
  const tempValues = useMemo(() => {
    const values: string[] = [];
    for (let i = min; i <= max; i += step) {
      values.push(i.toFixed(1)); // Ensure 1 decimal place
    }
    // Explicitly include 39.0 if it's not already included due to floating-point precision
    if (!values.includes('39.0')) {
      values.push('39.0');
    }
    return values;
  }, [min, max, step]);

  // Ensure the default value is within the range
  const initialValue = tempValues.includes(defaultValue) ? defaultValue : tempValues[Math.floor(tempValues.length / 2)];

  const [pickerValue, setPickerValue] = useState({
    tempValues: initialValue,
  });

  // Call onChange when the picker value changes
  useEffect(() => {
    if (onChange) {
      onChange(pickerValue.tempValues);
    }
  }, [pickerValue.tempValues, onChange]);

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
                ? 'text-black dark:text-[#fff] scale-110 transition-all duration-75'
                : 'text-gray-400'
              }`}
          >
            {formatValue ? formatValue(option) : option} {/* Apply formatValue if provided */}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};

export default TemperatureWheel;