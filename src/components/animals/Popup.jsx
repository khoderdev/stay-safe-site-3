// import React from 'react';

// const Popup = ({ isVisible, onClose, content }) => {
// 	if (!isVisible) return null;

// 	return (
// 		<>
// 			{/* Popup Element */}
// 			<div
//       className='bg-white-whites dark:bg-black'
// 				style={{
// 					position: 'fixed',
// 					top: '50%',
// 					left: '50%',
// 					transform: 'translate(-50%, -50%)',
// 					border: '1px solid #ddd',
// 					borderRadius: '8px',
// 					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// 					padding: '20px',
// 					zIndex: 1000,
// 				}}
// 			>
// 				<h3 className='text-black dark:!text-white-whites'>{content}</h3>
// 				<button
// 					className='btn-1 text-black dark:!text-white-whites'
// 					onClick={onClose}
// 					style={{ marginTop: '10px' }}
// 				>
// 					Close
// 				</button>
// 			</div>

// 			{/* Overlay */}
// 			<div
// 				onClick={onClose}
// 				style={{
// 					position: 'fixed',
// 					top: 0,
// 					left: 0,
// 					width: '100%',
// 					height: '100%',
// 					backgroundColor: 'rgba(0, 0, 0, 0.5)',
// 					zIndex: 999,
// 				}}
// 			></div>
// 		</>
// 	);
// };

// export default Popup;
import React from 'react';

const Popup = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Popup Element */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-whites dark:bg-black border dark:text-white-whites border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-5 z-50"
      >
        <h3 className="text-black dark:text-white-whites">{content}</h3>
        <button
          className="btn-1 mt-3"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      ></div>
    </>
  );
};

export default Popup;
