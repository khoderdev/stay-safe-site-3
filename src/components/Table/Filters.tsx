import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

export const AlphabetFilter = ({
  onFilter,
  onSearch,
  onAddNew,
}: {
  onFilter: (letterOrSearch: string) => void;
  onSearch: (searchTerm: string) => void;
  onAddNew: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const debouncedSearch = useMemo(() => debounce(onSearch, 0), [onSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter((prev) => (prev === letter ? null : letter));
    onFilter(letter);
  };

  return (
    <div className="mb-2 sm:mb-4 mt-2 sm:mt-0 px-">
      <div className="flex justify-between mb-2 sm:mb-3">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="!w-40 md:!w-64 !p-2 border border-gray-300 dark:border-black
          rounded-md !bg-white-fg dark:!bg-black text-black dark:text-white-bg
          focus:outline-none focus:ring focus:ring-blue-500 select-none
          transition duration-300 ease-in-out shadow-sm hover:shadow-md"
        />
        <button
          onClick={onAddNew}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </div>
      <div className="sm:ml-[-4px] p-0">
        <div className="flex flex-wrap justify-center lg:justify-start p-0">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`m-1 sm:m-1 sm:p-1 sm:py-3 sm:w-[28px] sm:h-[28px] flex items-center justify-center text-[1rem] 
        sm:border rounded-full select-none 
         ${
           selectedLetter === letter
             ? "sm:bg-blue-500 text-white-bg2 sm:ring sm:border-blue-500 sm:dark:border-blue-500"
             : "sm:dark:bg-black text-black dark:text-white-bg2 sm:hover:border-blue-500 sm:dark:hover:border-blue-500"
         } 
                  sm:hover:ring sm:ring-blue-500  dark:text-blue-500 sm:dark:text-white-bg sm:hover:dark:text-white-bg transition duration-300`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
