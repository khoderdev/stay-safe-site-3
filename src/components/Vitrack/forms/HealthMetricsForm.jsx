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

// 	return (
// 		<div className='xsm:p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
// 			<InputField
// 				label='Oral Temperature (°C)'
// 				name='temperature'
// 				value={temperature || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>

// 			<div className='border-2 rounded-lg p-2 space-y-2 border-black'>
// 				<p className='text-center font-semibold dark:text-white-whites'>
// 					Blood Pressure
// 				</p>
// 				{/* Render dynamic sets of blood pressure inputs */}
// 				{bloodPressureSets.map((set) => (
// 					<div
// 						key={set.id}
// 						className='space-y-4 relative border border-black p-4 rounded'
// 					>
// 						{/* Remove Button */}
// 						{!set.isDefault && (
// 							<button
// 								type='button'
// 								onClick={() => removeBloodPressureSet(set.id)}
// 								className='absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl font-bold'
// 							>
// 								-
// 							</button>
// 						)}

// 						{/* Blood Pressure Inputs */}
// 						<div className='xsm:grid xsm:grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
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

// 				{/* Button to add a new blood pressure set */}
// 				<div className='flex space-x-4'>
// 					<button
// 						type='button'
// 						onClick={addBloodPressureSet}
// 						className='flex items-center font-bold text-3xl text-blue-600 hover:text-blue-800'
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

// 				{/* Symptoms */}
// 				<div className='col-span-full mt-6'>
// 					<h2 className='text-lg font-semibold dark:text-white-bg2'>
// 						Symptoms
// 					</h2>
// 					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
// 						{symptomsList.map((symptom, index) => (
// 							<label key={index} className='flex items-center space-x-2'>
// 								<input
// 									type='checkbox'
// 									value={symptom || ''}
// 									onChange={handleSymptomsChange}
// 									checked={symptoms.includes(symptom)}
// 									className='form-checkbox'
// 								/>
// 								<span className='dark:text-white-bg2'>{symptom}</span>
// 							</label>
// 						))}
// 					</div>
// 				</div>

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
import { getWarnings } from '../conditions'; // Assuming this is where your getWarnings logic resides

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'temperature':
				setTemperature(value);
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

	return (
		<div className='xsm:p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
			{/* Your other form inputs here */}
			<div className='space-y-4'>
				{warnings.length > 0 && (
					<div className='bg-red-500 text-white p-3 rounded'>
						<h3 className='font-bold'>Warnings:</h3>
						<ul>
							{warnings.map((warning, index) => (
								<li key={index}>{warning.text}</li>
							))}
						</ul>
					</div>
				)}
			</div>
			{/* Blood Pressure Inputs */}
			<div className='border-2 rounded-lg p-2 space-y-2 border-black'>
				<p className='text-center font-semibold dark:text-white-whites'>
					Blood Pressure
				</p>
				{bloodPressureSets.map((set) => (
					<div
						key={set.id}
						className='space-y-4 relative border border-black p-4 rounded'
					>
						{/* Blood Pressure Inputs */}
						<div className='xsm:grid xsm:grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
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
						className='flex items-center font-bold text-3xl text-blue-600 hover:text-blue-800'
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
				type='text'
			/>
			<InputField
				label='Respiratory Rate (breaths/min)'
				name='respiratoryRate'
				value={respiratoryRate || ''}
				onChange={handleChange}
				type='text'
			/>
			<div className='grid grid-cols-2 gap-x-14'>
				{/* Left Hand Oxygen */}
				<InputField
					label='Left Hand Oxygen Saturation (%)'
					name='leftHandOxygen'
					value={leftHandOxygen || ''}
					onChange={handleChange}
					type='text'
					max={100}
				/>

				{/* Right Hand Oxygen */}
				<InputField
					label='Right Hand Oxygen Saturation (%)'
					name='rightHandOxygen'
					value={rightHandOxygen || ''}
					onChange={handleChange}
					type='text'
					max={100}
				/>

				{/* Symptoms */}
				<div className='col-span-full mt-6'>
					<h2 className='text-lg font-semibold dark:text-white-bg2'>
						Symptoms
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						{symptomsList.map((symptom, index) => (
							<label key={index} className='flex items-center space-x-2'>
								<input
									type='checkbox'
									value={symptom || ''}
									onChange={handleSymptomsChange}
									checked={symptoms.includes(symptom)}
									className='form-checkbox'
								/>
								<span className='dark:text-white-bg2'>{symptom}</span>
							</label>
						))}
					</div>
				</div>

				{/* Pain Scale */}
				<div className='col-span-full mt-6'>
					<label className='block text-sm dark:text-white-bg2'>
						Pain Scale
					</label>
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
		</div>
	);
};

export default HealthMetricsForm;
