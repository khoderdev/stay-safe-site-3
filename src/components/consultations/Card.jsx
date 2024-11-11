import React from 'react';
import './card.css'; 

const Card = () => {
  return (
    <div className="card">
      <header className="card__thumb">
      </header>
      <div className="card__body">
        
        <h2 className="card__title">
          <a href="#">an ice cream sundae party!</a>
        </h2>
        <p className="card__description">
          5. Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step further by turning it into an ice cream sundae party!
        </p>
      </div>
    </div>
  );
};

export default Card;
