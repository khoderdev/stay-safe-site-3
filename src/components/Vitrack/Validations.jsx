import { useState } from 'react';

// Validation function that checks for form data and generates warnings
const validateForm = (formData) => {
	const warnings = {}; // To store warning messages dynamically

	// Validation for text fields (e.g., first name, last name, etc.)
	const textFields = [
		'firstName',
		'lastName',
		'address',
		'specificAllergiesMed',
		'specificNutritionAllergie',
	];
	textFields.forEach((field) => {
		if (!formData[field] || formData[field].trim() === '') {
			warnings[field] = `${field} is required.`;
		}
	});

	// Validation for numeric fields (e.g., systolic, diastolic, etc.)
	const numberFields = [
		'temperature',
		'heartRate',
		'respiratoryRate',
		'leftHandBloodPressure.systolic',
		'leftHandBloodPressure.diastolic',
		'rightHandBloodPressure.systolic',
		'rightHandBloodPressure.diastolic',
	];
	numberFields.forEach((field) => {
		const value = formData[field];
		if (!value || isNaN(value) || value < 0) {
			warnings[field] = `${field} must be a positive number.`;
		}
	});

	// Validation for oxygen saturation fields (must be between 0 and 100)
	const oxygenFields = ['leftHandOxygen', 'rightHandOxygen'];
	oxygenFields.forEach((field) => {
		const value = formData[field];
		if (value < 0 || value > 100) {
			warnings[field] = `${field} must be between 0 and 100.`;
		}
	});

	return warnings; // Return all collected warnings
};

// The Validation component
const Validations = ({ formData, children }) => {
	const [formWarnings, setFormWarnings] = useState({});

	// Handle form validation
	const handleValidation = () => {
		const validationWarnings = validateForm(formData);
		setFormWarnings(validationWarnings);
		return validationWarnings;
	};

	return (
		<>
			{/* Passing down handleValidation to child components */}
			{children(handleValidation, formWarnings)}
		</>
	);
};

export default Validations;
