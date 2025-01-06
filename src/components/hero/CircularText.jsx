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

// // // Set display name for the component
// // CircularText.displayName = 'CircularText';

// // export default CircularText;
// import { motion } from 'framer-motion';
// import { forwardRef } from 'react';

// const CircularText = forwardRef((props, ref) => {
//   const text = "Nutrition Disease Prevention Safety Health Sustainability Environment";
//   const textArray = text.split("");

//   return (
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: 10,
//         ease: "linear",
//         repeat: Infinity,
//       }}
//       className="relative flex justify-center items-center w-[280px] h-[280px] rounded-full select-none"
//     >
//       {textArray.map((char, index) => (
//         <span
//           key={index}
//           className="absolute text-pink font-medium"
//           style={{
//             transform: `rotate(${index * (360 / textArray.length)}deg)`,
//             transformOrigin: '0 140px', // Custom transform origin
//           }}
//         >
//           {char}
//         </span>
//       ))}
//     </motion.div>
//   );
// });

// // Set display name for the component
// CircularText.displayName = 'CircularText';

// export default CircularText;
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const CircularText = forwardRef((props, ref) => {
	const text =
		'Nutrition Disease Prevention Safety Health Sustainability Environment';
	const textArray = text.split('');

	return (
		<>
			{textArray.map((char, index) => (
				<motion.span
					key={index}
					className='absolute text-pink   
        xsm:w-[100px] xsm:h-[100px] 
        sm:w-[100px] sm:h-[100px]
        md:w-52 md:h-52
        lg:w-60 lg:h-60
        xl:w-64 xl:h-64
        2xl:w-72 2xl:h-72
        3xl:w-76 3xl:h-76'
					style={{
						transformOrigin: '0 140px',
					}}
					animate={{
						rotate: [
							index * (360 / textArray.length),
							index * (360 / textArray.length) + 360,
						],
					}}
					transition={{
						duration: 10,
						ease: 'linear',
						repeat: Infinity,
					}}
				>
					{char}
				</motion.span>
			))}
		</>
	);
});

// Set display name for the component
CircularText.displayName = 'CircularText';

export default CircularText;
