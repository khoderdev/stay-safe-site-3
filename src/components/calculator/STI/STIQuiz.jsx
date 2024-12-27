import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "../../icons/Icons";
import { questions } from "./questions";

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
    <div className="w-full ">
      {/* Quiz Section */}
      <div className="quiz-section ">
        <div className="quiz-container mb-4">
          {!showResults ? (
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between items-center pt-4"
                >
                  <p className="text-black dark:text-white-bg text-2xl font-bold text-center mb-10">
                    {questions[currentStep].question}
                  </p>

                  {/* Answer Options */}
                  <div className="grid grid-cols-2 gap-16 text-center items-center">
                    {questions[currentStep].options.map((option, index) => (
                      <label
                        className="flex flex-col items-center"
                        key={index}
                      >
                        <input
                          type="radio"
                          name={`question-${currentStep}`}
                          checked={answers[currentStep] === index}
                          onChange={() =>
                            handleAnswerChange(currentStep, index)
                          }
                          className="hidden"
                        />
                        <motion.div
                          className={`w-[180px] !h-[180px] flex justify-center items-center border-2 border-transparent rounded-lg 
													transition-all duration-300 ease-in-out cursor-pointer relative p-2
													bg-white-bg3 dark:bg-black shadow-md hover:border-[#b0e1ec] hover:text-[#b0e1ec]
													${answers[currentStep] === index ? "!border-[#3c79b4] !text-[#3c79b4] !text-xl" : "!text-xl"}
													select-none`}
                          initial={{ scale: 1 }}
                          animate={
                            answers[currentStep] === index
                              ? { scale: 1.1 }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <span className="">
                            {option}
                          </span>
                        </motion.div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-evenly items-center w-full bottom-0 left-0">
                {currentStep > 0 && (
                  <ArrowLeft
                    className="w-20 !text-[#71743c] py-2 px-4 rounded-lg cursor-pointer 
											transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 hover:text-[#5a6f28]"
                    onClick={prevStep}
                  >
                    Previous
                  </ArrowLeft>
                )}

                <div>
                  {currentStep === questions.length - 1 ? (
                    <button
                      className="btn-1 mx-auto w-full text-center transition-all duration-300 ease-in-out"
                      onClick={nextStep}
                      disabled={answers[currentStep] === undefined}
                    >
                      Results
                    </button>
                  ) : (
                    <ArrowRight
                      className="w-20 !text-[#3b78b4] dark:text-[#212121] py-2 px-4 rounded-lg cursor-pointer 
											transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 hover:text-[#3c79b4]"
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
            <div className="result-container flex flex-col min-h-[70vh] items-center py-10">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white-bg">
                Quiz Results
              </h2>
              <ul className="grid grid-cols-1 gap-6 p-2">
                {questions.map((question, index) => (
                  <li
                    key={index}
                    className="mb-6 bg-white-bg3 dark:bg-black p-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
                  >
                    <p className="text-lg text-black dark:text-white-bg">
                      <strong>Question {index + 1}:</strong> {question.question}
                    </p>
                    <p className="text-md text-black dark:text-white-bg">
                      <strong>Your Answer:</strong>{" "}
                      {question.options[answers[index]]}
                    </p>
                    <p className="text-md text-black dark:text-white-bg">
                      <strong>Correct Answer:</strong>{" "}
                      {question.options[question.correctAnswer]}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className="btn-3 !mx-auto !text-center !mt-6"
                onClick={retakeQuiz}
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default STIQuiz;
