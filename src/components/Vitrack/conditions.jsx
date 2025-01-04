export const getWarnings = (formData) => {
	const {
		temperature,
		systolicBP,
		diastolicBP,
		heartRate,
		respiratoryRate,
		spO2,
		symptoms = [],
	} = formData;

	const symptomList = new Set(symptoms);
	const messages = [];

	// Utility to check if a value exists
	const hasValue = (value) =>
		value !== null && value !== undefined && value !== '';

	// Utility to add messages with optional color
	const addMessage = (text, color = null) => messages.push({ text, color });

	// Utility to check if any severe symptoms are present
	const hasSevereSymptoms = (symptomsArray) =>
		symptomsArray.some((symptom) => symptomList.has(symptom));

	// Common symptom sets for various checks
	const severeTempSymptoms = [
		'Severe headache',
		'Rash',
		'Unusual sensitivity to bright light',
		'Stiff neck',
		'Mental confusion',
		'Persistent vomiting',
		'Difficulty breathing',
		'Abdominal pain',
		'Pain when urinating',
		'Convulsions or seizures',
	];

	const lowBPSevereSymptoms = [
		'Confusion',
		'Cold, clammy skin',
		'Decrease in skin color (pallor)',
		'Rapid, shallow breathing',
		'Weak and rapid pulse',
		'Fainting',
		'Chest pain',
		'Blue tint to lips or fingernails',
		'Feeling cold',
		'Being sweaty',
		'Breathing fast',
		'Pass out or faint',
		'Fall because of lightheadedness and hit your head',
	];

	const elevatedBPSymptoms = [
		'Shortness of breath',
		'Headache',
		'Chest pain',
		'Blurry vision',
		'Heart palpitations',
		'Anxiety',
		'Dizziness',
		'Nosebleed',
		'Vomiting',
	];

	// Function to handle temperature warnings
	const handleTemperature = (temperature) => {
		const temp = parseFloat(temperature);

		if (temp < 35) {
			addMessage(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else if (temp >= 35.1 && temp <= 35.9) {
			addMessage('Get evaluated. Call your healthcare provider.');
		} else if (temp >= 36 && temp <= 37) {
			addMessage('Your body temperature is normal.', 'green');
		} else if (temp >= 37.1 && temp <= 38.9) {
			addMessage(
				'Get evaluated by your healthcare provider. Keep monitoring your vitals at home.'
			);
		} else if (temp >= 39) {
			if (hasSevereSymptoms(severeTempSymptoms)) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			} else {
				addMessage('Get evaluated. Call your healthcare provider right away.');
			}
		}
	};

	// Function to handle blood pressure warnings
	const handleBloodPressure = (systolicBP, diastolicBP) => {
		const systolic = parseFloat(systolicBP);
		const diastolic = parseFloat(diastolicBP);

		if (systolic < 90 || diastolic < 60) {
			if (
				hasSevereSymptoms(lowBPSevereSymptoms) ||
				heartRate > 100 ||
				heartRate < 60
			) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			} else {
				addMessage(
					'Get Immediate Medical Attention. Inform your healthcare provider and keep monitoring your BP.'
				);
			}
		} else if (
			systolic >= 90 &&
			systolic <= 119 &&
			diastolic >= 60 &&
			diastolic <= 79
		) {
			addMessage('Normal Blood Pressure. Keep monitoring your BP at home.');
		} else if (systolic >= 120 && systolic <= 121 && diastolic < 80) {
			addMessage(
				'Get evaluated. Inform your healthcare provider and keep monitoring your BP.'
			);
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			}
		} else if (
			systolic >= 130 &&
			systolic <= 139 &&
			diastolic >= 80 &&
			diastolic <= 89
		) {
			addMessage('Get evaluated. Call your healthcare provider right away.');
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			}
		} else if (
			systolic >= 140 &&
			systolic <= 180 &&
			diastolic >= 90 &&
			diastolic <= 120
		) {
			addMessage('Get evaluated. Call your healthcare provider right away.');
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			}
		} else if (systolic > 180 || diastolic > 120) {
			addMessage(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
				);
			}
		}
	};

	// Execute validation checks
	if (hasValue(temperature)) handleTemperature(temperature);
	if (hasValue(systolicBP) && hasValue(diastolicBP))
		handleBloodPressure(systolicBP, diastolicBP);

	// Return the warnings
	return messages;
};
