import { useState } from 'react';
import './PHQ9.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '../icons/Icons';
import { questions } from './Questions';

// Points corresponding to each answer
const answerPoints = [0, 1, 2, 3];

const scoreInterpretation = [
  { range: [0, 4], interpretation: "No depression" },
  { range: [5, 9], interpretation: "Mild depression" },
  { range: [10, 14], interpretation: "Moderate depression" },
  { range: [15, 19], interpretation: "Moderately severe depression" },
  { range: [20, 27], interpretation: "Severe depression" },
];

const PHQ9Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [guidanceMessage, setGuidanceMessage] = useState('');

  const handleAnswerChange = (questionId, answerIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerIndex,
    }));
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    // Only allow going to the next step if an answer has been selected
    if (answers[questions[currentStep].id] !== undefined) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateScore = () => {
    const calculatedScore = Object.entries(answers).reduce((acc, [questionId, answerIndex]) => {
      const points = answerPoints[answerIndex]; // Get points for the selected answer
      console.log(`Question ${questionId}: ${questions[questionId - 1].question} - Points: ${points}`);
      return acc + points; // Accumulate points
    }, 0);

    console.log(`Final Score: ${calculatedScore}`); // Log final score
    setScore(calculatedScore);

    // Determine if the guidance message should be displayed
    const interpretation = getScoreInterpretation(calculatedScore);
    if (["Moderate depression", "Moderately severe depression", "Severe depression"].includes(interpretation)) {
      setGuidanceMessage("Seek guidance from a mental health specialist, reaching out is a sign of strength.");
    } else {
      setGuidanceMessage('');
    }
  };

  const getScoreInterpretation = (score) => {
    for (let interpretation of scoreInterpretation) {
      if (score >= interpretation.range[0] && score <= interpretation.range[1]) {
        return interpretation.interpretation;
      }
    }
    return "No interpretation found";
  };

  const retakeQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setScore(null);
    setGuidanceMessage('');
  };

  return (
    <div className="flex flex-col justify-between py-6 lg:w-[60%] place-self-center rounded-xl drop-shadow-lg">
      <div className="quiz-container mb-4 flex justify-center">
        {score === null ? (
          <div className="w-full">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-between items-center pt-4"
                >
                  <p className="text-black dark:text-[#f0f0fe] text-3xl font-bold text-center mb-10">{questions[currentStep].question}</p>

                  {/* Answer Buttons */}
                  <div className="grid grid-cols-2 w-full lg:w-2/3 text-center items-center">
                    {questions[currentStep].answers.map((answer, index) => (
                      <label className="flex flex-col items-center mb-10" key={index}>
                        <input
                          type="radio"
                          name={`question-${questions[currentStep].id}`}
                          value={index}
                          checked={answers[questions[currentStep].id] === index}
                          onChange={() => handleAnswerChange(questions[currentStep].id, index)}
                          className="hidden"
                        />
                        <motion.div
                          className={`cube-radio !bg-[#f0f0fe] dark:!bg-[#000] active:animate- !shadow-md ${answers[questions[currentStep].id] === index ? "selected" : ""
                            }`}
                          initial={{ scale: 1 }}
                          animate={
                            answers[questions[currentStep].id] === index
                              ? { scale: 1.1, backgroundColor: "#b0e1ec" }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <span className="answer-text text-xl text-black dark:!text-[#f0f0fe]">{answer}</span>
                        </motion.div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

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

          </div>
        ) : (
          <div className="result-container flex flex-col items-center py-10">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-[#f0f0fe]">
              Your Depression Screening Score: <span className="text-green-500">{score}</span>
            </h2>
            <p className="text-lg mb-4 text-black dark:text-[#f0f0fe]">{getScoreInterpretation(score)}</p>
            {guidanceMessage && (
              <p className="text-[1.3rem] text-pink mb-10">{guidanceMessage}</p>
            )}
            <button
              className="btn-1 mx-auto w-full text-center"
              onClick={retakeQuiz}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe] w-full flex justify-center">
        <span className="text-[10px]">
          PHQ-9 is adapted from PRIME MD TODAY, developed by Drs. Robert L Spitzer, Janet BW Williams, Kurt Kroenke,
          and colleagues, with an educational grant from Pfizer Inc.
        </span>
      </div>
    </div>
  );
};

export default PHQ9Quiz;