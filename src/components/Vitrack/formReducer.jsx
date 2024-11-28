export function formReducer(state, { name, value, subKey }) {
	if (subKey) {
		return {
			...state,
			[name]: { ...state[name], [subKey]: value },
		};
	}
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
	hasNutritionAllergie: '',
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