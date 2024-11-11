// import React, { useState } from 'react';
// import './index.css';
// import ServiceAnimatedCrad from './ServiceAnimatedCard';
// import SpringModal from '../modals/SpringModal';

// function Consultations() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [consultationType, setConsultationType] = useState(''); // Track the consultation type

//   const handleCardClick = (type) => {
//     setConsultationType(type); // Set consultation type
//     setModalOpen(true); // Open modal
//   };

//   return (
//     <>
//       <div className='gap-14 lg:gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:px-14'>
//         {/* Service Animated Card with onClick event */}
//         <ServiceAnimatedCrad
//           sectionId='clinic'
//           title='Clinic Consultation'
//           buttonText='Start your journey'
//           description='Visit our clinics for a one-on-one consultation where our dietitians offer tailored dietary plans to support your health goals.'
//           setIsOpen={() => handleCardClick('clinic')} // Pass type
//         />
//         <ServiceAnimatedCrad
//           sectionId='in-house'
//           title='In-House Consultation'
//           buttonText='Start your journey'
//           description='Enjoy the convenience of expert dietary consultation in the comfort of your own home.'
//           setIsOpen={() => handleCardClick('in-house')} // Pass type
//         />
//         <ServiceAnimatedCrad
//           sectionId='online'
//           title='Online Consultation'
//           buttonText='Start your journey'
//           description='Connect with our expert dietitians from anywhere for personalized dietary consultation.'
//           setIsOpen={() => handleCardClick('online')} // Pass type
//         />
//         <ServiceAnimatedCrad
//           sectionId='corporate'
//           title='Corporate Therapeutic Services'
//           buttonText='Start your journey'
//           description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
//           setIsOpen={() => handleCardClick('corporate')} // Pass type
//         />
//         <ServiceAnimatedCrad
//           sectionId='community'
//           title='Community Therapeutic Services'
//           buttonText='Start your journey'
//           description='Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity.'
//           setIsOpen={() => handleCardClick('community')} // Pass type
//         />
//       </div>
//       <SpringModal
//         isOpen={modalOpen}
//         setIsOpen={setModalOpen}
//         consultationType={consultationType}
//       />
//     </>
//   );
// }

// export default Consultations;
import React, { useState } from 'react';
import './index.css';
import ServiceAnimatedCard from './ServiceAnimatedCard';
import SpringModal from '../modals/SpringModal';

function Consultations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState('');
  const [buttonText, setButtonText] = useState(''); // Add state for button text

  const handleCardClick = (type, buttonText) => {
    setConsultationType(type); // Set consultation type
    setButtonText(buttonText);  // Set the corresponding button text
    setModalOpen(true); // Open modal
  };

  return (
    <>
      <div className='gap-14 lg:gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-8 md:px-14'>
        {/* Service Animated Card with onClick event */}
        <ServiceAnimatedCard
          sectionId='clinic'
          title='Clinic Consultation'
          buttonText='Start your journey'
          description='Visit our clinics for a one-on-one consultation where our dietitians offer tailored dietary plans to support your health goals.'
          setIsOpen={() => handleCardClick('clinic', 'Book Appointment')} // Pass type and buttonText
        />
        <ServiceAnimatedCard
          sectionId='in-house'
          title='In-House Consultation'
          buttonText='Start your journey'
          description='Enjoy the convenience of expert dietary consultation in the comfort of your own home.'
          setIsOpen={() => handleCardClick('in-house', 'Schedule Visit')} // Pass type and buttonText
        />
        <ServiceAnimatedCard
          sectionId='online'
          title='Online Consultation'
          buttonText='Start your journey'
          description='Connect with our expert dietitians from anywhere for personalized dietary consultation.'
          setIsOpen={() => handleCardClick('online', 'Book Appointment')} // Pass type and buttonText
        />
        <ServiceAnimatedCard
          sectionId='corporate'
          title='Corporate Therapeutic Services'
          buttonText='Start your journey'
          description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
          setIsOpen={() => handleCardClick('corporate', 'Book Corporate Appointment')} // Pass type and buttonText
        />
        <ServiceAnimatedCard
          sectionId='community'
          title='Community Therapeutic Services'
          buttonText='Start your journey'
          description='Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity.'
          setIsOpen={() => handleCardClick('community', 'Book Community Appointment')} // Pass type and buttonText
        />
      </div>
      <SpringModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        consultationType={consultationType}
        buttonText={buttonText} // Pass buttonText to the modal
      />
    </>
  );
}

export default Consultations;
