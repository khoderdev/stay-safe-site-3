import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { symptomsList } from '../data';
import InputField from '../inputs/InputField';
import { temperatureAtom, symptomsAtom } from '../../../atoms/store';
import { getWarnings } from '../conditions';
import validateField from '../Validations';


function Symptoms() {
	const [temperature, setTemperature] = useAtom(temperatureAtom);
	const [symptoms, setSymptoms] = useAtom(symptomsAtom);

	const getHealthWarnings = () => {
		const warnings = getWarnings({
			temperature,
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

	const warnings = getHealthWarnings();

	// Use useEffect to monitor state changes and log warnings
	useEffect(() => {
		console.log('Temperature or Symptoms changed:', { temperature, symptoms });
		console.log('Warnings:', warnings);
	}, [temperature, symptoms]);

	return (
		<div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
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

			{/* Symptoms */}
			<div className='col-span-full mt-6'>
				<h2 className='text-lg font-semibold dark:text-white-bg2'>Symptoms</h2>
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
		</div>
	);
}

export default Symptoms;
