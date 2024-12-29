import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";

export default function Dropdown({ title, items, mainLink, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        mass: 0.8,
        staggerChildren: 0.07,
        delayChildren: 0.1
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        mass: 0.8,
        staggerChildren: 0.05,
        staggerDirection: -1
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div
      className="relative !cursor-pointer group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main title with animated chevron */}
      <div className="flex items-center gap-1">
        {mainLink ? (
          <Link
            to={mainLink}
            className="text-black dark:text-white-bg hover:text-blue transition-colors flex items-center gap-1"
          >
            {title}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <HiChevronDown className="w-4 h-4" />
            </motion.span>
          </Link>
        ) : (
          <button className="text-black dark:text-white-bg hover:text-blue dark:hover:text-blue transition-colors flex items-center gap-1">
            {title}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <HiChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        )}
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bg-white dark:bg-dark left-0 mt-2 min-w-[200px] rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul className="flex flex-col py-1">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    className={`${className} relative block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200
                      before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue before:scale-y-0 hover:before:scale-y-100
                      before:transition-transform before:duration-200 before:origin-top`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
