import React from "react";
import { motion } from "framer-motion";

function ChartsText() {
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

  return (
    <div className="flex flex-col sm:flex sm:flex-row h-full justify-center dark:text-white-bg2 p-4 py-20 md:py-10 md:pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col pl-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl !font-bold text-left dark:text-white-bg2"
        >
          <motion.span variants={itemVariants} className="text-7xl">
            80%
          </motion.span>
          <p className="mt-[-35px] leading-tight">
            <br /> of the Top 10 Causes of Death <br /> are Preventable or
            Manageable
          </p>
        </motion.h1>
        <p className="text-xl mt-3">Gain access to personalized support.</p>
        <button className="btn-3 mt-2">Get Support Now</button>
      </motion.div>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-2xl w-full mt-8"
      >
        We’re dedicated to helping you prevent diseases and manage your health,
        no matter where you are in your journey. We know the challenges you
        face, but you’re never alone. Our team provides personalized guidance,
        resources, and support to help you take control of your health, prevent
        complications, and enhance your quality of life.
      </motion.p>
    </div>
  );
}

export default ChartsText;
