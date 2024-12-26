import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function MiddleSection() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Track if visibility is due to a click

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsVisible(false);
    }
  };

  // Handle click to toggle visibility manually
  const handleClickInside = () => {
    setIsVisible((prev) => !prev);
    setIsClicked((prev) => !prev); // Toggle clicked state
  };

  // Effect to handle clicks outside the container to hide content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsVisible(false); // Hide content when clicking outside
        setIsClicked(false); // Reset clicked state
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animation for each word
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
  };

  // Parent container to manage staggered animations
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Adjust to control stagger effect
      },
    },
  };

  // Stagger animation for additional text when hovered
  const descriptionVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.4 } },
  };

  return (
    <motion.div className='section relative flex flex-col select-none bg-white-fg dark:bg-black'>
      <motion.div>
        <motion.div
          className="grid grid-cols-12 grid-rows-5 gap- h-[100dvh] text-center text- dark:text-white-bg2 font-semibold"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.div
            className='col-span-8 row-span-1 col-start-3 text- pt-8 sm:text-4xl md:text- dark:text-white-bg2'
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickInside}
          >

            <motion.div
              className="col-span-8 col-start-3 row-start-2 text-center font-normal text-[14px] sm:text-[20px] flex items-center justify-center dark:text-white-bg2"
              variants={fadeInVariant}
            >
              Everyone has a role to play in improving antibiotic use.
            </motion.div>
            <motion.div
              className="text-[29px] sm:text-5xl mt-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              BE <span className='underline mt-1 cursor-pointer text-[29px] sm:text-5xl text-[#d23c88]'>ANTIBIOTICS</span> AWARE
            </motion.div>
            {/* Additional text animation on hover or click */}
            <motion.div
              className=''
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isVisible ? 'auto' : 0,
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ overflow: 'hidden', marginTop: '8px' }}
            >
              <p className='text-xl py-4 px-2 drop-shadow-md rounded-b pt-4 text-center dark:!bg-[#000] opacity-1 z-40 relative flex flex-col w-[58%] sm:w-[83%] md:w-[31%] mr-20 sm:mr-28 place-self-center'>
                Antibiotics are medications specifically designed to kill certain bacteria or stop their growth.
                However, their use can sometimes lead to side effects and contribute to antimicrobial resistance where bacteria develop the ability to resist the drugs meant to eliminate them.
              </p>
            </motion.div>
          </motion.div>

          <br />

          <motion.div
            className="col-span-2 col-start-3 row-start-3 font-normal text-2xl flex flex-col items-end justify-center"
            variants={fadeInVariant}
          >
            <span>Get the</span>
            <span>At the</span>
            <span>For the</span>
          </motion.div>
          <motion.div
            className="col-span-2 col-start-9 row-start-3 font-normal text-2xl flex flex-col items-start justify-center"
            variants={fadeInVariant}
          >
            <span>antibiotic</span>
            <span>dose</span>
            <span>duration</span>
          </motion.div>
          <motion.div
            className="col-span-4 row-span-3 col-start-5 row-start-2  text-[10.5rem] flex justify-center items-center mb-16 font-bold text-[#d23c88]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            Right
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MiddleSection;
