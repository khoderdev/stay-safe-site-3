import React from 'react';
import { motion } from 'framer-motion';

function Balloon({ isInView }) {
	return (
		<div className='flex flex-col-reverse py-20 justify-start sm:flex sm:flex-row'>
			<div className='w-fit flex items-center pl-8'>
				<motion.p
					className='text-6xl font-semibold'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
						ease: [0.6, -0.05, 0.01, 1],
					}}
				>
					<motion.span
						className='block mb-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.2,
							ease: [0.6, -0.05, 0.01, 1],
						}}
					>
						You are not alone
					</motion.span>

					<motion.span
						className='block mb-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: [0.6, -0.05, 0.01, 1],
						}}
					>
						300 million people experience depression.
					</motion.span>

					<motion.span
						className='block mb-4'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1.2,
							delay: 0.5,
							ease: [0.6, -0.05, 0.01, 1],
						}}
					>
						Your Mental Health Matters.
					</motion.span>
				</motion.p>
			</div>
			<img src='/images/balloon.gif' alt='Balloon' className='ml-0 w-full sm:w-[35%]' />
		</div>
	);
}

export default Balloon;
