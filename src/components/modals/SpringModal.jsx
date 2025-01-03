import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import PricingCard from '../cards/PricingCard';
import PommeImage from '/pomme.png';
import getFeatures from './ConsultationsFeatures';

const SpringModal = ({ isOpen, setIsOpen, consultationType, buttonText }) => {
	const features = getFeatures(consultationType);

	// Prevent page scrolling when the modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // Disable scrolling
		} else {
			document.body.style.overflow = ''; // Re-enable scrolling
		}
		// Cleanup when the component is unmounted or when modal is closed
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
					className='bg-slate-900/20 backdrop-blur sm:p-8 fixed inset-0 z-50 flex items-center justify-center cursor-pointer'
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={(e) => e.stopPropagation()}
						className='relative m- rounded-lg w-full max-w-4xl shadow-xl ring-1 ring-[#00000048] cursor-default overflow-hidden bg-white-bg dark:bg-black dark:text-white-bg'
					>
						{/* Background overlay with reduced opacity */}
						<div
							className='absolute inset-0 bg-cover bg-bottom opacity-10'
							style={{
								PommeImage: `url(${PommeImage})`,
							}}
						/>
						{/* Modal Header with Close Icon */}
						<div className='relative z-50 pr-3 pt-3 pb-3 flex justify-end'>
							<button
								onClick={() => setIsOpen(false)}
								className='text-gray-400 hover:text-black dark:hover:text-white-bg'
							>
								<AiOutlineClose size={24} />
							</button>
						</div>

						{/* Modal Content */}
						<div className='relative p-2'>
							<div className='flex dark:text-white-bg space-x-10 h-[70dvh] sm:h-[89dvh] overflow-y-scroll scrollbar-hide'>
								<PricingCard
									features={features}
									buttonText={buttonText}
									setIsOpen={setIsOpen}
								/>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SpringModal;
