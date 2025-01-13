import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

/**
 * The DarkModeProvider component provides the DarkModeContext to the
 * application. It also handles toggling the dark mode state and saving
 * the state to local storage.
 *
 * @param {React.ReactNode} children The children elements to render.
 * @returns {React.ReactNode} The DarkModeProvider component.
 */

/**
 * The DarkModeProvider component provides the DarkModeContext to the
 * application. It also handles toggling the dark mode state and saving
 * the state to local storage.
 *
 * @param {React.ReactNode} children The children elements to render.
 * @returns {React.ReactNode} The DarkModeProvider component.
 */

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('isDarkMode');
		return savedMode === null ? true : savedMode === 'true';
	});

	const toggleDarkMode = () => {
		/**
		 * Toggles the dark mode state and saves the state to local storage.
		 *
		 * @returns {void}
		 */
		setIsDarkMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		localStorage.setItem('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

/**
 * Returns the current dark mode state and a function to toggle it.
 *
 * @returns {{ isDarkMode: boolean, toggleDarkMode: () => void }}
 */
export const useDarkMode = () => {
	return useContext(DarkModeContext);
};
