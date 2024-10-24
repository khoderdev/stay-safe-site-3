// import PropTypes from 'prop-types';
// import { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     // Initialize theme from localStorage or default to 'light'
//     return localStorage.getItem('theme') || 'light';
//   });

//   // Apply the theme to the body or root element
//   useEffect(() => {
//     // Add or remove the class from document.body or another root element
//     document.body.className = theme; // Assuming you have corresponding CSS classes for 'light' and 'dark'

//     // Save the current theme to localStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Add propTypes validation
// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// ThemeContext.jsx
import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
