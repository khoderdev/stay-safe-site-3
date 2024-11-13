import { useState } from 'react';
import { motion } from 'framer-motion';
import questions from './questions';
import { inputStyles } from '../../utils/styles';

const FoodAndNutrition = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

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
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 pt-8 sm:p-8 px-4 sm:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl leading-relaxed text-center font-bold mb-6 dark:text-white-bg"
      >
        How Much Do You Know About Food and Nutrition?
      </motion.h1>
      <div className="flex w-full justify-center items-center text-center mt-20 sm:mt-6">
        {showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2
              className="text-3xl text-green-500 font-semibold mb-10"
              style={{
                textShadow:
                  '0 0 8px rgba(34, 197, 94, 0.8), 0 0 1px rgba(34, 197, 94, 0.1)',
              }}
            >
              Your Score: {score} / {questions.length}
            </h2>

            <button
              onClick={handleRestart}
              className={`${inputStyles()} !w-[65%] !text-black dark:!text-white-bg2 !bg-white-fg hover:!ring-2 focus:!ring-2 !ring-green-500 dark:!bg-[#000]`}
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
            className="grid grid-cols-2 gap-8 gap-y-12 sm:gap-20 relative"
          >
            {/* Draggable Question */}
            <motion.div
              drag
              dragConstraints={{ left: -100, top: -100, right: 100, bottom: 100 }}
              onDragEnd={(event, info) => {
                // On drag end, decide where the item should go (drop logic)
                const isDroppedInTrue = info.point.x > 200; // Adjust this threshold based on your UI
                handleDrop(isDroppedInTrue ? 'True' : 'False');
              }}
              className="col-span-2 place-self-center flex justify-center items-center w-48 h-44 sm:w-72 sm:h-64 bg-blue-300 sm:text-[1.2rem] leading-snug sm:font-semibold p-4 rounded-md text-gray-800 shadow-lg cursor-grab transition-transform transform text-wrap"
            >
              {questions[currentQuestion].question}
            </motion.div>

            {/* True Option - Drop Target */}
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('True')}
              className="w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-green-500 shadow-lg transition-all ring-green-500 ring-inset ring-4"
            >
              True
            </motion.div>

            {/* False Option - Drop Target */}
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('False')}
              className="w-44 h-40 sm:w-72 sm:h-64 flex justify-center items-center rounded-lg font-semibold select-none text-4xl text-pink shadow-lg transition-all ring-pink ring-inset ring-4"
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
