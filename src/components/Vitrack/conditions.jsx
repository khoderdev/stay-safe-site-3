// Constants for blood pressure thresholds
export const BP_THRESHOLDS = {
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

export const handleBloodPressure = (
	systolicBP,
	diastolicBP,
	addMessage,
	hasSevereSymptoms,
	lowBPSevereSymptoms,
	elevatedBPSymptoms,
	heartRate
) => {
	const systolic = parseFloat(systolicBP);
	const diastolic = parseFloat(diastolicBP);

	if (isNaN(systolic) || isNaN(diastolic)) {
		addMessage(
			'',
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
			'High Blood Pressure: Get Evaluated, Call your healthcare provider right away.',
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

	const hasValue = (value) =>
		value !== null && value !== undefined && value !== '';

	const addMessage = (text, color = null, type = null) =>
		messages.push({ text, color, type });

	const hasSevereSymptoms = (symptomsArray) =>
		symptomsArray.some((symptom) => symptomList.has(symptom));

	const severeTempSymptoms = [
		'Severe headache',
		'Rash',
		'Unusual sensitivity to bright light',
		'Stiff neck and pain when you bend your head forward',
		'Mental confusion, strange behavior or altered speech',
		'Persistent vomiting',
		'Difficulty breathing or chest pain',
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

	const TEMPERATURE_THRESHOLDS = {
		CRITICAL_LOW: 35,
		HYPOTHERMIA: 35.9,
		NORMAL_LOW: 36,
		NORMAL_HIGH: 37,
		FEVER_LOW: 37.1,
		FEVER_HIGH: 38.9,
		HIGH_FEVER: 39,
	};

	const handleTemperature = (temperature) => {
		const temp = parseFloat(temperature);

		if (isNaN(temp)) {
			addMessage(
				'Invalid temperature reading. Please check your input.',
				'red'
			);
			return;
		}

		if (temp <= TEMPERATURE_THRESHOLDS.CRITICAL_LOW) {
			addMessage(
				'Get Immediate medical attention, call an ambulance and go to the emergency department right away.',
				'red'
			);
		} else if (temp <= 35.9) {
			addMessage(
				'Get Evaluated Call your healthcare provider right away',
				'red'
			);
		} else if (temp < 36) {
			addMessage(
				'Mild Hypothermia: Get evaluated. Call your healthcare provider for advice.',
				'orange'
			);
		} else if (temp >= 36 && temp <= 37) {
			addMessage(
				'The normal body temperature of a person varies depending on gender, recent activity, food and fluid consumption, time of day, and, in women, the stage of the menstrual cycle. Normal body temperature can range from 36.5 degrees Celsius to 37.2 degrees Celsius for a healthy adult.',
				'green'
			);
		} else if (temp > 37 && temp <= 38.9) {
			addMessage(
				'Continue home monitoring, keep an eye on your symptoms, and contact your healthcare provider if needed.',
				'yellow'
			);
		} else if (temp >= 39) {
			if (hasSevereSymptoms(severeTempSymptoms)) {
				addMessage(
					'Call an Ambulance right away and go to the emergency department.',
					'red'
				);
			} else {
				addMessage(
					'High Fever: Get Evaluated, Call your healthcare provider right away.',
					'orange'
				);
			}
		}
	};

	if (hasValue(temperature)) handleTemperature(temperature);
	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
		handleBloodPressure(
			systolicBP,
			diastolicBP,
			(text, color) => addMessage(text, color, 'bloodPressure'),
			hasSevereSymptoms,
			lowBPSevereSymptoms,
			elevatedBPSymptoms,
			heartRate
		);
	}

	return messages;
};
// export const getWarnings = (formData) => {
// 	const {
// 		temperature,
// 		systolicBP,
// 		diastolicBP,
// 		heartRate,
// 		respiratoryRate,
// 		spO2,
// 		symptoms = [],
// 	} = formData;

// 	const symptomList = new Set(symptoms);
// 	const messages = [];

// 	// Utility to check if a value exists
// 	const hasValue = (value) =>
// 		value !== null && value !== undefined && value !== '';

// 	// Utility to add messages with optional color
// 	const addMessage = (text, color = null) => messages.push({ text, color });

// 	// Utility to check if any severe symptoms are present
// 	const hasSevereSymptoms = (symptomsArray) =>
// 		symptomsArray.some((symptom) => symptomList.has(symptom));

// 	// Common symptom sets for various checks
// 	const severeTempSymptoms = [
// 		'Severe headache',
// 		'Rash',
// 		'Unusual sensitivity to bright light',
// 		'Stiff neck and pain when you bend your head forward',
// 		'Mental confusion, strange behavior or altered speech',
// 		'Persistent vomiting',
// 		'Difficulty breathing or chest pain',
// 		'Abdominal pain',
// 		'Pain when urinating',
// 		'Convulsions or seizures',
// 	];

// 	const lowBPSevereSymptoms = [
// 		'Confusion',
// 		'Cold, clammy skin',
// 		'Decrease in skin color (pallor)',
// 		'Rapid, shallow breathing',
// 		'Weak and rapid pulse',
// 		'Fainting',
// 		'Chest pain',
// 		'Blue tint to lips or fingernails',
// 		'Feeling cold',
// 		'Being sweaty',
// 		'Breathing fast',
// 		'Pass out or faint',
// 		'Fall because of lightheadedness and hit your head',
// 	];

// 	const elevatedBPSymptoms = [
// 		'Shortness of breath',
// 		'Headache',
// 		'Chest pain',
// 		'Blurry vision',
// 		'Heart palpitations',
// 		'Anxiety',
// 		'Dizziness',
// 		'Nosebleed',
// 		'Vomiting',
// 	];

// 	// Constants for temperature thresholds
// 	const TEMPERATURE_THRESHOLDS = {
// 		CRITICAL_LOW: 35, // New threshold for critical low temperature
// 		HYPOTHERMIA: 35.9, // Below 35.9°C is considered hypothermia
// 		NORMAL_LOW: 36, // Normal body temperature starts at 36°C
// 		NORMAL_HIGH: 37, // Normal body temperature ends at 37°C
// 		FEVER_LOW: 37.1, // Low-grade fever starts at 37.1°C
// 		FEVER_HIGH: 38.9, // High-grade fever ends at 38.9°C
// 		HIGH_FEVER: 39, // 39°C and above is considered a high fever
// 	};

// 	// Function to handle temperature warnings
// 	const handleTemperature = (temperature) => {
// 		const temp = parseFloat(temperature);

// 		if (isNaN(temp)) {
// 			addMessage(
// 				'Invalid temperature reading. Please check your input.',
// 				'red'
// 			);
// 			return;
// 		}

// 		if (temp <= TEMPERATURE_THRESHOLDS.CRITICAL_LOW) {
// 			addMessage(
// 				'Get Immediate medical attention, call an ambulance and go to the emergency department right away.',
// 				'red'
// 			);
// 		} else if (temp <= 35.9) {
// 			addMessage(
// 				'Get Evaluated Call your healthcare provider right away',
// 				'red'
// 			);
// 		} else if (temp < 36) {
// 			addMessage(
// 				'Mild Hypothermia: Get evaluated. Call your healthcare provider for advice.',
// 				'orange'
// 			);
// 		} else if (temp >= 36 && temp <= 37) {
// 			addMessage(
// 				'The normal body temperature of a person varies depending on gender, recent activity, food and fluid consumption, time of day, and, in women, the stage of the menstrual cycle. Normal body temperature can range from 36.5 degrees Celsius to 37.2 degrees Celsius for a healthy adult.',
// 				'green'
// 			);
// 		} else if (temp > 37 && temp <= 38.9) {
// 			addMessage(
// 				'Continue home monitoring, keep an eye on your symptoms, and contact your healthcare provider if needed.',
// 				'yellow'
// 			);
// 		} else if (temp >= 39) {
// 			if (hasSevereSymptoms(severeTempSymptoms)) {
// 				addMessage(
// 					'Call an Ambulance right away and go to the emergency department.',
// 					'red'
// 				);
// 			} else {
// 				addMessage(
// 					'High Fever: Get Evaluated, Call your healthcare provider right away.',
// 					'orange'
// 				);
// 			}
// 		}
// 	};

// 	// Execute validation checks
// 	if (hasValue(temperature)) handleTemperature(temperature);
// 	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
// 		handleBloodPressure(
// 			systolicBP,
// 			diastolicBP,
// 			addMessage,
// 			hasSevereSymptoms,
// 			lowBPSevereSymptoms,
// 			elevatedBPSymptoms,
// 			heartRate
// 		);
// 	}

// 	// Return the warnings
// 	return messages;
// };

export const temperatureWarning = (temperature, symptoms) => {
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

	const hasSevereSymptoms = (symptomsArray) =>
		symptomsArray.some((symptom) => symptoms.includes(symptom));

	const severeTempSymptoms = [
		'Severe headache',
		'Rash',
		'Unusual sensitivity to bright light',
		'Stiff neck and pain when you bend your head forward',
		'Mental confusion, strange behavior or altered speech',
		'Persistent vomiting',
		'Difficulty breathing or chest pain',
		'Abdominal pain',
		'Pain when urinating',
		'Convulsions or seizures',
	];

	if (temp <= 35) {
		return {
			color: 'red',
			message:
				'Get Immediate medical attention, call an ambulance and go to the emergency department right away.',
		};
	} else if (temp <= 35.9) {
		return {
			color: 'red',
			message: 'Get Evaluated Call your healthcare provider right away',
		};
	} else if (temp < 36) {
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
			message: 'Your Temperature is Higher than average.',
		};
	} else if (temp >= 39) {
		if (hasSevereSymptoms(severeTempSymptoms)) {
			return {
				color: 'red',
				message:
					'Call an Ambulance right away and go to the emergency department.',
			};
		} else {
			return {
				color: 'red',
				message:
					'High Fever: Get Evaluated, Call your healthcare provider right away.',
			};
		}
	}

	return null;
};
