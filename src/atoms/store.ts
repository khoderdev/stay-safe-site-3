// import { atom } from 'jotai';

// export const firstNameAtom = atom('');
// export const lastNameAtom = atom('');
// export const dateOfBirthAtom = atom('');
// export const genderAtom = atom('');
// export const nationalityAtom = atom('');
// export const countryAtom = atom('');
// export const addressAtom = atom('');
// export const healthConditionAtom = atom('');
// export const otherHealthConditionAtom = atom('');
// export const hasFoodAllergieAtom = atom('');
// export const allergiesMedAtom = atom('');
// export const specificAllergiesMedAtom = atom('');
// export const nutritionAllergieAtom = atom('');
// export const specificNutritionAllergieAtom = atom('');
// export const vitrackKitAtom = atom('');
// export const bloodPressureSetsAtom = atom([
// 	{
// 		id: 1,
// 		isDefault: true,
// 		leftHand: { systolic: '', diastolic: '' },
// 		rightHand: { systolic: '', diastolic: '' },
// 	},
// ]);

// export const leftHandOxygenAtom = atom('');
// export const rightHandOxygenAtom = atom('');
// export const heartRateAtom = atom('');
// export const respiratoryRateAtom = atom('');
// export const temperatureAtom = atom('');
// export const painScaleAtom = atom(0);
// export const symptomsAtom = atom([]);
import { atom } from 'jotai';

// Define types for objects
interface BloodPressure {
	systolic: string;
	diastolic: string;
}

interface BloodPressureSet {
	id: number;
	isDefault: boolean;
	leftHand: BloodPressure;
	rightHand: BloodPressure;
}

// Define atoms with types
export const firstNameAtom = atom<string>('');
export const lastNameAtom = atom<string>('');
export const dateOfBirthAtom = atom<string>('');
export const genderAtom = atom<string>('');
export const nationalityAtom = atom<string>('');
export const countryAtom = atom<string>('');
export const addressAtom = atom<string>('');
export const healthConditionAtom = atom<string>('');
export const otherHealthConditionAtom = atom<string>('');
export const hasFoodAllergieAtom = atom<boolean>(false);
export const allergiesMedAtom = atom<string>('');
export const specificAllergiesMedAtom = atom<string>('');
export const specificFoodAllergieAtom = atom<string>('');
export const vitrackKitAtom = atom<boolean>(false);

export const bloodPressureSetsAtom = atom<BloodPressureSet[]>([
	{
		id: 1,
		isDefault: true,
		leftHand: { systolic: '', diastolic: '' },
		rightHand: { systolic: '', diastolic: '' },
	},
]);

export const leftHandOxygenAtom = atom<string>('');
export const rightHandOxygenAtom = atom<string>('');
export const heartRateAtom = atom<string>('');
export const respiratoryRateAtom = atom<string>('');
export const temperatureAtom = atom<string>('');
export const painScaleAtom = atom<number>(0);
export const symptomsAtom = atom<string[]>([]);  