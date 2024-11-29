// // // export const getWarnings = (formData) => {
// // // 	const {
// // // 		temperature,
// // // 		systolicBP,
// // // 		diastolicBP,
// // // 		heartRate,
// // // 		respiratoryRate,
// // // 		spO2,
// // // 		symptoms,
// // // 	} = formData;

// // // 	const symptomList = new Set(symptoms || []);
// // // 	const messages = [];

// // // 	// Utility to check value existence
// // // 	const hasValue = (value) =>
// // // 		value !== null && value !== undefined && value !== '';

// // // 	const addMessage = (text, color = null) => {
// // // 		messages.push({ text, color });
// // // 	};

// // // 	// Validate temperature
// // // 	if (hasValue(temperature)) {
// // // 		const temp = parseFloat(temperature);
// // // 		if (temp < 35) {
// // // 			addMessage(
// // // 				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// // // 			);
// // // 		} else if (temp >= 35.1 && temp <= 35.9) {
// // // 			addMessage('Get evaluated. Call your healthcare provider.');
// // // 		} else if (temp >= 36 && temp <= 37) {
// // // 			addMessage('Your body temperature is normal.', 'green');
// // // 		} else if (temp >= 37.1 && temp <= 38.9) {
// // // 			addMessage(
// // // 				'Get evaluated by your healthcare provider. Keep monitoring your vitals at home.'
// // // 			);
// // // 		} else if (temp >= 39) {
// // // 			const severeTempSymptoms = [
// // // 				'Severe headache',
// // // 				'Rash',
// // // 				'Unusual sensitivity to bright light',
// // // 				'Stiff neck',
// // // 				'Mental confusion',
// // // 				'Persistent vomiting',
// // // 				'Difficulty breathing',
// // // 				'Abdominal pain',
// // // 				'Pain when urinating',
// // // 				'Convulsions or seizures',
// // // 			];
// // // 			if (severeTempSymptoms.some((symptom) => symptomList.has(symptom))) {
// // // 				addMessage(
// // // 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// // // 				);
// // // 			} else {
// // // 				addMessage('Get evaluated. Call your healthcare provider right away.');
// // // 			}
// // // 		}
// // // 	}

// // // 	// Validate blood pressure
// // // 	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
// // // 		const systolic = parseFloat(systolicBP);
// // // 		const diastolic = parseFloat(diastolicBP);

// // // 		if (systolic < 90 || diastolic < 60) {
// // // 			const lowBPSevereSymptoms = [
// // // 				'Confusion',
// // // 				'Cold, clammy skin',
// // // 				'Rapid, shallow breathing',
// // // 				'Weak and rapid pulse',
// // // 				'Fainting',
// // // 				'Chest pain',
// // // 				'Blue tint to lips or fingernails',
// // // 			];
// // // 			if (
// // // 				lowBPSevereSymptoms.some((symptom) => symptomList.has(symptom)) ||
// // // 				heartRate > 100
// // // 			) {
// // // 				addMessage(
// // // 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// // // 				);
// // // 			} else {
// // // 				addMessage(
// // // 					'Get Immediate Medical Attention. Inform your healthcare provider and keep monitoring your BP.'
// // // 				);
// // // 			}
// // // 		} else if (
// // // 			systolic >= 90 &&
// // // 			systolic <= 119 &&
// // // 			diastolic >= 60 &&
// // // 			diastolic <= 79
// // // 		) {
// // // 			addMessage('Normal Blood Pressure. Keep monitoring your BP at home.');
// // // 		} else if (systolic > 180 || diastolic > 120) {
// // // 			addMessage(
// // // 				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// // // 			);
// // // 		}
// // // 	}

// // // 	// Validate heart rate
// // // 	if (hasValue(heartRate)) {
// // // 		const rate = parseFloat(heartRate);
// // // 		if (rate >= 60 && rate <= 100) {
// // // 			addMessage('Your heart rate/pulse is normal.');
// // // 		} else if (rate > 100) {
// // // 			const severeHeartRateSymptoms = [
// // // 				'Chest pains',
// // // 				'Lightheadedness',
// // // 				'Fainting',
// // // 				'Pain or tightness in chest',
// // // 				'Shortness of breath',
// // // 				'Dizziness',
// // // 				'Unusual sweating',
// // // 			];
// // // 			if (severeHeartRateSymptoms.some((symptom) => symptomList.has(symptom))) {
// // // 				addMessage(
// // // 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// // // 				);
// // // 			} else {
// // // 				addMessage(
// // // 					'Get Medical Attention. Inform your healthcare provider and keep monitoring your heart rate.'
// // // 				);
// // // 			}
// // // 		}
// // // 	}

// // // 	// Validate respiratory rate
// // // 	if (hasValue(respiratoryRate)) {
// // // 		const rate = parseFloat(respiratoryRate);
// // // 		if (rate >= 10 && rate <= 12) {
// // // 			addMessage('Your respiratory rate is normal.');
// // // 		}
// // // 	}

// // // 	// Validate SpO2
// // // 	if (hasValue(spO2)) {
// // // 		const oxygen = parseFloat(spO2);
// // // 		if (oxygen >= 95 && oxygen <= 100) {
// // // 			addMessage('Your oxygen saturation is normal.');
// // // 		}
// // // 	}

// // // 	return messages;
// // // };
// // export const getWarnings = (formData) => {
// // 	const {
// // 		temperature,
// // 		systolicBP,
// // 		diastolicBP,
// // 		heartRate,
// // 		respiratoryRate,
// // 		spO2,
// // 		symptoms,
// // 	} = formData;

// // 	const symptomList = new Set(symptoms || []);
// // 	const messages = [];

// // 	// Utility to check value existence
// // 	const hasValue = (value) =>
// // 		value !== null && value !== undefined && value !== '';

// // 	const addMessage = (text, color = null) => {
// // 		messages.push({ text, color });
// // 	};

// // 	// Validate temperature
// // 	if (hasValue(temperature)) {
// // 		const temp = parseFloat(temperature);
// // 		if (temp < 35) {
// // 			addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 		} else if (temp >= 35.1 && temp <= 35.9) {
// // 			addMessage('Get evaluated. Call your healthcare provider.');
// // 		} else if (temp >= 36 && temp <= 37) {
// // 			addMessage('Your body temperature is normal.', 'green');
// // 		} else if (temp >= 37.1 && temp <= 38.9) {
// // 			addMessage('Get evaluated by your healthcare provider. Keep monitoring your vitals at home.');
// // 		} else if (temp >= 39) {
// // 			const severeTempSymptoms = [
// // 				'Severe headache',
// // 				'Rash',
// // 				'Unusual sensitivity to bright light',
// // 				'Stiff neck',
// // 				'Mental confusion',
// // 				'Persistent vomiting',
// // 				'Difficulty breathing',
// // 				'Abdominal pain',
// // 				'Pain when urinating',
// // 				'Convulsions or seizures',
// // 			];
// // 			if (severeTempSymptoms.some((symptom) => symptomList.has(symptom))) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			} else {
// // 				addMessage('Get evaluated. Call your healthcare provider right away.');
// // 			}
// // 		}
// // 	}

// // 	// Validate blood pressure
// // 	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
// // 		const systolic = parseFloat(systolicBP);
// // 		const diastolic = parseFloat(diastolicBP);

// // 		// Case 1: Low Blood Pressure (Systolic < 90 or Diastolic < 60)
// // 		if (systolic < 90 || diastolic < 60) {
// // 			const lowBPSevereSymptoms = [
// // 				'Confusion',
// // 				'Cold, clammy skin',
// // 				'Decrease in skin color (pallor)',
// // 				'Rapid, shallow breathing',
// // 				'Weak and rapid pulse',
// // 				'Fainting',
// // 				'Chest pain',
// // 				'Blue tint to lips or fingernails',
// // 				'Feeling cold',
// // 				'Being sweaty',
// // 				'Breathing fast',
// // 				'Pass out or faint',
// // 				'Fall because of lightheadedness and hit your head',
// // 			];

// // 			// Check for severe symptoms or abnormal heart rate
// // 			if (lowBPSevereSymptoms.some((symptom) => symptomList.has(symptom)) || heartRate > 100 || heartRate < 60) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			} else {
// // 				addMessage('Get Immediate Medical Attention. Inform your healthcare provider and keep monitoring your BP.');
// // 			}
// // 		}

// // 		// Case 2: Normal Blood Pressure (90 <= Systolic <= 119, 60 <= Diastolic <= 79)
// // 		else if (systolic >= 90 && systolic <= 119 && diastolic >= 60 && diastolic <= 79) {
// // 			addMessage('Normal Blood Pressure. Keep monitoring your BP at home.');
// // 		}

// // 		// Case 3: Elevated BP (Systolic 120-121, Diastolic < 80)
// // 		else if (systolic >= 120 && systolic <= 121 && diastolic < 80) {
// // 			addMessage('Get evaluated. Inform your healthcare provider and keep monitoring your BP.');
// // 			const elevatedBPSymptoms = [
// // 				'Shortness of breath',
// // 				'Headache',
// // 				'Chest pain',
// // 				'Blurry vision',
// // 				'Heart palpitations',
// // 				'Anxiety',
// // 				'Dizziness',
// // 				'Nosebleed',
// // 				'Vomiting',
// // 			];
// // 			if (elevatedBPSymptoms.some((symptom) => symptomList.has(symptom))) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			}
// // 		}

// // 		// Case 4: Stage 1 Hypertension (Systolic 130-139, Diastolic 80-89)
// // 		else if (systolic >= 130 && systolic <= 139 && diastolic >= 80 && diastolic <= 89) {
// // 			addMessage('Get evaluated. Call your healthcare provider right away.');
// // 			const stage1Symptoms = [
// // 				'Shortness of breath',
// // 				'Headache',
// // 				'Chest pain',
// // 				'Blurry vision',
// // 				'Heart palpitations',
// // 				'Anxiety',
// // 				'Dizziness',
// // 				'Nosebleed',
// // 				'Vomiting',
// // 			];
// // 			if (stage1Symptoms.some((symptom) => symptomList.has(symptom))) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			}
// // 		}

// // 		// Case 5: Stage 2 Hypertension (Systolic 140-180, Diastolic 90-120)
// // 		else if (systolic >= 140 && systolic <= 180 && diastolic >= 90 && diastolic <= 120) {
// // 			addMessage('Get evaluated. Call your healthcare provider right away.');
// // 			const stage2Symptoms = [
// // 				'Shortness of breath',
// // 				'Headache',
// // 				'Chest pain',
// // 				'Blurry vision',
// // 				'Heart palpitations',
// // 				'Anxiety',
// // 				'Dizziness',
// // 				'Nosebleed',
// // 				'Vomiting',
// // 			];
// // 			if (stage2Symptoms.some((symptom) => symptomList.has(symptom))) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			}
// // 		}

// // 		// Case 6: Hypertensive Crisis (Systolic > 180 or Diastolic > 120)
// // 		else if (systolic > 180 || diastolic > 120) {
// // 			addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			const crisisSymptoms = [
// // 				'Shortness of breath',
// // 				'Headache',
// // 				'Chest pain',
// // 				'Blurry vision',
// // 				'Heart palpitations',
// // 				'Anxiety',
// // 				'Dizziness',
// // 				'Nosebleed',
// // 				'Vomiting',
// // 			];
// // 			if (crisisSymptoms.some((symptom) => symptomList.has(symptom))) {
// // 				addMessage('Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.');
// // 			}
// // 		}
// // 	}

// // 	// Return the warnings
// // 	return messages;
// // };
// export const getWarnings = (formData) => {
// 	const {
// 		temperature,
// 		systolicBP,
// 		diastolicBP,
// 		heartRate,
// 		respiratoryRate,
// 		spO2,
// 		symptoms,
// 	} = formData;

// 	const symptomList = new Set(symptoms || []);
// 	const messages = [];

// 	// Utility to check value existence
// 	const hasValue = (value) =>
// 		value !== null && value !== undefined && value !== '';

// 	const addMessage = (text, color = null) => {
// 		messages.push({ text, color });
// 	};

// 	// Validate temperature
// 	if (hasValue(temperature)) {
// 		const temp = parseFloat(temperature);
// 		if (temp < 35) {
// 			addMessage(
// 				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 			);
// 		} else if (temp >= 35.1 && temp <= 35.9) {
// 			addMessage('Get evaluated. Call your healthcare provider.');
// 		} else if (temp >= 36 && temp <= 37) {
// 			addMessage('Your body temperature is normal.', 'green');
// 		} else if (temp >= 37.1 && temp <= 38.9) {
// 			addMessage(
// 				'Get evaluated by your healthcare provider. Keep monitoring your vitals at home.'
// 			);
// 		} else if (temp >= 39) {
// 			const severeTempSymptoms = [
// 				'Severe headache',
// 				'Rash',
// 				'Unusual sensitivity to bright light',
// 				'Stiff neck',
// 				'Mental confusion',
// 				'Persistent vomiting',
// 				'Difficulty breathing',
// 				'Abdominal pain',
// 				'Pain when urinating',
// 				'Convulsions or seizures',
// 			];
// 			if (severeTempSymptoms.some((symptom) => symptomList.has(symptom))) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			} else {
// 				addMessage('Get evaluated. Call your healthcare provider right away.');
// 			}
// 		}
// 	}

// 	// Validate blood pressure
// 	if (hasValue(systolicBP) && hasValue(diastolicBP)) {
// 		const systolic = parseFloat(systolicBP);
// 		const diastolic = parseFloat(diastolicBP);

// 		// Case 1: Low Blood Pressure (Systolic < 90 or Diastolic < 60)
// 		if (systolic < 90 || diastolic < 60) {
// 			const lowBPSevereSymptoms = [
// 				'Confusion',
// 				'Cold, clammy skin',
// 				'Decrease in skin color (pallor)',
// 				'Rapid, shallow breathing',
// 				'Weak and rapid pulse',
// 				'Fainting',
// 				'Chest pain',
// 				'Blue tint to lips or fingernails',
// 				'Feeling cold',
// 				'Being sweaty',
// 				'Breathing fast',
// 				'Pass out or faint',
// 				'Fall because of lightheadedness and hit your head',
// 			];

// 			// Check for severe symptoms or abnormal heart rate
// 			if (
// 				lowBPSevereSymptoms.some((symptom) => symptomList.has(symptom)) ||
// 				heartRate > 100 ||
// 				heartRate < 60
// 			) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			} else {
// 				addMessage(
// 					'Get Immediate Medical Attention. Inform your healthcare provider and keep monitoring your BP.'
// 				);
// 			}
// 		}

// 		// Case 2: Normal Blood Pressure (90 <= Systolic <= 119, 60 <= Diastolic <= 79)
// 		else if (
// 			systolic >= 90 &&
// 			systolic <= 119 &&
// 			diastolic >= 60 &&
// 			diastolic <= 79
// 		) {
// 			addMessage('Normal Blood Pressure. Keep monitoring your BP at home.');
// 		}

// 		// Case 3: Elevated BP (Systolic 120-121, Diastolic < 80)
// 		else if (systolic >= 120 && systolic <= 121 && diastolic < 80) {
// 			addMessage(
// 				'Get evaluated. Inform your healthcare provider and keep monitoring your BP.'
// 			);
// 			const elevatedBPSymptoms = [
// 				'Shortness of breath',
// 				'Headache',
// 				'Chest pain',
// 				'Blurry vision',
// 				'Heart palpitations',
// 				'Anxiety',
// 				'Dizziness',
// 				'Nosebleed',
// 				'Vomiting',
// 			];
// 			if (elevatedBPSymptoms.some((symptom) => symptomList.has(symptom))) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			}
// 		}

// 		// Case 4: Stage 1 Hypertension (Systolic 130-139, Diastolic 80-89)
// 		else if (
// 			systolic >= 130 &&
// 			systolic <= 139 &&
// 			diastolic >= 80 &&
// 			diastolic <= 89
// 		) {
// 			addMessage('Get evaluated. Call your healthcare provider right away.');
// 			const stage1Symptoms = [
// 				'Shortness of breath',
// 				'Headache',
// 				'Chest pain',
// 				'Blurry vision',
// 				'Heart palpitations',
// 				'Anxiety',
// 				'Dizziness',
// 				'Nosebleed',
// 				'Vomiting',
// 			];
// 			if (stage1Symptoms.some((symptom) => symptomList.has(symptom))) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			}
// 		}

// 		// Case 5: Stage 2 Hypertension (Systolic 140-180, Diastolic 90-120)
// 		else if (
// 			systolic >= 140 &&
// 			systolic <= 180 &&
// 			diastolic >= 90 &&
// 			diastolic <= 120
// 		) {
// 			addMessage('Get evaluated. Call your healthcare provider right away.');
// 			const stage2Symptoms = [
// 				'Shortness of breath',
// 				'Headache',
// 				'Chest pain',
// 				'Blurry vision',
// 				'Heart palpitations',
// 				'Anxiety',
// 				'Dizziness',
// 				'Nosebleed',
// 				'Vomiting',
// 			];
// 			if (stage2Symptoms.some((symptom) => symptomList.has(symptom))) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			}
// 		}

// 		// Case 6: Hypertensive Crisis (Systolic > 180 or Diastolic > 120)
// 		else if (systolic > 180 || diastolic > 120) {
// 			addMessage(
// 				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 			);
// 			const crisisSymptoms = [
// 				'Shortness of breath',
// 				'Headache',
// 				'Chest pain',
// 				'Blurry vision',
// 				'Heart palpitations',
// 				'Anxiety',
// 				'Dizziness',
// 				'Nosebleed',
// 				'Vomiting',
// 			];
// 			if (crisisSymptoms.some((symptom) => symptomList.has(symptom))) {
// 				addMessage(
// 					'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
// 				);
// 			}
// 		}
// 	}

// 	// Return the warnings
// 	return messages;
// };
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
