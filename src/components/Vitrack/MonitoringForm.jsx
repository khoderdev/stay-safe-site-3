import React, { useState } from 'react';
import { inputStyles } from '../../utils/styles';

const MonitoringForm = () => {
	const [formData, setFormData] = useState({
		date: '',
		time: '',
		leftHandBloodPressure: { systolic: '', diastolic: '' },
		rightHandBloodPressure: { systolic: '', diastolic: '' },
		leftHandOxygen: '',
		rightHandOxygen: '',
		heartRate: '',
		respiratoryRate: '',
		temperature: '',
		weight: '',
		bloodSugar: '',
		painScale: 0,
		symptoms: [],
	});

	const symptomsList = [
		'Chest pain',
		'Back pain that is severe, sharp, with a ripping or tearing quality',
		'Cough',
		'Leg swelling',
		'Vomiting',
		'Blue color in the skin, lips, and nail beds',
		'A pressing, squeezing, or crushing pain, usually in the chest under your breastbone',
		'Pain that may also occur in your upper back, both arms, neck, or ear lobes',
		'Chest pain that spreads to your arms, shoulders, jaw, neck, or back',
		'Shortness of breath',
		'Weakness',
		'Extreme tiredness (fatigue)',
		'Feeling faint',
	];

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name.includes('.')) {
			const [key, subKey] = name.split('.');
			setFormData((prev) => ({
				...prev,
				[key]: { ...prev[key], [subKey]: value },
			}));
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSymptomsChange = (e) => {
		const { value, checked } = e.target;
		setFormData((prevState) => {
			const updatedSymptoms = checked
				? [...prevState.symptoms, value]
				: prevState.symptoms.filter((symptom) => symptom !== value);
			return { ...prevState, symptoms: updatedSymptoms };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', formData);
	};

	return (
		<div className='border flex flex-col lg:flex-row mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 lg:space-y-0 lg:space-x-6'>
			{/* Form Section */}
			<form
				onSubmit={handleSubmit}
				className='flex-1 p-6 bg-white shadow-md rounded-lg space-y-4'
			>
				<h1 className='text-2xl font-semibold text-center dark:text-white-bg2'>
					Health Metrics Form
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Date
						</label>
						<input
							type='date'
							name='date'
							value={formData.date}
							onChange={handleChange}
							className={`${inputStyles()}`}
						/>
					</div>
					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Time
						</label>
						<input
							type='time'
							name='time'
							value={formData.time}
							onChange={handleChange}
							className={`${inputStyles()}`}
						/>
					</div>
				</div>

				{/* Blood Pressure Section */}
				<div className='text-center text-xl font-semibold'>Blood Pressure</div>
				<div className='lef-hand-container'>
					<div className='text-left font-semibold flex flex-col mb-2'>
						Left Hand
					</div>
					<div className='flex justify-between space-x-8'>
						<div className='w-full'>
							<label className='block text-sm dark:text-white-bg2'>
								Systolic
							</label>
							<input
								type='text'
								name='leftHandBloodPressure.systolic'
								placeholder='e.g., 120'
								value={formData.leftHandBloodPressure.systolic}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
						<div className='w-full'>
							<label className='block text-sm dark:text-white-bg2'>
								Diastolic
							</label>
							<input
								type='text'
								name='leftHandBloodPressure.diastolic'
								placeholder='e.g., 80'
								value={formData.leftHandBloodPressure.diastolic}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
					</div>
				</div>

				<div className='right-hand-container mt-4'>
					<div className='text-left font-semibold flex flex-col mb-2'>
						Right Hand
					</div>
					<div className='flex justify-between space-x-8'>
						<div className='w-full'>
							<label className='block text-sm dark:text-white-bg2'>
								Systolic
							</label>
							<input
								type='text'
								name='rightHandBloodPressure.systolic'
								placeholder='e.g., 120'
								value={formData.rightHandBloodPressure.systolic}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
						<div className='w-full'>
							<label className='block text-sm dark:text-white-bg2'>
								Diastolic
							</label>
							<input
								type='text'
								name='rightHandBloodPressure.diastolic'
								placeholder='e.g., 80'
								value={formData.rightHandBloodPressure.diastolic}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
					</div>
					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Heart Rate
						</label>
						<input
							type='number'
							name='heartRate'
							placeholder='bpm'
							value={formData.heartRate}
							onChange={handleChange}
							className={`${inputStyles()}`}
						/>
					</div>
					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Respiratory Rate
						</label>
						<input
							type='number'
							name='respiratoryRate'
							placeholder='breaths/min'
							value={formData.respiratoryRate}
							onChange={handleChange}
							className={`${inputStyles()}`}
						/>
					</div>
					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Temperature
						</label>
						<input
							type='number'
							name='temperature'
							placeholder='°C'
							value={formData.temperature}
							onChange={handleChange}
							className={`${inputStyles()}`}
						/>
					</div>

					<div className='flex justify-between space-x-8'>
						{/* Oxygen Section */}
						<div className='w-full'>
							<label className='block text-sm font-medium dark:text-white-bg2'>
								Oxygen (SpO2) Left Hand
							</label>
							<input
								type='number'
								name='leftHandOxygen'
								placeholder='%'
								value={formData.leftHandOxygen}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
						<div className='w-full'>
							<label className='block text-sm font-medium dark:text-white-bg2'>
								Oxygen (SpO2) Right Hand
							</label>
							<input
								type='number'
								name='rightHandOxygen'
								placeholder='%'
								value={formData.rightHandOxygen}
								onChange={handleChange}
								className={`${inputStyles()}`}
							/>
						</div>
					</div>

					<div>
						<label className='block text-sm font-medium dark:text-white-bg2'>
							Pain Scale
						</label>
						<input
							type='range'
							name='painScale'
							min='0'
							max='10'
							value={formData.painScale}
							onChange={handleChange}
							className='mt-1 w-full'
						/>
						<span className='block text-center text-gray-700'>
							{formData.painScale}/10
						</span>
					</div>
				</div>

				{/* Symptoms Section */}
				<div className='pt-4'>
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
				<button
					type='submit'
					className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
				>
					Submit
				</button>
			</form>

			{/* Display Section */}
			<div className='flex-1 h-[50%] sticky p-6 bg-[#000] shadow-md rounded-lg space-y-4'>
				<h2 className='text-xl font-semibold text-center text-white-bg2'>
					Input Values
				</h2>
				<ul className='space-y-2'>
					{Object.entries(formData).map(([key, value]) => (
						<li key={key} className='flex justify-between'>
							<span
								className={`font- text-white-bg2 capitalize ${
									key === 'symptoms' ? 'mr-2' : ''
								}`}
							>
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
					))}
				</ul>
			</div>
		</div>
	);
};

export default MonitoringForm;
