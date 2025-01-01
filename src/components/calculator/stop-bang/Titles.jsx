import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Titles() {
	// State to control the visibility of the signs list
	const [isVisible, setIsVisible] = useState(false);

	// Toggle visibility
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className='flex flex-col space-y-6 pb-10'>
			<motion.h1
				className='text-6xl font-semibold leading-tight dark:text-white-bg2'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Could Sleep Apnea Be <br />
				Disrupting Your Sleep?
			</motion.h1>

			<motion.h3
				className='text-2xl dark:text-white-bg2'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				Many people experience poor sleep but don’t realize
				<br />
				it could be caused by a condition called sleep apnea. <br />
				Sleep apnea happens when your breathing repeatedly <br />
				stops and starts during sleep.
			</motion.h3>

			<div className='text-xl dark:text-white-bg2'>
				<motion.h2
					className='text-3xl font-bold dark:text-pink mb-2 cursor-pointer'
					onClick={toggleVisibility}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					// whileHover={{ scale: 1.05 }}
				>
					Signs You Might Have Sleep Apnea
				</motion.h2>

				{/* Animate the visibility of the list */}
				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{
						height: isVisible ? 'auto' : 0,
						opacity: isVisible ? 1 : 0,
					}}
					transition={{ duration: 0.5 }}
					style={{ overflow: 'hidden' }}
				>
					<ul className='space-y-2'>
						<li>Do you snore loudly or gasp for air while sleeping?</li>
						<li>
							Do you wake up feeling tired, even after a full night's sleep?
						</li>
						<li>Do you experience headaches or dry mouth in the morning?</li>
						<li>
							Do you often feel sleepy or struggle to stay alert during the day?
						</li>
						<li>If these sound familiar, sleep apnea might be the cause.</li>
					</ul>
					<br />
				</motion.div>
				<p className='mt-2 text-center'>
					Take this screening tool to assess your risk. A better night's sleep
					could change your life!
				</p>
			</div>
		</div>
	);
}

export default Titles;
