export function formReducer(state, { name, value, subKey }) {
	// Handle the case where a subKey is provided, update the specific sub-key
	if (subKey) {
		return {
			...state,
			[name]: { ...state[name], [subKey]: value },
		};
	}
	// Handle regular field updates
	return { ...state, [name]: value };
}

export const initialState = {
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	gender: '',
	nationality: '',
	country: '',
	address: '',
	healthCondition: '',
	otherHealthCondition: '',
	hasFoodAllergieAtom: '',
	allergiesMed: '',
	nutritionAllergie: '',
	vitrackKit: '',
	leftHandBloodPressure: { systolic: '', diastolic: '' },
	rightHandBloodPressure: { systolic: '', diastolic: '' },
	leftHandOxygen: '',
	rightHandOxygen: '',
	heartRate: '',
	respiratoryRate: '',
	temperature: '',
	painScale: 0,
	symptoms: [],
};
