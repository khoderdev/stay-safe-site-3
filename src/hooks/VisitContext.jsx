import React, { createContext, useState, useEffect } from 'react';

// Create the VisitContext
export const VisitContext = createContext();

export const VisitProvider = ({ children }) => {
  const [visitCount, setVisitCount] = useState(() => {
    // Retrieve visit count from localStorage or initialize to 0
    const savedVisitCount = localStorage.getItem('visitCount');
    return savedVisitCount ? JSON.parse(savedVisitCount) : 0;
  });

  // This effect runs once when the app is loaded, incrementing the visit count
  useEffect(() => {
    const incrementVisitCount = () => {
      setVisitCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem('visitCount', JSON.stringify(newCount));
        return newCount;
      });
    };

    incrementVisitCount();
  }, []);

  return (
    <VisitContext.Provider value={{ visitCount }}>
      {children}
    </VisitContext.Provider>
  );
};
