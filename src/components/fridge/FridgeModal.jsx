// const FridgeModal = ({ isOpen, section, view, onClose }) => {
//   if (!isOpen || !section) return null;

//   const { name, foodStorage, shelfLife } = section;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
//       <div className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-auto">
//         <h3 className="text-xl font-bold text-center mb-4">{name}</h3>
//         {view === "Food Storage" && <p> {foodStorage}</p>}
//         {view === "Shelf Life" && (
//           <div>
//             <strong>Shelf Life:</strong>
//             <ul className="list-disc pl-5 text-center">
//               {typeof shelfLife === "object"
//                 ? Object.entries(shelfLife).map(([item, time]) => (
//                   <li key={item}>{item}: {time}</li>
//                 ))
//                 : <li>{shelfLife}</li>}
//             </ul>
//           </div>
//         )}
//         <button className="text-center place-self-center self-center border py-2 px-4 rounded-md text-gray-600" onClick={onClose}>Ok</button>
//       </div>

//     </div>
//   );
// };

// export default FridgeModal;

const FridgeModal = ({ isOpen, section, view, onClose }) => {
  if (!isOpen || !section) return null;

  const { name, foodStorage, shelfLife } = section;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white-bg p-6 rounded-md shadow-md w-full max-w-md mx-auto">
        <h3 className="text-xl font-bold text-center mb-4">{name}</h3>
        
        {view === "Food Storage" && (
          <p style={{ whiteSpace: 'pre-line' }}>{foodStorage}</p>
        )}
        
        {view === "Shelf Life" && (
          <div>
            <strong>Shelf Life:</strong>
            <ul className="list-disc pl-5 text-center">
              {typeof shelfLife === "object"
                ? Object.entries(shelfLife).map(([item, time]) => (
                    <li key={item}>{item}: {time}</li>
                  ))
                : <li>{shelfLife}</li>}
            </ul>
          </div>
        )}
        
        <button
          className="text-center place-self-center self-center border py-2 px-4 rounded-md text-gray-600"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default FridgeModal;
