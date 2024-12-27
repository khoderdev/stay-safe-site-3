import { useState } from 'react';
import './STI.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '../../icons/Icons';
import { questions } from './questions';

const STIQuiz = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState({});
	const [showResults, setShowResults] = useState(false);

	const handleAnswerChange = (questionIndex, answerIndex) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionIndex]: answerIndex,
		}));
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const nextStep = () => {
		if (answers[currentStep] !== undefined) {
			if (currentStep < questions.length - 1) {
				setCurrentStep(currentStep + 1);
			} else {
				setShowResults(true);
			}
		}
	};

	const retakeQuiz = () => {
		setCurrentStep(0);
		setAnswers({});
		setShowResults(false);
	};

	return (
		<div className='w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
			{/* Quiz Section */}
			<div className='quiz-section bg-white-bg dark:bg-black p-6 rounded-lg shadow-lg'>
				<div className='quiz-container mb-4'>
					{!showResults ? (
						<div className='w-full'>
							<h1 className='text-black text-center dark:text-white-bg md:text-xl font-bold mb-2'>
								Test Your Knowledge About STIs!
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
									<p className='text-black dark:text-white-bg text-2xl font-bold text-center mb-10'>
										{questions[currentStep].question}
									</p>

									{/* Answer Options */}
									<div className='grid grid-cols-2 gap-6 w-full text-center items-center'>
										{questions[currentStep].options.map((option, index) => (
											<label
												className='flex flex-col items-center mb-8 p-4'
												key={index}
											>
												<input
													type='radio'
													name={`question-${currentStep}`}
													checked={answers[currentStep] === index}
													onChange={() => handleAnswerChange(currentStep, index)}
													className='hidden'
												/>
												<motion.div
													className={`cube-radio !bg-white-bg3 dark:!bg-[#000] !shadow-md ${
														answers[currentStep] === index ? 'selected' : ''
													}`}
													initial={{ scale: 1 }}
													animate={
														answers[currentStep] === index
															? { scale: 1.1, backgroundColor: '#b0e1ec' }
															: { scale: 1 }
													}
													transition={{ duration: 0.3 }}
												>
													<span className='answer-text text-xl text-black dark:!text-[#f0f0fe]'>
														{option}
													</span>
												</motion.div>
											</label>
										))}
									</div>
								</motion.div>
							</AnimatePresence>

							{/* Navigation Buttons */}
							<div className='flex justify-evenly items-center w-full bottom-0 left-0'>
								{currentStep > 0 && (
									<ArrowLeft
										className='previous-btn w-20 text-[#71743c] py-2 px-4 rounded-lg cursor-pointer transition 
											transform hover:scale-110 active:scale-95 hover:text-[#5a6f28] duration-300 ease-in-out'
										onClick={prevStep}
									>
										Previous
									</ArrowLeft>
								)}

								<div>
									{currentStep === questions.length - 1 ? (
										<button
											className='btn-1 mx-auto w-full text-center'
											onClick={nextStep}
											disabled={answers[currentStep] === undefined}
										>
											Results
										</button>
									) : (
										<ArrowRight
											className='next-btn w-20 !text-[#3b78b4] dark:text-[#212121] py-2 px-4 rounded-lg cursor-pointer transition 
											transform hover:scale-110 active:scale-95 hover:text-[#3c79b4] duration-300 ease-in-out'
											onClick={nextStep}
											disabled={answers[currentStep] === undefined}
										>
											Next
										</ArrowRight>
									)}
								</div>
							</div>
						</div>
					) : (
						<div className='result-container flex flex-col min-h-[70vh] items-center py-10 px-4 md:px-6 max-w-3xl mx-auto'>
							<h2 className='text-3xl font-bold mb-6 text-black dark:text-white-bg text-center'>
								Quiz Results
							</h2>
							<ul className='grid grid-cols-1 gap-6 bg-white-bg dark:bg-black p-6 rounded-xl shadow-lg w-full transition-all duration-300 hover:shadow-xl'>
								{questions.map((question, index) => (
									<li key={index} className='mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-md'>
										<p className='text-lg font-medium text-black dark:text-white-bg mb-3'>
											<span className='inline-block bg-primary text-white px-3 py-1 rounded-full mr-2 text-sm'>Q{index + 1}</span>
											{question.question}
										</p>
										<div className='space-y-2 ml-4'>
											<p className='text-md text-black dark:text-white-bg flex items-center'>
												<strong className='min-w-[120px] inline-block'>Your Answer:</strong>
												<span className='ml-2'>{question.options[answers[index]]}</span>
											</p>
											<p className='text-md text-black dark:text-white-bg flex items-center'>
												<strong className='min-w-[120px] inline-block'>Correct Answer:</strong>
												<span className='ml-2'>{question.options[question.correctAnswer]}</span>
											</p>
										</div>
									</li>
								))}
							</ul>
							<button
								className='btn-1 mx-auto w-full md:w-1/2 text-center mt-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105'
								onClick={retakeQuiz}
							>
								Retake Quiz
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Image Section */}
			<div className='w-full h-full flex items-center justify-center'>
				<div className='grid grid-cols-3 gap-4 w-full p-4'>
					{[...Array(9)].map((_, index) => (
						<motion.div
							key={index}
							className='relative aspect-square rounded-lg overflow-hidden'
							animate={{
								y: [0, -10, 0],
								rotate: [-2, 2, -2],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								delay: index * 0.2,
								ease: "easeInOut"
							}}
						>
							<img
								src={`/images/std/${index + 1}.png`}
								alt={`STI Awareness ${index + 1}`}
								className='w-full h-full object-contain rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default STIQuiz;