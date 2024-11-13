// import React, { useState } from 'react';
// import ServiceAnimatedCard from './ServiceAnimatedCard';
// import SpringModal from '../modals/SpringModal';

// function Consultations() {
// 	const [modalOpen, setModalOpen] = useState(false);
// 	const [consultationType, setConsultationType] = useState('');
// 	const [buttonText, setButtonText] = useState(''); // Add state for button text

// 	const handleCardClick = (type, buttonText) => {
// 		setConsultationType(type); // Set consultation type
// 		setButtonText(buttonText); // Set the corresponding button text
// 		setModalOpen(true); // Open modal
// 	};

// 	return (
// 		<>
// 			<div className='w-2/3 self-center gap-16 lg:gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:p-0'>
// 				{/* Service Animated Card with onClick event */}
// 				<ServiceAnimatedCard
// 					sectionId='clinic'
// 					title='Clinic Consultation'
// 					buttonText='Start your journey'
// 					description='Visit our clinics for a one-on-one consultation where our dietitians offer tailored dietary plans to support your health goals.'
// 					setIsOpen={() => handleCardClick('clinic', 'Book Appointment')} // Pass type and buttonText
// 				/>
// 				<ServiceAnimatedCard
// 					sectionId='in-house'
// 					title='In-House Consultation'
// 					buttonText='Start your journey'
// 					description='Enjoy the convenience of expert dietary consultation in the comfort of your own home.'
// 					setIsOpen={() => handleCardClick('in-house', 'Schedule Visit')} // Pass type and buttonText
// 				/>
// 				<ServiceAnimatedCard
// 					sectionId='online'
// 					title='Online Consultation'
// 					buttonText='Start your journey'
// 					description='Connect with our expert dietitians from anywhere for personalized dietary consultation.'
// 					setIsOpen={() => handleCardClick('online', 'Book Appointment')} // Pass type and buttonText
// 				/>
// 				<ServiceAnimatedCard
// 					sectionId='corporate'
// 					title='Corporate Therapeutic Services'
// 					buttonText='Start your journey'
// 					description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
// 					setIsOpen={() =>
// 						handleCardClick('corporate', 'Book Corporate Appointment')
// 					} // Pass type and buttonText
// 				/>
// 				<ServiceAnimatedCard
// 					sectionId='community'
// 					title='Community Therapeutic Services'
// 					buttonText='Start your journey'
// 					description='Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity.'
// 					setIsOpen={() =>
// 						handleCardClick('community', 'Book Community Appointment')
// 					} // Pass type and buttonText
// 				/>
// 			</div>
// 			<SpringModal
// 				isOpen={modalOpen}
// 				setIsOpen={setModalOpen}
// 				consultationType={consultationType}
// 				buttonText={buttonText} // Pass buttonText to the modal
// 			/>
// 		</>
// 	);
// }

// export default Consultations;

import { useState } from 'react';
import SpringModal from '../modals/SpringModal';
import Clinic from './cards/ClinicConsultation';
import InHouse from './cards/InHouseConsultation';
import Online from './cards/OnlineConsultation';
import Corporate from './cards/CorporateTherapeuticServices';
import Community from './cards/CommunityTherapeuticServices';

function Consultations() {
	const [modalOpen, setModalOpen] = useState(false);
	const [consultationType, setConsultationType] = useState('');
	const [buttonText, setButtonText] = useState('');

	const handleCardClick = (type, buttonText) => {
		setConsultationType(type);
		setButtonText(buttonText);
		setModalOpen(true);
	};

	return (
		<>
			<div className='w-2/3 lg:w-full self-center gap-16 lg:gap-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:p-0'>
				<Clinic
					sectionId='clinic'
					setIsOpen={() => handleCardClick('clinic', 'Book Appointment')}
				/>
				<InHouse
					sectionId='in-house'
					setIsOpen={() => handleCardClick('in-house', 'Schedule Visit')}
				/>
				<Online
					sectionId='online'
					setIsOpen={() => handleCardClick('online', 'Book Appointment')}
				/>
				<Corporate
					sectionId='corporate'
					setIsOpen={() =>
						handleCardClick('corporate', 'Book Appointment')
					}
				/>
				<Community
					sectionId='community'
					setIsOpen={() =>
						handleCardClick('community', 'Book Appointment')
					}
				/>
			</div>
			<SpringModal
				isOpen={modalOpen}
				setIsOpen={setModalOpen}
				consultationType={consultationType}
				buttonText={buttonText}
			/>
		</>
	);
}

export default Consultations;
