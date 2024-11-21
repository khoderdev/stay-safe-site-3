import React from 'react';
import { useMousePosition } from 'react-use-mouse-position';
import { motion } from 'framer-motion';


function MiddleSection() {
  const { mouseX, mouseY } = useMousePosition();
  const imageRef = React.useRef(null);
  const offset = { x: -20, y: -0 };

  React.useEffect(() => {
    if (imageRef.current && mouseX !== null && mouseY !== null) {
      const adjustedX = mouseX + offset.x;
      const adjustedY = mouseY + offset.y;
      imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
    }
  }, [mouseX, mouseY]);

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

  return (
    <motion.div className='section relative flex flex-col !z-30 overflow-hidden select-none bg-white-fg dark:bg-black'>
      <motion.div>
        <motion.div
          className="grid grid-cols-12 grid-rows-5 gap- h-[100dvh] text-center text-5xl dark:text-white-bg2 font-semibold"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.div
            className="col-span-8 row-span-1 col-start-3 text-3xl dark:text-white-bg2 flex justify-center items-end"
            variants={fadeInVariant}
          >
            BE ANTIBIOTICS AWARE
          </motion.div>
          <motion.div
            className="col-span-8 col-start-3 row-start-2 font-normal text-4xl flex items-center justify-center dark:text-white-bg2 "
            variants={fadeInVariant}
          >
            Everyone has a role to play in improving antibiotic use
          </motion.div>

          <br />

          <motion.div
            className="col-span-2 col-start-3 row-start-3 font-normal flex items-center justify-end "
            variants={fadeInVariant}
          >
            Get the
          </motion.div>
          <motion.div
            className="col-span-2 col-start-3 row-start-4 font-normal flex items-center justify-end "
            variants={fadeInVariant}
          >
            at the
          </motion.div>
          <motion.div
            className="col-span-2 col-start-3 row-start-5 font-normal flex items-center justify-end "
            variants={fadeInVariant}
          >
            for the
          </motion.div>
          <motion.div
            className="col-span-2 col-start-9 row-start-3 font-normal flex items-center justify-start"
            variants={fadeInVariant}
          >
            antibiotic
          </motion.div>
          <motion.div
            className="col-span-2 col-start-9 row-start-4 font-normal flex items-center justify-start"
            variants={fadeInVariant}
          >
            dose
          </motion.div>
          <motion.div
            className="col-span-2 col-start-9 row-start-5 font-normal flex items-center justify-start"
            variants={fadeInVariant}
          >
            duration
          </motion.div>

          <motion.div
            className="col-span-4 row-span-3 col-start-5 row-start-2 text-[10.5rem] flex justify-center items-end font-bold"
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
        <img
          src="/images/bacteria.png"
          ref={imageRef}
          className="w-40 sm:w-52 absolute pointer-events-none"
          style={{ top: 25, left: 30 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default MiddleSection