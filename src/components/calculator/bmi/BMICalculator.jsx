import { useState } from 'react';

const BMICalculator = () => {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [bmi, setBmi] = useState(null);
	const [category, setCategory] = useState('');

	const calculateBMI = (e) => {
		e.preventDefault();

		// Check if both weight and height are empty
		if (!weight && !height) {
			// Clear results if both inputs are null or empty
			setBmi(null);
			setCategory('');
			return; // Exit the function
		}

		// Proceed with BMI calculation if both inputs are provided
		if (weight && height) {
			const heightInMeters = height / 100;
			const calculatedBMI = (
				weight /
				(heightInMeters * heightInMeters)
			).toFixed(2);
			setBmi(calculatedBMI);
			determineCategory(calculatedBMI);
		}
	};

	const determineCategory = (bmi) => {
		if (bmi < 16) {
			setCategory('Severely Underweight');
		} else if (bmi >= 16 && bmi < 17) {
			setCategory('Underweight');
		} else if (bmi >= 17 && bmi < 25) {
			setCategory('Normal');
		} else if (bmi >= 25 && bmi < 30) {
			setCategory('Overweight');
		} else if (bmi >= 30 && bmi < 35) {
			setCategory('Obese Class I');
		} else if (bmi >= 35 && bmi < 40) {
			setCategory('Obese Class II');
		} else {
			setCategory('Obese Class III');
		}
	};

	const handleWeightChange = (e) => {
		setWeight(e.target.value);
		// Clear results when weight input changes
		if (e.target.value === '') {
			setBmi(null);
			setCategory('');
		}
	};

	const handleHeightChange = (e) => {
		setHeight(e.target.value);
		// Clear results when height input changes
		if (e.target.value === '') {
			setBmi(null);
			setCategory('');
		}
	};

	return (
		<div className='w-full sm:w-[70%] md:w-[50%] mx-auto p-5 py-7 rounded-lg shadow-md bg-white-bg dark:bg-black drop-shadow-lg text-black dark:text-white-bg'>
			<h2 className='text-2xl font-bold text-center mb-4'>BMI Calculator</h2>
			<form onSubmit={calculateBMI} className='space-y-6'>
				<div>
					<label htmlFor='weight' className='block mb-1'>
						Weight (kg)
					</label>
					<input
						type='number'
						id='weight'
						min={0}
						value={weight}
						onChange={handleWeightChange}
						className='w-full p-2 bg-white-fg dark:bg-[#000] text-black dark:text-white-bg border border-gray-300 rounded focus:outline-none focus:border-blue'
						required
					/>
				</div>
				<div>
					<label htmlFor='height' className='block mb-1'>
						Height (cm)
					</label>
					<input
						type='number'
						id='height'
						min={0}
						value={height}
						onChange={handleHeightChange}
						className='w-full p-2 bg-white-fg dark:bg-[#000] text-black dark:text-white-bg border border-gray-300 rounded focus:outline-none focus:border-blue'
						required
					/>
				</div>

				<div className='flex w-full justify-center items-center'>
					<button
						type='submit'
						className='btn-3 !border-green-700 hover:bg-green-700 hover:text-white-bg'
					>
						Calculate BMI
					</button>
				</div>
			</form>
			{bmi && (
				<div className='flex justify-center mt-6'>
					<div className='p-4 border-2 scale-105 rounded-md border-green-700 w-fit'>
						<h3 className='text-xl font-semibold mb-1'>
							Your BMI is: <span className='text-green-500'>{bmi}</span>
						</h3>

						<p className='text-gray-500'>{category}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default BMICalculator;
