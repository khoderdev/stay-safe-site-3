
// // import { motion, AnimatePresence } from 'framer-motion';

// // const FridgeModal = ({ isVisible, onClose, description }) => (
// //   <AnimatePresence>
// //     {isVisible && (
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         exit={{ opacity: 0, scale: 0.8 }}
// //         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
// //         onClick={onClose}
// //       >
// //         <motion.div
// //           className="bg-white-bg dark:bg-black rounded-lg shadow-lg p-6 max-w-sm w-full border mx-4"
// //           onClick={(e) => e.stopPropagation()} 
// //           initial={{ y: 50 }}
// //           animate={{ y: 0 }}
// //           exit={{ y: 50 }}
// //         >
// //           <h2 className="text-xl font-semibold mb-4">Description</h2>
// //           <p>{description}</p>
// //           <button
// //             onClick={onClose}
// //             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
// //           >
// //             Ok
// //           </button>
// //         </motion.div>
// //       </motion.div>
// //     )}
// //   </AnimatePresence>
// // );
// // export default FridgeModal;


// // const FridgeModal = ({ isOpen, section, view, onClose }) => {
// //   if (!isOpen || !section) return null;

// //   const { name, foodStorage, shelfLife } = section;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
// //       <div className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-auto">
// //         <h3 className="text-xl font-bold text-center mb-4">{name}</h3>
// //         {view === "Food Storage" && <p> {foodStorage}</p>}
// //         {view === "Shelf Life" && (
// //           <div>
// //             <strong>Shelf Life:</strong>
// //             <ul className="list-disc pl-5 text-center">
// //               {typeof shelfLife === "object"
// //                 ? Object.entries(shelfLife).map(([item, time]) => (
// //                   <li key={item}>{item}: {time}</li>
// //                 ))
// //                 : <li>{shelfLife}</li>}
// //             </ul>
// //           </div>
// //         )}
// //         <button className="text-center place-self-center self-center border py-2 px-4 rounded-md text-gray-600" onClick={onClose}>Ok</button>
// //       </div>

// //     </div>
// //   );
// // };

// // export default FridgeModal;




// // const FridgeModal = ({ isOpen, section, view, onClose }) => {
// //   if (!isOpen || !section) return null;

// //   const { name, foodStorage, shelfLife } = section;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
// //       <div className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-3">
// //         <h3 className="text-xl font-bold text-center mb-4">{name}</h3>

// //         {/* Display content based on view */}
// //         {view === "Food Storage" && <p>{foodStorage}</p>}

// //         {view === "Shelf Life" && (
// //           <div>
// //             <strong>Shelf Life:</strong>
// //             <ul className="list-disc pl-5 text-left">
// //               {/* Check if shelfLife is an object or string */}
// //               {typeof shelfLife === "object" ? (
// //                 Object.entries(shelfLife).map(([item, time]) => (
// //                   <li key={item}>{item}: {time}</li>
// //                 ))
// //               ) : (
// //                 <li>{shelfLife}</li>
// //               )}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Close button */}
// //         <button
// //           className="text-center border py-2 px-4 rounded-md text-gray-600 mt-4"
// //           onClick={onClose}
// //         >
// //           Ok
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FridgeModal;
// // import { motion, AnimatePresence } from 'framer-motion';

// // const FridgeModal = ({ isOpen, section, view, onClose }) => {
// //   if (!section) return null;

// //   const { name, foodStorage, shelfLife } = section;

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 0.1 }}
// //         >
// //           <motion.div
// //             className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-3"
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             exit={{ scale: 0.8, opacity: 0 }}
// //             transition={{ duration: 0.1 }}
// //           >
// //             <h3 className="text-xl font-bold text-center mb-4">{name}</h3>

// //             {/* Display content based on view */}
// //             {view === "Food Storage" && <p>{foodStorage}</p>}

// //             {view === "Shelf Life" && (
// //               <div>
// //                 <strong>Shelf Life:</strong>
// //                 <ul className="list-disc pl-5 text-left">
// //                   {/* Check if shelfLife is an object or string */}
// //                   {typeof shelfLife === "object" ? (
// //                     Object.entries(shelfLife).map(([item, time]) => (
// //                       <li key={item}>
// //                         {item}: {time}
// //                       </li>
// //                     ))
// //                   ) : (
// //                     <li>{shelfLife}</li>
// //                   )}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Close button */}
// //             <button
// //               className="text-center border py-2 px-4 rounded-md text-gray-600 mt-4"
// //               onClick={onClose}
// //             >
// //               Ok
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default FridgeModal;



// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////
// // ////////////////////////////////////////////


// import { motion, AnimatePresence } from 'framer-motion';

// const FridgeModal = ({ isOpen, section, view, onClose }) => {
//   if (!section) return null;

//   const { foodStorage, shelfLife, selectedItem } = section;

//   // Determine modal content based on the view
//   let modalContent;

//   if (view === "Food Storage") {
//     modalContent = (
//       <p>{foodStorage}</p>
//     );
//   } else if (view === "Shelf Life" && selectedItem) {
//     modalContent = (
//       <div>
//         <h2 className='text-center'>Shelf Life</h2>
//         <strong className='text-lg'>Items:</strong>
//         <ul className="list-disc pl-5 text-left">
//           {/* Check if shelfLife is an object or string */}
//           {typeof selectedItem.shelfLife === "object" ? (
//             Object.entries(selectedItem.shelfLife).map(([item]) => (
//               <li key={item}>
//                 {item}
//               </li>
//             ))
//           ) : (
//             <li>{selectedItem.shelfLife}</li>
//           )}
//         </ul>
//       </div>
//     );
//   } else {
//     modalContent = <p>No information available.</p>;
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.1 }}
//         >
//           <motion.div
//             className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-3"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ duration: 0.1 }}
//           >
//             {/* Display content items instead of modalTitle */}
//             {modalContent}

//             {/* Close button */}
//             <button
//               className="text-center border py-2 px-4 rounded-md text-gray-600 mt-4"
//               onClick={onClose}
//             >
//               Ok
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FridgeModal;
import { motion, AnimatePresence } from 'framer-motion';

const FridgeModal = ({ isOpen, section, view, onClose }) => {
  if (!section) return null;

  const { foodStorage, items } = section;

  let modalContent;

  // if (view === "Food Storage") {
  //   modalContent = (
  //     <div>
  //       <h2 className='text-center'>Food Storage</h2>
  //       <p>{foodStorage}</p>
  //     </div>
  //   );
  if (view === "Food Storage") {
    modalContent = (
      <div>
        <h2 className='text-center'>Food Storage</h2>
        <h3>{foodStorage}</h3>
        <h4 className='mt-2'>Items:</h4>
        <ul className="list-disc pl-5 text-left">
          {items.map((item) => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (view === "Shelf Life") {
    modalContent = (
      <div>
        <h2 className='text-center'>Shelf Life</h2>
        <strong className='text-lg'>Items:</strong>
        <ul className="list-disc pl-5 text-left">
          {items.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>: {item.shelfLife}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    modalContent = <p>No information available.</p>;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Display content items instead of modalTitle */}
            {modalContent}

            {/* Close button */}
            <button
              className="text-center border py-2 px-4 rounded-md text-gray-600 mt-4"
              onClick={onClose}
            >
              Ok
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FridgeModal;