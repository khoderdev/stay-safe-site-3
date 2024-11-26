import React, { useState, useReducer } from 'react';
import Stepper from './Stepper';
import { inputStyles } from '../../utils/styles';
import { symptomsList, diseasesOptions } from './data';
import Dropdown from './Dropdown';

const initialState = {
	fullName: '',
	age: '',
	gender: '',
	country: '',
	residency: '',
	caza: '',
	healthCondition: '',
	otherHealthCondition: '',
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
}) => (
	<div>
		<label className='block text-sm'>{label}</label>
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={inputStyles()}
			autoComplete='off'
		/>
	</div>
);

const BloodPressureInput = ({ hand, systolic, diastolic, onChange }) => (
	<div>
		<div className='font-semibold mb-2'>{hand} Hand Blood Pressure</div>
		<div className='flex space-x-8'>
			<InputField
				label='Systolic'
				name={`${hand.toLowerCase()}HandBloodPressure.systolic`}
				value={systolic}
				onChange={onChange}
				type='number'
				placeholder='e.g., 120'
			/>
			<InputField
				label='Diastolic'
				name={`${hand.toLowerCase()}HandBloodPressure.diastolic`}
				value={diastolic}
				onChange={onChange}
				type='number'
				placeholder='e.g., 80'
			/>
		</div>
	</div>
);

const MonitoringForm = () => {
	const [formData, dispatch] = useReducer(formReducer, initialState);
	const [currentStep, setCurrentStep] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.includes('.')) {
			const [key, subKey] = name.split('.');
			dispatch({ name: key, value, subKey });
		} else {
			dispatch({ name, value });
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
		<div className='w-2/3 mx-auto bg-white-bg3 dark:bg-dark shadow-md rounded-lg space-y-6'>
			<Stepper
				steps={['Patient Info', 'Health Metrics', 'Review & Submit']}
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
			>
				{currentStep === 0 && (
					<>
						<h1 className='text-center text-2xl font-semibold mb-5'>
							Patient Info
						</h1>
						<div className='grid grid-cols-2 gap-x-14 gap-y-8'>
							<InputField
								label='Full Name'
								name='fullName'
								value={formData.fullName}
								onChange={handleChange}
							/>
							<InputField
								label='Age'
								name='age'
								value={formData.age}
								onChange={handleChange}
								type='number'
							/>
							<Dropdown
								label='Gender'
								name='gender'
								value={formData.gender}
								onChange={handleChange}
								options={['Male', 'Female', 'Other']}
							/>
							<Dropdown
								label='Country'
								name='country'
								value={formData.country}
								onChange={handleChange}
								options={['USA', 'Canada', 'UK']}
							/>
							<InputField
								label='Residency'
								name='residency'
								value={formData.residency}
								onChange={handleChange}
							/>
							<InputField
								label='Caza | Locality'
								name='caza'
								value={formData.caza}
								onChange={handleChange}
							/>
							<Dropdown
								label='Health Condition'
								name='healthCondition'
								value={formData.healthCondition}
								onChange={handleChange}
								options={[...diseasesOptions, 'Others']}
							/>
							{formData.healthCondition === 'Others' && (
								<InputField
									label='Specify Your Health Condition'
									name='otherHealthCondition'
									value={formData.otherHealthCondition}
									onChange={handleChange}
									placeholder='Specify your health condition'
								/>
							)}
							<InputField
								label='Allergies Medication'
								name='allergiesMed'
								value={formData.allergiesMed}
								onChange={handleChange}
							/>
							<Dropdown
								label='Nutrition Allergie'
								name='nutritionAllergie'
								value={formData.nutritionAllergie}
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
							<Dropdown
								label='Vitrack Kit'
								name='vitrackKit'
								value={formData.vitrackKit}
								onChange={handleChange}
								options={['Yes', 'No']}
							/>
						</div>
					</>
				)}
				{currentStep === 1 && (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<h1 className='text-2xl font-semibold'>Health Metrics</h1>
						<div className='grid grid-cols-2 gap-x-14 gap-y-8'>
							<div className='col-span-full'>
								{/* Temperature */}
								<InputField
									label='Temperature (°C)'
									name='temperature'
									value={formData.temperature}
									onChange={handleChange}
									type='number'
								/>
							</div>

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
							type='number'
						/>

						{/* Respiratory Rate */}
						<InputField
							label='Respiratory Rate (breaths/min)'
							name='respiratoryRate'
							value={formData.respiratoryRate}
							onChange={handleChange}
							type='number'
						/>
						<div className='grid grid-cols-2 gap-x-14'>
							{/* Left Hand Oxygen */}
							<InputField
								label='Left Hand Oxygen Saturation (%)'
								name='leftHandOxygen'
								value={formData.leftHandOxygen}
								onChange={handleChange}
								type='number'
							/>

							{/* Right Hand Oxygen */}
							<InputField
								label='Right Hand Oxygen Saturation (%)'
								name='rightHandOxygen'
								value={formData.rightHandOxygen}
								onChange={handleChange}
								type='number'
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
				)}
				{currentStep === 2 && (
					<div>
						<h1 className='text-2xl font-semibold'>Review & Submit</h1>
						<div className='flex-1 h-[50%] sticky p-6 bg-[#000] shadow-md rounded-lg space-y-4'>
							<h2 className='text-xl font-semibold text-center text-white-bg2'>
								Input Values
							</h2>
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

						<button
							type='button'
							onClick={handleSubmit}
							className='w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
						>
							Submit
						</button>
					</div>
				)}
			</Stepper>
		</div>
	);
};

export default MonitoringForm;
