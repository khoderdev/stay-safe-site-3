/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import questions from './questions';


const MediterraneanDietScore = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle when the user selects an answer
  const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
    setErrorMessage(''); // Clear error when user selects an option
  };

  // Proceed to the next step of the quiz
  const nextStep = () => {
    if (!answers[questions[currentStep].id]) {
      setErrorMessage('Please select an answer before proceeding.');
      return;
    }
    setErrorMessage('');
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };

  // Return to the previous step of the quiz
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calculate the user's score based on "yes" answers
  const calculateScore = () => {
    const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes').length;
    const totalQuestions = questions.length;
    const percentage = (yesAnswers / totalQuestions) * 100;
    setScore(percentage);
  };

  // Render the question section
  const renderQuestion = () => (
    <>
      <div className="mb-10">
        <p className="text-xl mb-2 text-black dark:text-[#f0f0fe]">
          {questions[currentStep].question}
        </p>
      </div>
      <div className="flex justify-center items-center space-x-8 my-8">
        {['yes', 'no'].map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2 text-black dark:text-[#f0f0ee]"
          >
            <input
              type="radio"
              name={`question-${questions[currentStep].id}`}
              value={option}
              checked={answers[questions[currentStep].id] === option}
              onChange={() => handleAnswerChange(questions[currentStep].id, option)}
              className="form-radio h-5 w-5 text-green-600 cursor-pointer"
            />
            <span className="cursor-pointer">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>

      {answers[questions[currentStep].id] && (
        <div className="mt-4 text-[1rem] text-[#212121] dark:text-[#f0f0ee]">
          {answers[questions[currentStep].id] === 'yes'
            ? questions[currentStep].yesAnswer
            : questions[currentStep].noAnswer}
        </div>
      )}
      {errorMessage && <div className="text-[1rem] text-red-500 mt-4">{errorMessage}</div>}
    </>
  );

  // Render the score section after quiz completion
  const renderScore = () => (
    <div className="flex flex-col items-center justify-start text-center">
      <h2 className="text-2xl text-black dark:text-[#f0f0ee]">Your Score: {score}%</h2>
      {score === 100 ? (
        <p className="text-lg text-green-500 mt-2">
          Great job! You're making healthy food choices in line with the Mediterranean diet.
        </p>
      ) : (
        <p className="text-lg text-red-500 mt-4">Pick 1-2 areas to work on.</p>
      )}
      <button
        className="btn-1 mt-8"
        onClick={() => {
          setScore(null);
          setCurrentStep(0);
          setAnswers({});
        }}
      >
        Retake Quiz
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen py-10">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-8 text-center text-black dark:text-[#f0f0ee]">
          Mediterranean Diet Score
        </h1>
        {score === null ? (
          <>
            {renderQuestion()}
            <div className="flex justify-between mt-8">
              <button
                className="btn-1 "
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="btn-1  !bg-[#71743c] dark:hover:bg-[#c2c36b] dark:hover:text-[#212121] transition duration-300"
                onClick={nextStep}
              >
                {currentStep === questions.length - 1 ? 'Calculate Score' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          renderScore()
        )}
      </div>

    </div>
  );
};

export default MediterraneanDietScore;
