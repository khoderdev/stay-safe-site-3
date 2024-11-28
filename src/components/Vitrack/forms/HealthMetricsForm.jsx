import React from 'react';
import InputField from '../inputs/InputField';
import BloodPressureInput from '../inputs/BloodPressureInput';
import { symptomsList } from '../data';

const HealthMetricsForm = ({
	formData,
	handleChange,
	handleSymptomsChange,
}) => {
	return (
		<div className='p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
			<InputField
				label='Oral Temperature (°C)'
				name='temperature'
				value={formData.temperature || ''}
				onChange={handleChange}
				type='text'
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
