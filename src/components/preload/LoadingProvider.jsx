// import React, { createContext, useContext, useState, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const LoadingContext = createContext({
//   isLoading: true,
//   setIsLoading: () => {},
// });

// export const useLoading = () => useContext(LoadingContext);

// const LoadingSpinner = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xs"
//   >
//     <div className="flex flex-col items-center space-y-4">
//       <motion.div
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 1,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="w-12 h-12 border-4 border-pink rounded-full border-t-transparent"
//       />
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-gray-50 text-lg"
//       >
//         Loading...
//       </motion.p>
//     </div>
//   </motion.div>
// );

// export const LoadingProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   const updateLoading = useCallback((state) => {
//     setIsLoading(state);
//   }, []);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setIsLoading: updateLoading }}>
//       <AnimatePresence>
//         {isLoading && <LoadingSpinner />}
//       </AnimatePresence>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// export default LoadingProvider;
import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
    aria-live="polite"
    aria-busy="true"
  >
    <div className="flex flex-col items-center space-y-6">
      {/* Spinner */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-transparent border-t-pink-500 border-r-pink rounded-full shadow-lg"
      />

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="text-dark text-lg"
      >
        Loading, please wait...
      </motion.p>
    </div>
  </motion.div>
);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateLoading = useCallback((state) => {
    setIsLoading(state);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: updateLoading }}>
      <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
