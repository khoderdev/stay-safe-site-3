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
		// case 'heartRate':
		// 	return value && (isNaN(value) || value < 40 || value > 200)
		// 		? 'Heart rate must be between 40 bpm and 200 bpm'
		// 		: '';
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
