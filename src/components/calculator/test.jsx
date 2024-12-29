import React, { useState, useEffect, useRef } from 'react';
import { inputStyles, selectStyles } from '../../utils/styles';
import { motion, useAnimation } from 'framer-motion';
import './calculator.css';

const PackYearsCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [smoker, setSmoker] = useState(false);
  const [packsPerDay, setPacksPerDay] = useState('');
  const [yearsSmoked, setYearsSmoked] = useState('');
  const [result, setResult] = useState(null);
  const [monthlyScreening, setMonthlyScreening] = useState([]);
  const [yearlyScreening, setYearlyScreening] = useState([]);
  const [onceAYear, setOnceAYear] = useState([]);
  const [otherScreening, setOtherScreening] = useState([]);
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);


  const wordVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: 20,
      transition: { delay: custom * 0.1 },
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  useEffect(() => {
    if (smoker && packsPerDay && yearsSmoked) {
      calculatePackYears();
    } else {
      setResult(null);
    }

    const ageNum = parseInt(age, 10);
    if (!isNaN(ageNum) && gender) {
      determineScreeningMessages(ageNum, gender);
    }
  }, [age, gender, smoker, packsPerDay, yearsSmoked]);

  // Function to calculate total pack years smoked
  const calculatePackYears = () => {
    const packs = parseFloat(packsPerDay);
    const years = parseFloat(yearsSmoked);
    if (isNaN(packs) || isNaN(years)) return;

    const packYears = packs * years;
    setResult(`You have smoked a total of ${packYears} pack years.`);
  };

  // Function to generate appropriate health screening messages
  const determineScreeningMessages = (ageNum, gender) => {
    const monthlyMessages = [];
    const yearlyMessages = [];
    const onceAYearMessages = [];
    const otherMessages = [];

    // Early return for age 76 and above
    if (ageNum >= 76 || ageNum < 20) {
      otherMessages.push('Recommendations are only applicable to adults aged between 20 to 75.');
      setMonthlyScreening(monthlyMessages);
      setYearlyScreening(yearlyMessages);
      setOnceAYear(onceAYearMessages);
      setOtherScreening(otherMessages);
      return;
    }

    // General health screening recommendations
    monthlyMessages.push(`Skin Self-Exam`);
    yearlyMessages.push(`Complete Blood Count`);
    yearlyMessages.push(`Basic or Complete Metabolic Panel`);
    yearlyMessages.push(`Lipid Panel`);
    yearlyMessages.push(`Blood Pressure Screening`);
    yearlyMessages.push(`BMI, Height, Weight`);
    yearlyMessages.push(`Cardiovascular Evaluation`);
    yearlyMessages.push(`Comprehensive Physical Exam`);
    yearlyMessages.push(`Depression Screening`);

    // Add gender-specific and age-based exams
    if (gender === 'male') {
      monthlyMessages.push('Testicular Self-Exam');
      yearlyMessages.push('Testicular Cancer Screening');
    } else if (gender === 'female') {
      monthlyMessages.push('Breast Self-Exam');
    }

    // Age-based screenings
    if (ageNum >= 30 && ageNum <= 64 && gender === 'female') {
      otherMessages.push(`Every 5 Years Cervical Cancer Screening`);
    }
    if (ageNum >= 40 && ageNum <= 75 && gender === 'female') {
      onceAYearMessages.push(`Mammography`);
    }
    if (ageNum >= 40 && ageNum <= 75) {
      onceAYearMessages.push(`FIT Test for Colon Cancer Screening`);
      otherMessages.push(`Every 2-5 Years Full Body Skin Exam`);
      otherMessages.push(`Every 10 Years Colonoscopy (if normal results)`);
    }

    // Calculate pack years for screening recommendations
    const totalPackYears = parseFloat(packsPerDay) * parseFloat(yearsSmoked);

    if (ageNum >= 50 && ageNum <= 69) {
      otherMessages.push(`Every 10 Years Hearing Test`);
      yearlyMessages.push(`Prostate Cancer Screening: PSA and Physical Test`);
      if (smoker && totalPackYears >= 20) {
        onceAYearMessages.push(`Low-Dose Chest CT Scan Lung Cancer Screening`);
      }
    }

    if (ageNum >= 50 && ageNum <= 75 && gender === 'female') {
      otherMessages.push(`Every 5 Years DEXA Bone Scan (Osteoporosis Screening)`);
      otherMessages.push(`Every 5 Years Thyroid Panel`);
    }

    if (ageNum >= 50 && ageNum <= 75 && gender === 'male') {
      otherMessages.push(`Every 10 Years Cardiac Calcium Scoring`);
    }

    if (ageNum >= 65 && smoker && ageNum <= 75) {
      otherMessages.push(`Abdominal Aortic Aneurysm Screening (One-Time)`);
    }

    if (ageNum >= 60 && ageNum <= 75) {
      yearlyMessages.push(`Dementia & Alzheimer’s Screening`);
    }

    setMonthlyScreening(monthlyMessages);
    setYearlyScreening(yearlyMessages);
    setOnceAYear(onceAYearMessages);
    setOtherScreening(otherMessages);
  };

  // Prevent negative numbers in input fields
  const handleNumberInputChange = (e, setValue) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value, 10) >= 0)) {
      setValue(value);
    }
  };

  // Handle input changes and updates
  const handleAgeChange = (e) => handleNumberInputChange(e, setAge);
  const handlePacksPerDayChange = (e) => handleNumberInputChange(e, setPacksPerDay);
  const handleYearsSmokedChange = (e) => handleNumberInputChange(e, setYearsSmoked);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleSmokerChange = (e) => setSmoker(e.target.checked);

  // Conditionally render inputs based on age
  const isAdult = parseInt(age, 10) >= 20;


  return (
    <div className="flex flex-col md:flex-row items-stretch p-4 sm:p-6 shadow-md w-full h-full text-black dark:text-white-bg overflow-y-auto gap-4">
      {/* Form Section */}
      <div className="flex flex-col md:w-[50%] w-full h-[89%] p-4 sm:p-4 mb-4 sm:mb-0 rounded-sm drop-shadow-md">
        <form className="flex flex-col space-y-4">
          {/* Age and Gender in the same row */}
          <div className="flex flex-row sm:flex-col sm:flex gap-4 justify-center sm:justify-start sm:items-start items-center">
            <div className="flex flex-col sm:flex-row sm:justify-start items-center">
              <label className="text-md">Age</label>
              <input
                type="number"
                value={age}
                onChange={handleAgeChange}
                required
                className={`${inputStyles()} py-[7px]!`}
                aria-label="Age"
              />
            </div>
          </div>

          {/* Conditionally render inputs if the age is 20 or above */}
          {isAdult ? (
            <>
              <div className="flex flex-col sm:flex-row sm:justify-start items-center">
                <label className="text-md">Gender</label>
                <select
                  value={gender}
                  onChange={handleGenderChange}
                  className={`${selectStyles()} py-[10.5px]! w-32! sm:py-[8px]!`}
                  aria-label="Gender"
                >
                  <option value="" hidden></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex items-center mb-4">
                <label className="text-md">Have you ever smoked?</label>
                <div className="flex items-center ml-4">
                  <input
                    type="checkbox"
                    checked={smoker}
                    onChange={handleSmokerChange}
                    className="h-4 w-4"
                    aria-label="Smoker"
                  />
                  <span className="ml-2 text-md">Yes</span>
                </div>
              </div>

              {smoker && (
                <div className="flex sm:flex-col gap-2">
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                    <label className="flex flex-col text-sm sm:text-md">
                      Packs of cigarettes smoked per day
                      <span className="text-[15px] font-light">(each pack equals 20 cigarettes)</span>
                    </label>
                    <input
                      type="number"
                      value={packsPerDay}
                      onChange={handlePacksPerDayChange}
                      required
                      className={`${inputStyles()} sm:mt-[-18px] py-[7px]! ml-10 sm:ml-2`}
                      aria-label="Packs Per Day"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end sm:justify-start items-center">
                    <label className="text-md mr-9 sm:mr-1">Years smoked</label>
                    <input
                      type="number"
                      value={yearsSmoked}
                      onChange={handleYearsSmokedChange}
                      required
                      className={`${inputStyles()} py-[7px]! mr-14`}
                      aria-label="Years Smoked"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-red-600">
              Recommendations are only applicable to adults aged between 20 to 75.
            </p>
          )}
        </form>

        {result && <p className="text-pink mt-6 text-md">{result}</p>}
      </div>

      <div className="md:w-[50%] w-full h-full overflow-y-auto grid grid-cols-1 drop-shadow-md">
        {(!gender && !smoker && !packsPerDay && !yearsSmoked) && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-4xl">No data to show</p>
          </div>
        )}
        {monthlyScreening.length > 0 && (
          <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
            <h2 className="text-lg mb-2">Monthly</h2>
            <div className="grid grid-cols-2 gap-4">
              {monthlyScreening.map((message, index) => (
                <motion.div
                  key={index}
                  className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
                  transition={{ type: 'spring', stiffness: 100 }}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 1}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {message}
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {yearlyScreening.length > 0 && (
          <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
            <h2 className="text-lg mb-3">At Least Once Yearly</h2>
            <div className="grid grid-cols-3 gap-2">
              {yearlyScreening.map((message, index) => (
                <motion.div
                  key={index}
                  className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {message}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {onceAYear.length > 0 && (
          <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
            <h2 className="text-lg mb-3">Once a Year</h2>
            <div className="grid grid-cols-3 gap-2">
              {onceAYear.map((message, index) => (
                <motion.div
                  key={index}
                  className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
                  transition={{ type: 'spring', stiffness: 100 }}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 1}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {message}
                </motion.div>
              ))}
            </div>
          </div>
        )}
        {otherScreening.length > 0 && (
          <div className="p-4 rounded-sm bg-white-bg dark:bg-black">
            <div className="grid grid-cols-1 gap-2">
              {otherScreening.map((message, index) => (
                <motion.div
                  key={index}
                  className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
                  transition={{ type: 'spring', stiffness: 100 }}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 1}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {message}
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PackYearsCalculator;



// import { useState, useEffect, useRef } from 'react';
// import { inputStyles, selectStyles } from '../../utils/styles';
// import { motion, useAnimation } from "framer-motion";
// import './calculator.css';


// const wordVariants = {
//   hidden: (custom) => ({
//     opacity: 0,
//     y: 20,
//     transition: { delay: custom * 0.1 },
//   }),
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 100 },
//   },
// };

// const PackYearsCalculator = () => {
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [smoker, setSmoker] = useState(false);
//   const [packsPerDay, setPacksPerDay] = useState('');
//   const [yearsSmoked, setYearsSmoked] = useState('');
//   const [result, setResult] = useState(null);
//   const [monthlyScreening, setMonthlyScreening] = useState([]);
//   const [yearlyScreening, setYearlyScreening] = useState([]);
//   const [onceAYear, setOnceAYear] = useState([]);
//   const [otherScreening, setOtherScreening] = useState([]);
//   const controls = useAnimation(); 
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start("visible");
//         } else {
//           controls.start("hidden");
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);  // Observe the ref element
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);  // Cleanup observer
//       }
//     };
//   }, [controls]);

//   // Automatically calculate pack years and screening messages whenever relevant inputs change
//   useEffect(() => {
//     if (smoker && packsPerDay && yearsSmoked) {
//       calculatePackYears();
//     } else {
//       setResult(null);
//     }

//     const ageNum = parseInt(age, 10);
//     if (!isNaN(ageNum) && gender) {
//       determineScreeningMessages(ageNum, gender);
//     }
//   }, [age, gender, smoker, packsPerDay, yearsSmoked]);

//   // Function to calculate total pack years smoked
//   const calculatePackYears = () => {
//     const packs = parseFloat(packsPerDay);
//     const years = parseFloat(yearsSmoked);
//     if (isNaN(packs) || isNaN(years)) return;

//     const packYears = packs * years;
//     setResult(`You have smoked a total of ${packYears} pack years.`);
//   };

//   // Function to generate appropriate health screening messages
//   const determineScreeningMessages = (ageNum, gender) => {
//     const monthlyMessages = [];
//     const yearlyMessages = [];
//     const onceAYearMessages = [];
//     const otherMessages = [];

//     // Early return for age 76 and above
//     if (ageNum >= 76) {
//       otherMessages.push(`Recommendations are only applicable to adults aged between 20 to 75`);
//       setMonthlyScreening(monthlyMessages);
//       setYearlyScreening(yearlyMessages);
//       setOnceAYear(onceAYearMessages);
//       setOtherScreening(otherMessages);
//       return;
//     }

//     // General health screening recommendations
//     monthlyMessages.push(`Skin Self-Exam`);
//     yearlyMessages.push(`Complete Blood Count`);
//     yearlyMessages.push(`Basic or Complete Metabolic Panel`);
//     yearlyMessages.push(`Lipid Panel`);
//     yearlyMessages.push(`Blood Pressure Screening`);
//     yearlyMessages.push(`BMI, Height, Weight`);
//     yearlyMessages.push(`Cardiovascular Evaluation`);
//     yearlyMessages.push(`Comprehensive Physical Exam`);
//     yearlyMessages.push(`Depression Screening`);

//     // Add gender-specific exams
//     if (gender === 'male') {
//       monthlyMessages.push(`Testicular Self-Exam`);
//       yearlyMessages.push(`Testicular Cancer Screening`);
//     } else if (gender === 'female') {
//       monthlyMessages.push(`Breast Self-Exam`);
//     }

//     // Age-based screenings
//     if (ageNum >= 30 && ageNum <= 64 && gender === 'female') {
//       otherMessages.push(`Every 5 Years Cervical Cancer Screening`);
//     }
//     if (ageNum >= 40 && ageNum <= 75 && gender === 'female') {
//       onceAYearMessages.push(`Mammography`);
//     }
//     if (ageNum >= 40 && ageNum <= 75) {
//       onceAYearMessages.push(`FIT Test for Colon Cancer Screening`);
//       otherMessages.push(`Every 2-5 Years Full Body Skin Exam`);
//       otherMessages.push(`Every 10 Years Colonoscopy (if normal results)`);
//     }

//     // Calculate pack years for screening recommendations
//     const totalPackYears = parseFloat(packsPerDay) * parseFloat(yearsSmoked);

//     if (ageNum >= 50 && ageNum <= 69) {
//       otherMessages.push(`Every 10 Years Hearing Test`);
//       yearlyMessages.push(`Prostate Cancer Screening: PSA and Physical Test`);
//       if (smoker && totalPackYears >= 20) {
//         onceAYearMessages.push(`Low-Dose Chest CT Scan Lung Cancer Screening`);
//       }
//     }

//     if (ageNum >= 50 && ageNum <= 75 && gender === 'female') {
//       otherMessages.push(`Every 5 Years DEXA Bone Scan (Osteoporosis Screening)`);
//       otherMessages.push(`Every 5 Years Thyroid Panel`);
//     }

//     if (ageNum >= 50 && ageNum <= 75 && gender === 'male') {
//       otherMessages.push(`Every 10 Years Cardiac Calcium Scoring`);
//     }

//     if (ageNum >= 65 && smoker && ageNum <= 75) {
//       otherMessages.push(`Abdominal Aortic Aneurysm Screening (One-Time)`);
//     }

//     if (ageNum >= 60 && ageNum <= 75) {
//       yearlyMessages.push(`Dementia & Alzheimer’s Screening`);
//     }

//     setMonthlyScreening(monthlyMessages);
//     setYearlyScreening(yearlyMessages);
//     setOnceAYear(onceAYearMessages);
//     setOtherScreening(otherMessages);
//   };


//   const handleNumberInputChange = (e, setValue) => {
//     const value = e.target.value;
//     if (value === '' || (parseInt(value, 10) >= 0)) {
//       setValue(value);
//     }
//   };

//   const handleAgeChange = (e) => {
//     const value = e.target.value;
//     const ageNum = parseInt(value, 10);
//     if (value === '' || (ageNum >= 0 && ageNum <= 75)) {
//       setAge(value);
//     }
//   };

//   const handlePacksPerDayChange = (e) => handleNumberInputChange(e, setPacksPerDay);
//   const handleYearsSmokedChange = (e) => handleNumberInputChange(e, setYearsSmoked);
//   const handleGenderChange = (e) => setGender(e.target.value);
//   const handleSmokerChange = (e) => setSmoker(e.target.checked);

//   const isAdult = parseInt(age, 10) >= 20;

//   return (
//     <div className="flex flex-col md:flex-row items-stretch p-4 sm:p-6 shadow-md w-full h-full text-black dark:text-white-bg overflow-y-auto gap-4">
//       <div className="flex flex-col md:w-[50%] w-full h-[89%] p-4 sm:p-4 mb-4 sm:mb-0 rounded-sm drop-shadow-md">
//         <form className="flex flex-col space-y-4">
//           <div className="flex flex-row sm:flex-col sm:flex gap-4 justify-center sm:justify-start sm:items-start items-center">
//             <div className="flex flex-col sm:flex-row sm:justify-start items-center">
//               <label className="text-md">Age</label>
//               <input
//                 type="number"
//                 value={age}
//                 onChange={handleAgeChange}
//                 required
//                 className={`${inputStyles()} py-[7px]!`}
//                 aria-label="Age"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row sm:justify-start items-center">
//             <label className="text-md">Gender</label>
//             <select
//               value={gender}
//               onChange={handleGenderChange}
//               className={`${selectStyles()} py-[10.5px]! w-32! sm:py-[8px]!`}
//               aria-label="Gender"
//               disabled={!isAdult}  // Disable if not an adult
//             >
//               <option value="" hidden></option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>

//           <div className="flex items-center mb-4">
//             <label className="text-md">Have you ever smoked?</label>
//             <div className="flex items-center ml-4">
//               <input
//                 type="checkbox"
//                 checked={smoker}
//                 onChange={handleSmokerChange}
//                 className="h-4 w-4"
//                 aria-label="Smoker"
//                 disabled={!isAdult}  // Disable if not an adult
//               />
//               <span className="ml-2 text-md">Yes</span>
//             </div>
//           </div>

//           {smoker && (
//             <div className="flex sm:flex-col gap-2">
//               <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center">
//                 <label className="flex flex-col text-sm sm:text-md">
//                   Packs of cigarettes smoked per day
//                   <span className="text-[15px] font-light">(each pack equals 20 cigarettes)</span>
//                 </label>
//                 <input
//                   type="number"
//                   value={packsPerDay}
//                   onChange={handlePacksPerDayChange}
//                   required
//                   className={`${inputStyles()} sm:mt-[-18px] py-[7px]! ml-10 sm:ml-2`}
//                   aria-label="Packs Per Day"
//                   disabled={!isAdult}  // Disable if not an adult
//                 />
//               </div>
//               <div className="flex flex-col sm:flex-row justify-end sm:justify-start items-center">
//                 <label className="text-md mr-9 sm:mr-1">Years smoked</label>
//                 <input
//                   type="number"
//                   value={yearsSmoked}
//                   onChange={handleYearsSmokedChange}
//                   required
//                   className={`${inputStyles()} py-[7px]! mr-14`}
//                   aria-label="Years Smoked"
//                   disabled={!isAdult}  // Disable if not an adult
//                 />
//               </div>
//             </div>
//           )}
//         </form>

//         {result && <p className="text-pink mt-6 text-md">{result}</p>}
//       </div>
//       {/* </div> */}

//       <div className="md:w-[50%] w-full h-full overflow-y-auto grid grid-cols-1 drop-shadow-md">
//         {(!gender && !smoker && !packsPerDay && !yearsSmoked) && (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-gray-500 text-4xl">No data to show</p>
//           </div>
//         )}
//         {monthlyScreening.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-2">Monthly</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {monthlyScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//         {yearlyScreening.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-3">At Least Once Yearly</h2>
//             <div className="grid grid-cols-3 gap-2">
//               {yearlyScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//                   viewport={{ once: false, amount: 0.5 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//         {onceAYear.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-3">Once a Year</h2>
//             <div className="grid grid-cols-3 gap-2">
//               {onceAYear.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//         {otherScreening.length > 0 && (
//           <div className="p-4 rounded-sm bg-white-bg dark:bg-black">
//             <div className="grid grid-cols-1 gap-2">
//               {otherScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div >
//   );
// };

// export default PackYearsCalculator;



// /////////////////////////////////////
// /////////////////////////////////////
// /////////////////////////////////////
// /////////////////////////////////////


// import { useState, useEffect, useRef } from 'react';
// import useScreeningMessages from './useScreeningMessages';  // Import the hook
// import { inputStyles, selectStyles } from '../../utils/styles';
// import { motion, useAnimation } from "framer-motion";
// import './calculator.css';

// const PackYearsCalculator = () => {
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [smoker, setSmoker] = useState(false);
//   const [packsPerDay, setPacksPerDay] = useState('');
//   const [yearsSmoked, setYearsSmoked] = useState('');
//   const [result, setResult] = useState(null);
//   const controls = useAnimation();
//   const ref = useRef();



//   const wordVariants = {
//     hidden: (custom) => ({
//       opacity: 0,
//       y: 20,
//       transition: { delay: custom * 0.1 },
//     }),
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: 'spring', stiffness: 100 },
//     },
//   };

//   // Use the custom hook
//   const { monthlyScreening, yearlyScreening, onceAYear, otherScreening } = useScreeningMessages({
//     age,
//     gender,
//     smoker,
//     packsPerDay,
//     yearsSmoked,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start("visible");
//         } else {
//           controls.start("hidden");
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);  // Observe the ref element
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);  // Cleanup observer
//       }
//     };
//   }, [controls]);

//   // Automatically calculate pack years and display results
//   useEffect(() => {
//     if (smoker && packsPerDay && yearsSmoked) {
//       calculatePackYears();
//     } else {
//       setResult(null);
//     }
//   }, [packsPerDay, yearsSmoked, smoker]);

//   const calculatePackYears = () => {
//     const packs = parseFloat(packsPerDay);
//     const years = parseFloat(yearsSmoked);
//     if (isNaN(packs) || isNaN(years)) return;

//     const packYears = packs * years;
//     setResult(`You have smoked a total of ${packYears} pack years.`);
//   };

//   const handleNumberInputChange = (e, setValue) => {
//     const value = e.target.value;
//     if (value === '' || (parseInt(value, 10) >= 0)) {
//       setValue(value);
//     }
//   };

//   const handleAgeChange = (e) => {
//     const value = e.target.value;
//     const ageNum = parseInt(value, 10);
//     if (value === '' || (ageNum >= 0 && ageNum <= 75)) {
//       setAge(value);
//     }
//   };

//   const handlePacksPerDayChange = (e) => handleNumberInputChange(e, setPacksPerDay);
//   const handleYearsSmokedChange = (e) => handleNumberInputChange(e, setYearsSmoked);
//   const handleGenderChange = (e) => setGender(e.target.value);
//   const handleSmokerChange = (e) => setSmoker(e.target.checked);

//   const isAdult = parseInt(age, 10) >= 20;

//   return (
//     <div className="flex flex-col md:flex-row items-stretch p-4 sm:p-6 shadow-md w-full h-full text-black dark:text-white-bg overflow-y-auto gap-4">
//       {/* Form Section */}
//       <div className="flex flex-col md:w-[50%] w-full h-[89%] p-4 sm:p-4 mb-4 sm:mb-0 rounded-sm drop-shadow-md">
//         <form className="flex flex-col space-y-4">
//           {/* Age and Gender in the same row */}
//           <div className="flex flex-row sm:flex-col sm:flex gap-4 justify-center sm:justify-start sm:items-start items-center">
//             <div className="flex flex-col sm:flex-row sm:justify-start items-center">
//               <label className="text-md">Age</label>
//               <input
//                 type="number"
//                 value={age}
//                 onChange={handleAgeChange}
//                 required
//                 className={`${inputStyles()} py-[7px]!`}
//                 aria-label="Age"
//               />
//             </div>
//           </div>

//           {/* Conditionally render inputs if the age is 20 or above */}
//           {isAdult ? (
//             <>
//               <div className="flex flex-col sm:flex-row sm:justify-start items-center">
//                 <label className="text-md">Gender</label>
//                 <select
//                   value={gender}
//                   onChange={handleGenderChange}
//                   className={`${selectStyles()} py-[10.5px]! w-32! sm:py-[8px]!`}
//                   aria-label="Gender"
//                 >
//                   <option value="" hidden></option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </select>
//               </div>

//               <div className="flex items-center mb-4">
//                 <label className="text-md">Have you ever smoked?</label>
//                 <div className="flex items-center ml-4">
//                   <input
//                     type="checkbox"
//                     checked={smoker}
//                     onChange={handleSmokerChange}
//                     className="h-4 w-4"
//                     aria-label="Smoker"
//                   />
//                   <span className="ml-2 text-md">Yes</span>
//                 </div>
//               </div>

//               {smoker && (
//                 <div className="flex sm:flex-col gap-2">
//                   <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center">
//                     <label className="flex flex-col text-sm sm:text-md">
//                       Packs of cigarettes smoked per day
//                       <span className="text-[15px] font-light">(each pack equals 20 cigarettes)</span>
//                     </label>
//                     <input
//                       type="number"
//                       value={packsPerDay}
//                       onChange={handlePacksPerDayChange}
//                       required
//                       className={`${inputStyles()} sm:mt-[-18px] py-[7px]! ml-10 sm:ml-2`}
//                       aria-label="Packs Per Day"
//                     />
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-end sm:justify-start items-center">
//                     <label className="text-md mr-9 sm:mr-1">Years smoked</label>
//                     <input
//                       type="number"
//                       value={yearsSmoked}
//                       onChange={handleYearsSmokedChange}
//                       required
//                       className={`${inputStyles()} py-[7px]! mr-14`}
//                       aria-label="Years Smoked"
//                     />
//                   </div>
//                 </div>
//               )}
//             </>
//           ) : (
//             <p className="text-red-600">
//               Recommendations are only applicable to adults aged between 20 to 75.
//             </p>
//           )}
//         </form>

//         {result && <p className="text-pink mt-6 text-md">{result}</p>}
//       </div>

//       {/* Recommendations */}
//       <div className="md:w-[50%] w-full h-full overflow-y-auto grid grid-cols-1 drop-shadow-md">
//         {(!gender && !smoker && !packsPerDay && !yearsSmoked) && (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-gray-500 text-4xl">No data to show</p>
//           </div>
//         )}
//         {monthlyScreening.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-2">Monthly</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {monthlyScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//         {yearlyScreening.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-3">At Least Once Yearly</h2>
//             <div className="grid grid-cols-3 gap-2">
//               {yearlyScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//                   viewport={{ once: false, amount: 0.5 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {onceAYear.length > 0 && (
//           <div className="p-4 mb-4 rounded-sm bg-white-bg dark:bg-black">
//             <h2 className="text-lg mb-3">Once a Year</h2>
//             <div className="grid grid-cols-3 gap-2">
//               {onceAYear.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm text-center"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//         {otherScreening.length > 0 && (
//           <div className="p-4 rounded-sm bg-white-bg dark:bg-black">
//             <div className="grid grid-cols-1 gap-2">
//               {otherScreening.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white-fg dark:bg-[#000] p-2 rounded-sm"
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   variants={wordVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   custom={index + 1}
//                   viewport={{ once: false }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {message}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default PackYearsCalculator;


// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
