import React from 'react';

const CowShape = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cow body */}
      <ellipse cx="100" cy="100" rx="50" ry="30" fill="#fff" stroke="#000" strokeWidth="2" />
      
      {/* Head */}
      <ellipse cx="100" cy="60" rx="20" ry="15" fill="#fff" stroke="#000" strokeWidth="2" />

      {/* Eyes */}
      <circle cx="90" cy="55" r="2" fill="#000" />
      <circle cx="110" cy="55" r="2" fill="#000" />

      {/* Nose */}
      <ellipse cx="100" cy="65" rx="5" ry="3" fill="#000" />

      {/* Ears */}
      <ellipse cx="85" cy="50" rx="5" ry="8" fill="#fff" stroke="#000" strokeWidth="2" />
      <ellipse cx="115" cy="50" rx="5" ry="8" fill="#fff" stroke="#000" strokeWidth="2" />

      {/* Legs */}
      <rect x="80" y="130" width="5" height="30" fill="#000" />
      <rect x="115" y="130" width="5" height="30" fill="#000" />

      {/* Tail */}
      <line x1="145" y1="100" x2="160" y2="90" stroke="#000" strokeWidth="2" />
      <circle cx="160" cy="90" r="3" fill="#000" />

      {/* Spots */}
      <circle cx="110" cy="100" r="5" fill="#000" />
      <circle cx="90" cy="110" r="5" fill="#000" />
      <circle cx="95" cy="90" r="4" fill="#000" />
    </svg>
  );
};

export default CowShape;
