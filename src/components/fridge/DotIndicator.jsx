import React from 'react';

const DotIndicator = ({ shelfLife, className = '' }) => {
  const getDotColor = () => {
    switch (shelfLife) {
      case 'short':
        return 'bg-red-500';    // Short shelf life
      case 'medium':
        return 'bg-yellow-500'; // Medium shelf life
      case 'long':
        return 'bg-green-500';  // Long shelf life
      default:
        return 'bg-gray-400';   // Unknown or undefined
    }
  };

  return (
    <span
      className={`inline-block w-4 h-4 md:w-6 md:h-6 rounded-full ${getDotColor()} ${className}`}
      title={`Shelf life: ${shelfLife}`}
    />
  );
};

export default DotIndicator;
