import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import React from "react";

const tips = [
  {
    title: 'Wash Your Hands',
    content: 'We are constantly exposed to millions of germs. Regular handwashing can help fight germs and prevent illness.',
  },
  {
    title: 'Know the Symptoms',
    content: 'Learn how to recognize early symptoms of an infection. Talk with a healthcare professional if you think you have an infection, or if your infection is not getting better or is getting worse. Don’t take meds without prescription.',
  },
  {
    title: 'Ask Questions',
    content: 'Talk with a healthcare professional about why antibiotics are being prescribed, possible side effects, and how long you will need to take them.',
  },
  {
    title: 'Learn the Right Ways to Use Antibiotics',
    content: 'Antibiotics are not effective against all infections. Make sure you are getting the right antibiotic, at the right dose, for the right amount of time. Never demand antibiotics if a healthcare professional says they are unnecessary.',
  },
  {
    title: 'Never Share or Use Leftover Antibiotics',
    content: 'Take antibiotics exactly as prescribed and do not stop early or share unused prescription medications.',
  },
  {
    title: 'Prepare Food Safely',
    content: 'Food such as meat, fruits, and vegetables can be contaminated with bacteria. Prepare food safely at home—clean, separate, cook, and chill. Learn More.',
  },
  {
    title: 'Get Vaccinated',
    content: 'Staying up to date on all recommended vaccines, can help prevent illness.',
  },
];

export default function Stagger() {
  const [openIndex, setOpenIndex] = useState(null); // Track which item is open
  const [scope, animate] = useAnimate();

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.1 });

  // Handle click to toggle content visibility
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animate the content when the openIndex changes
  useEffect(() => {
    if (openIndex !== null) {
      animate(
        `.content-${openIndex}`,
        { opacity: 1, scale: 1, x: 0 },
        {
          duration: 0.4,
          delay: staggerList,
        }
      );
    }
  }, [openIndex]);

  return (
    <>
      <h1 className="text-xl px-6 sm:text-3xl font-semibold dark:text-white-bg2 py-8">
        Antibiotics are losing their power.<br/>
        How Can You Participate in Preventing Antibiotic Resistance.
      </h1>
      <div className="flex place-self-center flex-col max-w-lg items-center p-5" ref={scope}>

        <ul className="list-none p-0">
          {tips.map((tip, index) => (
            <li key={index}>
              <motion.button
                onClick={() => handleClick(index)}
                // whileTap={{ scale: 115 }}
                className="bg-[#000] w-full  dark:text-white-bg  p-3 text-left mb-2 rounded hover:bg-pink transition-colors"
              >
                {tip.title}
              </motion.button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className={`bg-[#000] content content-${index}  p-3 my-2 dark:text-gray-100 rounded`}
                >
                  <p>{tip.content}</p>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
