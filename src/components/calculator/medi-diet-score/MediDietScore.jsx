/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import questions from './questions';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '../../icons/Icons';
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
    <div className='flex flex-col items-center'>
      <div className="mb-10">
        <p className="text-xl md:text-2xl mb-2 text-black dark:text-white-bg">
          {questions[currentStep].question}
        </p>
      </div>
      {/* <div className="flex justify-center items-center space-x-8 my-8"> */}
      <div className="grid grid-cols-2 w-full lg:w-2/3 text-center items-center">
        {['yes', 'no'].map((option) => (
          <label
            key={option}
            className="flex flex-col items-center mb-10"
          // className="flex items-center space-x-2 text-black dark:text-white-bg"
          >
            <input
              type="radio"
              name={`question-${questions[currentStep].id}`}
              value={option}
              checked={answers[questions[currentStep].id] === option}
              onChange={() => handleAnswerChange(questions[currentStep].id, option)}
              className="hidden"
            // className="form-radio h-5 w-5 text-green-600 cursor-pointer"
            />
            <motion.div
              className={`cube-radio !bg-white-bg dark:!bg-[#000] active:animate- !shadow-md ${answers[questions[currentStep].id] === option ? "selected" : ""
                }`}
              initial={{ scale: 1 }}
              animate={
                answers[questions[currentStep].id] === option
                  ? { scale: 1.1, backgroundColor: "#b0e1ec" }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              <span className="answer-text text-xl text-black dark:!text-[#f0f0fe]">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </motion.div>
            {/* <span className="cursor-pointer">{option.charAt(0).toUpperCase() + option.slice(1)}</span> */}
          </label>
        ))}
      </div>

      {answers[questions[currentStep].id] && (
        <div className="mt-4 text-[1rem] text-[#212121] dark:text-white-bg">
          {answers[questions[currentStep].id] === 'yes'
            ? questions[currentStep].yesAnswer
            : questions[currentStep].noAnswer}
        </div>
      )}
      {errorMessage && <div className="text-[1rem] text-red-500 mt-4">{errorMessage}</div>}
    </div>
  );

  // Render the score section after quiz completion
  const renderScore = () => (
    <div className="flex flex-col items-center justify-start text-center">
      <h2 className="text-2xl text-black dark:text-white-bg">Your Score: {score}%</h2>
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
      <h1 className="text-xl md:text-5xl font-semibold mb-8 text-center text-black dark:text-white-bg">
        Mediterranean Diet Score
      </h1>
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-white-bg dark:bg-black">

        {score === null ? (
          <>
            {renderQuestion()}
            {/* Button Container */}
            <div className="flex justify-evenly items-center w-full bottom-0 left-0 mt-6">
              {/* Hide ArrowLeft when on the last step */}
              {currentStep < questions.length - 1 && (
                <ArrowLeft
                  className="previous-btn w-20 text-[#71743c] py-2 px-4 rounded-lg cursor-pointer transition 
                 transform hover:scale-110 active:scale-95 hover:text-[#5a6f28] duration-300 ease-in-out"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </ArrowLeft>
              )}

              <div>
                {currentStep === questions.length - 1 ? (
                  // Center the Calculate Score button when on the last step
                  <button
                    className="btn-1 mx-auto w-full text-center"
                    onClick={calculateScore}
                    disabled={answers[questions[currentStep].id] === undefined}
                  >
                    Calculate Score
                  </button>
                ) : (
                  <ArrowRight
                    className="next-btn w-20 !text-blue dark:text-[#212121] py-2 px-4 rounded-lg cursor-pointer transition 
                   transform hover:scale-110 active:scale-95 hover:text-[#0000ff] duration-300 ease-in-out"
                    onClick={nextStep}
                    disabled={answers[questions[currentStep].id] === undefined}
                  >
                    Next
                  </ArrowRight>
                )}
              </div>
            </div>
            {/* <div className="flex justify-center space-x-14 mt-8">
              <button
                className="btn-1"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="btn-3  !bg-[#71743c] dark:hover:bg-[#c2c36b] dark:hover:text-[#212121] transition duration-300"
                onClick={nextStep}
              >
                {currentStep === questions.length - 1 ? 'Calculate Score' : 'Next'}
              </button>
            </div> */}
          </>
        ) : (
          renderScore()
        )}
      </div>

    </div>
  );
};

export default MediterraneanDietScore;
