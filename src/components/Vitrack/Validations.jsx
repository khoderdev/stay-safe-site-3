// // Validation function that checks for form data and generates warnings
// const validateForm = (formData) => {
// 	const errors = {};

// 	// First and Last Name Validation
// 	if (!formData.firstName) {
// 		errors.firstName = 'First name is required';
// 	}

// 	if (!formData.lastName) {
// 		errors.lastName = 'Last name is required';
// 	}

// 	// Date of Birth Validation (ensure it's a valid date)
// 	if (
// 		!formData.dateOfBirth ||
// 		new Date(formData.dateOfBirth).toString() === 'Invalid Date'
// 	) {
// 		errors.dateOfBirth = 'Date of Birth is required and must be a valid date';
// 	}

// 	// Gender Validation
// 	if (!formData.gender) {
// 		errors.gender = 'Gender is required';
// 	}

// 	// Nationality Validation
// 	if (!formData.nationality) {
// 		errors.nationality = 'Nationality is required';
// 	}

// 	// Country Validation
// 	if (!formData.country) {
// 		errors.country = 'Country is required';
// 	}

// 	// Health Condition Validation
// 	if (!formData.healthCondition) {
// 		errors.healthCondition = 'Health Condition is required';
// 	}

// 	// Other Health Condition Validation (if applicable)
// 	if (formData.healthCondition === 'Others' && !formData.otherHealthCondition) {
// 		errors.otherHealthCondition = 'Please specify your health condition';
// 	}

// 	// Blood Pressure Validation (ensure values are not empty and numbers)
// 	const validateBloodPressure = (field) => {
// 		if (!formData[field]?.systolic || isNaN(formData[field]?.systolic)) {
// 			errors[
// 				`${field}.systolic`
// 			] = `${field} Systolic is required and must be a number`;
// 		}
// 		if (!formData[field]?.diastolic || isNaN(formData[field]?.diastolic)) {
// 			errors[
// 				`${field}.diastolic`
// 			] = `${field} Diastolic is required and must be a number`;
// 		}
// 	};

// 	validateBloodPressure('leftHandBloodPressure');
// 	validateBloodPressure('rightHandBloodPressure');

// 	// Oxygen Saturation Validation
// 	const validateOxygen = (field) => {
// 		if (
// 			formData[field] &&
// 			(isNaN(formData[field]) || formData[field] < 0 || formData[field] > 100)
// 		) {
// 			errors[field] = `${field} must be a number between 0 and 100`;
// 		}
// 	};

// 	validateOxygen('leftHandOxygen');
// 	validateOxygen('rightHandOxygen');

// 	// Heart Rate Validation
// 	if (
// 		formData.heartRate &&
// 		(isNaN(formData.heartRate) || formData.heartRate < 0)
// 	) {
// 		errors.heartRate = 'Heart Rate must be a valid number';
// 	}

// 	// Respiratory Rate Validation
// 	if (
// 		formData.respiratoryRate &&
// 		(isNaN(formData.respiratoryRate) || formData.respiratoryRate < 0)
// 	) {
// 		errors.respiratoryRate = 'Respiratory Rate must be a valid number';
// 	}

// 	// Symptoms Validation (Optional but can be required based on the context)
// 	if (formData.symptoms.length === 0) {
// 		errors.symptoms = 'Please select at least one symptom';
// 	}

// 	return errors;
// };

// export default validateForm;
const validateField = (name, value) => {
	switch (name) {
		case 'firstName':
		case 'lastName':
			return value.trim() === '' ? 'This field is required' : '';
		case 'dateOfBirth':
			return value && new Date(value) < new Date('1900-01-01')
				? 'Invalid date of birth'
				: '';
		case 'healthCondition':
			return value === '' ? 'Please select a health condition' : '';
		case 'temperature':
			return value && (isNaN(value) || value < 30 || value > 42)
				? 'Temperature must be between 30°C and 42°C'
				: '';
		case 'heartRate':
			return value && (isNaN(value) || value < 40 || value > 200)
				? 'Heart rate must be between 40 bpm and 200 bpm'
				: '';
		case 'respiratoryRate':
			return value && (isNaN(value) || value < 10 || value > 40)
				? 'Respiratory rate must be between 10 and 40 breaths/min'
				: '';
		case 'painScale':
			return value && (value < 0 || value > 10)
				? 'Pain scale must be between 0 and 10'
				: '';
		default:
			return '';
	}
};
export default validateField;
