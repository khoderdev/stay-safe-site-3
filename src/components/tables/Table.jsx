// import React, { useState } from 'react';

// const Table = ({ columns, data = [], title, onSearch, onAddItem }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   // Ensure 'data' is an array before calling slice
//   const paginatedData = data?.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   ) || [];

//   const totalPages = Math.ceil((data?.length || 0) / rowsPerPage);

//   const handlePagination = (direction) => {
//     if (direction === 'prev' && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     } else if (direction === 'next' && currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const getNestedValue = (field, obj) => {
//     return field.split('.').reduce((o, key) => (o ? o[key] : null), obj);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
//       <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
//         <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
//           <div className="flex justify-between items-center p-4">
//             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//               {title || 'Table'}
//             </h2>
//             <button
//               onClick={onAddItem}
//               className="btn-1"
//             >
//               Add Item
//             </button>
//           </div>

//           <div className="flex items-center justify-between p-4 border-t dark:border-gray-700">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//             />
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   {columns.map((column) => (
//                     <th key={column.field} className="p-4">
//                       {column.header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedData.length > 0 ? (
//                   paginatedData.map((row, rowIndex) => (
//                     <tr key={rowIndex} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
//                       {columns.map((column) => (
//                         <td key={column.field} className="px-4 py-3">
//                           {getNestedValue(column.field, row)} {/* Use the helper function */}
//                         </td>
//                       ))}
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={columns.length} className="text-center p-4">
//                       No data found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <nav className="flex justify-between items-center p-4">
//             <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
//               Showing {currentPage} of {totalPages} pages
//             </span>
//             <div className="flex space-x-3">
//               <button
//                 onClick={() => handlePagination('prev')}
//                 disabled={currentPage === 1}
//                 className="text-sm text-gray-500 bg-white border border-gray-300 rounded-lg py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={() => handlePagination('next')}
//                 disabled={currentPage === totalPages}
//                 className="text-sm text-gray-500 bg-white border border-gray-300 rounded-lg py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
//               >
//                 Next
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Table;
import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary

const Table = ({ columns, data = [], title, onSearch, onAddItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null); // To store the item to delete
  const rowsPerPage = 10;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

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

  const openModal = (item) => {
    setItemToDelete(item); // Set the item to delete
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null); // Reset the item
  };

  const confirmDelete = () => {
    // Handle the delete logic here
    console.log(`Deleting item: ${itemToDelete}`);
    closeModal(); // Close the modal after deletion
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title || 'Table'}
            </h2>
            <button onClick={onAddItem} className="btn-1">
              Add Item
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                          {getNestedValue(column.field, row)}
                        </td>
                      ))}
                      <td className="px-4 py-3">
                        <button onClick={() => openModal(row)} className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length + 1} className="text-center p-4">
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

      {/* Integrate the Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} />
    </section>
  );
};

export default Table;
