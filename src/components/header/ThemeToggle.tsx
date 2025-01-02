// import React from "react";
// import { useTheme } from "../../hooks/useTheme";
// import { useDarkMode } from "../../hooks/DarkModeContext";
// import { FaEnvira } from "react-icons/fa6";
// import { GrSun } from "react-icons/gr";

// export default function ThemeToggle() {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();
//   const { toggleTheme } = useTheme();

//   const handleToggle = () => {
//     toggleDarkMode();
//     toggleTheme();
//   };

//   return (
//     <div className="flex items-center">
//       <input
//         type="checkbox"
//         name="light-switch"
//         id="light-switch"
//         className="hidden"
//         checked={isDarkMode}
//         onChange={handleToggle}
//       />
//       <label
//         className="flex items-center cursor-pointer relative w-12 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out"
//         htmlFor="light-switch"
//       >
//         <span
//           className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
//             isDarkMode ? "translate-x-full bg-[#b0e1ec]" : ""
//           }`}
//         />
//         {isDarkMode ? (
//           <FaEnvira className="text-[#c2c36b] absolute left-1 top-1" size={18} />
//         ) : (
//           <GrSun className="text-white-bg absolute left-1 top-1" size={18} />
//         )}
//       </label>
//       <span className="ml-2 text-sm">
//         {isDarkMode ? "Eco Mode" : "Eco Mode"}
//       </span>
//     </div>
//   );
// }

import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useDarkMode } from "../../hooks/DarkModeContext";
import { FaEnvira } from "react-icons/fa6";
import { GrSun } from "react-icons/gr";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleDarkMode();
    toggleTheme();
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="hidden"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label
        className="flex items-center cursor-pointer relative w-12 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out"
        htmlFor="light-switch"
      >
        <span
          className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
            isDarkMode ? "translate-x-full bg-[#b0e1ec]" : ""
          }`}
        />
        {isDarkMode ? (
          <FaEnvira
            className="text-[#c2c36b] absolute left-1 top-1"
            size={18}
          />
        ) : (
          <FaEnvira
            className="text-gray-300 absolute left-1 top-1"
            size={18}
          />
        )}
      </label>
      <span
        className={`ml-2 text-sm ${
          isDarkMode ? "text-[#c2c36b] font-bold" : "text-black"
        }`}
      >
        Eco Mode
      </span>
    </div>
  );
}
