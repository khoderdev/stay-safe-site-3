import React from 'react';

const Popup = ({ isVisible, onClose, content }) => {
	if (!isVisible) return null;

	return (
		<>
			{/* Popup Element */}
			<div className='fixed w-72 h-auto sm:w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-whites dark:bg-black border dark:text-white-whites border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-5 z-50'>
				<p className='text-black dark:text-white-whites'>{content}</p>
				<button className='btn-1 mt-3' onClick={onClose}>
					Ok
				</button>
			</div>

			{/* Overlay */}
			<div onClick={onClose} className='fixed inset-0 z-40'></div>
		</>
	);
};

export default Popup;
