import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
	return new Promise((resolve) => {
		// The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
		imagesLoaded(
			document.querySelectorAll(selector),
			{ background: true },
			resolve
		);
	});
};

// Exporting utility functions for use in other modules.
export { preloadImages };

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, '0');
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const year = d.getFullYear();
	return `${day}-${month}-${year}`;
};
export const truncateText = (text: string, wordLimit: number = 10) => {
	// Check if text is a valid string before splitting
	if (typeof text !== 'string') {
		return text || ''; // Return empty string if it's undefined or null
	}

	const words = text.split(' ');
	if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(' ') + '...';
	}
	return text;
};

// Helper to get CSS classes for status badges
export const getStatusClass = (status: string) => {
	switch (status) {
		case 'Done':
			return 'bg-green-500 text-white';
		case 'In-Progress':
			return 'bg-blue-500 text-white';
		case 'On-Hold':
			return 'bg-yellow-500 text-white';
		case 'Missing':
			return 'bg-red-500 text-white';
		default:
			return 'bg-gray-500 text-white';
	}
};
