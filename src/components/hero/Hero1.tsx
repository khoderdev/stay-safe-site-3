// import React from 'react';

// const Hero1 = () => {
//   return (
//     <section className="w-full flex justify-center items-center">
//       {/* Container for the eye image and animated logo */}
//       <div className="relative w-full h-full flex justify-center items-center">
//         {/* Eye image */}
//         <img
//           src="/images/eye.png"
//           alt="Eye"
//           loading="lazy"
//         />

//         {/* Animated logo */}
//         <div className="absolute top-28 left-12 w-full h-full  flex justify-center items-start  border-2 border-red-500">
//           <img
//             src="/images/animatedlogooriginal.gif"
//             alt="StaySafe Logo"
//             loading="lazy"
//             className="w-[36%] h-[36%] object-contain" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero1;


// import React from 'react';
// import Line from "./Line"

// const Hero1 = () => {
//   return (
//     <section className="w-full flex justify-center items-center">
//       {/* Container for the eye image and animated logo */}
//       <div className="relative w-full h-full flex justify-center items-center">
//         {/* Eye image */}
//         <img
//           src="/images/eye.png"
//           alt="Eye"
//           loading="lazy"
//         />

//         {/* Animated logo */}
//         <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-start ">
//           <img
//             src="/images/animatedlogooriginal.gif"
//             alt="StaySafe Logo"
//             loading="lazy"
//             className="w-[36%] h-[36%] absolute top-56 left-[37%] object-contain"
//           />
//         </div>
//         <div className="absolute bottom-[28rem] left-0 w-full flex justify-center">
//           <Line />
//         </div>
//         <div className="absolute bottom-[16rem] left-0 w-full flex justify-center">
//           <h3 className='text-center text-3xl font-bold'>dasdasdasdasdasdadasdasd <br/> aasdasdasdasdsadbasdbasddsfsdfsdfsdf</h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero1;

import React from 'react';
import Line from './Line';

const Hero1 = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      {/* Container for the eye image, animated logo, line, and text */}
      <div className="relative  h-full flex flex-col items-center">
        {/* Eye image */}
        <img
          src="/images/eye.png"
          alt="Eye"
          loading="lazy"
          className=" object-contain"
        />

        {/* Animated logo */}
        <div className="absolute inset-0 flex justify-center items-center bottom-[38%] left-[2rem] sm:left-[3.5rem] md:left-[5rem] lg:left-[7.5rem] pointer-events-none">
          <img
            src="/images/animatedlogooriginal.gif"
            alt="StaySafe Logo"
            loading="lazy"
            className="w-[35%] md:w-[35%] lg:w-[38%] object-contain"
          />
        </div>

        {/* Line */}
        <div className="absolute bottom-10 sm:bottom-56 md:bottom-[25%] lg:bottom-[28%] w-full flex justify-center">
          <Line />
        </div>

        <div className="absolute -bottom-12 sm:bottom-24 md:bottom-[5%] lg:bottom-[15%] w-full flex justify-center px-4">
          <h3 className="text-center text-2xl sm:text-5xl md:text-7xl font-bold leading-relaxed">
            Public Health Innovation <br /> for a Changing World
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
