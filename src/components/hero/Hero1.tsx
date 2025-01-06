// import React, { lazy } from 'react';
// import { useDarkMode } from '../../hooks/DarkModeContext';
// const Line = lazy(() => import('./Line'));
// const CircularText = lazy(() => import('./CircularText'));

// const Hero1 = () => {
//   const { isDarkMode } = useDarkMode();

//   return (
//     <section className="w-full min-h-screen flex justify-center items-center">
//       {/* Container for the eye image, animated logo, line, and text */}
//       <div className="relative h-full flex flex-col items-center">
//         {/* Eye image */}
//         <img
//           src={isDarkMode ? '/images/eye.png' : '/images/eye-white.png'}
//           alt="Eye"
//           loading="lazy"
//           className="object-contain"
//         />

//         {/* Circular text with the animated logo inside it */}
//         <div className="absolute inset-0 flex justify-center items-center bottom-[38%] left-[1rem] xsm:left-[1.4rem] sm:left-[3rem] md:left-[5rem] lg:left-[4rem] pointer-events-none">

//           <div className="absolute xsm:top-[rem] 2xl:top-[25rem] flex justify-center items-center">
//             <div className='w-full h-full'>
//               <CircularText />
//             </div>
//             {/* Animated logo inside the circular text */}
//             <img
//               src="/white-logo-anim.gif"
//               alt="StaySafe Logo"
//               loading="lazy"
//               className="absolute w-[40%] md:w-[80%] lg:w-[100%] ml-8 mt-4 object-contain"
//             />
//           </div>
//         </div>

//         {/* Line */}
//         <div className="absolute bottom-10 xsm:bottom-0 sm:bottom-24 md:bottom-[25%] lg:bottom-[28%] 2xl:bottom-[33%] w-full flex justify-center">
//           <Line />
//         </div>

//         {/* Text */}
//         <div className="absolute -bottom-12 xsm:-bottom-24 sm:-bottom-2 md:bottom-[5%] lg:bottom-[15%] 2xl:bottom-[20%] w-full flex justify-center px-4">
//           <h3 className="text-center text-2xl sm:text-5xl md:text-7xl font-bold leading-relaxed">
//             Public Health Innovation <br /> for a Changing World
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero1;
// {/* <motion.div
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 10,
//                 ease: "linear",
//                 repeat: Infinity,
//               }} className="flex justify-center items-center">
//               <img

//                 src="/images/words-eye.png"
//                 alt="StaySafe Logo"
//                 loading="lazy"
//                 className="w-[18rem] object-contain"
//               />
//             </motion.div> */}


import React, { lazy } from 'react';
import { useDarkMode } from '../../hooks/DarkModeContext';
const Line = lazy(() => import('./Line'));
const CircularText = lazy(() => import('./CircularText'));

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

        {/* Circular text with the animated logo inside it */}
        <div className="absolute inset-0 flex justify-center items-center bottom-[38%] left-[1rem] xsm:left-[1.4rem] sm:left-[3rem] md:left-[5rem] lg:left-[4rem] pointer-events-none border">
          
          {/* <div className="relative flex justify-center items-center"> */}
            {/* Circular text container */}
            <div className="w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[10vw] lg:h-[10vw] xl:w-[8vw] xl:h-[8vw] 2xl:w-[6vw] 2xl:h-[6vw] flex justify-center items-center border-2 border-red-500">
              <CircularText />
            </div>

            {/* Animated logo inside the circular text */}
            <img
              src="/white-logo-anim.gif"
              alt="StaySafe Logo"
              loading="lazy"
              className="absolute w-[40%] md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[80%] object-contain"
            />
          {/* </div> */}
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
