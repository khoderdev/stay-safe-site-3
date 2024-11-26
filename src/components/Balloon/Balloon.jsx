// // import React from 'react';
// // import { motion } from 'framer-motion';

// // function Balloon() {
// // 	return (
// // 		<div className='flex justify-around bg-black'>
// // 			<div className='mr-16 flex items-center'>
// // 				<p className='text-5xl'>
// // 					<motion.span
// // 						className='block mb-4'
// // 						initial={{ opacity: 0, y: 20 }}
// // 						animate={{ opacity: 1, y: 0 }}
// // 						transition={{ duration: 1 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// // 						viewport={{ once: false, amount: 0.5 }}
// // 					>
// // 						You are not alone
// // 					</motion.span>
// // 					<motion.span
// // 						className='block mb-4'
// // 						initial={{ opacity: 0, y: 20 }}
// // 						animate={{ opacity: 1, y: 0 }}
// // 						transition={{ duration: 1, delay: 0.5 }}
// // 						whileInView={{ opacity: 1, y: 0 }}
// // 						viewport={{ once: false, amount: 0.5 }}
// // 					>
// // 						300 million people experience depression.
// // 					</motion.span>
// // 					<motion.span
// // 						className='block mb-4'
// // 						initial={{ opacity: 0, y: 20 }}
// // 						animate={{ opacity: 1, y: 0 }}
// // 						transition={{ duration: 1, delay: 1 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// // 						viewport={{ once: false, amount: 0.5 }}
// // 					>
// // 						Your Mental Health Matters.
// // 					</motion.span>
// // 				</p>
// // 			</div>
// // 			<img src='/images/balloon.gif' alt='Balloon GIF' className='' />
// // 		</div>
// // 	);
// // }
// // export default Balloon;

// import React from 'react';
// import { motion } from 'framer-motion';

// function Balloon() {
// 	return (
// 		<div className='flex justify-around bg-black'>
// 			<div className='mr-16 flex items-center'>
// 				<p className='text-5xl'>
// 					<motion.span
// 						className='block mb-4'
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						viewport={{ once: false, amount: 0.5 }}
// 						transition={{ duration: 1 }}
// 					>
// 						You are not alone
// 					</motion.span>
// 					<motion.span
// 						className='block mb-4'
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						viewport={{ once: false, amount: 0.5 }}
// 						transition={{ duration: 1, delay: 0.5 }}
// 					>
// 						300 million people experience depression.
// 					</motion.span>
// 					<motion.span
// 						className='block mb-4'
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						viewport={{ once: false, amount: 0.5 }}
// 						transition={{ duration: 1, delay: 1 }}
// 					>
// 						Your Mental Health Matters.
// 					</motion.span>
// 				</p>
// 			</div>
// 			<img src='/images/balloon.gif' alt='Balloon GIF' className='' />
// 		</div>
// 	);
// }

// export default Balloon;
// import React from 'react';
// import { motion } from 'framer-motion';

// function Balloon({ isInView }) {
// 	return (
// 		<div className='flex justify-start border xl:pr-32'>
// 			<div className='w-1/2 flex justify-start items-center border'>
// 				<motion.p
// 					className='text-5xl'
// 					initial={{ opacity: 0, y: 20 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: false, amount: 0.5 }}
// 					transition={{
// 						duration: 0.5,
// 						delay: 0.2,
// 						ease: [0.6, -0.05, 0.01, 1],
// 					}}
// 				>
// 					<motion.span
// 						className='block mb-4 '
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{
// 							duration: 0.5,
// 							delay: 0.2,
// 							ease: [0.6, -0.05, 0.01, 1],
// 						}}
// 					>
// 						You are not alone
// 					</motion.span>

// 					<motion.span
// 						className='block mb-4 '
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{
// 							duration: 0.5,
// 							delay: 0.5,
// 							ease: [0.6, -0.05, 0.01, 1],
// 						}}
// 					>
// 						300 million people experience depression.
// 					</motion.span>

// 					<motion.span
// 						className='block mb-4 '
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{
// 							duration: 1.2,
// 							delay: 0.5,
// 							ease: [0.6, -0.05, 0.01, 1],
// 						}}
// 					>
// 						Your Mental Health Matters.
// 					</motion.span>
// 				</motion.p>
// 			</div>
// 			<img src='/images/balloon.gif' alt='Balloon GIF' className='' />
// 		</div>
// 	);
// }

// export default Balloon;


import React from 'react';
import { motion } from 'framer-motion';

function Balloon({ isInView }) {
	return (
		<div className='flex justify-start'>
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
			<img src='/images/balloon.gif' alt='Balloon' className='ml-0 w-[35%]' />
		</div>
	);
}

export default Balloon;
