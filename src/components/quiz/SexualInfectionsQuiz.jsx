import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "A person can have a sexually transmitted infection (STI) and not know it.",
    answer: true,
  },
  {
    question: "Once you have had an STI and have been treated, you can’t get it again.",
    answer: false,
  },
  // Add other true/false questions here
];

const multipleChoiceQuestions = [
  {
    question: "STD's can be passed from person to person through:",
    options: [
      "A. Sexual contact",
      "B. Casual contact such as shaking hands",
      "C. Droplets such as coughing and sneezing",
      "D. All the above",
    ],
    answer: "D. All the above",
  },
  // Add other multiple choice questions here
];

const SexualInfectionsQuiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setUserAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex w-full h-screen p-4 border">
      <h1 className="text-2xl font-bold text-center mb-4">Self Testing Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 p-4 border rounded shadow hover:bg-gray-100"
          >
            <p className="font-medium">{q.question}</p>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => handleAnswer(q.question, true)}
                className={`py-1 px-4 border rounded ${userAnswers[q.question] === true ? "bg-green-500 text-white" : "bg-white"}`}
              >
                True
              </button>
              <button
                type="button"
                onClick={() => handleAnswer(q.question, false)}
                className={`py-1 px-4 border rounded ${userAnswers[q.question] === false ? "bg-red-500 text-white" : "bg-white"}`}
              >
                False
              </button>
            </div>
          </motion.div>
        ))}
        {multipleChoiceQuestions.map((mcq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 p-4 border rounded shadow hover:bg-gray-100"
          >
            <p className="font-medium">{mcq.question}</p>
            <div className="flex flex-col space-y-2">
              {mcq.options.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAnswer(mcq.question, option)}
                  className={`py-1 px-4 border rounded ${userAnswers[mcq.question] === option ? "bg-blue-500 text-white" : "bg-white"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 border rounded shadow"
        >
          <h2 className="text-lg font-bold">Results:</h2>
          {questions.map((q, index) => (
            <p key={index}>
              {q.question} - Your Answer: {userAnswers[q.question] ? "True" : "False"} - Correct: {q.answer ? "True" : "False"}
            </p>
          ))}
          {multipleChoiceQuestions.map((mcq, index) => (
            <p key={index}>
              {mcq.question} - Your Answer: {userAnswers[mcq.question]} - Correct: {mcq.answer}
            </p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SexualInfectionsQuiz;
