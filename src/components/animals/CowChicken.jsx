// // // // import React from 'react';
// // // // import Cow from './Cow';
// // // // import Chicken from './Chicken';

// // // // function CowChickenPage() {
// // // // 	return (
// // // // 		<div className=' flex items-center justify-between w-full px-4'>
// // // // 			<div className=''>
// // // // 				<Cow />
// // // // 			</div>
// // // // 			<div className=''>
// // // // 				<Chicken />
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // }
// // // // export default CowChickenPage;

// // //////////////////////////////////////
// // //////////////////////////////////////
// // //////////////////////////////////////

// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import Cow from './Cow';
// // // import Chicken from './Chicken';

// // // function CowChickenPage() {
// // // 	return (
// // // 		<div className='flex items-center justify-between w-full px-4'>
// // // 			{/* Animate Cow component */}
// // // 			<motion.div
// // // 				className=''
// // // 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// // // 				whileHover={{
// // // 					rotateX: 10,
// // // 					rotateY: 10,
// // // 					z: 20,
// // // 					scale: 1.05,
// // // 					transition: { type: 'spring', stiffness: 150 },
// // // 				}}
// // // 				transition={{ type: 'spring', stiffness: 80 }}
// // // 				style={{ perspective: 800 }}
// // // 			>
// // // 				<Cow />
// // // 			</motion.div>

// // // 			{/* Animate Chicken component */}
// // // 			<motion.div
// // // 				className=''
// // // 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// // // 				whileHover={{
// // // 					rotateX: -10,
// // // 					rotateY: -10,
// // // 					z: 20,
// // // 					scale: 1.05,
// // // 					transition: { type: 'spring', stiffness: 150 },
// // // 				}}
// // // 				transition={{ type: 'spring', stiffness: 80 }}
// // // 				style={{ perspective: 800 }}
// // // 			>
// // // 				<Chicken />
// // // 			</motion.div>
// // // 		</div>
// // // 	);
// // // }

// // // export default CowChickenPage;

// // //////////////////////////////////////
// // //////////////////////////////////////
// // //////////////////////////////////////

// // import React from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import Cow from './Cow';
// // import Chicken from './Chicken';

// // function CowChickenPage() {
// // 	// Get the scroll progress
// // 	const { scrollY } = useScroll();

// // 	// Use the scrollY to create a parallax effect for each component
// // 	const cowY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax range for Cow
// // 	const chickenY = useTransform(scrollY, [0, 500], [0, -100]); // Parallax range for Chicken

// // 	return (
// // 		<div className='flex items-center justify-between w-full px-4'>
// // 			{/* Animate Cow component */}
// // 			<motion.div
// // 				className=''
// // 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// // 				whileHover={{
// // 					rotateX: 10,
// // 					rotateY: 10,
// // 					z: 20,
// // 					scale: 1.05,
// // 					transition: { type: 'spring', stiffness: 150 },
// // 				}}
// // 				transition={{ type: 'spring', stiffness: 80 }}
// // 				style={{
// // 					perspective: 800,
// // 					y: cowY, // Apply parallax effect
// // 				}}
// // 			>
// // 				<Cow />
// // 			</motion.div>

// // 			{/* Animate Chicken component */}
// // 			<motion.div
// // 				className=''
// // 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// // 				whileHover={{
// // 					rotateX: -10,
// // 					rotateY: -10,
// // 					z: 20,
// // 					scale: 1.05,
// // 					transition: { type: 'spring', stiffness: 150 },
// // 				}}
// // 				transition={{ type: 'spring', stiffness: 80 }}
// // 				style={{
// // 					perspective: 800,
// // 					y: chickenY, // Apply parallax effect
// // 				}}
// // 			>
// // 				<Chicken />
// // 			</motion.div>
// // 		</div>
// // 	);
// // }

// // export default CowChickenPage;

// // //////////////////////////////////////
// // //////////////////////////////////////
// // //////////////////////////////////////

// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Cow from './Cow';
// import Chicken from './Chicken';

// function CowChickenPage() {
// 	// Get the scroll progress
// 	const { scrollY } = useScroll();

// 	// Use the scrollY to create a parallax effect for each component
// 	const cowY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax range for Cow
// 	const chickenY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax range for Chicken (same direction)

// 	return (
// 		<div className='flex items-center justify-between w-full px-4'>
// 			{/* Animate Cow component */}
// 			<motion.div
// 				className=''
// 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// 				whileHover={{
// 					rotateX: 10,
// 					rotateY: 10,
// 					z: 20,
// 					scale: 1.05,
// 					transition: { type: 'spring', stiffness: 150 },
// 				}}
// 				transition={{ type: 'spring', stiffness: 80 }}
// 				style={{
// 					perspective: 800,
// 					y: cowY, // Apply parallax effect
// 				}}
// 			>
// 				<Cow />
// 			</motion.div>

// 			{/* Animate Chicken component */}
// 			<motion.div
// 				className=''
// 				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
// 				whileHover={{
// 					rotateX: 10, // Same rotation direction as Cow
// 					rotateY: 10, // Same rotation direction as Cow
// 					z: 20,
// 					scale: 1.05,
// 					transition: { type: 'spring', stiffness: 150 },
// 				}}
// 				transition={{ type: 'spring', stiffness: 80 }}
// 				style={{
// 					perspective: 800,
// 					y: chickenY, // Apply parallax effect
// 				}}
// 			>
// 				<Chicken />
// 			</motion.div>
// 		</div>
// 	);
// }

// export default CowChickenPage;



// // //////////////////////////////////////
// // //////////////////////////////////////
// // //////////////////////////////////////

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cow from './Cow';
import Chicken from './Chicken';

function CowChickenPage() {
	// Get the scroll progress
	const { scrollY } = useScroll();
	
	// Use the scrollY to create a parallax effect for each component
	const cowY = useTransform(scrollY, [0, 500], [0, 200]); // Parallax range for Cow
	const chickenY = useTransform(scrollY, [0, 500], [0, 200]); // Parallax range for Chicken (same direction)

	// Define the floating animation settings
	const floatingAnimation = {
		y: [0, -10, 0], // Move up and down by 10px
		transition: {
			duration: 3, // Duration of the floating animation
			repeat: Infinity, // Infinite repetition
			repeatType: 'mirror', // Smooth back-and-forth animation
			ease: 'easeInOut',
		},
	};

	return (
		<div className='flex flex-col items-end justify-between  w-full px-4'>
			
			{/* <div className='border border-red-500 w-96 h-9'></div> */}
			{/* Animate Cow component */}
			<motion.div
				className=''
				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
				whileHover={{
					rotateX: 10,
					rotateY: 10,
					z: 20,
					scale: 1.05,
					transition: { type: 'spring', stiffness: 150 },
				}}
				animate={floatingAnimation} // Apply the floating animation
				transition={{ type: 'spring', stiffness: 80 }}
				style={{
					perspective: 800,
					y: cowY, // Apply parallax effect
				}}
			>
				<Cow />
			</motion.div>
			
			{/* Animate Chicken component */}
			<motion.div
				className=''
				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
				whileHover={{
					rotateX: 10,
					rotateY: 10,
					z: 20,
					scale: 1.05,
					transition: { type: 'spring', stiffness: 150 },
				}}
				animate={floatingAnimation} // Apply the floating animation
				transition={{ type: 'spring', stiffness: 80 }}
				style={{
					perspective: 800,
					y: chickenY, // Apply parallax effect
				}}
			>
				<Chicken />
			</motion.div>
		</div>
	);
}

export default CowChickenPage;
