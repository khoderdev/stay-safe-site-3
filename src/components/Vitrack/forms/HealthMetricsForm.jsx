import React from 'react';
import { useAtom } from 'jotai';
import InputField from '../inputs/InputField';
import BloodPressureInput from '../inputs/BloodPressureInput';
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
import { getWarnings, temperatureWarning } from '../conditions';
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

	// Handler for temperature change
	const handleTemperatureChange = (value) => {
		setTemperature(value); // Update Jotai state
	};

	// Get warnings based on current form data
	const warnings = getWarnings({
		temperature,
		systolicBP: calculateAverages().systolic,
		diastolicBP: calculateAverages().diastolic,
		heartRate,
		respiratoryRate,
		spO2: leftHandOxygen,
		symptoms,
	});

	// Get temperature warning (only if temperature is valid)
	const tempWarning =
		temperature && !isNaN(temperature)
			? temperatureWarning(temperature, symptoms)
			: null;

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
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

	// Handle dynamic changes in blood pressure sets
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

	// Add a new blood pressure set
	const addBloodPressureSet = () => {
		const newSet = {
			id: bloodPressureSets.length + 1,
			isDefault: false,
			leftHand: { systolic: '', diastolic: '' },
			rightHand: { systolic: '', diastolic: '' },
		};
		setBloodPressureSets([...bloodPressureSets, newSet]);
	};

	// Remove a blood pressure set
	const removeBloodPressureSet = (id) => {
		setBloodPressureSets(bloodPressureSets.filter((set) => set.id !== id));
	};

	return (
		<div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
			{/* Temperature Input */}
			<div className=''>
				<div className='w-1/2 pb-6'>
					<TemperatureWheel
						label='Oral Temperature (°C)'
						value={temperature} // Ensure value is a string
						onChange={handleTemperatureChange}
					/>
				</div>
				{/* Temperature Warning */}
				{tempWarning && (
					<div
						className={`w-full p-3 rounded dark:text-white-bg font-medium text-sm ${
							tempWarning.color === 'green'
								? 'ring ring-green-500'
								: tempWarning.color === 'yellow'
								? 'ring ring-yellow-500'
								: tempWarning.color === 'orange'
								? 'ring ring-orange-500'
								: 'ring ring-red-500'
						} text-white`}
					>
						{tempWarning.message}
					</div>
				)}
			</div>

			{/* General Warnings */}
			<div className='space-y-4'>
				{warnings.length > 0 && (
					<div className='bg-gray-200 dark:bg-dark ring ring-gray-200 dark:ring-dark dark:text-gray-50 p-3 rounded'>
						<h3 className='font-bold mb-2'>Warnings:</h3>
						<ul>
							{warnings.map((warning, index) => (
								<li key={index}>{warning.text}</li>
							))}
						</ul>
					</div>
				)}
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
