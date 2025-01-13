import { symptomsList } from './data';

export const BP_THRESHOLDS = {
	LOW_SYSTOLIC: 89,
	LOW_DIASTOLIC: 59,
	NORMAL_SYSTOLIC_LOW: 90,
	NORMAL_SYSTOLIC_HIGH: 119,
	NORMAL_DIASTOLIC_LOW: 60,
	NORMAL_DIASTOLIC_HIGH: 79,
	ELEVATED_SYSTOLIC_LOW: 120,
	ELEVATED_SYSTOLIC_HIGH: 129,
	ELEVATED_DIASTOLIC_LOW: 60,
	ELEVATED_DIASTOLIC_HIGH: 79,
	HIGH_SYSTOLIC_STAGE1_LOW: 130,
	HIGH_SYSTOLIC_STAGE1_HIGH: 139,
	HIGH_DIASTOLIC_STAGE1_LOW: 80,
	HIGH_DIASTOLIC_STAGE1_HIGH: 89,
	HIGH_SYSTOLIC_STAGE2_LOW: 140,
	HIGH_SYSTOLIC_STAGE2_HIGH: 180,
	HIGH_DIASTOLIC_STAGE2_LOW: 90,
	HIGH_DIASTOLIC_STAGE2_HIGH: 120,
	CRISIS_SYSTOLIC: 180,
	CRISIS_DIASTOLIC: 120,
};

export const handleBloodPressure = (
	systolicBP,
	diastolicBP,
	addMessage,
	hasSymptoms,
	heartRate
) => {
	const systolic = parseFloat(systolicBP);
	const diastolic = parseFloat(diastolicBP);

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
				'Your Blood Pressure is low. Get Immediate Medical Attention. Call an ambulance and Go to the emergency department right away.',
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
			'Your Blood Pressure is normal. Continue Monitoring your blood pressure.',
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
			'Elevated Blood Pressure. Inform your healthcare provider, get evaluated and continue monitoring your blood pressure.',
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
				'Get Immediate Medical Attention. Call an ambulance and Go to the emergency department right away.',
				'red'
			);
		} else {
			addMessage(
				'High Blood Pressure, Stage 1. Call your health care provider right away, get evaluated and continue monitoring your blood pressure.',
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
				'Get Immediate Medical Attention. Call an ambulance and Go to the emergency department right away.',
				'red'
			);
		} else {
			addMessage(
				'High Blood Pressure, Stage 2. Call your health care provider right away, get evaluated and continue monitoring your blood pressure.',
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
			'Your Blood pressure is very high. Get Immediate Medical Attention. Call an ambulance and Go to the emergency department right away.',
			'red'
		);
		return;
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

	// Use the full symptomsList for all symptom checks
	const severeTempSymptoms = symptomsList;
	const lowBPSevereSymptoms = symptomsList;
	const elevatedBPSymptoms = symptomsList;

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
