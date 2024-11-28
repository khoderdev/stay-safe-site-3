import React, { useState, useReducer } from 'react';
import Stepper from './Stepper';
import { inputStyles } from '../../utils/styles';
import {
	symptomsList,
	diseasesOptions,
	countriesOptions,
	nationalitiesOptions,
} from './data';
import Dropdown from './Dropdown';
import DateInput from './DateInput';
import Validations from './Validations';

const initialState = {
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

function formReducer(state, { name, value, subKey }) {
	if (subKey) {
		return {
			...state,
			[name]: { ...state[name], [subKey]: value },
		};
	}
	return { ...state, [name]: value };
}

const InputField = ({
	label,
	name,
	value,
	onChange,
	type = 'text',
	placeholder,
	min = 0,
	max, // Add max prop
}) => {
	// Custom onChange handler to ensure only numbers are allowed
	const handleChange = (e) => {
		const newValue = e.target.value;
		// Only allow non-negative integers (no symbols, dashes, or e)
		if (/^\d*$/.test(newValue)) {
			// Check if the new value is less than the minimum allowed (if any)
			if (newValue === '' || Number(newValue) >= min) {
				// If max is provided, ensure it doesn't exceed max value
				if (max && Number(newValue) <= max) {
					onChange(e); // Call the parent onChange function if the value is valid
				} else if (!max) {
					onChange(e); // If no max, just update
				}
			}
		}
	};

	return (
		<div>
			<label className='block text-sm !text-black dark:!text-white-bg'>
				{label}
			</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className={`${inputStyles()} !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black`}
				autoComplete='off'
				min={min}
				max={max}
			/>
		</div>
	);
};

const BloodPressureInput = ({ hand, systolic, diastolic, onChange }) => (
	<div>
		<div className=' mb-2'>{hand} Hand </div>
		<div className='flex space-x-8'>
			<InputField
				label='Systolic'
				name={`${hand.toLowerCase()}HandBloodPressure.systolic`}
				value={systolic}
				onChange={onChange}
				type='text' // Using text instead of number to prevent unwanted input behavior
				placeholder='e.g., 120'
				min={0}
			/>
			<InputField
				label='Diastolic'
				name={`${hand.toLowerCase()}HandBloodPressure.diastolic`}
				value={diastolic}
				onChange={onChange}
				type='text' // Using text instead of number to prevent unwanted input behavior
				placeholder='e.g., 80'
				min={0}
			/>
		</div>
	</div>
);

const MonitoringForm = () => {
	const [formData, dispatch] = useReducer(formReducer, initialState);
	const [currentStep, setCurrentStep] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;
		// If the value is a Date object, convert it to a string for storage
		const formattedValue = value instanceof Date ? value.toISOString() : value;

		if (name.includes('.')) {
			const [key, subKey] = name.split('.');
			dispatch({ name: key, value: formattedValue, subKey });
		} else {
			dispatch({ name, value: formattedValue });
		}
	};

	const handleSymptomsChange = (e) => {
		const { value, checked } = e.target;
		const updatedSymptoms = checked
			? [...formData.symptoms, value]
			: formData.symptoms.filter((symptom) => symptom !== value);
		dispatch({ name: 'symptoms', value: updatedSymptoms });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', formData);
	};

	return (
		<div className='md:w-2/3 md:mx-auto space-y-6'>
			<Stepper
				steps={['Patient Info', 'Health Metrics', 'Review & Submit']}
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
				handleSubmit={handleSubmit}
			>
				{currentStep === 0 && (
					<>
						<h1 className='text-center text-2xl text-black dark:text-white-whites font-semibold mb-5'>
							Patient Info
						</h1>
						<div className='grid grid-cols-1 sm:grid-cols-2 p-7 rounded-lg gap-x-14 gap-y-8 !bg-white-bg2 dark:!bg-[#000]'>
							{/* Existing Fields */}
							<InputField
								label='First Name'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
							/>
							<InputField
								label='Last Name'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
							/>
							<DateInput
								label='Date of Birth'
								name='dateOfBirth'
								value={formData.dateOfBirth}
								onChange={handleChange}
							/>
							<Dropdown
								label='Gender'
								name='gender'
								value={formData.gender}
								onChange={handleChange}
								options={['Male', 'Female', 'Other']}
							/>
							<Dropdown
								label='Nationality'
								name='nationality'
								value={formData.nationality}
								onChange={handleChange}
								options={nationalitiesOptions}
							/>
							<Dropdown
								label='Country'
								name='country'
								value={formData.country}
								onChange={handleChange}
								options={countriesOptions}
							/>

							<InputField
								label='Address'
								name='address'
								value={formData.address}
								onChange={handleChange}
							/>
							<Dropdown
								label='Health Condition'
								name='healthCondition'
								value={formData.healthCondition}
								onChange={handleChange}
								options={[...diseasesOptions, 'Others']}
							/>

							{/* Conditional Field for Other Health Condition */}
							{formData.healthCondition === 'Others' && (
								<InputField
									label='Specify Your Health Condition'
									name='otherHealthCondition'
									value={formData.otherHealthCondition}
									onChange={handleChange}
									placeholder='Specify your health condition'
								/>
							)}

							<div className=''>
								<label className='block text-sm text-black dark:text-white-bg mb-1'>
									Do you have any Known Allergies to medications?
								</label>
								<div className='flex items-center space-x-4 mb-4'>
									<label className='text-black dark:text-white-bg'>
										<input
											type='radio'
											name='allergiesMed'
											value='Yes'
											onChange={handleChange}
											checked={formData.allergiesMed === 'Yes'}
											className='mr-2 dark:text-white-whites'
										/>
										Yes
									</label>
									<label className='text-black dark:text-white-bg'>
										<input
											type='radio'
											name='allergiesMed'
											value='No'
											checked={formData.allergiesMed === 'No'}
											onChange={handleChange}
											className='mr-2 dark:text-white-whites'
										/>
										No
									</label>
								</div>
								{formData.allergiesMed === 'Yes' && (
									<InputField
										label='Please specify your medication allergies'
										name='specificAllergiesMed'
										value={formData.specificAllergiesMed}
										onChange={handleChange}
									/>
								)}
							</div>

							<div>
								<label className='block text-sm text-black dark:text-white-bg mb-1'>
									Do you have any Known Food Allergies?
								</label>
								<div className='flex items-center space-x-4 mb-4'>
									<label className='text-black dark:text-white-bg'>
										<input
											type='radio'
											name='hasNutritionAllergie'
											value='Yes'
											checked={formData.hasNutritionAllergie === 'Yes'}
											onChange={handleChange}
											className='mr-2'
										/>
										Yes
									</label>
									<label className='text-black dark:text-white-bg'>
										<input
											type='radio'
											name='hasNutritionAllergie'
											value='No'
											checked={formData.hasNutritionAllergie === 'No'}
											onChange={handleChange}
											className='mr-2'
										/>
										No
									</label>
								</div>
								{formData.hasNutritionAllergie === 'Yes' && (
									<Dropdown
										label='Please specify your food allergies'
										name='specificNutritionAllergie'
										value={formData.specificNutritionAllergie}
										onChange={handleChange}
										options={[
											'Milk',
											'Eggs',
											'Fish',
											'Shellfish',
											'Tree Nuts',
											'Peanuts',
											'Wheat',
											'Soybeans',
											'Sesame',
										]}
									/>
								)}
							</div>

							<Dropdown
								label='Vitrack Kit'
								name='vitrackKit'
								value={formData.vitrackKit}
								onChange={handleChange}
								options={['Granted', 'I have my Own Tools']}
							/>
						</div>
					</>
				)}
				{currentStep === 1 && (
					<>
						<h1 className='text-center text-2xl text-black dark:text-white-whites font-semibold mb-5'>
							Health Metrics
						</h1>

						<form
							onSubmit={handleSubmit}
							className='space-y-4 !bg-white-bg2 dark:!bg-[#000] p-7 rounded-lg text-black dark:text-white-bg'
						>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8 text-sm'>
								<div className='col-span-full'>
									{/* Temperature */}
									<InputField
										label='Oral Temperature (°C)'
										name='temperature'
										value={formData.temperature}
										onChange={handleChange}
										type='text'
									/>
								</div>
								<div className='col-span-full'>Blood Pressure</div>
								<BloodPressureInput
									hand='Left'
									systolic={formData.leftHandBloodPressure.systolic}
									diastolic={formData.leftHandBloodPressure.diastolic}
									onChange={handleChange}
								/>
								<BloodPressureInput
									hand='Right'
									systolic={formData.rightHandBloodPressure.systolic}
									diastolic={formData.rightHandBloodPressure.diastolic}
									onChange={handleChange}
								/>
								<BloodPressureInput
									hand='Left'
									systolic={formData.leftHandBloodPressure.systolic}
									diastolic={formData.leftHandBloodPressure.diastolic}
									onChange={handleChange}
								/>
								<BloodPressureInput
									hand='Right'
									systolic={formData.rightHandBloodPressure.systolic}
									diastolic={formData.rightHandBloodPressure.diastolic}
									onChange={handleChange}
								/>
							</div>
							{/* Heart Rate */}
							<InputField
								label='Heart Rate (bpm)'
								name='heartRate'
								value={formData.heartRate}
								onChange={handleChange}
								type='text'
							/>

							{/* Respiratory Rate */}
							<InputField
								label='Respiratory Rate (breaths/min)'
								name='respiratoryRate'
								value={formData.respiratoryRate}
								onChange={handleChange}
								type='text'
							/>
							<div className='grid grid-cols-2 gap-x-14'>
								{/* Left Hand Oxygen */}
								<InputField
									label='Left Hand Oxygen Saturation (%)'
									name='leftHandOxygen'
									value={formData.leftHandOxygen}
									onChange={handleChange}
									type='text'
									max={100}
								/>

								{/* Right Hand Oxygen */}
								<InputField
									label='Right Hand Oxygen Saturation (%)'
									name='rightHandOxygen'
									value={formData.rightHandOxygen}
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
											<label
												key={index}
												className='flex items-center space-x-2'
											>
												<input
													type='checkbox'
													value={symptom}
													onChange={handleSymptomsChange}
													checked={formData.symptoms.includes(symptom)}
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
										value={formData.painScale}
										onChange={handleChange}
										className='mt-1 w-full cursor-pointer'
									/>
									<span className='block text-center dark:text-white-bg2'>
										{formData.painScale}/10
									</span>
								</div>
							</div>
						</form>
					</>
				)}
				{currentStep === 2 && (
					<div>
						<h2 className='text-center text-2xl text-black dark:text-white-whites font-semibold mb-5'>
							Results
						</h2>
						<div className='flex-1 h-[50%] sticky p-6 bg-[#000] shadow-md rounded-lg space-y-4'>
							<ul className='space-y-2'>
								{Object.entries(formData).map(([key, value]) => {
									if (typeof value === 'object' && value !== null) {
										// Handle nested objects like leftHandBloodPressure and rightHandBloodPressure
										return (
											<li key={key} className='flex justify-between'>
												<span className='font-semibold text-white-bg2 capitalize'>
													{key === 'symptoms'
														? `${key.replace(/([A-Z])/g, ' $1')}:`
														: key.replace(/([A-Z])/g, ' $1')}
												</span>
												<span className='text-white-bg2'>
													{Object.entries(value).map(([subKey, subValue]) => (
														<div key={subKey}>
															{subKey}: {subValue || 'N/A'}
														</div>
													))}
												</span>
											</li>
										);
									}
									return (
										<li key={key} className='flex justify-between'>
											<span className='font-semibold text-white-bg2 capitalize'>
												{key === 'symptoms'
													? `${key.replace(/([A-Z])/g, ' $1')}:`
													: key.replace(/([A-Z])/g, ' $1')}
											</span>
											<span className='text-white-bg2'>
												{Array.isArray(value)
													? `${value.join(', ')}`
													: `${value || 'N/A'}`}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				)}
			</Stepper>
		</div>
	);
};

export default MonitoringForm;
