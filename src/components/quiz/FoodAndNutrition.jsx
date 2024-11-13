import { useState } from 'react';
import { motion } from 'framer-motion';

const FoodAndNutrition = () => {
  const questions = [
    { id: 1, question: 'Sugar, fat, and salt are addictive food ingredients.', options: ['True', 'False'], answer: 'True' },
    { id: 2, question: 'Vitamins A, D, E, and K should only be consumed with or after meals.', options: ['True', 'False'], answer: 'True' },
    { id: 3, question: 'Which of the following is NOT a gas-forming food?', options: ['Cauliflower', 'Cabbage', 'Garlic', 'Onion', 'Fish', 'Legumes'], answer: 'Fish' },
    { id: 4, question: 'Iceberg lettuce is 96% water.', options: ['True', 'False'], answer: 'True' },
    { id: 5, question: 'These are the 9 major food allergens: Milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, sesame.', options: ['True', 'False'], answer: 'True' },
    { id: 6, question: 'Fibers in salads aid in the excretion of fats from the body.', options: ['True', 'False'], answer: 'True' },
    { id: 7, question: 'After cooking, food should not be kept for more than 2 hours at temperatures between 5°C-60°C, as this causes bacteria to grow rapidly.', options: ['True', 'False'], answer: 'True' },
    { id: 8, question: 'A dietitian can customize a diet to help you lose fat from specific body parts.', options: ['True', 'False'], answer: 'False' },
    { id: 9, question: 'The Mediterranean Diet is the best diet in the world.', options: ['True', 'False'], answer: 'False' },
    { id: 10, question: 'Eating breakfast can help boost your metabolism and support weight management.', options: ['True', 'False'], answer: 'True' },
  ];


  
const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    setAnswers([...answers, { questionId: questions[currentQuestion].id, isCorrect }]);

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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl sm:h-[60dvh] rounded-lg shadow-lg p-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-4 text-blue-600"
        >
          How Much Do You Know About Food and Nutrition?
        </motion.h1>
        {showResults ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl text-green-500 font-semibold">Your Score: {score} / {questions.length}</h2>
            <button
              onClick={handleRestart}
              className="mt-6 px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
            >
              Restart Quiz
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Draggable Question */}
            <motion.div
              draggable
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              className={`col-span-2 bg-blue-100 text-2xl p-4 rounded-md font-medium text-gray-800 ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {questions[currentQuestion].question}
            </motion.div>

            {/* True Option - Drop Target */}
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('True')}
              className="bg-green-200 p-20 rounded-md font-medium text-gray-800 cursor-pointer text-center"
            >
              True
            </motion.div>

            {/* False Option - Drop Target */}
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('False')}
              className="bg-red-200 p-20 rounded-md font-medium text-gray-800 cursor-pointer text-center"
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