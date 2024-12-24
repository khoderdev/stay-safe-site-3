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
			<div className='w-2/3 lg:w-full self-center gap-16 lg:gap-36 lg:gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:p-20'>
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
