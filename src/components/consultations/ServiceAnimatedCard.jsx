// import React from 'react';
// import './index.css'
// const ServiceAnimatedCrad = ({ sectionId, iconPath, image, title, description }) => {
//   return (
//     <section id={sectionId} className="advertisers-service-sec">
//       <div className="container">
//         <div className="service-card !text-left'">
//           <h3>{title}</h3>
//           <p>{description}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceAnimatedCrad;
// ServiceAnimatedCard.js
import React from 'react';
import './index.css';

const ServiceAnimatedCard = ({ sectionId, title, description, onClick, setIsOpen }) => {
  const handleClick = () => {
    // Trigger modal opening when the card is clicked
    setIsOpen(true);
    if (onClick) onClick(); // Optional callback if any is passed for extra actions
  };

  return (
    <section id={sectionId} className="advertisers-service-sec" onClick={handleClick}>
      <div className="container">
        <div className="service-card !text-left">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAnimatedCard;
