// import React, { useState } from 'react';

// const questions = [
// //   { id: 1, question: "Is olive oil the main source of fat used in cooking?", / //   { id: 2, question: "Do you have 4 tablespoons (60 ml) or more of olive oil each day?", n very low fat diets" },
// //   { id: 3, question: "Do you sauté with olive oil, garlic, onion, tomato to make homemade sauce 2 or more times per week?",  pasta, rice or vegetables." },
// //   { id: 4, question: "Do you eat 4 servings or more of vegetables each day?", getables" },
// //   { id: 5, question: "Do you have 3 or more fruits or 1.5 cups or more of fruit each day?", getables" },
// //   { id: 6, question: "Do you eat nuts 3 or more times per week?", 
// //   { id: 7, question: "Do you have 3 or more servings of fish or seafood each week?", ts" },
// //   { id: 8, question: "Do you have 3 or more servings of legumes each week?", ble fibres" },
// //   { id: 9, question: "Do you eat chicken or turkey more often than beef, pork, hamburger or sausage?", ittle visible fat." },
// //   { id: 10, question: "Do you eat less than 2 servings of red meat or processed meats each day?", der cooking methods" },
// //   { id: 11, question: "Do you eat 1 tablespoon (15 ml) or less of butter, margarine or cream each day?", oly unsaturated fats" },
// //   { id: 12, question: "Do you eat commercial baked goods less than 2 times per week?", 
// //   { id: 13, question: "Do you have less than 1 can of sugar-sweetened beverages each day?", /   { id: 14, question: "Do you drink 7 or more glasses of wine each week?",  in moderation" },
// ];

// const MediterraneanDietScore = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   const handleAnswerChange = (id, answer) => {
//     setAnswers({ ...answers, [id]: answer });
//   };

//   const nextStep = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       calculateScore();
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const calculateScore = () => {
//     const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes').length;
//     setScore(yesAnswers);
//   };

//   return (
//     <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-5">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl mb-8 text-center text-gray-800">Mediterranean Diet Score</h1>

//         {score === null ? (
//           <>
//             <div className="mb-4">
//               <p className="text-lg text-gray-700 mb-2">{questions[currentStep].question}</p>
//               <small className="text-sm text-gray-500 block mb-4">
// //                 <em>{questions[currentStep].l>
//             </div>

//             <div className="flex items-center space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question-${questions[currentStep].id}`}
//                   value="yes"
//                   checked={answers[questions[currentStep].id] === 'yes'}
//                   onChange={() => handleAnswerChange(questions[currentStep].id, 'yes')}
//                   className="form-radio h-5 w-5 text-green-600"
//                 />
//                 <span>Yes</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question-${questions[currentStep].id}`}
//                   value="no"
//                   checked={answers[questions[currentStep].id] === 'no'}
//                   onChange={() => handleAnswerChange(questions[currentStep].id, 'no')}
//                   className="form-radio h-5 w-5 text-red-600"
//                 />
//                 <span>No</span>
//               </label>
//             </div>

//             <div className="flex justify-between mt-8">
//               <button
//                 className="bg-gray-500 text-white py-2 px-4 rounded-lg disabled:opacity-50"
//                 onClick={prevStep}
//                 disabled={currentStep === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//                 onClick={nextStep}
//               >
//                 {currentStep === questions.length - 1 ? 'Calculate Score' : 'Next'}
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center">
//             <h2 className="text-2xl text-gray-800">Your Score: {score}</h2>
//             <p className="text-lg text-red-500 mt-2">Pick 1-2 areas to work on.</p>
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
//               onClick={() => {
//                 setScore(null);
//                 setCurrentStep(0);
//                 setAnswers({});
//               }}
//             >
//               Retake Quiz
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MediterraneanDietScore;
// import React, { useState } from 'react';

// const questions = [
//   {
//     id: 1,
//     question: 'Is olive oil the main source of fat used in cooking?',
// //     y monounsaturated fat.',
//   },
//   {
//     id: 2,
//     question: 'Do you have 4 tablespoons (60 ml) or more of olive oil each day? Consider oil used for frying, salads, meals away from home.',
// //     n very low-fat diets.',
//   },
//   {
//     id: 3,
//     question: 'Do you sauté with olive oil, garlic, onion, tomato to make homemade sauce 2 or more times per week?',
// //      pasta, rice, or vegetables.',
//   },
//   {
//     id: 4,
//     question: 'Do you eat at least 3 servings of vegetables each day? (1 serving is 200g or 250 ml raw leafy greens)',
// //     iber to the diet along with antioxidants and many vitamins and minerals for optimal health.',
//   },
//   {
//     id: 5,
//     question: 'Do you have 2 servings or more of fruits each day? (1 serving = 1 fruit of 80g)',
// //     : 6,
//     question: 'Do you eat 1 or more servings of nuts per week? (1 serving is 30 grams)',
// //     d fat, phytosterols, fiber, vitamin E, and iron, e.g. walnuts, almonds, hazelnuts.',
//   },
//   {
//     id: 7,
//     question: 'Do you have 3 or more servings of fish or seafood each week? (1 fish serving is 100-150g, or 200g seafood or 4-5 pieces)',
// //     s. Salmon, trout, mackerel, sardines, herring, anchovies contain omega-3 fats (EPA and DHA) for heart and brain health.',
//   },
//   {
//     id: 8,
//     question: 'Do you have 3 or more servings of legumes (peas, beans, or lentils) each week? (1 serving is 175 ml or 150 g)',
// //     protein, potassium, and other essential nutrients.',
//   },
//   {
//     id: 9,
//     question: 'Do you eat white meat (such as chicken or turkey), fish, and beans more often than red meat such as beef, pork, hamburger, or sausage?',
// //      high in saturated fat, can be high in salt, and are best replaced with white meat or fish or vegetarian sources of protein.',
//   },
//   {
//     id: 10,
//     question: 'Is 1 or less serving of red or white meat eaten each day?',
// //     : 11,
//     question: 'Do you eat 1 tablespoon (15 ml) or less of butter, margarine, or cream each day?',
// //     e oils, nuts, and seeds instead of cream, margarine, and butter.',
//   },
//   {
//     id: 12,
//     question: 'Do you eat commercial sweets/pastries such as cookies, doughnuts, or cake less than 3 servings per week?',
// //     h in saturated fat, salt, or sugar and often contain trans fats.',
//   },
//   {
//     id: 13,
//     question: 'Do you have less than 1 can (355 ml or 12 oz) of sweet or sugar-sweetened carbonated beverages each day?',
// //     , sports drinks, juice, and flavored or iced coffees to avoid excess added sugars.',
//   },
// ];

// const MediterraneanDietScore = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   const handleAnswerChange = (id, answer) => {
//     setAnswers({ ...answers, [id]: answer });
//   };

//   const nextStep = () => {
//     // Prevent advancing if no answer is selected
//     if (!answers[questions[currentStep].id]) {
//       alert('Please select an answer before proceeding.');
//       return;
//     }
//     if (currentStep < questions.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       calculateScore();
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const calculateScore = () => {
//     const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes').length;
//     const totalQuestions = questions.length;
//     const percentage = (yesAnswers / totalQuestions) * 100;
//     setScore(percentage.toFixed(2)); // Calculate percentage and fix to 2 decimal places
//   };

//   return (
//     <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-5">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl mb-8 text-center text-gray-800">Mediterranean Diet Score</h1>

//         {score === null ? (
//           <>
//             <div className="mb-4">
//               <p className="text-lg text-gray-700 mb-2">{questions[currentStep].question}</p>
//               <small className="text-sm text-gray-500 block mb-4">
// //                 <em>{questions[currentStep].l>
//             </div>

//             <div className="flex items-center space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question-${questions[currentStep].id}`}
//                   value="yes"
//                   checked={answers[questions[currentStep].id] === 'yes'}
//                   onChange={() => handleAnswerChange(questions[currentStep].id, 'yes')}
//                   className="form-radio h-5 w-5 text-green-600"
//                 />
//                 <span>Yes</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question-${questions[currentStep].id}`}
//                   value="no"
//                   checked={answers[questions[currentStep].id] === 'no'}
//                   onChange={() => handleAnswerChange(questions[currentStep].id, 'no')}
//                   className="form-radio h-5 w-5 text-red-600"
//                 />
//                 <span>No</span>
//               </label>
//             </div>

//             <div className="flex justify-between mt-8">
//               <button
//                 className="bg-gray-500 text-white py-2 px-4 rounded-lg disabled:opacity-50"
//                 onClick={prevStep}
//                 disabled={currentStep === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//                 onClick={nextStep}
//               >
//                 {currentStep === questions.length - 1 ? 'Calculate Score' : 'Next'}
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center">
//             <h2 className="text-2xl text-gray-800">Your Score: {score}%</h2>
//             <p className="text-lg text-red-500 mt-2">Pick 1-2 areas to work on.</p>
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
//               onClick={() => {
//                 setScore(null);
//                 setCurrentStep(0);
//                 setAnswers({});
//               }}
//             >
//               Retake Quiz
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MediterraneanDietScore;
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'Is olive oil the main source of fat used in cooking?',
    yesAnswer: 'Olive oil is high in healthy monounsaturated fat.',
    noAnswer: 'Choose Healthier Fats. Use fats that are from plant sources and liquid on room temperature rather than saturated fats that are solid and from animal sources in cooking and preparing meals.',
  },
  {
    id: 2,
    question: 'Do you have 4 tablespoons (60 ml) or more of olive oil each day? Consider oil used for frying, salads, and meals away from home.',
    yesAnswer: 'Healthy fats are better than very low-fat diets. Beware not to exceed your fat intake.',
    noAnswer: 'Healthy fats are better than very low fat diets. So replacing saturated with unsaturated fat is better than replacing it with proteins and carbohydrates.',
  },
  {
    id: 3,
    question: 'Do you sauté with olive oil, garlic, onion, tomato to make homemade sauce 2 or more times per week?',
    yesAnswer: 'Great job! Homemade sauces are a healthy choice.',
    noAnswer: 'Prepare homemade sauces for pasta, rice or vegetables.',
  },
  {
    id: 4,
    question: 'Do you eat at least 3 servings of vegetables each day? (1 serving is 200g or 250 ml raw leafy greens)',
    yesAnswer: 'Vegetables add fiber to the diet along with antioxidants and many vitamins and minerals for optimal health.',
    noAnswer: 'Aim to include plenty of vegetables in your diet.',
  },
  {
    id: 5,
    question: 'Do you have 2 servings or more fruits each day? (1 serving= 1 fruit of 80g) ',
    noAnswer: 'Eat 3 fruits a day and plenty of vegetables. Studies show eating plenty of these foods is protective against heart disease and cancer.',
  },
  {
    id: 6,
    question: 'Do you eat 1 or more servings of nuts per week? (1 serving is 30 grams)',
    yesAnswer: 'Nuts are rich in unsaturated fat, phytosterols, fiber, vitamin E and iron, e.g. walnuts, almonds, hazelnuts. Beware not to exceed your fat intake.',
    noAnswer: 'Incorporate nuts into your diet for better health. Nuts are rich in unsaturated fat, phytosterols, fiber, vitamin E and iron, e.g. walnuts, almonds, hazelnuts. Beware not to exceed your fat intake.',
  },
  {
    id: 7,
    question: 'Do you have 3 or more servings of fish or seafood each week? (1 fish serving is 3.5-5 oz or 100-150 g, or 200g seafood or 4-5 pieces)',
    yesAnswer: 'Fish is rich in omega-3 fats. Salmon, trout, mackerel, sardines, herring, anchovies contain omega-3 fats (EPA and DHA) for heart and brain health. White fish is also very low in saturated fat.',
    noAnswer: 'Eat fish rich in omega-3 fats. Salmon, trout, mackerel, sardines, herring, anchovies contain omega-3 fats (EPA and DHA) for heart and brain health. White fish is also very low in saturated fat.',
  },
  {
    id: 8,
    question: 'Do you have 3 or more servings of legumes (peas, beans, or lentils) each week? (1 serving is 175 ml or 150 g)',
    noAnswer: 'Increase foods rich in soluble fibers Add legumes such as beans, peas and lentils several times a week. They also help lower raised cholesterol levels.',
  },
  {
    id: 9,
    question: ' Do you eat white meat (such as chicken or turkey), fish and beans more often than red meat such as beef, pork, hamburger or sausage?',
    yesAnswer: 'Red and processed meats are high in saturated fat, can be high in salt and are best replaced with white meat or fish or vegetarian sources of protein. Grill or roast without fat, casserole or stir fry.',
    noAnswer: 'Choose lean meats with little visible fat and consider cooking methods. Red and processed meats are high in saturated fat, can be high in salt and are best replaced with white meat or fish or vegetarian sources of protein. Grill or roast without fat, casserole or stir fry.',
  },
  {
    id: 10,
    question: 'Is 1 or less serving of red or white meat eaten each day?',
    noAnswer: 'Choose lean meats with little visible fat and consider cooking methods. Red and processed meats are high in saturated fat, can be high in salt and are best replaced with white meat or fish or vegetarian sources of protein. Grill or roast without fat, casserole or stir fry.',
  },
  {
    id: 11,
    question: 'Do you eat 1 tablespoon (15 ml) or less of butter, margarine, or cream each day?',
    yesAnswer: 'Good job! You’re making healthier fat choices.',
    noAnswer: 'Choose plant-based fats like oils, nuts and seeds instead of cream margarine and butter. These foods are high in saturated fat which can increase your blood cholesterol level.',
  },
  {
    id: 12,
    question: 'Do you eat commercial sweets/pastries  such as cookies, doughnuts or cake less than 3 servings  per week?',
    yesAnswer: 'Enjoy once in a while!',
    noAnswer: 'These foods are usually high in saturated fat, salt or sugar and often contain trans fats. Replacing these with healthy snacks such as fruit or unsalted nuts is beneficial.',
  },
  {
    id: 13,
    question: 'Do you have less than 1 can (355 ml or 12 oz) of sweet or sugar sweetened carbonated beverages each day?',
    yesAnswer: 'Great! Reducing sugary drinks is beneficial.',
    noAnswer: 'Limit sweet drinks like pop, sports drinks, juice, flavored or iced coffees to avoid excess added sugars that can worsen risk factors for several diseases.',
  },
];

const MediterraneanDietScore = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const nextStep = () => {
    if (!answers[questions[currentStep].id]) {
      alert('Please select an answer before proceeding.');
      return;
    }
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes').length;
    const totalQuestions = questions.length;
    const percentage = (yesAnswers / totalQuestions) * 100;
    setScore(percentage);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-5">
      <div className="w-full max-w-lg bg-white dark:bg-[#000] p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-8 text-center">Mediterranean Diet Score</h1>

        {score === null ? (
          <>
            <div className="mb-4">
              <p className="text-lg mb-2  text-black dark:text-[#f0f0fe]">{questions[currentStep].question}</p>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${questions[currentStep].id}`}
                  value="yes"
                  checked={answers[questions[currentStep].id] === 'yes'}
                  onChange={() => handleAnswerChange(questions[currentStep].id, 'yes')}
                  className="form-radio h-5 w-5 text-green-600 cursor-pointer"
                />
                <span className='cursor-pointer'>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question-${questions[currentStep].id}`}
                  value="no"
                  checked={answers[questions[currentStep].id] === 'no'}
                  onChange={() => handleAnswerChange(questions[currentStep].id, 'no')}
                  className="form-radio h-5 w-5 text-red-600 cursor-pointer"
                />
                <span className='cursor-pointer'>No</span>
              </label>
            </div>

            {answers[questions[currentStep].id] && (
              <div className="mt-4 text-sm text-[#212121] dark:text-[#f0f0ee]">
                {answers[questions[currentStep].id] === 'yes'
                  ? questions[currentStep].yesAnswer
                  : questions[currentStep].noAnswer}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                className="bg-[#b0e1ec] dark:text-[#212121] hover:dark:text-[#f0f0ee] hover:dark:bg-[#3c79b4] py-2 px-4 rounded-lg disabled:opacity-50"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="bg-[#71743c] py-2 px-4 rounded-lg dark:hover:bg-[#c2c36b] dark:hover:text-[#212121] transition duration-300"
                onClick={nextStep}
              >
                {currentStep === questions.length - 1 ? 'Calculate Score' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl">Your Score: {score}%</h2>
            {score === 100 ? (
              <p className="text-lg text-green-500 mt-2">Great job! You're making healthy food choices in line with the Mediterranean diet.</p>
            ) : (
              <p className="text-lg text-red-500 mt-2">Pick 1-2 areas to work on.</p>
            )}
            <button
              className="bg-blue-500 py-2 px-4 rounded-lg mt-4"
              onClick={() => {
                setScore(null);
                setCurrentStep(0);
                setAnswers({});
              }}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediterraneanDietScore;