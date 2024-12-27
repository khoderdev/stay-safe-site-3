import React from 'react';
import { motion } from 'framer-motion';

export const BreastColored = () => {
	return (
		<div className="relative w-full flex justify-center">
			{/* Image Container */}
			<div className="relative w-1/2">
				<img src="/images/breast.png" loading="lazy" alt="breast" className="w-full" />

				{/* Box 1 */}
				<div className="absolute top-[49%] left-[4.3rem] sm:left-[24%] transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
					{/* Gauge Pin (Static) */}
					<div className="w-1 h-6 bg-black origin-bottom" />
				</div>

				{/* Box 2 */}
				<motion.div
					className="absolute top-[0%] left-[51%] border-blue-500 border w-6 h-6 sm:w-96 sm:h-96 rounded-full flex items-center justify-center"
					animate={{
						rotate: 360,
					}}
					transition={{
						repeat: Infinity,
						duration: 4,
						ease: 'linear',
					}}
				>
					{/* Gauge Pin (Static) */}
					<div className="w-1 h-[40%] mb-60 bg-white-bg origin-bottom" />
				</motion.div>
			</div>
		</div>
	);
};

export default BreastColored;




// boob 1 = from 0 to 48 to 70
// boob 2 = from 0 to 45 to 60

// Text : Exlusively breastfed 48% target 70% 2030 - 45% Continued breast feeding till the age of 2 60%