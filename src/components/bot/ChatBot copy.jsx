import React, { useState } from 'react';

const StaySafeBot = () => {
	const [step, setStep] = useState('welcome');
	const [feedback, setFeedback] = useState(null);

	const handleSelectOption = (option) => {
		setStep(option);
	};

	const handleFeedback = (feedbackType) => {
		setFeedback(feedbackType);
	};

	const getLinks = (option) => {
		switch (option) {
			case 'screening':
				return (
					<div className="space-y-3">
						<a
							href='link_to_screening'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Check the screening required
						</a>
						<a
							href='link_to_depression_tool'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Depression screening tool
						</a>
						<a
							href='link_to_bmi_calculator'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							BMI Calculator
						</a>
						<a
							href='link_to_sleep_apnea_support'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Sleep Apnea and CPAP Support
						</a>
						<a
							href='link_to_disease_support'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Disease Support
						</a>
					</div>
				);
			case 'nutrition':
				return (
					<div className="space-y-3">
						<a
							href='link_to_appointment'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Book an appointment
						</a>
						<a
							href='link_to_inquire_program'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Inquire about program
						</a>
						<a
							href='mailto:info@staysafeaa.org'
							className='text-blue-600 hover:underline'
						>
							Inquire about payment methods
						</a>
						<a
							href='mailto:info@staysafeaa.org'
							className='text-blue-600 hover:underline'
						>
							Nutrition & Food Safety question
						</a>
					</div>
				);
			case 'assistiveDevices':
				return (
					<div className="space-y-3">
						<a
							href='link_to_mobility_aid'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Mobility Aid
						</a>
						<a
							href='link_to_cpap_support'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							CPAP Support
						</a>
						<a
							href='link_to_oximeter'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Oximeter
						</a>
						<a
							href='link_to_vital_kit'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'
						>
							Vital Kit
						</a>
					</div>
				);
			case 'academy':
				return (
					<div className="space-y-3">
						<a href='mailto:info@staysafeaa.org' className='text-blue-600 hover:underline'>
							Payment method
						</a>
						<a href='mailto:info@staysafeaa.org' className='text-blue-600 hover:underline'>
							Certification delivery
						</a>
						<a href='mailto:info@staysafeaa.org' className='text-blue-600 hover:underline'>
							Assistance for registration
						</a>
					</div>
				);
			case 'workplaceHealth':
				return (
					<div className="text-gray-700">
						For workplace health and safety programs, reach out to us directly.
					</div>
				);
			case 'other':
				return (
					<div className="space-y-3 text-gray-700">
						We’re just a message away!{' '}
						<a href='mailto:info@staysafeaa.org' className='text-blue-600 hover:underline'>
							info@staysafeaa.org
						</a> or{' '}
						<a href='tel:+96171774241' className='text-blue-600 hover:underline'>
							WhatsApp +96171774241
						</a>
					</div>
				);
			default:
				return null;
		}
	};

	const renderFeedback = () => {
		if (feedback) {
			return (
				<div className="space-y-4">
					<p className="text-gray-700">Thank you for your feedback! Did this chat meet your needs?</p>
					<button
						onClick={() => setStep('welcome')}
						className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
					>
						Start New Conversation
					</button>
				</div>
			);
		}
		return (
			<div className="space-x-4">
				<button
					onClick={() => handleFeedback('yes')}
					className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition'
				>
					Yes, it was helpful
				</button>
				<button
					onClick={() => handleFeedback('no')}
					className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition'
				>
					No, I need further assistance
				</button>
			</div>
		);
	};

	const renderChatOptions = () => {
		switch (step) {
			case 'welcome':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">
							Hi! I’m StaySafe Bot. How can I assist you today? Please select an option below:
						</p>
						<button
							onClick={() => handleSelectOption('screening')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Screening & Prevention
						</button>
						<button
							onClick={() => handleSelectOption('nutrition')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Food & Nutrition
						</button>
						<button
							onClick={() => handleSelectOption('assistiveDevices')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Assistive Equipment and Devices
						</button>
						<button
							onClick={() => handleSelectOption('academy')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Public Health Academy Courses or Diplomas
						</button>
						<button
							onClick={() => handleSelectOption('workplaceHealth')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Health and Safety at Work
						</button>
						<button
							onClick={() => handleSelectOption('other')}
							className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition'
						>
							Other Inquiries
						</button>
					</div>
				);
			case 'screening':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Screening & Prevention:</p>
						{getLinks('screening')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			case 'nutrition':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Food & Nutrition:</p>
						{getLinks('nutrition')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			case 'assistiveDevices':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Assistive Equipment and Devices:</p>
						{getLinks('assistiveDevices')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			case 'academy':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Public Health Academy:</p>
						{getLinks('academy')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			case 'workplaceHealth':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Health and Safety at Work:</p>
						{getLinks('workplaceHealth')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			case 'other':
				return (
					<div className="space-y-4">
						<p className="text-lg text-gray-700">Other Inquiries:</p>
						{getLinks('other')}
						<button
							onClick={() => setStep('welcome')}
							className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition'
						>
							Go Back
						</button>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
			<h1 className="text-2xl font-semibold text-center text-gray-800">StaySafe Bot</h1>
			{renderChatOptions()}
			{renderFeedback()}
		</div>
	);
};

export default StaySafeBot;
// import React, { useState } from 'react';

// const StaySafeBot = () => {
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
//             className='bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition-transform transform hover:scale-105'
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
//     const buttonStyles = 'w-full bg-indigo-500 text-white py-3 rounded-md shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-200 ease-in-out';
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

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6 border border-gray-100 md:p-8 lg:max-w-2xl">
//       <h1 className="text-2xl font-bold text-center text-gray-800">StaySafe Bot</h1>
//       {renderChatOptions()}
//       {renderFeedback()}
//     </div>
//   );
// };

// export default StaySafeBot;



