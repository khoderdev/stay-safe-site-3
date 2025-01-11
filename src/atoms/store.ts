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

interface BloodPressureAverage {
	systolic: number | null;
	diastolic: number | null;
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
export const activeUnitAtom = atom<'C' | 'F'>('C');
export const showModalAtom = atom<boolean>(false);
export const currentSetIdAtom = atom<number | null>(null);
export const timerAtom = atom<NodeJS.Timeout | null>(null);
export const bothHandsResultsAverageAtom = atom<BloodPressureAverage>({
	systolic: null,
	diastolic: null,
});
export const skipRightHandInputsAtom = atom<boolean>(true);

export const phoneAtom = atom<string>('');
export const emergencyPhoneAtom = atom<string>('');
export const contactPersonAtom = atom<string>('');
export const languageAtom = atom<string>('');
export const tShirtSizeAtom = atom<string>('');
export const bloodGroupAtom = atom<string>('');
export const educationAtom = atom<string>('');
export const isOtherLanguageAtom = atom<boolean>(false);
export const manualLanguageAtom = atom<string>('');
export const selectedSkillsAtom = atom<string[]>([]);
export const selfDescriptionAtom = atom<string>('');
export const volunteerInterestAtom = atom<string>('');
export const imageConsentAtom = atom<boolean>(false);
