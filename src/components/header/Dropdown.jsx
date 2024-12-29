import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dropdown({ title, items, mainLink, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4,
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {mainLink ? (
        <Link
          to={mainLink}
          className={`${className} inline-flex items-center gap-1.5 py-2 relative group`}
        >
          <span className="relative">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg 
            className="w-4 h-4 transform group-hover:rotate-180 transition-all duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      ) : (
        <button 
          className={`${className} inline-flex items-center gap-1.5 py-2 relative group`}
        >
          <span className="relative">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg 
            className="w-4 h-4 transform group-hover:rotate-180 transition-all duration-300" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-50 -left-14 mt-2 min-w-[200px] origin-top-left"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="backdrop-blur-lg bg-white-bg3 dark:bg-dark/90 rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/10">
              <ul className="py-1">
                {items.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <Link
                      to={item.to}
                      className="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:text-pink hover:bg-gray-50/50 dark:hover:bg-gray-800/50 dark:hover:text-pink relative group/item transition-all duration-200"
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
