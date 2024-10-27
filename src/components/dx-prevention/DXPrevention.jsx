// // import { useState, useEffect, useRef } from 'react';
// // import useAnimatedSplitting from '../../hooks/useAnimatedSplitting';

// // const useParallax = (multiplier = 0.3) => {
// //   const [offsetY, setOffsetY] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setOffsetY(window.scrollY * multiplier);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [multiplier]);

// //   return offsetY;
// // };

// // function DXPrevention() {
// //   const titlesRef = useRef([]);
// //   const parallaxY = useParallax(0.3);

// //   useAnimatedSplitting('animated__content', {
// //     duration: 1.7, ease: 'expo',
// //     stagger: 0.2,
// //     from: 'random',
// //   });


// //   return (
// //     <div className='flex flex-col sm:w-[60%] p-4 py-2 bg-slate-500'>
// //       <h2 className="animated__content" data-splitting ref={(el) => titlesRef.current[0] = el}>
// //         <span className="text-3xl sm:text-3xl text-black dark:text-[#f0f0ee]">
// //           Obesity <br />
// //           Type 2 Diabetes <br />
// //           Anthrax Cervical Cancer <br />
// //           Hypertension Lung Cancer <br />
// //           Malaria Metabolic Syndrome <br />
// //           STI Rabies Chronic Heart Disease <br />
// //           HIV HPV COPD Bladder Cancer Cholera <br />
// //           Work-Related Musculoskeletal Diseases <br />
// //           High Cholesterol Slips & Lapses COVID-19 Asthma <br />
// //           Food Poisoning Mumps n Syndrome <br />
// //           Tuberculosis Chlamydia Sleep Apnea DiphtherInfluenza Hearing Loss Hepatitis <br />
// //           Colon Cancer Skin Cancer Hand-Arm Vibratioia Mesothelioma Mpox <br />
// //           Brucellosis Measles Occupational Coronary Artery Disease MERS Polio
// //         </span>
// //       </h2>




// //     </div>
// //   )
// // }

// // export default DXPrevention

// import { motion } from 'framer-motion';

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1, // Delay based on the index
//       duration: 0.5,
//       type: 'spring',
//       stiffness: 50,
//     },
//   }),
// };

// function DXPrevention() {
//   const diseases = [
//     // 'Obesity',
//     // 'Type 2 Diabetes Anthrax',
//     // 'Cervical Cancer',
//     // 'Hypertension',
//     // 'Lung Cancer',
//     // 'Malaria',
//     // 'Metabolic Syndrome',
//     // 'STI',
//     // 'Rabies',
//     // 'Chronic Heart Disease',
//     // 'HIV',
//     // 'HPV',
//     // 'COPD',
//     // 'Bladder Cancer',
//     // 'Cholera',
//     // 'Work-Related Musculoskeletal Diseases',
//     // 'High Cholesterol',
//     // 'Slips & Lapses',
//     // 'COVID-19',
//     // 'Asthma',
//     // 'Food Poisoning',
//     // 'Mumps n Syndrome',
//     // 'Tuberculosis',
//     // 'Chlamydia',
//     // 'Sleep Apnea',
//     // 'Diphtheria',
//     // 'Influenza',
//     // 'Hearing Loss',
//     // 'Hepatitis',
//     // 'Colon Cancer',
//     // 'Skin Cancer',
//     // 'Hand-Arm Vibration Syndrome',
//     // 'Mesothelioma',
//     // 'Mpox',
//     // 'Brucellosis',
//     // 'Measles',
//     // 'Occupational Coronary Artery Disease',
//     // 'MERS',
//     // 'Polio',


//     " Obesity Type 2 Diabetes",
//     "  Anthrax Cervical Cancer",
//     "    Hypertension Lung Cancer",
//     "    Malaria Metabolic Syndrome",
//     "    STI Rabies Chronic Heart Disease",
//     "    HIV HPV COPD Bladder Cancer Cholera",
//     "  Work - Related Musculoskeletal Diseases",
//     "    High Cholesterol Slips & Lapses COVID - 19 Asthma",
//     "    Food Poisoning Mumps n Syndrome",
//     "    Tuberculosis Chlamydia Sleep Apnea DiphtherInfluenza Hearing Loss Hepatitis",
//     "    Colon Cancer Skin Cancer Hand - Arm Vibratioia Mesothelioma Mpox",
//     "    Brucellosis Measles Occupational Coronary Artery Disease MERS Polio"
//   ];

//   return (
//     <div className='flex flex-col sm:w-[60%] p-4 py-2 bg-slate-500'>
//       <h2 className="text-black dark:text-[#f0f0ee] text-3xl sm:text-3xl">
//         {diseases.map((disease, index) => (
//           <motion.span
//             key={disease}
//             variants={textVariants}
//             initial="hidden"
//             animate="visible"
//             custom={index}
//             className="block"
//           >
//             {disease}
//           </motion.span>
//         ))}
//       </h2>
//     </div>
//   );
// }

// export default DXPrevention;

// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////
// /////////////////////////////////////////

import { useRef } from 'react';
import { motion } from 'framer-motion';
import CircularText from './Circle';

const textVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
    rotateY: -45,
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
  },

  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: 'spring',
      stiffness: 10,
    },
  }),
};

function DXPrevention() {
  const circleRef = useRef(null);

  const diseases = [
    "Obesity Type 2 Diabetes",
    "Anthrax Cervical Cancer",
    "Hypertension Lung Cancer",
    "Malaria Metabolic Syndrome",
    "Food Poisoning Mumps n Syndrome",
    "STI Rabies Chronic Heart Disease",
    "HIV HPV COPD Bladder Cancer Cholera",
    "Work - Related Musculoskeletal Diseases",
    "High Cholesterol Slips & Lapses COVID - 19 Asthma",
    "Brucellosis Measles Occupational Coronary Artery Disease MERS Polio",
    "Colon Cancer Skin Cancer Hand - Arm Vibration Syndrome Mesothelioma Mpox",
    "Tuberculosis Chlamydia Sleep Apnea DiphtherInfluenza Hearing Loss Hepatitis",
  ];

  return (
    <div className='p-8 py-2 '>
      <div className='flex md:-mb-[15rem] justify-center md:justify-end md:mr-[15rem]'>
        <CircularText
          ref={circleRef}
        />
      </div>
      <div className='flex flex-col  py-2 '>
        <h2 className="text-black dark:text-[#f0f0ee] text-3xl sm:text-4xl">
          {diseases.map((disease, index) => (
            <motion.span
              key={disease}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="block leading-[2.9rem]"
            // style={{ display: 'block' }}
            >
              {disease}
            </motion.span>
          ))}
        </h2>
      </div>

    </div>

  );
}

export default DXPrevention;
