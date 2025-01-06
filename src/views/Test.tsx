// // // // import React from 'react';

// // // // function Test() {
// // // //   return (
// // // //     <div className="pt-20 flex items-center justify-center">
// // // //       <div
// // // //         className="relative border border-yellow-500 rounded-full flex justify-center items-center bg-[#000]
// // // //           w-[20vw] 
// // // //           h-[20vw] 
// // // //           max-w-[12rem] 
// // // //           max-h-[12rem] 
// // // //           sm:max-w-[14rem] 
// // // //           sm:max-h-[14rem]
// // // //           lg:max-w-[16rem] 
// // // //           lg:max-h-[16rem] 

// // // //           "
// // // //       >
// // // //         <img
// // // //           src="/white-logo-anim.gif"
// // // //           alt="StaySafe Logo"
// // // //           loading="lazy"
// // // //           className="absolute ml-2 mt-4 lg:ml-6 lg:mt-8 w-[50%] h-auto"
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Test;
// // // // import React from 'react';

// // // // function Test() {
// // // //   return (
// // // //     <div className="pt-20 flex items-center justify-center">
// // // //       <div
// // // //         className="relative rounded-full flex justify-center items-center bg-[#000]
// // // //           w-[15vw] h-[15vw] 
// // // //           max-w-[8rem] max-h-[8rem] 
// // // //           sm:max-w-[10rem] sm:max-h-[10rem]
// // // //           lg:max-w-[12rem] lg:max-h-[12rem] 
// // // //           xl:max-w-[18rem] xl:max-h-[18rem]"
// // // //       >
// // // //         <img
// // // //           src="/white-logo-anim.gif"
// // // //           alt="StaySafe Logo"
// // // //           loading="lazy"
// // // //           className="absolute ml-1 mt-2 lg:ml-2 lg:mt-6"
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Test;
// // // // import React from 'react';
// // // // import CircularText from '../components/hero/CircularText';


// // // // function Test() {
// // // //   return (
// // // //     <div className="relative flex items-center justify-center h-screen">
// // // //       {/* Circular Text Wrapper */}
// // // //       <div
// // // //         className="relative flex items-center justify-center"
// // // //         style={{
// // // //           width: '20vw', // Base size for the Test component and circular text container
// // // //           height: '20vw',
// // // //           maxWidth: '16rem', // Constrains size for responsiveness
// // // //           maxHeight: '16rem',
// // // //         }}
// // // //       >
// // // //         {/* Circular Text */}
// // // //         <CircularText />

// // // //         {/* Test Component (Central Logo) */}
// // // //         <div
// // // //           className="relative border border-yellow-500 rounded-full flex justify-center items-center bg-[#000]
// // // //             w-full h-full"
// // // //         >
// // // //           <img
// // // //             src="/white-logo-anim.gif"
// // // //             alt="StaySafe Logo"
// // // //             loading="lazy"
// // // //             className="absolute w-[50%] h-auto"
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Test;


// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const CircularText = () => {
// // // //   const text =
// // // //     'Nutrition Disease Prevention Safety Health Sustainability Environment';
// // // //   const textArray = text.split('');

// // // //   return (
// // // //     <div
// // // //       className="absolute flex items-center justify-center"
// // // //       style={{
// // // //         width: '100%',
// // // //         height: '100%',
// // // //       }}
// // // //     >
// // // //       {textArray.map((char, index) => (
// // // //         <motion.span
// // // //           key={index}
// // // //           className="absolute font-bold text-pink-500"
// // // //           style={{
// // // //             fontSize: 'clamp(6px, 1vw, 12px)', // Dynamic font size
// // // //             transform: `rotate(${index * (360 / textArray.length)}deg) translate(50%, -50%)`,
// // // //             transformOrigin: 'center',
// // // //           }}
// // // //           animate={{
// // // //             rotate: [
// // // //               index * (360 / textArray.length),
// // // //               index * (360 / textArray.length) + 360,
// // // //             ],
// // // //           }}
// // // //           transition={{
// // // //             duration: 30,
// // // //             ease: 'linear',
// // // //             repeat: Infinity,
// // // //           }}
// // // //         >
// // // //           {char}
// // // //         </motion.span>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // function CircularTextHoldingTest() {
// // // //   return (
// // // //     <div className="relative flex items-center justify-center h-screen">
// // // //       {/* Circular Text Wrapper */}
// // // //       <div
// // // //         className="relative flex items-center justify-center rounded-full border border-pink"
// // // //         style={{
// // // //           width: '22vw', // Slightly larger to include the circular text
// // // //           height: '22vw',
// // // //           maxWidth: '18rem', // Constrain size
// // // //           maxHeight: '18rem',
// // // //         }}
// // // //       >
// // // //         {/* Circular Text */}
// // // //         <CircularText />

// // // //         {/* Test Component (Central Logo) */}
// // // //         <div
// // // //           className="relative flex items-center justify-center rounded-full bg-[#000]
// // // //             w-[75%] h-[75%]" // Central element takes up 75% of the container
// // // //         >
// // // //           <img
// // // //             src="/white-logo-anim.gif"
// // // //             alt="StaySafe Logo"
// // // //             loading="lazy"
// // // //             className="absolute  h-auto"
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CircularTextHoldingTest;

// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>


// // import React from 'react';
// // import '../components/hero/CircularText.css';

// // // Circular Text Component
// // const CircularText = () => {
// //   const text = "Nutrition Disease Prevention Safety Health Sustainability ";
// //   const radius = 150; // Radius of the circle
// //   const textArray = text.split('');
// //   const angle = 360 / text.length;
// //   return (
// //     <div
// //       className="absolute inset-0 flex items-center justify-center"

// //     >
// //       <div className="circle-container">
// //         <div className="circle-text">
// //           {text.split("").map((char, index) => {
// //             const style = {
// //               transform: `rotate(${index * angle}deg) translateY(-${radius}px)`,
// //             };
// //             return (
// //               <span key={index} style={style}>
// //                 {char}
// //               </span>
// //             );
// //           })}
// //         </div>
// //       </div>

// //     </div>

// //   );
// // };

// // // Combined Component
// // function CircularTextHoldingTest() {
// //   return (
// //     <div className="relative flex items-center justify-center h-screen">
// //       {/* Circular Text Wrapper */}
// //       <div
// //         className="relative flex items-center justify-center rounded-full"
// //         style={{
// //           width: '22vw', // Wrapper size to fit circular text
// //           height: '22vw',
// //           maxWidth: '18rem', // Constrain maximum size
// //           maxHeight: '18rem',
// //         }}
// //       >
// //         {/* Circular Text */}
// //         <CircularText />

// //         {/* Test Component (Central Logo) */}
// //         <div
// //           className="relative flex items-center justify-center rounded-full bg-[#000]
// //             w-[70%] h-[70%]" // Central element takes up 70% of the wrapper
// //         >
// //           <img
// //             src="/white-logo-anim.gif"
// //             alt="StaySafe Logo"
// //             loading="lazy"
// //             className="absolute h-auto"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CircularTextHoldingTest;
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>
// // // // //___________________________________>>>>>>>>>>>>>>>>>


// import React, { useRef, useEffect, useState } from 'react';
// import '../components/hero/CircularText.css';

// // Circular Text Component
// const CircularText = ({ radius, fontSize, children }) => {
//   const text = "Nutrition Disease Prevention Safety Health Sustainability ";
//   const textArray = text.split('');
//   const angle = 360 / text.length;

//   return (
//     <div className="circle-container">
//       <div className="circle-text">
//         {textArray.map((char, index) => {
//           const style = {
//             transform: `rotate(${index * angle}deg) translateY(-${radius}px)`,
//             fontSize: `${fontSize}px`, // Dynamic font size
//           };
//           return (
//             <span key={index} style={style}>
//               {char}
//             </span>
//           );
//         })}
//       </div>
//       {/* Central Logo */}
//       {children}
//     </div>
//   );
// };

// // Combined Component
// function CircularTextHoldingTest() {
//   const containerRef = useRef(null);
//   const [radius, setRadius] = useState(0);
//   const [fontSize, setFontSize] = useState(0);

//   useEffect(() => {
//     const updateSize = () => {
//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const containerHeight = containerRef.current.offsetHeight;
//         const newRadius = Math.min(containerWidth, containerHeight) * 0.4; // Adjust radius based on container size
//         const newFontSize = newRadius * 0.1; // Adjust font size based on radius
//         setRadius(newRadius);
//         setFontSize(newFontSize);
//       }
//     };

//     // Initial size calculation
//     updateSize();

//     // Recalculate on window resize
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center h-screen">
//       {/* Circular Text Wrapper */}
//       <div
//         ref={containerRef}
//         className="relative flex items-center justify-center rounded-full"
//         style={{
//           width: '22vw', // Wrapper size to fit circular text
//           height: '22vw',
//           maxWidth: '18rem', // Constrain maximum size
//           maxHeight: '18rem',
//         }}
//       >
//         {/* Circular Text with Central Logo */}
//         <CircularText radius={radius} fontSize={fontSize}>
//           <div
//             className="relative flex items-center justify-center rounded-full bg-[#000]"
//             style={{
//               width: '70%', // Central element takes up 70% of the wrapper
//               height: '70%',
//             }}
//           >
//             <img
//               src="/white-logo-anim.gif"
//               alt="StaySafe Logo"
//               loading="lazy"
//               className="absolute transform scale-125 h-auto ml-2 mt-4 sm:mt-8 lg:ml-6 lg:mt-8"
//             />
//           </div>
//         </CircularText>
//       </div>
//     </div>
//   );
// }

// export default CircularTextHoldingTest;


import React, { useRef, useEffect, useState } from 'react';
import '../components/hero/CircularText.css';

// Circular Text Component
const CircularText = ({ radius, fontSize, children }) => {
  const text = "Nutrition Disease Prevention Safety Health Sustainability ";
  const textArray = text.split('');
  const angle = 360 / text.length;

  return (
    <div className="circle-container">
      <div className="circle-text text-[#000] font-bold">
        {textArray.map((char, index) => {
          const style = {
            transform: `rotate(${index * angle}deg) translateY(-${radius}px)`,
            fontSize: `${fontSize}px`, // Dynamic font size
          };
          return (
            <span key={index} style={style}>
              {char}
            </span>
          );
        })}
      </div>
      {/* Central Logo */}
      {children}
    </div>
  );
};

// Combined Component
function CircularTextHoldingTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        // const containerWidth = containerRef.current.offsetWidth;
        const containerWidth = containerRef.current?.offsetWidth;
        const containerHeight = containerRef.current?.offsetHeight;
        const newRadius = Math.min(containerWidth, containerHeight) * 0.6; // Adjust radius based on container size
        const newFontSize = newRadius * 0.1; // Adjust font size based on radius
        setRadius(newRadius);
        setFontSize(newFontSize);
      }
    };

    // Initial size calculation
    updateSize();

    // Recalculate on window resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: '22vw', // Wrapper size to fit circular text
        height: '22vw',
        maxWidth: '18rem', // Constrain maximum size
        maxHeight: '18rem',
      }}
    >
      {/* Circular Text with Central Logo */}
      <CircularText radius={radius} fontSize={fontSize}>
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: '100%', // Central element takes up 100% of the wrapper
            height: '100%',
          }}
        >
          <img
            src="/white-logo-anim.gif"
            alt="StaySafe Logo"
            loading="lazy"
            className="absolute transform xl:scale-125 h-auto ml-2 mt-4 sm:mt-8 lg:ml-6 lg:mt-8"
          />
        </div>
      </CircularText>
    </div>
  );
}


export default CircularTextHoldingTest;