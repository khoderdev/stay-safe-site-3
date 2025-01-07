// // import { motion } from 'framer-motion';
// // import { forwardRef } from 'react';
// // import './CircularText.css';

// // const CircularText = forwardRef((props, ref) => {
// //   const text = " Nutrition Disease Prevention Safety Health Sustainability Environment";
// //   const textArray = text.split("");

// //   return (
// //     <motion.div
// //     animate={{ rotate: 360 }}
// //     transition={{
// //       duration: 10,
// //       ease: "linear",
// //       repeat: Infinity,
// //     }}
// //       className="circular-text"
// //     >
// //       {textArray.map((char, index) => (
// //         <span
// //           key={index}
// //           className="char text-pink"
// //           style={{ transform: `rotate(${index * (360 / textArray.length)}deg)` }}
// //         >
// //           {char}
// //         </span>
// //       ))}
// //     </motion.div>
// //   );
// // });

// // // // Set display name for the component
// // // CircularText.displayName = 'CircularText';

// // // export default CircularText;
// // import { motion } from 'framer-motion';
// // import { forwardRef } from 'react';

// // const CircularText = forwardRef((props, ref) => {
// //   const text = "Nutrition Disease Prevention Safety Health Sustainability Environment";
// //   const textArray = text.split("");

// //   return (
// //     <motion.div
// //       animate={{ rotate: 360 }}
// //       transition={{
// //         duration: 10,
// //         ease: "linear",
// //         repeat: Infinity,
// //       }}
// //       className="relative flex justify-center items-center w-[280px] h-[280px] rounded-full select-none"
// //     >
// //       {textArray.map((char, index) => (
// //         <span
// //           key={index}
// //           className="absolute text-pink font-medium"
// //           style={{
// //             transform: `rotate(${index * (360 / textArray.length)}deg)`,
// //             transformOrigin: '0 140px', // Custom transform origin
// //           }}
// //         >
// //           {char}
// //         </span>
// //       ))}
// //     </motion.div>
// //   );
// // });

// // // Set display name for the component
// // CircularText.displayName = 'CircularText';

// // export default CircularText;
// // import { motion } from 'framer-motion';
// // import { forwardRef } from 'react';

// // const CircularText = forwardRef((props, ref, children) => {
// // 	const text =
// // 		'Nutrition Disease Prevention Safety Health Sustainability Environment';
// // 	const textArray = text.split('');

// // 	return (
// // 		<>
// // 			{textArray.map((char, index) => (
// // 				<motion.span
// // 					key={index}
// // 					className='absolute text-pink
// //         w-[100px] h-[100px]
// //         sm:w-[100px] sm:h-[100px]
// //         md:w-52 md:h-52
// //         lg:w-60 lg:h-60
// //         xl:w-64 xl:h-64
// //         2xl:w-72 2xl:h-72
// //         3xl:w-76 3xl:h-76
// //         '
// // 					style={{
// // 						transformOrigin: '0 140px',
// // 					}}
// // 					animate={{
// // 						rotate: [
// // 							index * (360 / textArray.length),
// // 							index * (360 / textArray.length) + 360,
// // 						],
// // 					}}
// // 					transition={{
// // 						duration: 10,
// // 						ease: 'linear',
// // 						repeat: Infinity,
// // 					}}
// // 				>
// // 					{char}
// // 				</motion.span>
// // 			))}
// // 		</>
// // 	);
// // });

// // // Set display name for the component
// // CircularText.displayName = 'CircularText';

// // export default CircularText;

// // /////////////////////////////
// // /////////////////////////////
// // /////////////////////////////

// // import { motion } from 'framer-motion';
// // import { forwardRef } from 'react';

// // const CircularText = forwardRef((props, ref, children) => {
// // 	const text =
// // 		'Nutrition Disease Prevention Safety Health Sustainability Environment';
// // 	const textArray = text.split('');

// // 	return (
// // 		<>
// // 			{textArray.map((char, index) => (
// // 				<motion.span
// // 					key={index}
// // 					className='absolute text-pink'
// // 					style={{
// // 						transformOrigin: '0 140px',
// // 					}}
// // 					animate={{
// // 						rotate: [
// // 							index * (360 / textArray.length),
// // 							index * (360 / textArray.length) + 360,
// // 						],
// // 					}}
// // 					transition={{
// // 						duration: 10,
// // 						ease: 'linear',
// // 						repeat: Infinity,
// // 					}}
// // 				>
// // 					{char}
// // 				</motion.span>
// // 			))}
// // 		</>
// // 	);
// // });

// // // Set display name for the component
// // CircularText.displayName = 'CircularText';

// // export default CircularText;

// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////

// // import { motion } from 'framer-motion';
// // import { forwardRef } from 'react';

// // const CircularText = forwardRef((props, ref) => {
// // 	const text =
// // 		'Nutrition Disease Prevention Safety Health Sustainability Environment';
// // 	const textArray = text.split('');

// // 	return (
// // 		<div className='bg-blue-300'>
// // 			{textArray.map((char, index) => (
// // 				<motion.span
// // 					key={index}
// // 					className='absolute font-bold text-pink
// //           left-10
// //           left-20
// //           sm:left-28
// //           md:left-48
// //           lg:left-48
// //           xl:left-56
// //           2xl:left-64

// //           -top-2
// //           sm:-top-2
// //           md:top-24
// //           lg:-top-12
// //           xl:-top-11
// //           2xl:top-20

// //           text-[4px]
// //           sm:text-[6px]
// //           md:text-[8px]
// //           lg:text-[10px]
// //           xl:text-[12px]
// //           2xl:text-[14px]

// //           origin-[0%_800%]
// //           '
// // 					animate={{
// // 						rotate: [
// // 							index * (360 / textArray.length),
// // 							index * (360 / textArray.length) + 360,
// // 						],
// // 					}}
// // 					transition={{
// // 						duration: 30,
// // 						ease: 'linear',
// // 						repeat: Infinity,
// // 					}}
// // 				>
// // 					{char}
// // 				</motion.span>
// // 			))}
// // 		</div>
// // 	);
// // });

// // CircularText.displayName = 'CircularText';

// // export default CircularText;


// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////

// import { motion } from 'framer-motion';
// import { forwardRef } from 'react';

// const CircularText = forwardRef((props, ref) => {
//   const text =
//     'Nutrition Disease Prevention Safety Health Sustainability Environment';
//   const textArray = text.split('');

//   return (
//     <div
//       className="absolute flex items-center justify-center"
//       style={{
//         width: 'calc(100% + 6vw)', // Make the circular text slightly larger than the Test component
//         height: 'calc(100% + 6vw)',
//       }}
//     >
//       {textArray.map((char, index) => (
//         <motion.span
//           key={index}
//           className="absolute font-bold text-pink-500"
//           style={{
//             fontSize: 'clamp(6px, 1vw, 14px)', // Dynamic font size
//             transform: `rotate(${index * (360 / textArray.length)}deg) translate(50%, -50%)`,
//             transformOrigin: '0 150px',
//           }}
//           animate={{
//             rotate: [
//               index * (360 / textArray.length),
//               index * (360 / textArray.length) + 360,
//             ],
//           }}
//           transition={{
//             duration: 30,
//             ease: 'linear',
//             repeat: Infinity,
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </div>
//   );
// });

// CircularText.displayName = 'CircularText';

// export default CircularText;


import React from 'react';
import './CircularText.css';

const CircularText = () => {
  const text = "Nutrition Disease Prevention Safety Health Sustainability ";
  const radius = 150; // Radius of the circle

  // Calculate the angle for each character to be placed evenly in a circle
  const angle = 360 / text.length;

  return (
    <div className="circle-container">
      <div className="circle-text">
        {text.split("").map((char, index) => {
          const style = {
            transform: `rotate(${index * angle}deg) translateY(-${radius}px)`,
          };
          return (
            <span key={index} style={style}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CircularText;