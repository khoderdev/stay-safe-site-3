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
				className='text-[1.7rem] md:text-6xl font-semibold dark:text-white-bg mb-10 flex flex-col'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}
			>
				Support your Child's Health
				<br />
				<motion.button
					onClick={handleScrollToSection}
					className='px-8 py-4 my-10 bg-pink text-white-bg text-[1rem] md:text-4xl font-semibold rounded-lg shadow-md hover:bg-pink focus:outline-hidden focus:ring-2 focus:ring-pink focus:drop-shadow-sm focus:shadow-md focus:shadow-pink focus:bg-transparent focus:text-pink focus:font-semibold place-self-center'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
				>
					Take Action for Peace of Mind
				</motion.button>
			</motion.h1>
		</div>
	);
}

export default CTA;
