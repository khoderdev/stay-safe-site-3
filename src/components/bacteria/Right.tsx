import React from "react";
import { motion } from "framer-motion";

const Right: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textGroups = [
    { prefix: "Get the", suffix: "Antibiotic" },
    { prefix: "At the", suffix: "Dose" },
    { prefix: "For the", suffix: "Duration" },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-20 px-4 select-none">
      <motion.div
        className="flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column */}
        <motion.div className="flex flex-col items-end md:mt-14 z-20">
          {textGroups.map(({ prefix }, index) => (
            <motion.div
              key={`prefix-${index}`}
              variants={itemVariants}
              className="text-left text-md sm:text-3xl md:text-4xl lg:text-5xl dark:text-white-bg"
            >
              {prefix}
            </motion.div>
          ))}
        </motion.div>

        {/* Center Column */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-8xl sm:text-9xl md:text-[15rem] md:ml-3 lg:text-[22rem] font-bold text-[#d23c88] leading-none">
            Right
          </h1>
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex flex-col items-start ml-2 md:ml-6 md:mt-14 z-20">
          {textGroups.map(({ suffix }, index) => (
            <motion.div
              key={`suffix-${index}`}
              variants={itemVariants}
              className="text-left text-md sm:text-3xl md:text-4xl lg:text-5xl dark:text-white-bg"
            >
              {suffix}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Right;
