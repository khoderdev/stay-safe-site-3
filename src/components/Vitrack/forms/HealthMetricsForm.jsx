// import React from 'react';
// import { useAtom } from 'jotai';
// import InputField from '../inputs/InputField';
// import BloodPressureInput from '../inputs/BloodPressureInput';
// import { symptomsList } from '../data';
// import {
// 	temperatureAtom,
// 	heartRateAtom,
// 	respiratoryRateAtom,
// 	leftHandOxygenAtom,
// 	rightHandOxygenAtom,
// 	symptomsAtom,
// 	painScaleAtom,
// 	bloodPressureSetsAtom,
// } from '../../../atoms/store';
// import { getWarnings } from '../conditions';

// const HealthMetricsForm = () => {
// 	const [temperature, setTemperature] = useAtom(temperatureAtom);
// 	const [heartRate, setHeartRate] = useAtom(heartRateAtom);
// 	const [respiratoryRate, setRespiratoryRate] = useAtom(respiratoryRateAtom);
// 	const [leftHandOxygen, setLeftHandOxygen] = useAtom(leftHandOxygenAtom);
// 	const [rightHandOxygen, setRightHandOxygen] = useAtom(rightHandOxygenAtom);
// 	const [symptoms, setSymptoms] = useAtom(symptomsAtom);
// 	const [painScale, setPainScale] = useAtom(painScaleAtom);
// 	const [bloodPressureSets, setBloodPressureSets] = useAtom(
// 		bloodPressureSetsAtom
// 	);

// 	// Function to calculate average blood pressure
// 	const calculateAverages = () => {
// 		const defaultSet = bloodPressureSets.find((set) => set.isDefault);
// 		if (!defaultSet) return { systolic: null, diastolic: null };

// 		const leftSystolic = parseFloat(defaultSet.leftHand.systolic);
// 		const rightSystolic = parseFloat(defaultSet.rightHand.systolic);
// 		const leftDiastolic = parseFloat(defaultSet.leftHand.diastolic);
// 		const rightDiastolic = parseFloat(defaultSet.rightHand.diastolic);

// 		const systolicAvg = (leftSystolic + rightSystolic) / 2;
// 		const diastolicAvg = (leftDiastolic + rightDiastolic) / 2;

// 		return { systolic: systolicAvg, diastolic: diastolicAvg };
// 	};

// 	// Get warnings based on current form data
// 	const getHealthWarnings = () => {
// 		const { systolic, diastolic } = calculateAverages();
// 		const warnings = getWarnings({
// 			temperature,
// 			systolicBP: systolic,
// 			diastolicBP: diastolic,
// 			heartRate,
// 			respiratoryRate,
// 			spO2: leftHandOxygen,
// 			symptoms,
// 		});

// 		return warnings;
// 	};

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		switch (name) {
// 			case 'temperature':
// 				setTemperature(value);
// 				break;
// 			case 'heartRate':
// 				setHeartRate(value);
// 				break;
// 			case 'respiratoryRate':
// 				setRespiratoryRate(value);
// 				break;
// 			case 'leftHandOxygen':
// 				setLeftHandOxygen(value);
// 				break;
// 			case 'rightHandOxygen':
// 				setRightHandOxygen(value);
// 				break;
// 			case 'painScale':
// 				setPainScale(value);
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	const handleSymptomsChange = (e) => {
// 		const { value, checked } = e.target;
// 		setSymptoms((prevSymptoms) =>
// 			checked
// 				? [...prevSymptoms, value]
// 				: prevSymptoms.filter((symptom) => symptom !== value)
// 		);
// 	};

// 	const handleDynamicChange = (id, hand, name, value) => {
// 		setBloodPressureSets((prevSets) =>
// 			prevSets.map((set) =>
// 				set.id === id
// 					? {
// 							...set,
// 							[hand]: { ...set[hand], [name]: value },
// 					  }
// 					: set
// 			)
// 		);
// 	};

// 	const addBloodPressureSet = () => {
// 		const newSet = {
// 			id: bloodPressureSets.length + 1,
// 			isDefault: false,
// 			leftHand: { systolic: '', diastolic: '' },
// 			rightHand: { systolic: '', diastolic: '' },
// 		};
// 		setBloodPressureSets([...bloodPressureSets, newSet]);
// 	};

// 	const removeBloodPressureSet = (id) => {
// 		setBloodPressureSets(bloodPressureSets.filter((set) => set.id !== id));
// 	};

// 	const warnings = getHealthWarnings();

// 	return (
// 		<div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
// 			<InputField
// 				label='Oral Temperature (°C)'
// 				name='temperature'
// 				value={temperature || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			{/* Your other form inputs here */}
// 			<div className='space-y-4'>
// 				{warnings.length > 0 && (
// 					<div className='bg-red-500 text-white p-3 rounded'>
// 						<h3 className='font-bold'>Warnings:</h3>
// 						<ul>
// 							{warnings.map((warning, index) => (
// 								<li key={index}>{warning.text}</li>
// 							))}
// 						</ul>
// 					</div>
// 				)}
// 			</div>

// 			{/* Blood Pressure Inputs */}
// 			<div className='border-2 rounded-lg p-2 space-y-2 dark:border-black'>
// 				<p className='text-center font-semibold dark:text-white-whites'>
// 					Blood Pressure
// 				</p>
// 				{bloodPressureSets.map((set) => (
// 					<div
// 						key={set.id}
// 						className='space-y-4 relative border dark:border-black p-4 rounded'
// 					>
// 						{/* Blood Pressure Inputs */}
// 						<button
// 							type='button'
// 							className='absolute font-bold text-3xl hover:scale-125 duration-200 top-2 right-2 text-red-500'
// 							onClick={() => removeBloodPressureSet(set.id)}
// 						>
// 							-
// 						</button>
// 						<div className='grid grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
// 							<BloodPressureInput
// 								hand='Left'
// 								systolic={set.leftHand.systolic}
// 								diastolic={set.leftHand.diastolic}
// 								onChange={(e) =>
// 									handleDynamicChange(
// 										set.id,
// 										'leftHand',
// 										e.target.name,
// 										e.target.value
// 									)
// 								}
// 							/>
// 							<BloodPressureInput
// 								hand='Right'
// 								systolic={set.rightHand.systolic}
// 								diastolic={set.rightHand.diastolic}
// 								onChange={(e) =>
// 									handleDynamicChange(
// 										set.id,
// 										'rightHand',
// 										e.target.name,
// 										e.target.value
// 									)
// 								}
// 							/>
// 						</div>
// 					</div>
// 				))}
// 				<div className='flex space-x-4'>
// 					<button
// 						type='button'
// 						onClick={addBloodPressureSet}
// 						className='flex items-center font-bold text-3xl text-pink hover:scale-125 duration-200'
// 					>
// 						+
// 					</button>
// 				</div>
// 			</div>
// 			{/* Other Inputs */}
// 			<InputField
// 				label='Heart Rate (bpm)'
// 				name='heartRate'
// 				value={heartRate || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			<InputField
// 				label='Respiratory Rate (breaths/min)'
// 				name='respiratoryRate'
// 				value={respiratoryRate || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			<div className='grid grid-cols-2 gap-x-14'>
// 				{/* Left Hand Oxygen */}
// 				<InputField
// 					label='Left Hand Oxygen Saturation (%)'
// 					name='leftHandOxygen'
// 					value={leftHandOxygen || ''}
// 					onChange={handleChange}
// 					type='text'
// 					max={100}
// 				/>

// 				{/* Right Hand Oxygen */}
// 				<InputField
// 					label='Right Hand Oxygen Saturation (%)'
// 					name='rightHandOxygen'
// 					value={rightHandOxygen || ''}
// 					onChange={handleChange}
// 					type='text'
// 					max={100}
// 				/>

// 				{/* Pain Scale */}
// 				<div className='col-span-full mt-6'>
// 					<label className='block text-sm dark:text-white-bg2'>
// 						Pain Scale
// 					</label>
// 					<input
// 						type='range'
// 						name='painScale'
// 						min='0'
// 						max='10'
// 						value={painScale || 0}
// 						onChange={handleChange}
// 						className='mt-1 w-full cursor-pointer'
// 					/>
// 					<span className='block text-center dark:text-white-bg2'>
// 						{painScale}/10
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HealthMetricsForm;

// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////

import React from 'react';
import { useAtom } from 'jotai';
import InputField from '../inputs/InputField';
import BloodPressureInput from '../inputs/BloodPressureInput';
import { symptomsList } from '../data';
import {
	temperatureAtom,
	heartRateAtom,
	respiratoryRateAtom,
	leftHandOxygenAtom,
	rightHandOxygenAtom,
	symptomsAtom,
	painScaleAtom,
	bloodPressureSetsAtom,
} from '../../../atoms/store';
import { getWarnings } from '../conditions';
import TemperatureWheel from '../inputs/TemperatureWheel';

const HealthMetricsForm = () => {
	const [temperature, setTemperature] = useAtom(temperatureAtom);
	const [heartRate, setHeartRate] = useAtom(heartRateAtom);
	const [respiratoryRate, setRespiratoryRate] = useAtom(respiratoryRateAtom);
	const [leftHandOxygen, setLeftHandOxygen] = useAtom(leftHandOxygenAtom);
	const [rightHandOxygen, setRightHandOxygen] = useAtom(rightHandOxygenAtom);
	const [symptoms, setSymptoms] = useAtom(symptomsAtom);
	const [painScale, setPainScale] = useAtom(painScaleAtom);
	const [bloodPressureSets, setBloodPressureSets] = useAtom(
		bloodPressureSetsAtom
	);

	// Function to calculate average blood pressure
	const calculateAverages = () => {
		const defaultSet = bloodPressureSets.find((set) => set.isDefault);
		if (!defaultSet) return { systolic: null, diastolic: null };

		const leftSystolic = parseFloat(defaultSet.leftHand.systolic);
		const rightSystolic = parseFloat(defaultSet.rightHand.systolic);
		const leftDiastolic = parseFloat(defaultSet.leftHand.diastolic);
		const rightDiastolic = parseFloat(defaultSet.rightHand.diastolic);

		const systolicAvg = (leftSystolic + rightSystolic) / 2;
		const diastolicAvg = (leftDiastolic + rightDiastolic) / 2;

		return { systolic: systolicAvg, diastolic: diastolicAvg };
	};

	// Get warnings based on current form data
	const getHealthWarnings = () => {
		const { systolic, diastolic } = calculateAverages();
		const warnings = getWarnings({
			temperature,
			systolicBP: systolic,
			diastolicBP: diastolic,
			heartRate,
			respiratoryRate,
			spO2: leftHandOxygen,
			symptoms,
		});

		return warnings;
	};

	// Determine the temperature warning color and message
	const temperatureWarning = () => {
		if (temperature === '') return null; // No warning if temperature is empty
		const temp = parseFloat(temperature);

		if (isNaN(temp)) {
			return {
				color: 'red',
				message: 'Invalid temperature reading. Please check your input.',
			};
		}

		if (temp < 35) {
			return {
				color: 'red',
				message: 'Severe Hypothermia: Get Immediate Medical Attention.',
			};
		} else if (temp >= 35 && temp < 36) {
			return {
				color: 'orange',
				message: 'Mild Hypothermia: Get evaluated by your healthcare provider.',
			};
		} else if (temp >= 36 && temp <= 37) {
			return {
				color: 'green',
				message:
					'Normal Body Temperature: Your temperature is within the normal range.',
			};
		} else if (temp > 37 && temp <= 38.9) {
			return {
				color: 'yellow',
				message:
					'Low-Grade Fever: Monitor your symptoms and contact your healthcare provider if needed.',
			};
		} else if (temp >= 39) {
			return {
				color: 'red',
				message: 'High Fever: Contact your healthcare provider right away.',
			};
		}

		return null;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'temperature':
				// Allow any input but validate it
				const temp = parseFloat(value);
				if (isNaN(temp)) {
					// Handle invalid input (e.g., empty or non-numeric)
					setTemperature('');
				} else {
					// Set the temperature value
					setTemperature(value);
				}
				break;
			case 'heartRate':
				setHeartRate(value);
				break;
			case 'respiratoryRate':
				setRespiratoryRate(value);
				break;
			case 'leftHandOxygen':
				setLeftHandOxygen(value);
				break;
			case 'rightHandOxygen':
				setRightHandOxygen(value);
				break;
			case 'painScale':
				setPainScale(value);
				break;
			default:
				break;
		}
	};

	const handleSymptomsChange = (e) => {
		const { value, checked } = e.target;
		setSymptoms((prevSymptoms) =>
			checked
				? [...prevSymptoms, value]
				: prevSymptoms.filter((symptom) => symptom !== value)
		);
	};

	const handleDynamicChange = (id, hand, name, value) => {
		setBloodPressureSets((prevSets) =>
			prevSets.map((set) =>
				set.id === id
					? {
							...set,
							[hand]: { ...set[hand], [name]: value },
					  }
					: set
			)
		);
	};

	const addBloodPressureSet = () => {
		const newSet = {
			id: bloodPressureSets.length + 1,
			isDefault: false,
			leftHand: { systolic: '', diastolic: '' },
			rightHand: { systolic: '', diastolic: '' },
		};
		setBloodPressureSets([...bloodPressureSets, newSet]);
	};

	const removeBloodPressureSet = (id) => {
		setBloodPressureSets(bloodPressureSets.filter((set) => set.id !== id));
	};

	const warnings = getHealthWarnings();
	const tempWarning = temperatureWarning();

	return (
		<div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
			{/* Temperature Input */}
			<div className='sm:w-[60%] md:w-[70%] lg:w-[40%] mx-auto p-4 bg-white-bg2 dark:!bg-[#000] rounded-lg shadow-md'>
				<h1 className='text-xl font-semibold text-center dark:text-gray-50 mb-4'>
					Oral Temperature (°C)
				</h1>
				<TemperatureWheel
					min={35.0}
					max={40.0}
					step={0.1}
					defaultValue='36.5'
					className='bg-[#fff] dark:bg-black rounded-lg shadow-none dark:text-gray-50'
				/>
			</div>

			{/* Blood Pressure Inputs */}
			<div className='border-2 rounded-lg p-2 space-y-2 dark:border-black'>
				<p className='text-center font-semibold dark:text-white-whites'>
					Blood Pressure
				</p>
				{bloodPressureSets.map((set) => (
					<div
						key={set.id}
						className='space-y-4 relative border dark:border-black p-4 rounded'
					>
						{/* Blood Pressure Inputs */}
						<button
							type='button'
							className='absolute font-bold text-3xl hover:scale-125 duration-200 top-2 right-2 text-red-500'
							onClick={() => removeBloodPressureSet(set.id)}
						>
							-
						</button>
						<div className='grid grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
							<BloodPressureInput
								hand='Left'
								systolic={set.leftHand.systolic}
								diastolic={set.leftHand.diastolic}
								onChange={(e) =>
									handleDynamicChange(
										set.id,
										'leftHand',
										e.target.name,
										e.target.value
									)
								}
							/>
							<BloodPressureInput
								hand='Right'
								systolic={set.rightHand.systolic}
								diastolic={set.rightHand.diastolic}
								onChange={(e) =>
									handleDynamicChange(
										set.id,
										'rightHand',
										e.target.name,
										e.target.value
									)
								}
							/>
						</div>
					</div>
				))}
				<div className='flex space-x-4'>
					<button
						type='button'
						onClick={addBloodPressureSet}
						className='flex items-center font-bold text-3xl text-pink hover:scale-125 duration-200'
					>
						+
					</button>
				</div>
			</div>
			{/* Other Inputs */}
			<InputField
				label='Heart Rate (bpm)'
				name='heartRate'
				value={heartRate || ''}
				onChange={handleChange}
				type='number'
				min={30}
				max={200}
			/>
			<InputField
				label='Respiratory Rate (breaths/min)'
				name='respiratoryRate'
				value={respiratoryRate || ''}
				onChange={handleChange}
				type='number'
				min={10}
				max={60}
			/>
			<div className='grid grid-cols-2 gap-x-14'>
				{/* Left Hand Oxygen */}
				<InputField
					label='Left Hand Oxygen Saturation (%)'
					name='leftHandOxygen'
					value={leftHandOxygen || ''}
					onChange={handleChange}
					type='number'
					min={0}
					max={100}
				/>

				{/* Right Hand Oxygen */}
				<InputField
					label='Right Hand Oxygen Saturation (%)'
					name='rightHandOxygen'
					value={rightHandOxygen || ''}
					onChange={handleChange}
					type='number'
					min={0}
					max={100}
				/>
			</div>
			{/* Pain Scale */}
			<div className='col-span-full mt-6'>
				<label className='block text-sm dark:text-white-bg2'>Pain Scale</label>
				<input
					type='range'
					name='painScale'
					min='0'
					max='10'
					value={painScale || 0}
					onChange={handleChange}
					className='mt-1 w-full cursor-pointer'
				/>
				<span className='block text-center dark:text-white-bg2'>
					{painScale}/10
				</span>
			</div>
		</div>
	);
};

export default HealthMetricsForm;
