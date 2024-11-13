// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import questions from './questions';

// const FoodAndNutrition = () => {
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [answers, setAnswers] = useState([]);
// 	const [showResults, setShowResults] = useState(false);
// 	const [score, setScore] = useState(0);
// 	const [isDragging, setIsDragging] = useState(false);

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

// 	return (
// 		<div className='min-h-screen flex flex-col items-center justify-center'>
// 			<div className='flex flex-col items-center justify-center w-full max-w-3xl sm:h-[60dvh] rounded-lg shadow-lg p-6 text-center'>
// 				<motion.h1
// 					initial={{ opacity: 0, y: -50 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					className='text-2xl font-bold mb-4 text-blue-600'
// 				>
// 					How Much Do You Know About Food and Nutrition?
// 				</motion.h1>
// 				{showResults ? (
// 					<motion.div
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						className='text-center'
// 					>
// 						<h2 className='text-2xl text-green-500 font-semibold'>
// 							Your Score: {score} / {questions.length}
// 						</h2>
// 						<button
// 							onClick={handleRestart}
// 							className='mt-6 px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700'
// 						>
// 							Restart Quiz
// 						</button>
// 					</motion.div>
// 				) : (
// 					<motion.div
// 						key={currentQuestion}
// 						initial={{ opacity: 0, x: 50 }}
// 						animate={{ opacity: 1, x: 0 }}
// 						exit={{ opacity: 0, x: -50 }}
// 						transition={{ duration: 0.5 }}
// 						className='grid grid-cols-2 gap-4'
// 					>
// 						{/* Draggable Question */}
// 						<motion.div
// 							draggable
// 							onDragStart={() => setIsDragging(true)}
// 							onDragEnd={() => setIsDragging(false)}
// 							className={`col-span-2 bg-blue-100 text-2xl p-4 rounded-md font-medium text-gray-800 ${
// 								isDragging ? 'cursor-grabbing' : 'cursor-grab'
// 							}`}
// 						>
// 							{questions[currentQuestion].question}
// 						</motion.div>

// 						{/* True Option - Drop Target */}
// 						<motion.div
// 							onDragOver={(e) => e.preventDefault()}
// 							onDrop={() => handleDrop('True')}
// 							className='bg-green-200 p-20 rounded-md font-medium text-gray-800 cursor-pointer text-center'
// 						>
// 							True
// 						</motion.div>

// 						{/* False Option - Drop Target */}
// 						<motion.div
// 							onDragOver={(e) => e.preventDefault()}
// 							onDrop={() => handleDrop('False')}
// 							className='bg-red-200 p-20 rounded-md font-medium text-gray-800 cursor-pointer text-center'
// 						>
// 							False
// 						</motion.div>
// 					</motion.div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default FoodAndNutrition;
import { useState } from 'react';
import { motion } from 'framer-motion';
import questions from './questions';

const FoodAndNutrition = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [score, setScore] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [, setDragPosition] = useState({ x: 0, y: 0 });
	const [, setDragOffset] = useState({ x: 0, y: 0 });

	const handleDrop = (selectedOption) => {
		const isCorrect = selectedOption === questions[currentQuestion].answer;
		setAnswers([
			...answers,
			{ questionId: questions[currentQuestion].id, isCorrect },
		]);

		if (isCorrect) {
			setScore(score + 1);
		}

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
		setIsDragging(false); // Reset dragging state after drop
		setDragPosition({ x: 0, y: 0 }); // Reset drag position
	};

	const handleRestart = () => {
		setCurrentQuestion(0);
		setAnswers([]);
		setScore(0);
		setShowResults(false);
	};

	const handleDragStart = (event) => {
		setIsDragging(true);

		// Calculate offset of cursor from element's top-left corner
		const rect = event.target.getBoundingClientRect();
		const offsetX = event.clientX - rect.left;
		const offsetY = event.clientY - rect.top;
		setDragOffset({ x: offsetX, y: offsetY });

		// Set initial drag position
		setDragPosition({ x: event.clientX, y: event.clientY });
	};

	const handleDrag = (event) => {
		if (isDragging) {
			setDragPosition({ x: event.clientX, y: event.clientY });
		}
	};

	const handleDragEnd = () => {
		setIsDragging(false);
		setDragPosition({ x: 0, y: 0 });
	};

	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-start p-4 pt-8 sm:p-8 px-4 sm:px-8'>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className='text-3xl leading-relaxed text-center font-bold mb-6 dark:text-white-bg'
			>
				How Much Do You Know About Food and Nutrition?
			</motion.h1>
			<div className='flex w-full justify-center items-center text-center mt-20 sm:mt-10'>
				{showResults ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-center'
					>
						<h2 className='text-3xl text-green-500 font-semibold mb-4'>
							Your Score: {score} / {questions.length}
						</h2>
						<button
							onClick={handleRestart}
							className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
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
							draggable
							onDragStart={handleDragStart}
							onDrag={handleDrag}
							onDragEnd={handleDragEnd}
							className={`col-span-2 place-self-center flex justify-center items-center w-44 h-40 sm:w-72 sm:h-64 bg-blue-300 text-[1.2rem] leading-snug font-semibold p-4 rounded-md text-gray-800 shadow-lg ${
								isDragging ? 'cursor-grabbing' : 'cursor-grab'
							} transition-transform transform ${
								isDragging ? 'scale-105' : ''
							}`}
						>
							{questions[currentQuestion].question}
						</motion.div>

						{/* True Option - Drop Target */}
						<motion.div
							onDragOver={(e) => e.preventDefault()}
							onDrop={() => handleDrop('True')}
							className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-green-500 shadow-lg transition-all ${
								isDragging
									? 'bg-green-500 border-4 border-green-500 text-white-bg'
									: 'border-green-500 border-4'
							}`}
						>
							True
						</motion.div>

						{/* False Option - Drop Target */}
						<motion.div
							onDragOver={(e) => e.preventDefault()}
							onDrop={() => handleDrop('False')}
							className={`w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-pink shadow-lg transition-all ${
								isDragging
									? 'bg-pink border-4 border-pink text-white-bg'
									: 'border-pink border-4'
							}`}
						>
							False
						</motion.div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default FoodAndNutrition;
