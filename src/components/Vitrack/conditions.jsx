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

	// Constants for temperature thresholds
	const TEMPERATURE_THRESHOLDS = {
		HYPOTHERMIA: 35, // Below 35°C is considered hypothermia
		NORMAL_LOW: 36, // Normal body temperature starts at 36°C
		NORMAL_HIGH: 37, // Normal body temperature ends at 37°C
		FEVER_LOW: 37.1, // Low-grade fever starts at 37.1°C
		FEVER_HIGH: 38.9, // High-grade fever ends at 38.9°C
		HIGH_FEVER: 39, // 39°C and above is considered a high fever
	};

	// Function to handle temperature warnings
	const handleTemperature = (temperature) => {
		const temp = parseFloat(temperature);

		if (isNaN(temp)) {
			addMessage(
				'Invalid temperature reading. Please check your input.',
				'red'
			);
			return;
		}

		if (temp < TEMPERATURE_THRESHOLDS.HYPOTHERMIA) {
			addMessage(
				'Severe Hypothermia: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
				'red'
			);
		} else if (
			temp >= TEMPERATURE_THRESHOLDS.HYPOTHERMIA &&
			temp < TEMPERATURE_THRESHOLDS.NORMAL_LOW
		) {
			addMessage(
				'Mild Hypothermia: Get evaluated. Call your healthcare provider for advice.',
				'orange'
			);
		} else if (
			temp >= TEMPERATURE_THRESHOLDS.NORMAL_LOW &&
			temp <= TEMPERATURE_THRESHOLDS.NORMAL_HIGH
		) {
			addMessage(
				'Normal Body Temperature: Your temperature is within the normal range.',
				'green'
			);
		} else if (
			temp >= TEMPERATURE_THRESHOLDS.FEVER_LOW &&
			temp <= TEMPERATURE_THRESHOLDS.FEVER_HIGH
		) {
			addMessage(
				'Low-Grade Fever: Monitor your symptoms. If you feel unwell, contact your healthcare provider.',
				'yellow'
			);
		} else if (temp >= TEMPERATURE_THRESHOLDS.HIGH_FEVER) {
			if (hasSevereSymptoms(severeTempSymptoms)) {
				addMessage(
					'High Fever with Severe Symptoms: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
					'red'
				);
			} else {
				addMessage(
					'High Fever: Contact your healthcare provider right away for further evaluation.',
					'orange'
				);
			}
		}
	};

	// Constants for blood pressure thresholds
	const BP_THRESHOLDS = {
		LOW_SYSTOLIC: 90,
		LOW_DIASTOLIC: 60,
		NORMAL_SYSTOLIC_LOW: 90,
		NORMAL_SYSTOLIC_HIGH: 119,
		NORMAL_DIASTOLIC_LOW: 60,
		NORMAL_DIASTOLIC_HIGH: 79,
		ELEVATED_SYSTOLIC: 120,
		ELEVATED_DIASTOLIC: 80,
		HIGH_SYSTOLIC: 130,
		HIGH_DIASTOLIC: 80,
		CRISIS_SYSTOLIC: 180,
		CRISIS_DIASTOLIC: 120,
	};

	// Function to handle blood pressure warnings
	const handleBloodPressure = (systolicBP, diastolicBP) => {
		const systolic = parseFloat(systolicBP);
		const diastolic = parseFloat(diastolicBP);

		if (isNaN(systolic) || isNaN(diastolic)) {
			addMessage(
				'Invalid blood pressure reading. Please check your input.',
				'red'
			);
			return;
		}

		if (
			systolic < BP_THRESHOLDS.LOW_SYSTOLIC ||
			diastolic < BP_THRESHOLDS.LOW_DIASTOLIC
		) {
			if (
				hasSevereSymptoms(lowBPSevereSymptoms) ||
				heartRate > 100 ||
				heartRate < 60
			) {
				addMessage(
					'Low Blood Pressure with Severe Symptoms: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
					'red'
				);
			} else {
				addMessage(
					'Low Blood Pressure: Inform your healthcare provider and keep monitoring your BP.',
					'orange'
				);
			}
		} else if (
			systolic >= BP_THRESHOLDS.NORMAL_SYSTOLIC_LOW &&
			systolic <= BP_THRESHOLDS.NORMAL_SYSTOLIC_HIGH &&
			diastolic >= BP_THRESHOLDS.NORMAL_DIASTOLIC_LOW &&
			diastolic <= BP_THRESHOLDS.NORMAL_DIASTOLIC_HIGH
		) {
			addMessage(
				'Normal Blood Pressure. Keep monitoring your BP at home.',
				'green'
			);
		} else if (
			systolic >= BP_THRESHOLDS.ELEVATED_SYSTOLIC &&
			systolic < BP_THRESHOLDS.HIGH_SYSTOLIC &&
			diastolic < BP_THRESHOLDS.ELEVATED_DIASTOLIC
		) {
			addMessage(
				'Elevated Blood Pressure: Inform your healthcare provider and keep monitoring your BP.',
				'yellow'
			);
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'Elevated Blood Pressure with Severe Symptoms: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
					'red'
				);
			}
		} else if (
			systolic >= BP_THRESHOLDS.HIGH_SYSTOLIC &&
			systolic < BP_THRESHOLDS.CRISIS_SYSTOLIC &&
			diastolic >= BP_THRESHOLDS.HIGH_DIASTOLIC &&
			diastolic < BP_THRESHOLDS.CRISIS_DIASTOLIC
		) {
			addMessage(
				'High Blood Pressure: Contact your healthcare provider right away.',
				'orange'
			);
			if (hasSevereSymptoms(elevatedBPSymptoms)) {
				addMessage(
					'High Blood Pressure with Severe Symptoms: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
					'red'
				);
			}
		} else if (
			systolic >= BP_THRESHOLDS.CRISIS_SYSTOLIC ||
			diastolic >= BP_THRESHOLDS.CRISIS_DIASTOLIC
		) {
			addMessage(
				'Hypertensive Crisis: Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
				'red'
			);
		}
	};

	// Execute validation checks
	if (hasValue(temperature)) handleTemperature(temperature);
	if (hasValue(systolicBP) && hasValue(diastolicBP))
		handleBloodPressure(systolicBP, diastolicBP);

	// Return the warnings
	return messages;
};

export const temperatureWarning = (temperature) => {
	if (!temperature || temperature.trim() === '') {
		return {
			color: 'red',
			message: 'Invalid temperature reading. Please check your input.',
		};
	}

	const temp = parseFloat(temperature);

	if (isNaN(temp)) {
		return {
			color: 'red',
			message: 'Invalid temperature reading. Please check your input.',
		};
	}

	if (temp < 35) {
		return {
			color: 'red',
			message: 'Severe Hypothermia: Get Immediate Medical Attention.',
		};
	} else if (temp >= 35 && temp < 36) {
		return {
			color: 'orange',
			message: 'Mild Hypothermia: Get evaluated by your healthcare provider.',
		};
	} else if (temp >= 36 && temp <= 37) {
		return {
			color: 'green',
			message: 'Your temperature is within the normal range.',
		};
	} else if (temp > 37 && temp <= 38.9) {
		return {
			color: 'yellow',
			message:
				'Monitor your symptoms and contact your healthcare provider if needed.',
		};
	} else if (temp >= 39) {
		return {
			color: 'red',
			message: 'Contact your healthcare provider right away.',
		};
	}

	return null;
};
