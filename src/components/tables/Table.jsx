// import React from 'react'

// function Table() {
//   return (
//     <>
//       {/* Start block */}
//       <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
//         <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
//           <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
//             <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
//               <div className="w-full md:w-1/2">
//                 <form className="flex items-center">
//                   <label htmlFor="simple-search" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative w-full">
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                       <svg
//                         aria-hidden="true"
//                         className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                         />
//                       </svg>
//                     </div>
//                     <input
//                       type="text"
//                       id="simple-search"
//                       placeholder="Search for products"
//                       required=""
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     />
//                   </div>
//                 </form>
//               </div>
//               <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
//                 <button
//                   type="button"
//                   id="createProductButton"
//                   data-modal-toggle="createProductModal"
//                   className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
//                 >
//                   <svg
//                     className="h-3.5 w-3.5 mr-1.5 -ml-1"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       clipRule="evenodd"
//                       fillRule="evenodd"
//                       d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                     />
//                   </svg>
//                   Add product
//                 </button>

//                 <div
//                   id="filterDropdown"
//                   className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0"
//                 >
//                   <div className="flex items-center justify-between pt-2">

//                     <div className="flex items-center space-x-3">
//                       <a
//                         href="#"
//                         className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
//                       >
//                         Save view
//                       </a>
//                       <a
//                         href="#"
//                         className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
//                       >
//                         Clear all
//                       </a>
//                     </div>
//                   </div>
//                   <div className="pt-3 pb-2">
//                     <label htmlFor="input-group-search" className="sr-only">
//                       Search
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                         <svg
//                           className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                           aria-hidden="true"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <input
//                         type="text"
//                         id="input-group-search"
//                         className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                         placeholder="Search keywords..."
//                       />
//                     </div>
//                   </div>

//                   <div
//                     id="accordion-flush"
//                     data-accordion="collapse"
//                     data-active-classes="text-black dark:text-white"
//                     data-inactive-classes="text-gray-500 dark:text-gray-400"
//                   >

//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Table Header */}
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                     <th scope="col" className="p-4">
//                       <div className="flex items-center">
//                         <input
//                           id="checkbox-all"
//                           type="checkbox"
//                           className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label htmlFor="checkbox-all" className="sr-only">
//                           checkbox
//                         </label>
//                       </div>
//                     </th>
//                     <th scope="col" className="p-4">
//                       Username
//                     </th>
//                     <th scope="col" className="p-4">
//                       Email
//                     </th>
//                     <th scope="col" className="p-4">
//                       Role
//                     </th>
//                     <th scope="col" className="p-4">
//                       Status
//                     </th>

//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
//                     <td className="p-4 w-4">
//                       <div className="flex items-center">
//                         <input
//                           id="checkbox-table-search-1"
//                           type="checkbox"
//                           className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                         />
//                         <label
//                           htmlFor="checkbox-table-search-1"
//                           className="sr-only"
//                         >
//                           checkbox
//                         </label>
//                       </div>
//                     </td>
//                     <th
//                       scope="row"
//                       className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                     >
//                     </th>

//                     <td className="px-4 py-3">
//                     </td>

//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Table Nav */}
//             <nav
//               className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
//               aria-label="Table navigation"
//             >
//               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
//                 Showing
//                 <span className="font-semibold text-gray-900 dark:text-white">
//                   1-10
//                 </span>
//                 of
//                 <span className="font-semibold text-gray-900 dark:text-white">
//                   1000
//                 </span>
//               </span>

//               <ul className="inline-flex items-stretch -space-x-px">
//                 <li>
//                   <a
//                     href="#"
//                     className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     <span className="sr-only">Previous</span>
//                     <svg
//                       className="w-5 h-5"
//                       aria-hidden="true"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     1
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   >
//                     2
//                   </a>
//                 </li>


//               </ul>
//             </nav>
//           </div>
//         </div>
//       </section>
//       {/* End block */}
//     </>
//   )
// }
// export default Table


import React, { useState } from 'react';

const Table = ({ columns, data = [], title, onSearch, onAddItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  // Ensure 'data' is an array before calling slice
  const paginatedData = data?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  ) || [];

  const totalPages = Math.ceil((data?.length || 0) / rowsPerPage);

  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getNestedValue = (field, obj) => {
    return field.split('.').reduce((o, key) => (o ? o[key] : null), obj);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title || 'Table'}
            </h2>
            <button
              onClick={onAddItem}
              className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Add Item
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columns.map((column) => (
                    <th key={column.field} className="p-4">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                      {columns.map((column) => (
                        <td key={column.field} className="px-4 py-3">
                          {getNestedValue(column.field, row)} {/* Use the helper function */}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center p-4">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <nav className="flex justify-between items-center p-4">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing {currentPage} of {totalPages} pages
            </span>
            <div className="flex space-x-3">
              <button
                onClick={() => handlePagination('prev')}
                disabled={currentPage === 1}
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded-lg py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              >
                Previous
              </button>
              <button
                onClick={() => handlePagination('next')}
                disabled={currentPage === totalPages}
                className="text-sm text-gray-500 bg-white border border-gray-300 rounded-lg py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;
