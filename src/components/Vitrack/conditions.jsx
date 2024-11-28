export const getWarnings = (formData) => {
	const { temperature, systolicBP, diastolicBP, heartRate, symptoms } =
		formData;
	const symptomList = new Set(symptoms);

	// Initialize the message
	let messages = [];

	// Temperature Warnings
	if (temperature < 35) {
		messages.push(
			'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
		);
	} else if (temperature >= 35.1 && temperature <= 35.9) {
		messages.push('Get evaluated. Call your healthcare provider.');
	} else if (temperature >= 36 && temperature <= 37) {
		messages.push('Your body temperature is normal.');
	} else if (temperature >= 37.1 && temperature <= 38.9) {
		messages.push(
			'Get evaluated by your healthcare provider. Keep monitoring your vitals at home.'
		);
	} else if (temperature >= 39 && temperature <= 46.5) {
		const severeSymptoms = [
			'Severe headache',
			'Rash',
			'Unusual sensitivity to bright light',
			'Stiff neck and pain when you bend your head forward',
			'Mental confusion',
			'Persistent vomiting',
			'Difficulty breathing',
			'Abdominal pain',
			'Pain when urinating',
			'Convulsions or seizures',
		];
		const hasSevereSymptoms = severeSymptoms.some((symptom) =>
			symptomList.has(symptom)
		);
		if (hasSevereSymptoms) {
			messages.push(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else {
			messages.push('Get evaluated. Call your healthcare provider right away.');
		}
	}

	// Blood Pressure Warnings
	if (systolicBP < 90 || diastolicBP < 60) {
		const lowBPSevereSymptoms = [
			'Confusion',
			'Cold, clammy skin',
			'Rapid, shallow breathing',
			'Weak and rapid pulse',
			'Fainting',
			'Chest pain',
			'Blue tint to lips or fingernails',
		];
		const hasLowBPSevereSymptoms = lowBPSevereSymptoms.some((symptom) =>
			symptomList.has(symptom)
		);
		if (hasLowBPSevereSymptoms || heartRate > 100) {
			messages.push(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else {
			messages.push(
				'Get Immediate Medical Attention. Inform your healthcare provider and keep monitoring your BP.'
			);
		}
	} else if (
		systolicBP >= 90 &&
		systolicBP <= 119 &&
		diastolicBP >= 60 &&
		diastolicBP <= 79
	) {
		messages.push('Normal Blood Pressure. Keep monitoring your BP at home.');
	} else if (systolicBP >= 120 && systolicBP <= 121 && diastolicBP < 80) {
		const moderateBPSevereSymptoms = [
			'Shortness of breath',
			'Headache',
			'Chest pain',
			'Blurry vision',
			'Heart palpitations',
			'Dizziness',
			'Vomiting',
		];
		const hasModerateBPSevereSymptoms = moderateBPSevereSymptoms.some(
			(symptom) => symptomList.has(symptom)
		);
		if (hasModerateBPSevereSymptoms) {
			messages.push(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else {
			messages.push(
				'Get evaluated. Inform your healthcare provider and keep monitoring your BP.'
			);
		}
	} else if (
		(systolicBP >= 130 && systolicBP <= 139) ||
		(diastolicBP >= 80 && diastolicBP <= 89)
	) {
		const highBPSevereSymptoms = [
			'Shortness of breath',
			'Headache',
			'Chest pain',
			'Blurry vision',
			'Heart palpitations',
			'Dizziness',
			'Nosebleed',
		];
		const hasHighBPSevereSymptoms = highBPSevereSymptoms.some((symptom) =>
			symptomList.has(symptom)
		);
		if (hasHighBPSevereSymptoms) {
			messages.push(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else {
			messages.push('Get evaluated. Call your healthcare provider right away.');
		}
	} else if (
		(systolicBP >= 140 && systolicBP <= 180) ||
		(diastolicBP >= 90 && diastolicBP <= 120)
	) {
		messages.push('Get evaluated. Call your healthcare provider right away.');
	} else if (systolicBP > 180 || diastolicBP > 120) {
		const severeSymptoms = [
			'Shortness of breath',
			'Headache',
			'Chest pain',
			'Blurry vision',
			'Heart palpitations',
			'Anxiety',
			'Nosebleed',
			'Vomiting',
		];
		const hasSevereSymptoms = severeSymptoms.some((symptom) =>
			symptomList.has(symptom)
		);
		if (hasSevereSymptoms) {
			messages.push(
				'Get Immediate Medical Attention. Call an ambulance and go to the emergency department right away.'
			);
		} else {
			messages.push('Get Immediate Medical Attention.');
		}
	}

	return messages;
};
