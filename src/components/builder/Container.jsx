import React, { useState } from 'react';
import Style from './Style';

export default function Container({ children, initialStyle, onUpdateStyle }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleStyleChange = (updatedStyle) => {
    onUpdateStyle(updatedStyle);
  };

  const handleModalClick = (e) => { 
    // Prevent click inside modal from closing it
    e.stopPropagation();
  };

  return (
    <div
      style={{ ...initialStyle, position: 'relative' }}
      onClick={() => setIsEditing(true)} // Open modal on container click
    >
      {isEditing && (
        <div
          onClick={handleModalClick} // Prevent closing modal when clicking inside
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'white',
            border: '1px solid #ddd',
            padding: '10px',
            zIndex: 1000,
          }}
        >
          <h4>Container Settings</h4>
          <Style initialStyle={initialStyle} onStyleChange={handleStyleChange} />
          <button onClick={() => setIsEditing(false)}>Close</button>
        </div>
      )}
      {children}
    </div>
  );
}
