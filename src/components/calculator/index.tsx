import { useState, useEffect, useRef } from 'react';
import useScreeningMessages from './useScreeningMessages';
import { inputStyles, selectStyles } from '../../utils/styles';
import { motion, useAnimation } from 'framer-motion';
import Form from './Form';
import './calculator.css';
import React from 'react';

interface PackYearsCalculatorProps { }


const PackYearsCalculator: React.FC<PackYearsCalculatorProps> = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [smoker, setSmoker] = useState<boolean>(false);
  const [packsPerDay, setPacksPerDay] = useState<string>('');
  const [yearsSmoked, setYearsSmoked] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event) => {
    event.stopPropagation();
  };

  const wordVariants = {
    hidden: (custom: number) => ({
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

  const { monthlyScreening, yearlyScreening, onceAYear, otherScreening } = useScreeningMessages({
    age,
    gender,
    smoker,
    packsPerDay,
    yearsSmoked,
  });

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

  useEffect(() => {
    if (smoker && packsPerDay && yearsSmoked) {
      calculatePackYears();
    } else {
      setResult(null);
    }
  }, [packsPerDay, yearsSmoked, smoker]);

  const calculatePackYears = () => {
    const packs = parseFloat(packsPerDay);
    const years = parseFloat(yearsSmoked);
    if (isNaN(packs) || isNaN(years)) return;

    const packYears = packs * years;
    setResult(`You have smoked a total of ${packYears} pack years.`);
  };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
    if (value === '' || parseInt(value, 10) > 0) {
      setValue(value);
    }
  };

  const resetForm = () => {
    setGender('');
    setSmoker(false);
    setPacksPerDay('');
    setYearsSmoked('');
    setResult(null); // Reset result to null
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const ageNum = parseInt(value, 10);

    // Allow clearing the input
    if (value === '') {
      resetForm(); // Reset all inputs if age is cleared
      setAge('');
      return;
    }

    if (ageNum > 0 && ageNum <= 100) {
      setAge(value);
    } else {
      resetForm(); // Reset all inputs if age is invalid
    }
  };


  const handlePacksPerDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);

    // Check if the value is not a number, negative, or exceeds 10
    if (isNaN(value) || value < 0) {
      value = ''; // Clear if invalid or negative
    } else if (value > 10) {
      value = 10; // Limit to max 10
    } else {
      // Round to the nearest increment of 0.1 to prevent rounding errors
      value = Math.round(value * 10) / 10;
    }

    setPacksPerDay(value.toString());
  };

  const resetScreeningMessages = () => {
  };

  const handleYearsSmokedChange = (e: React.ChangeEvent<HTMLInputElement>) => handleNumberInputChange(e, setYearsSmoked);

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setGender(value);
    // Reset screening messages if gender input is empty
    if (!value) {
      resetForm(); // Only reset the gender and related states
      resetScreeningMessages();
    }
  };

  const handleSmokerChange = (e: React.ChangeEvent<HTMLInputElement>) => setSmoker(e.target.checked);

  const isAdult = parseInt(age, 10) >= 20;

  // Updated condition to hide messages for invalid ages and when gender is empty
  const shouldHideMessages = (ageNum: number | null) => {
    return (
      ageNum === null ||
      ageNum === 0 ||
      (ageNum >= 1 && ageNum <= 19) ||
      (ageNum >= 76 && ageNum <= 100) ||
      !gender // Hide messages if gender is empty
    );
  };

  return (
    <div onWheel={handleWheel} className="col-span-2 flex flex-col  items-stretch  sm:p-6 shadow-md w-full h-screen text-black dark:text-white text-sm overflow-y-auto gap-4">
      <div className='col-span-1 md:col-span-2'>
        <h1 className='title text-2xl '>Title Here</h1>
      </div>
      <div className='col-span-1 flex flex-col md:flex-row w-full h-screen gap-4'>
        <Form
          age={age}
          handleAgeChange={handleAgeChange}
          gender={gender}
          handleGenderChange={handleGenderChange}
          smoker={smoker}
          handleSmokerChange={handleSmokerChange}
          packsPerDay={packsPerDay}
          handlePacksPerDayChange={handlePacksPerDayChange}
          yearsSmoked={yearsSmoked}
          handleYearsSmokedChange={handleYearsSmokedChange}
          isAdult={isAdult}
          inputStyles={inputStyles}
          selectStyles={selectStyles}
          result={result}
        />
        <div className="md:w-[50%] w-full h-full overflow-y-auto grid grid-cols-1 drop-shadow-md">
          {/* Remove gender message if age warning is displayed */}
          {(!gender && !smoker && !packsPerDay && !yearsSmoked && (age >= 20 && age <= 75)) && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Choose your Gender to continue.</p>
            </div>
          )}

          {/* Display warning if age is out of valid range */}
          {(age < 20 || age > 75) && (
            <div className="flex items-start justify-center pt-12 h-full">
              <p className="text-gray-500 text-md md:text-xl">
                These recommendations apply to otherwise healthy <br /> individuals between the ages of 20 and 75.
              </p>
            </div>
          )}

          {/* Conditional rendering for screening messages */}
          {!shouldHideMessages(parseInt(age, 10)) && (
            <>
              {/* Monthly Screening Messages */}
              {monthlyScreening.length > 0 && (
                <div className="p-4 mb-4 rounded bg-[#f0f0fe] dark:bg-[#191A19]">
                  <h2 className="text-lg mb-2">Monthly</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {monthlyScreening.map((message, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#fff] dark:bg-[#000] p-2 rounded text-sm"
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
              {/* Yearly Screening Messages */}
              {yearlyScreening.length > 0 && (
                <div className="p-4 mb-4 rounded bg-[#f0f0fe] dark:bg-[#191A19]">
                  <h2 className="text-lg mb-2">Yearly</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {yearlyScreening.map((message, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#fff] dark:bg-[#000] p-2 rounded text-sm"
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
              {/* Once A Year Screening Messages */}
              {onceAYear.length > 0 && (
                <div className="p-4 mb-4 rounded bg-[#f0f0fe] dark:bg-[#191A19]">
                  <h2 className="text-lg mb-2">Once A Year</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {onceAYear.map((message, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#fff] dark:bg-[#000] p-2 rounded text-sm"
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
              {/* Other Screening Messages */}
              {otherScreening.length > 0 && (
                <div className="p-4 mb-4 rounded bg-[#f0f0fe] dark:bg-[#191A19]">
                  <h2 className="text-lg mb-2">Other</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {otherScreening.map((message, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#fff] dark:bg-[#000] p-2 rounded text-sm"
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackYearsCalculator;