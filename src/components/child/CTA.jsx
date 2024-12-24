import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function CTA({ targetRef, className }) {
	const sectionRef = useRef(null);
	const handleScrollToSection = () => {
		if (targetRef && targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className='flex flex-col items-center space-y-6'>
			<motion.h1
				className='text-3xl lg:text-8xl font-semibold text-white-bg'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				Worried about your little
				<br /> one's health?
				<br />
				<span className='text-4xl text-center font-semibold text-white-bg'>
					Let us help you give them the best care.
				</span>
			</motion.h1>
			<motion.button
				onClick={handleScrollToSection}
				className='px-10 py-4 bg-pink text-white rounded-lg shadow-md hover:bg-pink focus:outline-none focus:ring-2 focus:ring-pink focus:drop-shadow focus:shadow-md focus:shadow-pink focus:bg-transparent focus:text-pink focus:font-semibold place-self-start'
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
			>
				Book an Appointment
			</motion.button>
		</div>
	);
}

export default CTA;
