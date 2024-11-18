import React, { useState } from 'react';
import './fridge-btn.css';

function FridgeBtns({ view, setView }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (index, viewType) => {
    setSelected(index);
    setView(viewType);
  };

  return (
    <div className="fridge-btn-wrapper">
      <div
        className={`fridge-btn ${selected === 0 ? 'selected' : ''}`}
        onClick={() => handleClick(0, "Shelf Life")}
      >
        Shelf Life
      </div>
      <div
        className={`fridge-btn ${selected === 1 ? 'selected' : ''}`}
        onClick={() => handleClick(1, "Food Storage")}
      >
        Food Storage
      </div>
    </div>
  );
}

export default FridgeBtns;
