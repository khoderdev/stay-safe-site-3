import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dropdown({ title, items }) {
	const [isOpen, setIsOpen] = useState(false);

	// Animation variants
	const menuVariants = {
		open: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
		closed: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<div
			className='relative'
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<button className='text-black dark:text-white-bg hover:text-blue dark:hover:text-blue transition-colors'>
				{title}
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='absolute left-0 mt-2 w-48 bg-white dark:bg-dark shadow-lg rounded-md'
						initial='closed'
						animate='open'
						exit='closed'
						variants={menuVariants}
					>
						<ul className='flex flex-col p-2'>
							{items.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										className='block px-4 py-2 text-white-bg2 hover:bg-gray-100 dark:hover:bg-pink dark:hover:text-white-bg2 rounded-md transition-colors'
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
