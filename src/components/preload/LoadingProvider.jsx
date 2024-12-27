import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-12 h-12 border-4 border-pink rounded-full border-t-transparent"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-500 text-lg"
      >
        Loading...
      </motion.p>
    </div>
  </motion.div>
);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const updateLoading = useCallback((state) => {
    setIsLoading(state);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: updateLoading }}>
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
