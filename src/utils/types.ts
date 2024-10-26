export type FormProps = {
	age: number | string;
	handleAgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	gender: string;
	handleGenderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	smoker: boolean;
	handleSmokerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	packsPerDay: number | string;
	handlePacksPerDayChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	yearsSmoked: number | string;
	handleYearsSmokedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isAdult: boolean;
	inputStyles: () => string;
	selectStyles: () => string;
	result: string | null;
};

export type PackYearsCalculatorState = {
	age: string;
	gender: string;
	smoker: boolean;
	packsPerDay: string | number;
	yearsSmoked: string | number;
	result: string | null;
};

export type PackYearsCalculatorProps = {
	title?: string; 
	onCalculate?: (result: string | null) => void;
};


export type PackYearsCalculatorMethods = {
	handleAgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handlePacksPerDayChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGenderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleSmokerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleYearsSmokedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	calculatePackYears: () => void;
	handleNumberInputChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		setValue: (value: string | number) => void
	) => void;
};

export type PackYearsCalculatorType = PackYearsCalculatorState &
	PackYearsCalculatorMethods &
	PackYearsCalculatorProps;
