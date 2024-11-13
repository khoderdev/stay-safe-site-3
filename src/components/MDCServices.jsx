// // import React from 'react';
// // import { motion } from 'framer-motion';

// // function MDCServices() {
// //   const text = "MDC Services From personalized consultations at our clinics, at home or online to large-scale community initiatives, we are dedicated to making nutrition accessible, understandable, and enjoyable for everyone.";

// //   // Split the text into words for individual animations
// //   const words = text.split(' ');

// //   // Animation settings
// //   const wordAnimation = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.5,
// //         ease: 'easeOut',
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   return (
// //     <div>
// //       <motion.p
// //         initial="hidden"
// //         animate="visible"
// //         variants={wordAnimation}
// //       >
// //         {words.map((word, index) => (
// //           <motion.span key={index} variants={wordAnimation} className='text-4xl'>
// //             {word}&nbsp;
// //           </motion.span>
// //         ))}
// //       </motion.p>
// //     </div>
// //   );
// // }

// // export default MDCServices;
// import React from 'react';
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Button from './buttons/Button';

// function MDCServices({ targetRef }) {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false });

//   const text = "MDC Services From personalized consultations at our clinics, at home or online to large-scale community initiatives, we are dedicated to making nutrition accessible, understandable, and enjoyable for everyone.";

//   // Split the text into words for individual animations
//   const words = text.split(' ');

//   // Animation settings
//   const wordAnimation = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut',
//         staggerChildren: 0.1, // Stagger effect for each word
//       },
//     },
//   };

//   const handleScrollToSection = () => {
//     if (targetRef.current) {
//       targetRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'start',
//         alignItems: 'center',
//         height: '100vh', // Full viewport height
//         textAlign: 'center',
//         padding: '20px',
//         paddingTop: '35px',
//         overflow: 'hidden',
//         background: '#f8f8f8', // Optional background color
//       }}
//     >
//       <motion.p
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"} // Trigger animation on scroll into view
//         variants={wordAnimation}
//         style={{
//           fontSize: '3rem', // Adjust font size
//           lineHeight: '1.5',
//           fontWeight: '700',
//           margin: 0,
//           textTransform: 'uppercase'
//         }}
//       >
//         {words.map((word, index) => (
//           <motion.span key={index} variants={wordAnimation}>
//             {word}&nbsp; {/* Add space between words */}
//           </motion.span>
//         ))}
//       </motion.p>
//       <Button
//         onClick={handleScrollToSection}
//         customStyles='bg-pink !p-8 !rounded-full !mt-10 uppercase'
//         aria-label="Show details"
//       >
//         Let's Show You How
//       </Button>
//     </div>
//   );
// }

// export default MDCServices;
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Button from './buttons/Button';

// function MDCServices({ targetRef }) {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false });

//   const text = "MDC Services From personalized consultations at our clinics, at home or online to large-scale community initiatives, we are dedicated to making nutrition accessible, understandable, and enjoyable for everyone.";
//   const words = text.split(' ');

//   // Animation settings
//   const wordAnimation = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut',
//         staggerChildren: 0.1, // Stagger effect for each word
//       },
//     },
//   };

//   const handleScrollToSection = () => {
//     if (targetRef && targetRef.current) {
//       targetRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className='flex flex-col items-center justify-center text-center py-14'
//       ref={sectionRef}
//     >
//       <motion.p
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={wordAnimation}
//         style={{
//           fontSize: '3rem', // Adjust font size
//           lineHeight: '1.5',
//           fontWeight: '700',
//           margin: 0,
//           textTransform: 'uppercase'
//         }}
//       >
//         {words.map((word, index) => (
//           <motion.span key={index} variants={wordAnimation}>
//             {word}&nbsp; {/* Add space between words */}
//           </motion.span>
//         ))}
//       </motion.p>
//       <Button
//         customStyles='bg-transparent !border-2 !border-black hover:!border-transparent hover:!bg-pink !p-8 !rounded-full !mt-10 uppercase '
//         aria-label="Show details"
//         onClick={handleScrollToSection}
//       >
//         Let's Show You How
//       </Button>
//     </div>
//   );
// }

// export default MDCServices;
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './buttons/Button';

function MDCServices({ targetRef }) {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false });

	const text =
		'MDC Services From personalized consultations at our clinics, at home or online to large-scale community initiatives, we are dedicated to making nutrition accessible, understandable, and enjoyable for everyone.';
	const words = text.split(' ');

	// Animation settings
	const wordAnimation = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				staggerChildren: 0.1, 
			},
		},
	};

	const handleScrollToSection = () => {
		if (targetRef && targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div
			className='flex flex-col items-center justify-center text-center py-14 p-4 md:p-10'
			ref={sectionRef}
		>
			<motion.p
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={wordAnimation}
        className='text-3xl dark:text-white-bg leading-relaxed md:text-4xl md:leading-relaxed font-semibold m-0 uppercase'
			>
				{words.map((word, index) => (
					<motion.span key={index} variants={wordAnimation}>
						{word}&nbsp; {/* Add space between words */}
					</motion.span>
				))}
			</motion.p>
			<Button
				customStyles='bg-transparent !border-2 !border-black hover:!border-transparent hover:!bg-pink !p-6 !rounded-full !mt-10 uppercase dark:!border-pink dark:!text-pink dark:hover:!text-white-bg'
				aria-label='Show details'
				onClick={handleScrollToSection}
			>
				Let's Show You How
			</Button>
		</div>
	);
}

export default MDCServices;
