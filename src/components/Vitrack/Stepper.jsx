import React from 'react';

const Stepper = ({
	steps,
	children,
	currentStep,
	setCurrentStep,
	handleSubmit,
}) => {
	const nextStep = () =>
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

	const isLastStep = currentStep === steps.length - 1;

	return (
		<div className='mx-auto p-4 !text-black shadow-md rounded-lg space-y-6 !overflow-hidden'>
			{/* Render Step Content Dynamically */}
			<div>{children[currentStep]}</div>

			{/* Navigation Buttons */}
			<div className='flex justify-center space-x-16 mt-6'>
				<button
					onClick={prevStep}
					disabled={currentStep === 0}
					className='px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100'
				>
					Previous
				</button>

				{isLastStep ? (
					<button
						onClick={handleSubmit}
						className='px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600'
					>
						Submit
					</button>
				) : (
					<button
						onClick={nextStep}
						className='px-4 py-2 rounded bg-pink text-white-bg hover:bg-[#e55e80]'
					>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default Stepper;
