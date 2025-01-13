import React, { lazy } from 'react';
import { useDarkMode } from '../../hooks/DarkModeContext';
import CircularTextHoldingTest from '../../views/Test';
const Line = lazy(() => import('./Line'));
import './hero.css'

const Hero1 = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="w-full min-h-screen flex justify-center items-start">
      {/* Container for the eye image, animated logo, line, and text */}
      <div className="relative w-full h-full flex flex-col items-center">
        {/* Eye image */}
        <img
          src={isDarkMode ? '/images/eye.png' : '/images/eye-white.png'}
          alt="Eye"
          loading="lazy"
          className="object-contain w-full h-auto" // Adjust max-width as needed
        />

        {/* CircularTextHoldingTest Component (Centered on Eye Image) */}
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 min-w-[150px] min-h-[150px] custom-positioning">
          <CircularTextHoldingTest />
        </div>
        {/* <div className="absolute transform -translate-x-1/2 -translate-y-1/2 min-w-[150px] min-h-[150px]
         top-[145px] left-[230px]
         xs:top-[131px] xs:left-[206px]
          xsm:top-[190px] xsm:left-[338px]
          sm:top-[29%] sm:left-[52.5%]
          md:top-[29%] md:left-[52.5%]
          lg:top-[29%] lg:left-[52.5%]
          xl:top-[29%] xl:left-[52.5%]
          2xl:top-[29.5%] 2xl:left-[52.5%]
        ">
          <CircularTextHoldingTest />
        </div> */}

        {/* Container for Line and Text */}
        <div className="relative w-full flex justify-center items-center">
          {/* Line */}
          <div className="absolute w-full flex justify-center 
            bottom-8 
            sm:bottom-36 
            md:bottom-48 
            lg:bottom-80 
            xl:bottom-96 
            2xl:bottom-[28rem] 
            ">
            <Line />
          </div>

          {/* Text */}
          <div className="absolute  w-full flex justify-center px-4
            -bottom-16 
            sm:bottom-6 
            md:bottom-10 
            lg:bottom-28 
            xl:bottom-32 
            2xl:bottom-48 
          ">
            <h3 className="text-center font-bold leading-relaxed 
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
        
            ">
              Public Health Innovation <br /> for a Changing World
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;