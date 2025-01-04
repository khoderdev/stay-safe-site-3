import React, { useState, useEffect } from "react";
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const tips = [
  {
    title: "Wash Your Hands",
    content:
      "We are constantly exposed to millions of germs. Regular handwashing can help fight germs and prevent illness.",
  },
  {
    title: "Know the Symptoms",
    content:
      "Learn how to recognize early symptoms of an infection. Talk with a healthcare professional if you think you have an infection, or if your infection is not getting better or is getting worse. Don’t take meds without prescription.",
  },
  {
    title: "Ask Questions",
    content:
      "Talk with a healthcare professional about why antibiotics are being prescribed, possible side effects, and how long you will need to take them.",
  },
  {
    title: "Learn the Right Ways to Use Antibiotics",
    content:
      "Antibiotics are not effective against all infections. Make sure you are getting the right antibiotic, at the right dose, for the right amount of time. Never demand antibiotics if a healthcare professional says they are unnecessary.",
  },
  {
    title: "Never Share or Use Leftover Antibiotics",
    content:
      "Take antibiotics exactly as prescribed and do not stop early or share unused prescription medications.",
  },
  {
    title: "Prepare Food Safely",
    content:
      "Food such as meat, fruits, and vegetables can be contaminated with bacteria. Prepare food safely at home—clean, separate, cook, and chill. Learn More.",
  },
  {
    title: "Get Vaccinated",
    content:
      "Staying up to date on all recommended vaccines, can help prevent illness.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Stagger() {
  const [openIndex, setOpenIndex] = useState(null);
  const [scope, animate] = useAnimate();

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full max-w-4xl mx-auto px-4 pb-16"
    >
      <motion.h1
        variants={itemVariants}
        className="text-[1.4rem] md:text-4xl font-bold text-center mb-12 dark:text-white-bg2 leading-tight"
      >
        <span className="text-pink">Antibiotics</span> are losing their power
        <span className="block text-lg md:text-2xl mt-4  opacity-90">
          How Can You Participate in Preventing Antibiotic Resistance?
        </span>
      </motion.h1>

      <motion.div className="grid gap-4 md:gap-6" ref={scope}>
        {tips.map((tip, index) => (
          <motion.div key={index} variants={itemVariants} className="group">
            <motion.button
              onClick={() => handleClick(index)}
              className={`w-full p-4 md:p-5 rounded-lg flex items-center justify-between
                ring-1 ring-pink/30 backdrop-blur-sm
                hover:ring-pink hover:ring-opacity-100 
                transition-all duration-300 ease-out
                ${
                  openIndex === index
                    ? "bg-pink/5 ring-pink ring-opacity-100"
                    : ""
                }
                group-hover:shadow-lg group-hover:shadow-pink/10`}
            >
              <span className="text-lg dark:text-white-bg">{tip.title}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-pink"
              >
                <HiChevronDown size={24} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={contentVariants}
                  className="overflow-hidden"
                >
                  <div
                    className={`
                    mt-2 p-4 rounded-lg
                    border-2 border-pink dark:bg-black/30
                    backdrop-blur-sm content content-${index}
                  `}
                  >
                    <p className="text-pink md:text-lg leading-relaxed ">
                      {tip.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
