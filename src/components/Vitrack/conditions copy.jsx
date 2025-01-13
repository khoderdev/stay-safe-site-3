// Import the list of symptoms from an external data file
import { symptomsList } from './data';

// Define blood pressure thresholds based on medical guidelines
export const BP_THRESHOLDS = {
	LOW_SYSTOLIC: 90, // Low systolic blood pressure threshold
	LOW_DIASTOLIC: 60, // Low diastolic blood pressure threshold
	NORMAL_SYSTOLIC_LOW: 90, // Lower bound of normal systolic blood pressure
	NORMAL_SYSTOLIC_HIGH: 119, // Upper bound of normal systolic blood pressure
	NORMAL_DIASTOLIC_LOW: 60, // Lower bound of normal diastolic blood pressure
	NORMAL_DIASTOLIC_HIGH: 79, // Upper bound of normal diastolic blood pressure
	ELEVATED_SYSTOLIC_LOW: 120, // Lower bound of elevated systolic blood pressure
	ELEVATED_SYSTOLIC_HIGH: 129, // Upper bound of elevated systolic blood pressure
	ELEVATED_DIASTOLIC_LOW: 60, // Lower bound of elevated diastolic blood pressure
	ELEVATED_DIASTOLIC_HIGH: 79, // Upper bound of elevated diastolic blood pressure
	HIGH_SYSTOLIC_STAGE1_LOW: 130, // Lower bound of stage 1 high systolic blood pressure
	HIGH_SYSTOLIC_STAGE1_HIGH: 139, // Upper bound of stage 1 high systolic blood pressure
	HIGH_DIASTOLIC_STAGE1_LOW: 80, // Lower bound of stage 1 high diastolic blood pressure
	HIGH_DIASTOLIC_STAGE1_HIGH: 89, // Upper bound of stage 1 high diastolic blood pressure
	HIGH_SYSTOLIC_STAGE2_LOW: 140, // Lower bound of stage 2 high systolic blood pressure
	HIGH_SYSTOLIC_STAGE2_HIGH: 180, // Upper bound of stage 2 high systolic blood pressure
	HIGH_DIASTOLIC_STAGE2_LOW: 90, // Lower bound of stage 2 high diastolic blood pressure
	HIGH_DIASTOLIC_STAGE2_HIGH: 120, // Upper bound of stage 2 high diastolic blood pressure
	CRISIS_SYSTOLIC: 180, // Systolic threshold for hypertensive crisis
	CRISIS_DIASTOLIC: 120, // Diastolic threshold for hypertensive crisis
};

// Define temperature thresholds based on medical guidelines
export const TEMPERATURE_THRESHOLDS = {
	CRITICAL_LOW: 35, // Critical low temperature threshold
	HYPOTHERMIA: 35.9, // Hypothermia threshold
	NORMAL_LOW: 36, // Lower bound of normal temperature
	NORMAL_HIGH: 37, // Upper bound of normal temperature
	FEVER_LOW: 37.1, // Lower bound of fever
	FEVER_HIGH: 38.9, // Upper bound of fever
	HIGH_FEVER: 39, // High fever threshold
};

/**
 * Evaluates blood pressure readings and provides appropriate warnings.
 * @param {number} systolicBP - Systolic blood pressure reading.
 * @param {number} diastolicBP - Diastolic blood pressure reading.
 * @param {function} addMessage - Callback function to add a message.
 * @param {function} hasSymptoms - Function to check if severe symptoms are present.
 * @param {number} heartRate - Heart rate reading.
 */
export const handleBloodPressure = (
	systolicBP,
	diastolicBP,
	addMessage,
	hasSymptoms,
	heartRate
) => {
	const systolic = parseFloat(systolicBP);
	const diastolic = parseFloat(diastolicBP);

	// Check for invalid inputs
	if (isNaN(systolic) || isNaN(diastolic)) {
		return;
	}

	// Low Blood Pressure
	if (
		systolic < BP_THRESHOLDS.LOW_SYSTOLIC ||
		diastolic < BP_THRESHOLDS.LOW_DIASTOLIC
	) {
		if (hasSymptoms(symptomsList) || heartRate > 100) {
			addMessage(
				'Your Blood Pressure is low. Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
				'red'
			);
		} else {
			addMessage(
				'Your Blood Pressure is low. Inform your healthcare provider and keep monitoring your Blood Pressure.',
				'orange'
			);
		}
		return;
	}

	// Normal Blood Pressure
	if (
		systolic >= BP_THRESHOLDS.NORMAL_SYSTOLIC_LOW &&
		systolic <= BP_THRESHOLDS.NORMAL_SYSTOLIC_HIGH &&
		diastolic >= BP_THRESHOLDS.NORMAL_DIASTOLIC_LOW &&
		diastolic <= BP_THRESHOLDS.NORMAL_DIASTOLIC_HIGH
	) {
		addMessage(
			'Your Blood Pressure is normal. Continue monitoring your blood pressure.',
			'green'
		);
		return;
	}

	// Elevated Blood Pressure
	if (
		systolic >= BP_THRESHOLDS.ELEVATED_SYSTOLIC_LOW &&
		systolic <= BP_THRESHOLDS.ELEVATED_SYSTOLIC_HIGH &&
		diastolic >= BP_THRESHOLDS.ELEVATED_DIASTOLIC_LOW &&
		diastolic <= BP_THRESHOLDS.ELEVATED_DIASTOLIC_HIGH
	) {
		addMessage(
			'Elevated Blood Pressure. Inform your healthcare provider, get evaluated, and continue monitoring your blood pressure.',
			'yellow'
		);
		return;
	}

	// High Blood Pressure Stage 1
	if (
		(systolic >= BP_THRESHOLDS.HIGH_SYSTOLIC_STAGE1_LOW &&
			systolic <= BP_THRESHOLDS.HIGH_SYSTOLIC_STAGE1_HIGH) ||
		(diastolic >= BP_THRESHOLDS.HIGH_DIASTOLIC_STAGE1_LOW &&
			diastolic <= BP_THRESHOLDS.HIGH_DIASTOLIC_STAGE1_HIGH)
	) {
		if (hasSymptoms(symptomsList)) {
			addMessage(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
				'red'
			);
		} else {
			addMessage(
				'High Blood Pressure, Stage 1. Call your healthcare provider right away, get evaluated, and continue monitoring your blood pressure.',
				'orange'
			);
		}
		return;
	}

	// High Blood Pressure Stage 2
	if (
		(systolic >= BP_THRESHOLDS.HIGH_SYSTOLIC_STAGE2_LOW &&
			systolic < BP_THRESHOLDS.CRISIS_SYSTOLIC) ||
		(diastolic >= BP_THRESHOLDS.HIGH_DIASTOLIC_STAGE2_LOW &&
			diastolic < BP_THRESHOLDS.CRISIS_DIASTOLIC)
	) {
		if (hasSymptoms(symptomsList)) {
			addMessage(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
				'red'
			);
		} else {
			addMessage(
				'High Blood Pressure, Stage 2. Call your healthcare provider right away, get evaluated, and continue monitoring your blood pressure.',
				'orange'
			);
		}
		return;
	}

	// Hypertensive Crisis
	if (
		systolic >= BP_THRESHOLDS.CRISIS_SYSTOLIC ||
		diastolic >= BP_THRESHOLDS.CRISIS_DIASTOLIC
	) {
		addMessage(
			'Your Blood Pressure is very high. Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.',
			'red'
		);
		return;
	}
};

/**
 * Evaluates temperature readings and provides appropriate warnings.
 * @param {number} temperature - Temperature reading.
 * @param {function} addMessage - Callback function to add a message.
 * @param {function} hasSevereSymptoms - Function to check if severe symptoms are present.
 */
export const handleTemperature = (
	temperature,
	addMessage,
	hasSevereSymptoms
) => {
	const temp = parseFloat(temperature);

	// Check for invalid inputs
	if (isNaN(temp)) {
		addMessage('Invalid temperature reading. Please check your input.', 'red');
		return;
	}

	// Critical Low Temperature
	if (temp <= TEMPERATURE_THRESHOLDS.CRITICAL_LOW) {
		addMessage(
			'Get Immediate medical attention, call an ambulance, and go to the emergency department right away.',
			'red'
		);
	}
	// Hypothermia
	else if (temp <= TEMPERATURE_THRESHOLDS.HYPOTHERMIA) {
		addMessage(
			'Get Evaluated. Call your healthcare provider right away.',
			'red'
		);
	}
	// Mild Hypothermia
	else if (temp < TEMPERATURE_THRESHOLDS.NORMAL_LOW) {
		addMessage(
			'Mild Hypothermia: Get evaluated. Call your healthcare provider for advice.',
			'orange'
		);
	}
	// Normal Temperature
	else if (
		temp >= TEMPERATURE_THRESHOLDS.NORMAL_LOW &&
		temp <= TEMPERATURE_THRESHOLDS.NORMAL_HIGH
	) {
		addMessage(
			'Your temperature is within the normal range. Continue monitoring your health.',
			'green'
		);
	}
	// Fever
	else if (
		temp > TEMPERATURE_THRESHOLDS.FEVER_LOW &&
		temp <= TEMPERATURE_THRESHOLDS.FEVER_HIGH
	) {
		addMessage(
			'Your temperature is higher than average. Continue home monitoring and contact your healthcare provider if needed.',
			'yellow'
		);
	}
	// High Fever
	else if (temp >= TEMPERATURE_THRESHOLDS.HIGH_FEVER) {
		if (hasSevereSymptoms(symptomsList)) {
			addMessage(
				'Call an ambulance right away and go to the emergency department.',
				'red'
			);
		} else {
			addMessage(
				'High Fever: Get evaluated. Call your healthcare provider right away.',
				'orange'
			);
		}
	}
};

/**
 * Generates warnings based on form data (temperature, blood pressure, heart rate, etc.).
 * @param {object} formData - Object containing health metrics and symptoms.
 * @returns {Array} - Array of warning messages.
 */
export const getWarnings = (formData) => {
	const {
		temperature,
		systolicBP,
		diastolicBP,
		heartRate,
		symptoms = [],
	} = formData;
	const symptomList = new Set(symptoms); // Convert symptoms array to a Set for faster lookup
	const messages = []; // Array to store warning messages

	// Helper function to add a message to the messages array
	const addMessage = (text, color = null, type = null) => {
		messages.push({ text, color, type });
	};

	// Helper function to check if a value is valid
	const hasValue = (value) =>
		value !== null && value !== undefined && value !== '';

	// Helper function to check for severe symptoms
	const hasSevereSymptoms = (symptomsArray) =>
		symptomsArray.some((symptom) => symptomList.has(symptom));

	// Evaluate temperature if a valid reading is provided
	if (hasValue(temperature)) {
		handleTemperature(temperature, addMessage, hasSevereSymptoms);
	}

	// Evaluate blood pressure if valid readings are provided
	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
		handleBloodPressure(
			systolicBP,
			diastolicBP,
			addMessage,
			hasSevereSymptoms,
			heartRate
		);
	}

	return messages; // Return the array of warning messages
};

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

	// Use the full symptomsList for severe symptoms
	const severeTempSymptoms = symptomsList;

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
