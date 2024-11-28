import React, { useReducer, useState } from 'react';
import Stepper from './Stepper';
import PatientInfoForm from './PatientInfoForm';
import HealthMetricsForm from './HealthMetricsForm';
import ReviewResults from './ReviewSection';
import { initialState, formReducer } from './formReducer';

const Vitrack = () => {
	const [formData, dispatch] = useReducer(formReducer, initialState);
	const [currentStep, setCurrentStep] = useState(0);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		const updatedValue = type === 'checkbox' ? checked : value;

		if (name.includes('.')) {
			const [key, subKey] = name.split('.');
			dispatch({ name: key, value: updatedValue, subKey });
		} else {
			dispatch({ name, value: updatedValue });
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
					<PatientInfoForm formData={formData} handleChange={handleChange} />
				)}
				{currentStep === 1 && (
					<HealthMetricsForm
						formData={formData}
						handleChange={handleChange}
						handleSymptomsChange={handleSymptomsChange}
					/>
				)}
				{currentStep === 2 && <ReviewResults formData={formData} />}
			</Stepper>
		</div>
	);
};

export default Vitrack;
