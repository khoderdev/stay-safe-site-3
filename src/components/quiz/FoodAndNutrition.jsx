// import { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import questions from './questions';
// import { inputStyles } from '../../utils/styles';
// import { mind, mouth } from '../circle/images';

// const FoodAndNutrition = () => {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [answers, setAnswers] = useState([]);
// 	const [showResults, setShowResults] = useState(false);
// 	const [score, setScore] = useState(0);
// 	const [hoveredOption, setHoveredOption] = useState(null);
// 	const trueRef = useRef(null);
// 	const falseRef = useRef(null);

// 	const handleDrop = (selectedOption) => {
// 		const isCorrect = selectedOption === questions[currentQuestion].answer;
// 		setAnswers([
// 			...answers,
// 			{ questionId: questions[currentQuestion].id, isCorrect },
// 		]);

// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		if (currentQuestion < questions.length - 1) {
// 			setCurrentQuestion(currentQuestion + 1);
// 		} else {
// 			setShowResults(true);
// 		}
// 	};

// 	const handleRestart = () => {
// 		setCurrentQuestion(0);
// 		setAnswers([]);
// 		setScore(0);
// 		setShowResults(false);
// 	};

// 	// Function to check if draggable item touches a target container
// 	const checkIntersection = (draggableRef, targetRef) => {
// 		if (draggableRef.current && targetRef.current) {
// 			const draggableRect = draggableRef.current.getBoundingClientRect();
// 			const targetRect = targetRef.current.getBoundingClientRect();

// 			return !(
// 				draggableRect.right < targetRect.left ||
// 				draggableRect.left > targetRect.right ||
// 				draggableRect.bottom < targetRect.top ||
// 				draggableRect.top > targetRect.bottom
// 			);
// 		}
// 		return false;
// 	};

// 	const sectionRef = useRef(null);
// 	const isInView = useInView(sectionRef, { once: false });

// 	const text = `How Much Do You Know\n About Food and Nutrition?`;

// 	const words = text.split(' ');

// 	const containerAnimation = {
// 		hidden: {},

// 		visible: {
// 			transition: {
// 				staggerChildren: 0.2,
// 			},
// 		},
// 	};

// 	const wordAnimation = {
// 		hidden: {
// 			opacity: 0,
// 			y: 10,
// 		},

// 		visible: {
// 			opacity: 1,
// 			y: 0,
// 			transition: {
// 				duration: 0.5,
// 				ease: 'easeOut',
// 			},
// 		},
// 	};

// 	const handleScrollToSection = () => {
// 		if (targetRef && targetRef.current) {
// 			targetRef.current.scrollIntoView({ behavior: 'smooth' });
// 		}
// 	};

// 	return (
// 		<div
// 			ref={sectionRef}
// 			className='relative min-h-screen w-full flex flex-col md:flex md:flex-row items-end justify-evenly p-0 bg-cover bg-center'
// 		>
// 			<div className='md:w-[40%] flex flex-col items-star'>
// 				<img src={mind} alt='mind' className='w-[550px] ' />
// 			</div>

// 			<div className='right-col md:w-[60%] pb-10 flex-wrap'>
// 				<div className='flex items-center p-4 h-52 flex-wrap'>
// 					<motion.div
// 						initial='hidden'
// 						animate={isInView ? 'visible' : 'hidden'}
// 						variants={containerAnimation}
// 						className='text-2xl dark:text-white-bg leading-relaxed md:text-5xl md:leading-relaxed font-semibold m-0 uppercase break-words md:flex-wrap'
// 					>
// 						{words.map((word, index) => (
// 							<motion.span key={index} variants={wordAnimation}>
// 								{word}&nbsp;
// 							</motion.span>
// 						))}
// 					</motion.div>
// 				</div>

// 				<div className=' flex w-full h-fit justify-center items-center text-center'>
// 					{showResults ? (
// 						<motion.div
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							className='text-center'
// 						>
// 							<h2
// 								className='text-3xl text-[#c2c36b] font-semibold mb-10'
// 								style={{
// 									textShadow:
// 										'0 0 8px rgba(34, 197, 94, 0.8), 0 0 1px rgba(34, 197, 94, 0.1)',
// 								}}
// 							>
// 								Your Score: {score} / {questions.length}
// 							</h2>

// 							<button
// 								onClick={handleRestart}
// 								className={`${inputStyles()} !w-[65%] !text-black dark:!text-white-bg2 !bg-white-fg hover:!ring-2 focus:!ring-2 !ring-[#c2c36b] dark:!bg-[#000]`}
// 							>
// 								Retake Quiz
// 							</button>
// 						</motion.div>
// 					) : (
// 						<motion.div
// 							key={currentQuestion}
// 							initial={{ opacity: 0, x: 50 }}
// 							animate={{ opacity: 1, x: 0 }}
// 							exit={{ opacity: 0, x: -50 }}
// 							transition={{ duration: 0.4 }}
// 							className='grid grid-cols-2 gap-8 gap-y-12 sm:gap-20 relative'
// 						>
// 							{/* Draggable Question */}
// 							<motion.div
// 								drag
// 								dragConstraints={{
// 									left: -100,
// 									top: -100,
// 									right: 100,
// 									bottom: 100,
// 								}}
// 								onDrag={(event, info) => {
// 									const draggableElement = event.target;

// 									// Check intersection with True and False containers
// 									if (
// 										checkIntersection({ current: draggableElement }, trueRef)
// 									) {
// 										setHoveredOption('True');
// 									} else if (
// 										checkIntersection({ current: draggableElement }, falseRef)
// 									) {
// 										setHoveredOption('False');
// 									} else {
// 										setHoveredOption(null);
// 									}
// 								}}
// 								onDragEnd={(event, info) => {
// 									const isDroppedInTrue = checkIntersection(
// 										{ current: event.target },
// 										trueRef
// 									);
// 									const isDroppedInFalse = checkIntersection(
// 										{ current: event.target },
// 										falseRef
// 									);

// 									if (isDroppedInTrue) {
// 										handleDrop('True');
// 									} else if (isDroppedInFalse) {
// 										handleDrop('False');
// 									}
// 								}}
// 								className='col-span-2 place-self-center flex justify-center items-center w-48 h-44 sm:w-72 sm:h-64 bg-[#b0e1ec] sm:text-[1.2rem] leading-snug sm:font-semibold p-4 rounded-md text-gray-800 shadow-lg cursor-grab transition-transform transform text-wrap'
// 							>
// 								{questions[currentQuestion].question}
// 							</motion.div>

// 							{/* True Option - Drop Target */}
// 							<motion.div
// 								ref={trueRef}
// 								className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-[#c2c36b] shadow-lg transition-all ${
// 									hoveredOption === 'True'
// 										? 'bg-[#c2c36b] text-[#fff]'
// 										: 'bg-transparent'
// 								} ring-[#c2c36b] ring-inset ring-4`}
// 							>
// 								True
// 							</motion.div>

// 							{/* False Option - Drop Target */}
// 							<motion.div
// 								ref={falseRef}
// 								className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-pink shadow-lg transition-all ${
// 									hoveredOption === 'False'
// 										? 'bg-pink text-white-bg'
// 										: 'bg-transparent'
// 								} ring-pink ring-inset ring-4`}
// 							>
// 								False
// 							</motion.div>
// 						</motion.div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default FoodAndNutrition;
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import questions from './questions';
import { inputStyles } from '../../utils/styles';
import { mind, mouth } from '../circle/images';

const FoodAndNutrition = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [score, setScore] = useState(0);
	const [hoveredOption, setHoveredOption] = useState(null);
	const [shake, setShake] = useState(false); // New state to handle shake effect

	const trueRef = useRef(null);
	const falseRef = useRef(null);
	const draggableRef = useRef(null);

	const handleDrop = (selectedOption) => {
		const isCorrect = selectedOption === questions[currentQuestion].answer;
		setAnswers([
			...answers,
			{ questionId: questions[currentQuestion].id, isCorrect },
		]);

		if (isCorrect) {
			setScore(score + 1);
			if (currentQuestion < questions.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
			} else {
				setShowResults(true);
			}
		} else {
			// Shake effect for incorrect answer
			setShake(true);
			setTimeout(() => setShake(false), 500); // Reset shake effect after 0.5s
		}
	};

	const handleRestart = () => {
		setCurrentQuestion(0);
		setAnswers([]);
		setScore(0);
		setShowResults(false);
	};

	const checkIntersection = (draggableRef, targetRef) => {
		if (draggableRef.current && targetRef.current) {
			const draggableRect = draggableRef.current.getBoundingClientRect();
			const targetRect = targetRef.current.getBoundingClientRect();

			return !(
				draggableRect.right < targetRect.left ||
				draggableRect.left > targetRect.right ||
				draggableRect.bottom < targetRect.top ||
				draggableRect.top > targetRect.bottom
			);
		}
		return false;
	};

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false });

	const text = `How Much Do You Know\n About Food and Nutrition?`;
	const words = text.split(' ');

	const containerAnimation = {
		hidden: {},

		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const wordAnimation = {
		hidden: {
			opacity: 0,
			y: 10,
		},

		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<div
			ref={sectionRef}
			className='relative min-h-screen w-full flex flex-col md:flex md:flex-row items-center justify-center p-0 bg-cover bg-center '
		>
			{/* <div className='md:w-[40%] flex flex-col items-start'>
				<img src={mind} alt='mind' className='md:w-[550px]' />
			</div> */}

			<div className='right-col md:w-[60%] pb-10 flex-wrap'>
				<div className='flex items-center p-4 h-52 flex-wrap'>
					<motion.div
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={containerAnimation}
						className='text-3xl sm:text-4xl text-center dark:text-white-bg leading-relaxed md:text-5xl md:leading-relaxed font-semibold m-0 uppercase break-words md:flex-wrap'
					>
						{words.map((word, index) => (
							<motion.span key={index} variants={wordAnimation}>
								{word}&nbsp;
							</motion.span>
						))}
					</motion.div>
				</div>

				<div className='flex w-full h-fit justify-center items-center text-center'>
					{showResults ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='text-center'
						>
							<h2
								className='text-3xl text-[#c2c36b] font-semibold mb-10'
								style={{
									textShadow:
										'0 0 8px rgba(34, 197, 94, 0.8), 0 0 1px rgba(34, 197, 94, 0.1)',
								}}
							>
								Your Score: {score} / {questions.length}
							</h2>

							<button
								onClick={handleRestart}
								className={`${inputStyles()} !w-[65%] !text-black dark:!text-white-bg2 !bg-white-fg hover:!ring-2 focus:!ring-2 !ring-[#c2c36b] dark:!bg-[#000]`}
							>
								Retake Quiz
							</button>
						</motion.div>
					) : (
						<motion.div
							key={currentQuestion}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
							className='grid grid-cols-2 gap-8 gap-y-12 sm:gap-20 relative'
						>
							{/* Draggable Question */}
							<motion.div
								ref={draggableRef}
								drag
								dragConstraints={{
									left: -100,
									top: -100,
									right: 100,
									bottom: 100,
								}}
								onDrag={(event, info) => {
									const draggableElement = event.target;

									if (
										checkIntersection({ current: draggableElement }, trueRef)
									) {
										setHoveredOption('True');
									} else if (
										checkIntersection({ current: draggableElement }, falseRef)
									) {
										setHoveredOption('False');
									} else {
										setHoveredOption(null);
									}
								}}
								onDragEnd={(event, info) => {
									const isDroppedInTrue = checkIntersection(
										{ current: event.target },
										trueRef
									);
									const isDroppedInFalse = checkIntersection(
										{ current: event.target },
										falseRef
									);

									const correctAnswer = questions[currentQuestion].answer;

									// Check if drop is correct
									if (
										(isDroppedInTrue && correctAnswer === 'True') ||
										(isDroppedInFalse && correctAnswer === 'False')
									) {
										handleDrop(correctAnswer);
									} else {
										// Trigger shake effect if the drop was incorrect
										setShake(true);
										setTimeout(() => setShake(false), 500); // Reset after shake
									}
								}}
								className={`col-span-2 place-self-center flex justify-center items-center w-48 h-44 sm:w-72 sm:h-64 bg-[#b0e1ec] sm:text-[1.2rem] leading-snug sm:font-semibold p-4 rounded-md text-gray-800 shadow-lg cursor-grab transition-transform transform ${
									shake ? 'animate-shake' : ''
								}`}
							>
								{questions[currentQuestion].question}
							</motion.div>

							{/* True Option - Drop Target */}
							<motion.div
								ref={trueRef}
								className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-[#c2c36b] shadow-lg transition-all ${
									hoveredOption === 'True'
										? 'bg-[#c2c36b] text-[#fff]'
										: 'bg-transparent'
								} ring-[#c2c36b] ring-inset ring-4`}
							>
								True
							</motion.div>

							{/* False Option - Drop Target */}
							<motion.div
								ref={falseRef}
								className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-pink shadow-lg transition-all ${
									hoveredOption === 'False'
										? 'bg-pink text-white-bg'
										: 'bg-transparent'
								} ring-pink ring-inset ring-4`}
							>
								False
							</motion.div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FoodAndNutrition;
