import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../depressing-screening/PHQ9.css'
import { ArrowLeft, ArrowRight } from '../../icons/Icons';


// Helper to calculate BMI
const calculateBMI = (weight, height) => {
	if (!weight || !height) return null;
	return (weight / (height / 100) ** 2).toFixed(1);
};

const STOPBang = () => {
	const questions = [
		{
			id: 'snoring',
			question: `Do you snore loudly (loud enough to be heard through closed doors or that your bed partner elbows you for snoring at night)?`,
			answers: ['Yes', 'No'],
		},
		{
			id: 'tired',
			question: `Do you often feel tired, fatigued, or sleepy during the daytime (such as falling asleep during driving or talking to someone)?`,
			answers: ['Yes', 'No'],
		},
		{
			id: 'observed',
			question: `Has anyone observed you stop breathing or choking/gasping during your sleep?`,
			answers: ['Yes', 'No'],
		},
		{
			id: 'pressure',
			question: 'Do you have or are you being treated for high blood pressure?',
			answers: ['Yes', 'No'],
		},
		{
			id: 'neckSize',
			question: `Neck size large (measured around Adam's apple)? Is your shirt collar 16 inches (40 cm) or larger?`,
			answers: ['Yes', 'No'],
		},
		{
			id: 'ageOver50',
			question: 'Are you older than 50?',
			answers: ['Yes', 'No'],
		},
		{
			id: 'genderMale',
			question: `Gender (biologic sex): male?`,
			answers: ['Yes', 'No'],
		},
	];

	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState({});
	const [form, setForm] = useState({ weight: '', height: '' });
	const [bmi, setBmi] = useState(null);
	const [results, setResults] = useState(null);

	const handleAnswerChange = (questionId, answerIndex) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: answerIndex === 0, // Yes = true, No = false
		}));
	};

	const nextStep = () => {
		if (currentStep < questions.length - 1) {
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
							transition={{ duration: 0.5 }}
							className='flex flex-col justify-between items-center pt-4'
						>
							<p className='text-black dark:text-white-bg text-2xl font-bold text-center mb-10'>
								{questions[currentStep].question}
							</p>

							{/* Answer Buttons */}
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
											checked={answers[questions[currentStep].id] === (index === 0)}
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
						</motion.div>
					</AnimatePresence>

					{/* Button Container */}
					<div className='flex justify-evenly items-center w-full'>
						{currentStep > 0 && (
							<ArrowLeft
								className='previous-btn w-20 text-[#71743c] py-2 px-4 rounded-lg cursor-pointer transition transform hover:scale-110 active:scale-95 hover:text-[#5a6f28] duration-300 ease-in-out'
								onClick={prevStep}
							>
								Previous
							</ArrowLeft>
						)}

						<div>
							{currentStep === questions.length - 1 ? (
								<div>
									{/* Weight & Height Inputs */}
									<div className='flex items-center mt-4 space-x-4'>
										<div className='flex-1'>
											<label className='block'>Weight (kg)</label>
											<input
												type='number'
												name='weight'
												value={form.weight}
												onChange={handleFormChange}
												className='form-input text-black mt-1 block w-full border-gray-300 rounded-md'
											/>
										</div>
										<div className='flex-1'>
											<label className='block'>Height (cm)</label>
											<input
												type='number'
												name='height'
												value={form.height}
												onChange={handleFormChange}
												className='form-input mt-1 text-black block w-full border-gray-300 rounded-md'
											/>
										</div>
									</div>
									{/* Calculate Risk Button */}
									<button
										className='btn-1 mx-auto w-full text-center mt-4'
										onClick={calculateRisk}
									>
										Calculate Risk
									</button>
								</div>
							) : (
								<ArrowRight
									className='next-btn w-20 !text-[#3b78b4] dark:text-[#212121] py-2 px-4 rounded-lg cursor-pointer transition transform hover:scale-110 active:scale-95 hover:text-[#3c79b4] duration-300 ease-in-out'
									onClick={nextStep}
									disabled={answers[questions[currentStep].id] === undefined}
								>
									Next
								</ArrowRight>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className='result-container flex flex-col min-h-[70dvh] items-center py-10'>
					<h2 className='text-2xl font-bold mb-4 text-black dark:text-white-bg'>
						Your OSA Risk Classification: <span className='text-green-500'>{results.riskLevel}</span>
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
						onClick={() => setResults(null)}
					>
						Retake Quiz
					</button>
				</div>
			)}
		</div>
	);
};

export default STOPBang;
