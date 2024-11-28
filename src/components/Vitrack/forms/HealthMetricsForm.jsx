// import React, { useState } from 'react';
// import InputField from '../inputs/InputField';
// import BloodPressureInput from '../inputs/BloodPressureInput';
// import { symptomsList } from '../data';

// const HealthMetricsForm = ({
// 	formData,
// 	handleChange,
// 	handleSymptomsChange,
// }) => {
// 	// State to manage dynamic sets of blood pressure inputs
// 	const [bloodPressureSets, setBloodPressureSets] = useState([
// 		{
// 			id: 1,
// 			leftHand: { systolic: '', diastolic: '' },
// 			rightHand: { systolic: '', diastolic: '' },
// 		},
// 	]);

// 	// Add a new set of blood pressure inputs
// 	const addBloodPressureSet = () => {
// 		setBloodPressureSets((prevSets) => [
// 			...prevSets,
// 			{
// 				id: prevSets.length + 1,
// 				leftHand: { systolic: '', diastolic: '' },
// 				rightHand: { systolic: '', diastolic: '' },
// 			},
// 		]);
// 	};

// 	// Remove a set of blood pressure inputs
// 	const removeBloodPressureSet = (id) => {
// 		setBloodPressureSets((prevSets) => prevSets.filter((set) => set.id !== id));
// 	};

// 	// Handle changes for the dynamically added inputs
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

// 	return (
// 		<div className='p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
// 			<InputField
// 				label='Oral Temperature (°C)'
// 				name='temperature'
// 				value={formData.temperature || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			{/* Render dynamic sets of blood pressure inputs */}
// 			{bloodPressureSets.map((set) => (
// 				<div key={set.id} className='space-y-4 relative border p-4 rounded'>
// 					<button
// 						type='button'
// 						onClick={() => removeBloodPressureSet(set.id)}
// 						className='absolute top-2 right-2 text-red-600 hover:text-red-800 text-3xl font-bold'
// 					>
// 						-
// 					</button>
// 					<BloodPressureInput
// 						hand='Left'
// 						systolic={set.leftHand.systolic}
// 						diastolic={set.leftHand.diastolic}
// 						onChange={(e) =>
// 							handleDynamicChange(
// 								set.id,
// 								'leftHand',
// 								e.target.name,
// 								e.target.value
// 							)
// 						}
// 					/>
// 					<BloodPressureInput
// 						hand='Right'
// 						systolic={set.rightHand.systolic}
// 						diastolic={set.rightHand.diastolic}
// 						onChange={(e) =>
// 							handleDynamicChange(
// 								set.id,
// 								'rightHand',
// 								e.target.name,
// 								e.target.value
// 							)
// 						}
// 					/>
// 				</div>
// 			))}

// 			{/* Button to add a new set of blood pressure inputs */}
// 			<div className='flex space-x-4'>
// 				<button
// 					type='button'
// 					onClick={addBloodPressureSet}
// 					className='flex items-center text-3xl text-blue-600 hover:text-blue-800'
// 				>
// 					+
// 				</button>
// 			</div>
// 			<InputField
// 				label='Heart Rate (bpm)'
// 				name='heartRate'
// 				value={formData.heartRate || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			<InputField
// 				label='Respiratory Rate (breaths/min)'
// 				name='respiratoryRate'
// 				value={formData.respiratoryRate || ''}
// 				onChange={handleChange}
// 				type='text'
// 			/>
// 			<div className='grid grid-cols-2 gap-x-14'>
// 				{/* Left Hand Oxygen */}
// 				<InputField
// 					label='Left Hand Oxygen Saturation (%)'
// 					name='leftHandOxygen'
// 					value={formData.leftHandOxygen || ''}
// 					onChange={handleChange}
// 					type='text'
// 					max={100}
// 				/>

// 				{/* Right Hand Oxygen */}
// 				<InputField
// 					label='Right Hand Oxygen Saturation (%)'
// 					name='rightHandOxygen'
// 					value={formData.rightHandOxygen || ''}
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
// 									checked={formData.symptoms.includes(symptom)}
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
// 						value={formData.painScale || ''}
// 						onChange={handleChange}
// 						className='mt-1 w-full cursor-pointer'
// 					/>
// 					<span className='block text-center dark:text-white-bg2'>
// 						{formData.painScale}/10
// 					</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HealthMetricsForm;

// import React, { useState } from 'react';
// import InputField from '../inputs/InputField';
// import BloodPressureInput from '../inputs/BloodPressureInput';
// import { symptomsList } from '../data';

// const HealthMetricsForm = ({
// 	formData,
// 	handleChange,
// 	handleSymptomsChange,
// }) => {
// 	// State to manage dynamic sets of blood pressure inputs
// 	const [bloodPressureSets, setBloodPressureSets] = useState([
// 		{
// 			id: 1,
// 			leftHand: { systolic: '', diastolic: '' },
// 			rightHand: { systolic: '', diastolic: '' },
// 		},
// 	]);

// 	// Add a new set of blood pressure inputs
// 	const addBloodPressureSet = () => {
// 		setBloodPressureSets((prevSets) => [
// 			...prevSets,
// 			{
// 				id: prevSets.length + 1,
// 				leftHand: { systolic: '', diastolic: '' },
// 				rightHand: { systolic: '', diastolic: '' },
// 			},
// 		]);
// 	};

// 	// Remove a set of blood pressure inputs, ensuring at least one set remains
// 	const removeBloodPressureSet = (id) => {
// 		if (bloodPressureSets.length > 1) {
// 			setBloodPressureSets((prevSets) =>
// 				prevSets.filter((set) => set.id !== id)
// 			);
// 		}
// 	};

// 	// Handle changes for the dynamically added inputs
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

import React, { useState } from 'react';
import InputField from '../inputs/InputField';
import BloodPressureInput from '../inputs/BloodPressureInput';
import { symptomsList } from '../data';

const HealthMetricsForm = ({
	formData,
	handleChange,
	handleSymptomsChange,
}) => {
	// State to manage dynamic sets of blood pressure inputs
	const [bloodPressureSets, setBloodPressureSets] = useState([
		{
			id: 1,
			isDefault: true, // Mark the default set
			leftHand: { systolic: '', diastolic: '' },
			rightHand: { systolic: '', diastolic: '' },
		},
	]);

	// Add a new set of blood pressure inputs
	const addBloodPressureSet = () => {
		setBloodPressureSets((prevSets) => [
			...prevSets,
			{
				id: prevSets.length + 1,
				isDefault: false, // Mark as a newly added set
				leftHand: { systolic: '', diastolic: '' },
				rightHand: { systolic: '', diastolic: '' },
			},
		]);
	};

	// Remove a set of blood pressure inputs, only if it's not a default set
	const removeBloodPressureSet = (id) => {
		setBloodPressureSets((prevSets) =>
			prevSets.filter((set) => set.id !== id || set.isDefault)
		);
	};

	// Handle changes for the dynamically added inputs
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

	return (
		<div className='p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
			<InputField
				label='Oral Temperature (°C)'
				name='temperature'
				value={formData.temperature || ''}
				onChange={handleChange}
				type='text'
			/>

			<div className='border-2 rounded-lg p-2 space-y-2 border-black'>
				<p className='text-center font-semibold dark:text-white-whites'> Blood Pressure</p>
				{/* Render dynamic sets of blood pressure inputs */}
				{bloodPressureSets.map((set) => (
					<div
						key={set.id}
						className='space-y-4 relative border border-black p-4 rounded'
					>
						{!set.isDefault && (
							<button
								type='button'
								onClick={() => removeBloodPressureSet(set.id)}
								className='absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl font-bold'
							>
								-
							</button>
						)}

						<div className='sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
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

				{/* Buttons to add sets */}
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
			<InputField
				label='Heart Rate (bpm)'
				name='heartRate'
				value={formData.heartRate || ''}
				onChange={handleChange}
				type='text'
			/>
			<InputField
				label='Respiratory Rate (breaths/min)'
				name='respiratoryRate'
				value={formData.respiratoryRate || ''}
				onChange={handleChange}
				type='text'
			/>
			<div className='grid grid-cols-2 gap-x-14'>
				{/* Left Hand Oxygen */}
				<InputField
					label='Left Hand Oxygen Saturation (%)'
					name='leftHandOxygen'
					value={formData.leftHandOxygen || ''}
					onChange={handleChange}
					type='text'
					max={100}
				/>

				{/* Right Hand Oxygen */}
				<InputField
					label='Right Hand Oxygen Saturation (%)'
					name='rightHandOxygen'
					value={formData.rightHandOxygen || ''}
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
						value={formData.painScale || ''}
						onChange={handleChange}
						className='mt-1 w-full cursor-pointer'
					/>
					<span className='block text-center dark:text-white-bg2'>
						{formData.painScale}/10
					</span>
				</div>
			</div>
		</div>
	);
};

export default HealthMetricsForm;
