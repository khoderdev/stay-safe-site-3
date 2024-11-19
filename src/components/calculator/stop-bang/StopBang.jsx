import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Helper to calculate BMI
const calculateBMI = (weight, height) => {
	if (!weight || !height) return null;
	return (weight / (height / 100) ** 2).toFixed(1);
};

const STOPBang = () => {
	const [form, setForm] = useState({
		snoring: false,
		tired: false,
		observed: false,
		pressure: false,
		weight: '',
		height: '',
		neckSize: false,
		ageOver50: false,
		genderMale: false,
	});

	const [bmi, setBmi] = useState(null);
	const [results, setResults] = useState(null);

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const calculateRisk = () => {
		// Calculate BMI
		const calculatedBMI = calculateBMI(form.weight, form.height);
		setBmi(calculatedBMI);

		// Count 'Yes' responses for STOP questions
		const stopYesCount = ['snoring', 'tired', 'observed', 'pressure'].filter(
			(question) => form[question]
		).length;

		// Count 'Yes' responses for all questions
		const totalYesCount = [
			'snoring',
			'tired',
			'observed',
			'pressure',
			'neckSize',
			'ageOver50',
			'genderMale',
		].filter((question) => form[question]).length;

		// Determine risk
		let riskLevel = 'Low risk';
		if (totalYesCount >= 5) riskLevel = 'High risk';
		else if (totalYesCount >= 3) riskLevel = 'Intermediate risk';
		else if (
			(stopYesCount >= 2 && calculatedBMI > 35) ||
			(stopYesCount >= 2 && form.neckSize) ||
			(stopYesCount >= 2 && form.genderMale)
		) {
			riskLevel = 'High risk';
		}

		setResults({ stopYesCount, totalYesCount, riskLevel });
	};

	return (
		<div className='max-w-2xl flex flex-col mx-auto p-6 dark:text-white-bg shadow-md rounded-lg'>
			<motion.h1
				className='text-3xl font-bold mb-14 text-center'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Enhanced STOP-Bang Screening for OSA
			</motion.h1>
			<form className='space-y-4'>
				{/* Questions */}
				{[
					'snoring',
					'tired',
					'observed',
					'pressure',
					'neckSize',
					'ageOver50',
					'genderMale',
				].map((field) => (
					<motion.div
						key={field}
						className='flex items-center justify-between'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<label className='flex-1 text-2xl'>{getLabelText(field)}</label>
						<input
							type='checkbox'
							name={field}
							checked={form[field]}
							onChange={handleInputChange}
							className='form-checkbox h-5 w-5 text-blue-500'
						/>
					</motion.div>
				))}

				{/* Weight & Height */}
				<motion.div
					className='flex items-center mt-16 space-x-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className='flex-1'>
						<label className=''>Weight (kg)</label>
						<input
							type='number'
							name='weight'
							value={form.weight}
							onChange={handleInputChange}
							className='form-input text-black  mt-1 block w-full border-gray-300 rounded-md'
						/>
					</div>
					<div className='flex-1'>
						<label className=''>Height (cm)</label>
						<input
							type='number'
							name='height'
							value={form.height}
							onChange={handleInputChange}
							className='form-input mt-1 text-black block w-full border-gray-300 rounded-md'
						/>
					</div>
				</motion.div>

				{/* Calculate Button */}
				<motion.button
					type='button'
					onClick={calculateRisk}
					className='w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Calculate Risk
				</motion.button>
			</form>

			{/* Results Section */}
			{results && (
				<motion.div
					className='mt-6 p-4 bg-[#000] rounded-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className='text-xl font-bold mb-2'>Results</h2>
					<p className='text-xl font- mb-2'>
						BMI: {bmi} kg/m<sup>2</sup>
					</p>
					<p className='text-xl font- mb-2'>
						Yes to {results.stopYesCount} of the STOP questions.
					</p>
					<p className='text-xl font- mb-2'>
						Yes to {results.totalYesCount} of all questions.
					</p>
					<p className='text-lg font-semibold'>
						Risk Classification: {results.riskLevel}
					</p>
				</motion.div>
			)}
		</div>
	);
};

// Function to get question labels
const getLabelText = (field) => {
	const labels = {
		snoring: `Do you snore loudly (loud enough to be heard through closed
doors or that your bed partner elbows you for snoring at night)?`,
		tired: `Do you often feel tired, fatigued, or sleepy during the daytime (such
as falling asleep during driving or talking to someone)?`,
		observed: `Has anyone observed you stop breathing or choking/gasping
during your sleep?`,
		pressure: 'Do you have or are you being treated for high blood pressure?',
		neckSize: `Neck size large (measured around Adam's apple)? Is your shirt collar 16
inches (40 cm) or larger?`,
		ageOver50: 'Are you older than 50?',
		genderMale: `Gender (biologic sex): male?`,
	};
	return labels[field];
};

export default STOPBang;
