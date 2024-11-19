import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const PHQ9Modal = ({ isOpen, setIsOpen, children }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className='bg-slate-900/20 backdrop-blur  fixed inset-0 z-50 flex items-center justify-center cursor-pointer'
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={(e) => e.stopPropagation()}
						className='relative m- rounded-lg w-full max-w-4xl shadow-xl ring-1 ring-[#00000048] cursor-default overflow-hidden bg-white-bg dark:bg-black dark:text-white-bg'
					>
						{/* Modal Header with Close Icon */}
						<div className='relative z-10 pr-3 pt-3 pb-3 flex justify-end'>
							<button
								onClick={() => setIsOpen(false)}
								className='text-gray-400 hover:text-black dark:hover:text-white-bg'
							>
								<AiOutlineClose size={24} />
							</button>
						</div>

						{/* Modal Content */}
						<div className='flex flex-col dark:text-white-bg space-x-10 overflow-y-scroll scrollbar-hide'>
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PHQ9Modal;
