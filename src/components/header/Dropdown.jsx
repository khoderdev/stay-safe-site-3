import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Dropdown({ title, items, mainLink }) {
	const [isOpen, setIsOpen] = useState(false);

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
			{/* Main title, optionally clickable */}
			{mainLink ? (
				<Link
					to={mainLink}
					className='text-black  dark:text-white-bg hover:text-blue dark:hover:text-blue transition-colors'
				>
					{title}
				</Link>
			) : (
				<button className='text-black dark:text-white-bg hover:text-blue dark:hover:text-blue transition-colors'>
					{title}
				</button>
			)}

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='absolute bg-white-whites left-0 mt-2 w-52 bg-white dark:bg-dark shadow-lg rounded-md'
						initial='closed'
						animate='open'
						exit='closed'
						variants={menuVariants}
					>
						<ul className='flex flex-col p-2'>
							{items.map((item, index) => (
								<li key={index}>
									<Link
										to={item.to} // Use Link with the `to` prop
										className='block px-4 py-2 text-black dark:text-white-bg2 hover:bg-gray-100 dark:hover:bg-pink dark:hover:text-white-bg2 rounded-md transition-colors'
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
