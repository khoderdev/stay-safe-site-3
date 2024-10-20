import React, { createContext, useContext, useEffect } from 'react';
import { gsap } from 'gsap';

// Create a GsapContext
const GsapContext = createContext();

export const useGsap = () => useContext(GsapContext);

export const GsapProvider = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(); // Ensure GSAP is ready
  }, []);

  return <GsapContext.Provider value={{ gsap }}>{children}</GsapContext.Provider>;
};
