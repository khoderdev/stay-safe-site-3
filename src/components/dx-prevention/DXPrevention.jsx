import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Button from '../buttons/Button';
import CircularText from './Circle';

const DXPrevention = () => {
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      z: 100,
      rotateX: -45,
      rotateY: -45,
    },
    visible: {
      opacity: 1,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      }
    }
  };

  const diseases = [
    'Obesity',
    'Type 2 Diabetes',
    'Anthrax Cervical Cancer',
    'Hypertension Lung Cancer',
    'Malaria Metabolic Syndrome',
    'STI Rabies Chronic Heart Disease',
    'HIV HPV COPD Bladder Cancer Cholera',
    'Work-Related Musculoskeletal Diseases',
    'High Cholesterol Slips & Lapses COVID-19 Asthma',
    'Food Poisoning Mumps Syndrome',
    'Tuberculosis Chlamydia Sleep Apnea Diphtheria Influenza Hearing Loss Hepatitis',
    'Colon Cancer Skin Cancer Hand-Arm Vibration Mesothelioma Mpox',
    'Brucellosis Measles Occupational Coronary Artery Disease MERS Polio',
  ];

  return (
    <motion.div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-start py-20 px-4 relative overflow-hidden perspective-1000"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          }
        } : {}}
      >
        <CircularText />
      </motion.div>
      
      <AnimatePresence mode="wait">
        {!showButton ? (
          <motion.div
            className="relative z-10 mt-8 perspective-1000"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="text-center font-medium leading-loose tracking-wide text-base md:text-lg lg:text-xl text-black dark:text-white-bg">
              {diseases.map((disease, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "rgb(236, 72, 153)", // pink color
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {disease}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="mt-16"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              customStyles="hover:!border-pink hover:!bg-transparent hover:!text-pink dark:hover:!text-pink !bg-pink !text-white-bg dark:!text-white-bg transform hover:scale-110 transition-all duration-300 ease-out"
              onClick={() => {}}
              aria-label="Show details"
            >
              Let's Show You How
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={isInView ? { opacity: [0, 0.1, 0] } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default DXPrevention;
