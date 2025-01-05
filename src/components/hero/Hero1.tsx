import React from 'react';
import Line from './Line';
import { useDarkMode } from '../../hooks/DarkModeContext';

const Hero1 = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      {/* Container for the eye image, animated logo, line, and text */}
      <div className="relative h-full flex flex-col items-center">
        {/* Eye image */}
        <img
          src={isDarkMode ? '/images/eye.png' : '/images/eye-white.png'}
          alt="Eye"
          loading="lazy"
          className="object-contain"
        />

        {/* Animated logo */}
        <div className="absolute inset-0 flex justify-center items-center bottom-[38%] left-[1rem] xsm:left-[1.4rem] sm:left-[3rem] md:left-[5rem] lg:left-[6rem] pointer-events-none">
          <img
            src="/white-logo-anim.gif"
            alt="StaySafe Logo"
            loading="lazy"
            className="w-[22%] object-contain"
          />
        </div>

        {/* Line */}
        <div className="absolute bottom-10 xsm:bottom-0 sm:bottom-24 md:bottom-[25%] lg:bottom-[28%] 2xl:bottom-[33%] w-full flex justify-center">
          <Line />
        </div>

        {/* Text */}
        <div className="absolute -bottom-12 xsm:-bottom-24 sm:-bottom-2 md:bottom-[5%] lg:bottom-[15%] 2xl:bottom-[20%] w-full flex justify-center px-4">
          <h3 className="text-center text-2xl sm:text-5xl md:text-7xl font-bold leading-relaxed">
            Public Health Innovation <br /> for a Changing World
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
