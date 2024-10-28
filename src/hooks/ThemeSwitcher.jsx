// import { useState, useEffect } from 'react';

// function ThemeSwitcher() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Apply the dark or light mode class to the body element based on the state
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   // Function to toggle between black and white modes
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white-fg dark:bg-black transition-all duration-500">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-black dark:text-white-bg mb-6">
//           {darkMode ? 'Dark Mode' : 'Light Mode'}
//         </h1>
//         <button
//           onClick={toggleTheme}
//           className="px-6 py-3 text-lg font-semibold rounded-md text-white bg-black dark:bg-white-fg dark:text-black transition-colors duration-300"
//         >
//           {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ThemeSwitcher;
