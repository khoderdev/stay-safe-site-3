const DotIndicator = ({ shelfLife, className = '' }) => {
  const getDotStyles = () => {
    switch (shelfLife) {
      case 'short':
        return 'bg-red-500 border-red-700 shadow-red-400';    // Short shelf life
      case 'medium':
        return 'bg-blue-500 border-blue-700 shadow-blue-400'; // Medium shelf life
      case 'long':
        return 'bg-green-500 border-green-700 shadow-green-400';  // Long shelf life
      default:
        return 'bg-gray-400 border-gray-600 shadow-gray-300';   // Unknown or undefined
    }
  };

  return (
    <span
      className={`inline-block w-6 h-6 md:w-8 md:h-8 rounded-full border-2 cursor-pointer ${getDotStyles()} 
                  transition-transform duration-200 ease-in-out hover:scale-110 
                  shadow-lg animate-pulse ${className}`}
      title={`Shelf life: ${shelfLife}`}
    />
  );
};

export default DotIndicator;
