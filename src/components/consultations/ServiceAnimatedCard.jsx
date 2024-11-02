import React from 'react';
import './index.css'
const ServiceAnimatedCrad = ({ sectionId, iconPath, image, title, description }) => {
  return (
    <section id={sectionId} className="advertisers-service-sec">
      <div className="container">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={image} width={"200px"} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAnimatedCrad;
