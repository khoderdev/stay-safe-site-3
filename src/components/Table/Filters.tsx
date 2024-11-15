// import React, { useState, useMemo } from "react";
// import { debounce } from "lodash";
// import { FoodSafety } from "./columns";
// import Modal from "./FormModal";
// export const AlphabetFilter = ({
//   onFilter,
//   onSearch,
// }: {
//   onFilter: (letterOrSearch: string) => void;
//   onSearch: (searchTerm: string) => void;
// }) => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//   const debouncedSearch = useMemo(() => {
//     return debounce((term: string) => {
//       onSearch(term);
//     }, 300);
//   }, [onSearch]);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const term = event.target.value;
//     setSearchTerm(term);
//     debouncedSearch(term);
//   };


//   const handleLetterClick = (letter: string) => {
//     onFilter(letter);
//   };

//   return (
//     <div className="mb-4">
//       <div className='flex justify-between mb-3'>
//         <input
//           type="search"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Search..."
//           className='!w-40 md:!w-64 !p-2 border border-gray-300 dark:border-black
//             rounded-md !bg-white-fg dark:!bg-black text-black dark:text-white-bg
//             focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
//             transition duration-300 ease-in-out shadow-sm hover:shadow-md'
//         />
//       </div>
//       <div className="w-full flex flex-wrap border justify-center lg:justify-start">
//         {letters.map((letter) => (
//           <button
//             key={letter}
//             onClick={() => handleLetterClick(letter)}
//             className="m-1 p-1 px-3 border rounded-full border-gray-300 dark:border-black !bg-white-fg dark:!bg-black text-black dark:text-white-bg
//   focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
//   transition duration-300 ease-in-out shadow-sm hover:shadow-md"
//           >
//             {letter}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useMemo } from "react";
import { debounce } from "lodash";
import Modal from "./FormModal";

export const AlphabetFilter = ({
  onFilter,
  onSearch,
  onAddNew, // New prop to handle adding new items
}: {
  onFilter: (letterOrSearch: string) => void;
  onSearch: (searchTerm: string) => void;
  onAddNew: () => void; // New prop for add new functionality
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const debouncedSearch = useMemo(() => {
    return debounce((term: string) => {
      onSearch(term);
    }, 300);
  }, [onSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleLetterClick = (letter: string) => {
    onFilter(letter);
  };

  return (
    <div className="mb-4">
      <div className='flex justify-between mb-3'>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className='!w-40 md:!w-64 !p-2 border border-gray-300 dark:border-black
            rounded-md !bg-white-fg dark:!bg-black text-black dark:text-white-bg
            focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
            transition duration-300 ease-in-out shadow-sm hover:shadow-md'
        />
        <button
          onClick={onAddNew} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center lg:justify-start">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="m-1 p-1 px-3 border rounded-full border-gray-300 dark:border-black !bg-white-fg dark:!bg-black text-black dark:text-white-bg
  focus:outline-none focus:ring-2 focus:ring-blue-500 select-none
  transition duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};
