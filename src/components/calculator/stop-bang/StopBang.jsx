import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '../../icons/Icons';
import { questions } from './questions';
import { inputStyles } from '../../../utils/styles';

// Helper to calculate BMI
const calculateBMI = (weight, height) => {
	if (!weight || !height) return null;
	return (weight / (height / 100) ** 2).toFixed(1);
};

const STOPBang = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState({});
	const [form, setForm] = useState({ weight: '', height: '' });
	const [bmi, setBmi] = useState(null);
	const [results, setResults] = useState(null);

	// Helper functions to handle step navigation
	const handleAnswerChange = (questionId, answerIndex) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: answerIndex === 0,
		}));
	};

	const nextStep = () => {
		// Ensure an answer has been selected before allowing navigation to the next step
		if (
			currentStep < questions.length &&
			answers[questions[currentStep].id] !== undefined
		) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const calculateRisk = () => {
		// Calculate BMI
		const calculatedBMI = calculateBMI(form.weight, form.height);
		setBmi(calculatedBMI);

		// Count 'Yes' responses for STOP questions
		const stopYesCount = ['snoring', 'tired', 'observed', 'pressure'].filter(
			(question) => answers[question]
		).length;

		// Count 'Yes' responses for all questions
		const totalYesCount = Object.values(answers).filter(Boolean).length;

		// Determine risk
		let riskLevel = 'Low risk';
		if (totalYesCount >= 5) riskLevel = 'High risk';
		else if (totalYesCount >= 3) riskLevel = 'Intermediate risk';
		else if (
			(stopYesCount >= 2 && calculatedBMI > 35) ||
			(stopYesCount >= 2 && answers.neckSize) ||
			(stopYesCount >= 2 && answers.genderMale)
		) {
			riskLevel = 'High risk';
		}

		setResults({ stopYesCount, totalYesCount, riskLevel });
	};

	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	// Validate if the BMI form is completed
	const isBMIFormValid = form.weight && form.height;

	// Check if the current question has been answered
	const isCurrentStepAnswered =
		currentStep < questions.length
			? answers[questions[currentStep].id] !== undefined
			: true;

	const retakeQuiz = () => {
		setCurrentStep(0);
		setAnswers({});
		setForm({ weight: '', height: '' });
		setBmi(null);
		setResults(null);
	};

	return (
		<div className='quiz-container mb-4 flex justify-center'>
			{results === null ? (
				<div className='w-full'>
					<h1 className='text-black dark:text-white-bg md:text-xl font-bold mb-2 text-center'>
						STOP-Bang Screening for OSA
					</h1>
					<AnimatePresence mode='wait'>
						<motion.div
							key={currentStep}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
							className='flex flex-col justify-between items-center pt-4'
						>
							{/* Display either question or BMI input based on the step */}
							{currentStep < questions.length ? (
								<>
									{/* Render Questions */}
									<p className='text-black dark:text-white-bg text-2xl font-semibold text-center lg:px-36 mb-10'>
										{questions[currentStep].question}
									</p>
									<div className='grid grid-cols-2 w-full lg:w-2/3 text-center items-center'>
										{questions[currentStep].answers.map((answer, index) => (
											<label
												className='flex flex-col items-center mb-10'
												key={index}
											>
												<input
													type='radio'
													name={`question-${questions[currentStep].id}`}
													value={index}
													checked={
														answers[questions[currentStep].id] === (index === 0)
													}
													onChange={() =>
														handleAnswerChange(questions[currentStep].id, index)
													}
													className='hidden'
												/>
												<motion.div
													className={`cube-radio !bg-white-bg3 dark:!bg-[#000] !shadow-md ${
														answers[questions[currentStep].id] === (index === 0)
															? 'selected'
															: ''
													}`}
													initial={{ scale: 1 }}
													animate={
														answers[questions[currentStep].id] === (index === 0)
															? { scale: 1.1, backgroundColor: '#b0e1ec' }
															: { scale: 1 }
													}
													transition={{ duration: 0.3 }}
												>
													<span className='answer-text text-xl text-black dark:!text-[#f0f0fe]'>
														{answer}
													</span>
												</motion.div>
											</label>
										))}
									</div>
								</>
							) : (
								<>
									<h3 className='text-lg font-semibold text-black dark:text-white-bg text-center mb-8'>
										Please enter your weight and height to calculate BMI:
									</h3>
									<div className='w- lg:w-2/ flex space-x-6 items-center'>
										{/* Render BMI Step */}
										<div className='flex w-full flex-col'>
											<label className='block text-black dark:text-white-bg2'>
												Weight (kg)
											</label>
											<input
												type='number'
												name='weight'
												value={form.weight}
												onChange={handleFormChange}
												className={`${inputStyles()} !w-full !text-black dark:!text-white-bg !bg-white-fg dark:!bg-[#000]`}
											/>
										</div>
										<div className='flex w-full flex-col'>
											<label className='block text-black dark:text-white-bg2'>
												Height (cm)
											</label>
											<input
												type='number'
												name='height'
												value={form.height}
												onChange={handleFormChange}
												className={`${inputStyles()} !w-full !text-black dark:!text-white-bg !bg-white-fg dark:!bg-[#000]`}
											/>
										</div>
									</div>
									{/* Calculate Risk Button */}
									<button
										className={`btn-1 mx-auto w-full text-center mt-6 mb-8 ${
											!isBMIFormValid ? 'opacity-50 cursor-not-allowed' : ''
										}`}
										onClick={calculateRisk}
										disabled={!isBMIFormValid}
									>
										Calculate Risk
									</button>
								</>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Navigation Buttons */}
					<div className='flex justify-evenly items-center w-full'>
						{currentStep > 0 && (
							<ArrowLeft
								className='previous-btn w-20 text-[#71743c] py-2 px-4 rounded-lg cursor-pointer transition transform hover:scale-110 active:scale-95 hover:text-[#5a6f28] duration-300 ease-in-out'
								onClick={prevStep}
							/>
						)}

						{currentStep < questions.length && (
							<ArrowRight
								className={`next-btn w-20 !text-[#3b78b4] dark:text-[#212121] py-2 px-4 rounded-lg cursor-pointer transition transform hover:scale-110 active:scale-95 hover:text-[#3c79b4] duration-300 ease-in-out ${
									!isCurrentStepAnswered ? 'opacity-50 cursor-not-allowed' : ''
								}`}
								onClick={nextStep}
								disabled={!isCurrentStepAnswered}
							/>
						)}
					</div>
				</div>
			) : (
				<div className='result-container flex flex-col min-h-[70dvh] items-center py-10'>
					<h2 className='text-2xl font-bold mb-4 text-black dark:text-white-bg'>
						Your OSA Risk Classification:{' '}
						<span className='text-green-500'>{results.riskLevel}</span>
					</h2>
					<p className='text-lg mb-4 text-black dark:text-white-bg'>
						Total Yes Responses: {results.totalYesCount}
					</p>
					<p className='text-lg mb-4 text-black dark:text-white-bg'>
						STOP Score: {results.stopYesCount}
					</p>
					{bmi && (
						<p className='text-lg mb-4 text-black dark:text-white-bg'>
							BMI: {bmi}
						</p>
					)}
					<button
						className='btn-1 mx-auto w-full text-center'
						onClick={retakeQuiz}
					>
						Retake Quiz
					</button>
				</div>
			)}
		</div>
	);
};

export default STOPBang;
