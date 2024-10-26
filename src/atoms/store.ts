import { createStore, atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const ageAtom = atom('');
export const genderAtom = atom('');
export const smokerAtom = atom(true);
export const packsPerDayAtom = atom('');
export const yearsSmokedAtom = atom('');
export const resultAtom = atom('');
export const monthlyScreeningAtom = atom([]);
export const yearlyScreeningAtom = atom([]);
export const onceAYearAtom = atom([]);
export const otherScreeningAtom = atom([]);

const jotaiStore = createStore(
	ageAtom,
	genderAtom,
	smokerAtom,
	packsPerDayAtom,
	yearsSmokedAtom,
	yearsSmokedAtom,
	resultAtom,
	yearlyScreeningAtom,
	onceAYearAtom,
	otherScreeningAtom
);

export default jotaiStore;
