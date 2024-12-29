// import React, { useState } from 'react';
// import { createPortal } from 'react-dom';

// const StaySafeBot = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [step, setStep] = useState('welcome');
//   const [feedback, setFeedback] = useState(null);

//   const handleSelectOption = (option) => {
//     setStep(option);
//   };

//   const handleFeedback = (feedbackType) => {
//     setFeedback(feedbackType);
//   };

//   const getLinks = (option) => {
//     const linkStyles = 'block w-full text-blue-600 hover:text-blue-800 transition-colors underline';
//     switch (option) {
//       case 'screening':
//         return (
//           <div className="space-y-3">
//             <a
//               href='link_to_screening'
//               target='_blank'
//               rel='noopener noreferrer'
//               className={linkStyles}
//             >
//               Check the screening required
//             </a>
//             <a
//               href='link_to_depression_tool'
//               target='_blank'
//               rel='noopener noreferrer'
//               className={linkStyles}
//             >
//               Depression screening tool
//             </a>
//             <a
//               href='link_to_bmi_calculator'
//               target='_blank'
//               rel='noopener noreferrer'
//               className={linkStyles}
//             >
//               BMI Calculator
//             </a>
//             <a
//               href='link_to_sleep_apnea_support'
//               target='_blank'
//               rel='noopener noreferrer'
//               className={linkStyles}
//             >
//               Sleep Apnea and CPAP Support
//             </a>
//             <a
//               href='link_to_disease_support'
//               target='_blank'
//               rel='noopener noreferrer'
//               className={linkStyles}
//             >
//               Disease Support
//             </a>
//           </div>
//         );
//       // Similar case structures for other options...
//       default:
//         return null;
//     }
//   };

//   const renderFeedback = () => {
//     if (feedback) {
//       return (
//         <div className="space-y-4 text-center">
//           <p className="text-gray-700">Thank you for your feedback! Did this chat meet your needs?</p>
//           <button
//             onClick={() => setStep('welcome')}
//             className='bg-indigo-500 text-white-bg2 py-2 px-6 rounded-full hover:bg-indigo-600 transition-transform transform hover:scale-105'
//           >
//             Start New Conversation
//           </button>
//         </div>
//       );
//     }
//     return (
//       <div className="flex justify-center space-x-4 mt-6">
//         <button
//           onClick={() => handleFeedback('yes')}
//           className='bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105'
//         >
//           Yes, it was helpful
//         </button>
//         <button
//           onClick={() => handleFeedback('no')}
//           className='bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105'
//         >
//           No, I need further assistance
//         </button>
//       </div>
//     );
//   };

//   const renderChatOptions = () => {
//     const buttonStyles = 'w-full bg- text-black py-3 rounded-md shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-200 ease-in-out';
//     switch (step) {
//       case 'welcome':
//         return (
//           <div className="space-y-4">
//             <p className="text-lg text-gray-700 text-center">
//               Hi! I’m StaySafe Bot. How can I assist you today? Please select an option below:
//             </p>
//             <button
//               onClick={() => handleSelectOption('screening')}
//               className={buttonStyles}
//             >
//               Screening & Prevention
//             </button>
//             <button
//               onClick={() => handleSelectOption('nutrition')}
//               className={buttonStyles}
//             >
//               Food & Nutrition
//             </button>
//             <button
//               onClick={() => handleSelectOption('assistiveDevices')}
//               className={buttonStyles}
//             >
//               Assistive Equipment and Devices
//             </button>
//             <button
//               onClick={() => handleSelectOption('academy')}
//               className={buttonStyles}
//             >
//               Public Health Academy Courses or Diplomas
//             </button>
//             <button
//               onClick={() => handleSelectOption('workplaceHealth')}
//               className={buttonStyles}
//             >
//               Health and Safety at Work
//             </button>
//             <button
//               onClick={() => handleSelectOption('other')}
//               className={buttonStyles}
//             >
//               Other Inquiries
//             </button>
//           </div>
//         );
//       // Similar case structures for other steps...
//       default:
//         return null;
//     }
//   };

//   // Modal component rendering the chatbot UI
//   const ChatModal = () => (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
//       <div className="relative max-w-lg w-full p-6 bg-white-whites rounded-lg shadow-lg transform transition-all scale-95 md:scale-100">
//         <button
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition duration-200"
//           onClick={() => setIsModalOpen(false)}
//           aria-label="Close chat"
//         >
//           ✕
//         </button>
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">StaySafe Bot</h1>
//         {renderChatOptions()}
//         {renderFeedback()}
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="fixed bottom-8 right-8 bg-indigo-500 text-white-bg2 p-4 rounded-full shadow-lg hover:bg-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out"
//         aria-label="Open chat"
//       >
//         💬
//       </button>

//       {/* Modal for Chat */}
//       {isModalOpen && createPortal(<ChatModal />, document.body)}
//     </>
//   );
// };

// export default StaySafeBot;
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'; // Import Link

const StaySafeBot = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [step, setStep] = useState('welcome');
	const [feedback, setFeedback] = useState(null);

	const handleSelectOption = (option) => {
		setStep(option);
	};

	const handleFeedback = (feedbackType) => {
		setFeedback(feedbackType);
	};

	const getLinks = (option) => {
		const linkStyles =
			'block w-full text-blue-600 hover:text-blue-800 transition-colors underline';
		switch (option) {
			case 'screening':
				return (
					<div className='space-y-3'>
						<Link to='/screening' className={linkStyles}>
							Check the screening required
						</Link>
						<Link to='/depression-tool' className={linkStyles}>
							Depression screening tool
						</Link>
						<Link to='/bmi-calculator' className={linkStyles}>
							BMI Calculator
						</Link>
						<Link to='/sleep-apnea-support' className={linkStyles}>
							Sleep Apnea and CPAP Support
						</Link>
						<Link to='/disease-support' className={linkStyles}>
							Disease Support
						</Link>
					</div>
				);
			case 'nutrition':
				return (
					<div className='space-y-3'>
						<Link to='/appointment' className={linkStyles}>
							Book an appointment
						</Link>
						<Link to='/inquire-program' className={linkStyles}>
							Inquire about program
						</Link>
						<Link to='/payment-methods' className={linkStyles}>
							Inquire about payment methods
						</Link>
						<Link to='/nutrition-questions' className={linkStyles}>
							Nutrition & Food Safety question
						</Link>
					</div>
				);
			case 'assistiveDevices':
				return (
					<div className='space-y-3'>
						<Link to='/mobility-aid' className={linkStyles}>
							Mobility Aid
						</Link>
						<Link to='/cpap-support' className={linkStyles}>
							CPAP Support
						</Link>
						<Link to='/oximeter' className={linkStyles}>
							Oximeter
						</Link>
						<Link to='/vital-kit' className={linkStyles}>
							Vital Kit
						</Link>
					</div>
				);
			case 'academy':
				return (
					<div className='space-y-3'>
						<Link to='/payment-method' className={linkStyles}>
							Payment method
						</Link>
						<Link to='/certification-delivery' className={linkStyles}>
							Certification delivery
						</Link>
						<Link to='/registration-assistance' className={linkStyles}>
							Assistance for registration
						</Link>
					</div>
				);
			case 'workplaceHealth':
				return (
					<div className='text-gray-700'>
						For workplace health and safety programs, reach out to us directly.
					</div>
				);
			case 'other':
				return (
					<div className='space-y-3 text-gray-700'>
						We’re just a message away!{' '}
						<Link to='/contact' className='text-blue-600 hover:underline'>
							Contact Us
						</Link>{' '}
						or{' '}
						<Link
							to='/whatsapp-contact'
							className='text-blue-600 hover:underline'
						>
							WhatsApp +96171774241
						</Link>
					</div>
				);
			default:
				return null;
		}
	};

	const renderFeedback = () => {
		if (feedback) {
			return (
				<div className='space-y-4 text-center'>
					<p className='text-gray-700'>
						Thank you for your feedback! Did this chat meet your needs?
					</p>
					<button
						onClick={() => setStep('welcome')}
						className='bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition-transform transform hover:scale-105'
					>
						Start New Conversation
					</button>
				</div>
			);
		}
		return (
			<div className='flex justify-center space-x-4 mt-6'>
				<button
					onClick={() => handleFeedback('yes')}
					className='bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105'
				>
					Yes, it was helpful
				</button>
				<button
					onClick={() => handleFeedback('no')}
					className='bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105'
				>
					No, I need further assistance
				</button>
			</div>
		);
	};

	const renderChatOptions = () => {
		const buttonStyles =
			'w-full  text-black font-semibold py-3 rounded-md shadow-md hover:text-white-bg hover:bg-indigo-600 hover:shadow-lg transition-all duration-200 ease-in-out';
		switch (step) {
			case 'welcome':
				return (
					<div className='space-y-4'>
						<p className='text-lg text-gray-700 text-center'>
							Hi! I’m StaySafe Bot. How can I assist you today? Please select an
							option below:
						</p>
						<button
							onClick={() => handleSelectOption('screening')}
							className={buttonStyles}
						>
							Screening & Prevention
						</button>
						<button
							onClick={() => handleSelectOption('nutrition')}
							className={buttonStyles}
						>
							Food & Nutrition
						</button>
						<button
							onClick={() => handleSelectOption('assistiveDevices')}
							className={buttonStyles}
						>
							Assistive Equipment and Devices
						</button>
						<button
							onClick={() => handleSelectOption('academy')}
							className={buttonStyles}
						>
							Public Health Academy Courses or Diplomas
						</button>
						<button
							onClick={() => handleSelectOption('workplaceHealth')}
							className={buttonStyles}
						>
							Health and Safety at Work
						</button>
						<button
							onClick={() => handleSelectOption('other')}
							className={buttonStyles}
						>
							Other Inquiries
						</button>
					</div>
				);
			case 'screening':
				return getLinks('screening');
			case 'nutrition':
				return getLinks('nutrition');
			case 'assistiveDevices':
				return getLinks('assistiveDevices');
			case 'academy':
				return getLinks('academy');
			case 'workplaceHealth':
				return getLinks('workplaceHealth');
			case 'other':
				return getLinks('other');
			default:
				return null;
		}
	};

	// Modal component rendering the chatbot UI
	const ChatModal = () => (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity'>
			<div className='relative max-w-lg w-full p-6 bg-white-bg rounded-lg shadow-lg transform transition-all scale-95 md:scale-100'>
				<button
					className='absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition duration-200'
					onClick={() => setIsModalOpen(false)}
					aria-label='Close chat'
				>
					✕
				</button>
				<h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>
					StaySafe Bot
				</h1>
				{renderChatOptions()}
				{renderFeedback()}
			</div>
		</div>
	);

	return (
		<>
			{/* Floating Chat Button */}
			<button
				onClick={() => setIsModalOpen(true)}
				className='fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out'
				aria-label='Open chat'
			>
				💬
			</button>

			{/* Modal for Chat */}
			{isModalOpen && createPortal(<ChatModal />, document.body)}
		</>
	);
};

export default StaySafeBot;
