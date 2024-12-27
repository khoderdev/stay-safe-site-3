import { useState, useRef } from 'react';
import pharmacyData from './searchData.json';
import { motion } from 'framer-motion';
import './SearchPharmacies.css';
import { selectStyles, localitySelect } from '../../utils/styles';


const SearchPharmacies = () => {
  const titlesRef = useRef([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [filteredPharmacies, setFilteredPharmacies] = useState([]);



  const governorates = [
    ...new Set(pharmacyData.map((pharmacy) => pharmacy.Governorate)),
  ];

  const localities = selectedGovernorate
    ? [
      ...new Set(
        pharmacyData
          .filter((pharmacy) => pharmacy.Governorate === selectedGovernorate)
          .map((pharmacy) => pharmacy.Locality)
      ),
    ]
    : [];

  const handleGovernorateChange = (e) => {
    setSelectedGovernorate(e.target.value);
    setSelectedLocality('');
    setFilteredPharmacies([]);
  };

  const handleLocalityChange = (e) => {
    const locality = e.target.value;
    setSelectedLocality(locality);

    const results = pharmacyData.filter(
      (pharmacy) =>
        pharmacy.Locality === locality &&
        pharmacy.Governorate === selectedGovernorate
    );
    setFilteredPharmacies(results);
  };


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



  const splitTextIntoLetters = (text) => {
    return text.split('').map((letter) => (letter === ' ' ? '\u00A0' : letter));
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 150,
      },
    }),
  };



  return (
    <div className='flex-container flex flex-col md:flex md:flex-row w-full overflow-y-scroll overflow-x-hidden h-screen pt-8 sm: perspective'>

      <div className='flex flex-col w-[33%] p-2  items-center'>
        <motion.img
          src='/pharma4.gif'
          alt='pharma'
          className=''
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        />
      </div>

      <div className='flex flex-col sm:w-[66%] p-4'>
        <h2 className="animated__content" data-splitting ref={(el) => titlesRef.current[0] = el}>
          <span className="text-6xl font-semibold leading-tight dark:text-white-bg2 flex flex-col ">
            Looking for Cancer Medication?
          </span>
        </h2>

        <div className='flex mt-5 text-black dark:text-white-bg'>
          {splitTextIntoLetters("Check Pharmacies").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className='text-xl sm:text-[27px] leading-snug 2xl:leading-[1.3em]'
            >
              {letter}
            </motion.span>
          ))}

          <br />

          {splitTextIntoLetters(" in your Region").map((letter, index) => (
            <motion.span
              key={index + 100}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className='text-xl sm:text-[27px] leading-snug 2xl:leading-[1.3em]'
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className='flex'>
          <motion.div
            className='search-component flex flex-col w-full items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className='flex w-full justify-between sm:justify-start pr-5 sm:space-x-14 mt-6 py-4'>
              {/* Governorate Selection */}
              <motion.div
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                viewport={{ once: true }}
              >
                <select
                  id='governorate'
                  value={selectedGovernorate}
                  onChange={handleGovernorateChange}
                  className={`${selectStyles()} !w-[12em] !ml-0 `}
                >
                  <option value=''>Select Governorate</option>
                  {governorates.map((governorate) => (
                    <option key={governorate} value={governorate}>
                      {governorate}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Locality Selection */}
              <motion.div
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                viewport={{ once: true }}
              >
                <select
                  id='locality'
                  // id={`${localitySelect} locality`}
                  value={selectedLocality}
                  onChange={handleLocalityChange}
                  disabled={!selectedGovernorate}
                  className={`!w-[12.5em] ${localitySelect({ disabled: !selectedGovernorate })}`}
                >
                  <option value=''>Select Locality</option>
                  {localities.map((locality) => (
                    <option key={locality} value={locality}>
                      {locality}
                    </option>
                  ))}
                </select>
              </motion.div>

            </div>


            <div className='flex w-full'>
              {/* Display Filtered Results */}
              {filteredPharmacies.length > 0 && (
                <motion.div
                  className='results custom-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-4 pr-2 overflow-y-auto w-full max-h-72 2xl:max-h-[60dvh]'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredPharmacies.map((pharmacy, index) => (
                    <motion.li
                      key={index}
                      className='flex flex-col justify-center bg-white-fg dark:bg-[#000] p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-black dark:text-white-bg'
                      transition={{ type: 'spring', stiffness: 100 }}
                      variants={wordVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={index + 1}
                      viewport={{ once: false }}
                    >
                      <div>
                        <strong>Pharmacy:</strong> {pharmacy.Name}
                      </div>
                      <div>
                        <strong>Phone:</strong>
                        <a href={`tel:${pharmacy.Number}`} className="ml-1 text-[#3c79b4] underline">
                          {pharmacy.Number}
                        </a>
                      </div>
                      <div>
                        <strong>Address:</strong> {pharmacy.Locality}
                      </div>
                    </motion.li>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SearchPharmacies;