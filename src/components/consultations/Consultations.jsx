import React, { useState } from 'react';
import './index.css';
import ServiceAnimatedCrad from './ServiceAnimatedCard';
import SpringModal from '../modals/SpringModal';

function Consultations() {
  const [modalOpen, setModalOpen] = useState(false);  // Modal state

  const handleCardClick = () => {
    setModalOpen(true);  // Open the modal when a card is clicked
  };

	
	return (
		<>
			<div className='gap-14 lg:gap-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:px-14'>
				{/* Service Animated Card with onClick event */}
				<ServiceAnimatedCrad
					sectionId='clinic'
					title='Clinic Consultation'
					description='Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, & Personalized Dietary Education, Blood Lipid Profile (Cholesterol, HDL, LDL, Triglyceride) & Blood Glucose.'
					setIsOpen={setModalOpen} 
				/>
				<ServiceAnimatedCrad
					setIsOpen={setModalOpen}
					sectionId='in-house'
					title='In-House Consultation'
					description='Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, Personalized Dietary Education, & Labs, including Lipid profile (Cholesterol HDL, LDL, & Triglyceride) & Blood Glucose.'
				/>
				<ServiceAnimatedCrad
					setIsOpen={setModalOpen}
					sectionId='online'
					title='Online Consultation'
					description='Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, & Personalized Dietary Education.'
				/>

				<ServiceAnimatedCrad
					setIsOpen={setModalOpen}
					sectionId='corporate'
					title='Corporate Therapeutic Services'
					description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
				/>
				<ServiceAnimatedCrad
					setIsOpen={setModalOpen}
					sectionId='comunity'
					title='Community Therapeutic Services'
					description='Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity..'
				/>
			</div>
			<SpringModal isOpen={modalOpen} setIsOpen={setModalOpen} />
		</>
	);
}

export default Consultations;
