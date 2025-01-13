import React, { useState, useReducer } from 'react';
import Stepper from '../Stepper';
import PatientInfoForm from './PatientInfoForm';
import HealthMetricsForm from './HealthMetricsForm';
import ReviewSection from '../ReviewSection';
import { formReducer, initialState } from './formReducer';

const MonitoringForm = () => {
	const [formData, dispatch] = useReducer(formReducer, initialState);
	const [currentStep, setCurrentStep] = useState(0);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.includes('.')) {
			const [key, subKey] = name.split('.');
			dispatch({ name: key, value, subKey });
		} else {
			dispatch({
				name, value,
				subKey: undefined
			});
		}
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
					<PatientInfoForm formData={formData} handleChange={handleChange} />
				)}
				{currentStep === 1 && (
					<HealthMetricsForm formData={formData} handleChange={handleChange} />
				)}
				{currentStep === 2 && <ReviewSection formData={formData} />}
			</Stepper>
		</div>
	);
};

export default MonitoringForm;
