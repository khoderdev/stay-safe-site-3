import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import PricingCard from '../cards/PricingCard';
import backgroundImage from '../../../public/pomme.png';

const SpringModal = ({ isOpen, setIsOpen, consultationType }) => {
	// Define the features for each consultation type
	const features = [
		// Clinic and In-House Consultation: Only show "Tailored Dietary Presentation"
		...(consultationType === 'clinic' || consultationType === 'in-house'
			? [
					{ title: 'Patient Assessment', inclusive: true, necessary: true },
					{ title: 'Blood Lipid Profile', inclusive: true, necessary: false },
					{ title: 'Blood Glucose Profile', inclusive: true, necessary: false },
					{
						title: 'Blood Pressure Profile',
						inclusive: true,
						necessary: false,
					},
					{
						title: 'Body Composition Analysis',
						inclusive: true,
						necessary: true,
					},

					{ title: 'Therapeutic Diet', inclusive: true, necessary: true },
					{
						title: 'Anthropometric Measurements',
						inclusive: true,
						necessary: true,
					},
					{
						title: 'Medical Dietary Therapy',
						inclusive: true,
						necessary: true,
					},
			  ]
			: []),

		// Online Consultation: Only show these three specific features
		...(consultationType === 'online'
			? [
					{ title: 'Patient Assessment', inclusive: true, necessary: true },
					{
						title: 'Medical Dietary Therapy',
						inclusive: true,
						necessary: true,
					},
					{ title: 'Therapeutic Diet', inclusive: true, necessary: true },
			  ]
			: []),
		// Corporate Consultation: Only show these three specific features
		...(consultationType === 'corporate'
			? [
					{ title: 'Patient Assessment', inclusive: true, necessary: true },
					{
						title: 'Medical Dietary Therapy',
						inclusive: true,
						necessary: true,
					},
					{ title: 'Therapeutic Diet', inclusive: true, necessary: true },
					{ title: 'Blood Lipid Profile', inclusive: true, necessary: false },
					{ title: 'Blood Glucose Profile', inclusive: true, necessary: false },
					{
						title: 'Blood Pressure Profile',
						inclusive: true,
						necessary: false,
					},
					{
						title: 'Body Composition Analysis',
						inclusive: true,
						necessary: true,
					},
					{
						title: 'Anthropometric Measurements',
						inclusive: true,
						necessary: true,
					},
			  ]
			: []),
		// Community Consultation: Only show these three specific features
		...(consultationType === 'community'
			? [
					{ title: 'Patient Assessment', inclusive: true, necessary: true },
					{
						title: 'Medical Dietary Therapy',
						inclusive: true,
						necessary: true,
					},
					{ title: 'Therapeutic Diet', inclusive: true, necessary: true },
					{ title: 'Blood Lipid Profile', inclusive: true, necessary: false },
					{ title: 'Blood Glucose Profile', inclusive: true, necessary: false },
					{
						title: 'Blood Pressure Profile',
						inclusive: true,
						necessary: false,
					},
					{
						title: 'Body Composition Analysis',
						inclusive: true,
						necessary: true,
					},
					{
						title: 'Anthropometric Measurements',
						inclusive: true,
						necessary: true,
					},
			  ]
			: []),
	];

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className='bg-slate-900/20 backdrop-blur sm:p-8 fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll cursor-pointer'
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={(e) => e.stopPropagation()}
						className='relative m-6 rounded-lg w-full max-w-4xl shadow-xl cursor-default overflow-hidden bg-white-bg dark:bg-black dark:text-white-bg'
					>
						{/* Background overlay with reduced opacity */}
						<div
							className='absolute inset-0 bg-cover bg-bottom opacity-10'
							style={{
								backgroundImage: `url(${backgroundImage})`,
							}}
						/>
						{/* Modal Header with Close Icon */}
						<div className='relative z-10 pr-3 pt-3 pb-3 flex justify-end'>
							<button
								onClick={() => setIsOpen(false)}
								className='text-gray-400 hover:text-white-bg'
							>
								<AiOutlineClose size={24} />
							</button>
						</div>

						{/* Modal Content */}
						<div className='relative z-10 p-2'>
							<div className='flex dark:text-white-bg space-x-10 h-[70dvh] sm:h-full overflow-y-scroll scrollbar-hide'>
								<PricingCard
									features={features} // Pass the filtered features
									buttonText='Inquire'
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
