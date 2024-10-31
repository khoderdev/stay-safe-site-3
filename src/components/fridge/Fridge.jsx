// import FridgeBtns from './fridge-btn';
// import FridgeImage  from './FridgeImage'

// function Fridge() {
//   return (
//     <>
//       <h2 className="text-center">Optimal Fridge Storage & Shelf Life of Common Food Items</h2>
//       <div className="relative flex h-full p-4 md:p-24 justify-center items-center bg-pink-200">
//         <div className="w-full flex justify-center">
//           <FridgeImage />
//         </div>

//         {/* Positioned Grid on Top of the FridgeImage */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] pl-28">
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center border-2 border-green-500 w-[85%]">

//             {/* Top Shelf */}
//             <div className="col-span-2 h-28 border">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-24 border">1</div>
//                 <div className="h-24 border">2</div>
//                 <div className="h-24 border">3</div>
//                 <div className="h-24 border">4</div>
//               </div>
//             </div>

//             {/*  Door - Shelf 1 */}
//             <div className="col-start-3 h-28 border border-red-500">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-24 border">1</div>
//                 <div className="h-24 border">2</div>
//                 <div className="h-24 border">3</div>
//                 <div className="h-24 border">4</div>
//               </div>
//             </div>

//             {/* Middle Shelf */}
//             <div className="col-span-2 h-48 row-start-2 border border-red-500">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-48 border">1</div>
//                 <div className="h-48 border">2</div>
//                 <div className="h-48 border">3</div>
//                 <div className="h-48 border">4</div>
//               </div>
//             </div>

//             {/* Door - Shelf 2 */}
//             <div className="col-start-3 h-28 border border-red-500">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-24 border">1</div>
//                 <div className="h-24 border">2</div>
//                 <div className="h-24 border">3</div>
//                 <div className="h-24 border">4</div>
//               </div>
//             </div>

//             {/* Bottom Shelf  */}
//             <div className="col-span-2 h-24 row-start-3 border border-red-500">
//               <div className="grid grid-cols-4  items-center">
//                 <div className="h-24 border">1</div>
//                 <div className="h-24 border">2</div>
//                 <div className="h-24 border">3</div>
//                 <div className="h-24 border">4</div>
//               </div>
//             </div>

//             {/* Door - Shelf 3 */}
//             <div className="col-start-3 h-28 row-start-3 border border-red-500">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-24 border">1</div>
//                 <div className="h-24 border">2</div>
//                 <div className="h-24 border">3</div>
//                 <div className="h-24 border">4</div>
//               </div>
//             </div>

//             {/* Drawer 1 */}
//             <div className="col-span-1 h-28 border border-red-500">
//             </div>
//             {/* Drawer 1 */}
//             <div className="col-span-1 h-28 border border-red-500">
//             </div>

//             {/* Door - Shelf 4 */}
//             <div className="col-start-3 h-28 border border-red-500">
//               <div className="grid grid-cols-4 items-center">
//                 <div className="h-26 border">1</div>
//                 <div className="h-26 border">2</div>
//                 <div className="h-26 border">3</div>
//                 <div className="h-26 border">4</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fridge Buttons Positioned */}
//         <div className="absolute w-full flex justify-center z-10 xs:bottom-24 sm:bottom-16 md:bottom-24 lg:bottom-[6.1rem] mr-40 xs:mr-16 sm:mr-28 md:mr-40">
//           <div className="w-fit">
//             <FridgeBtns />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Fridge;


// // // /////////////////////////////////////////////////////////////
// // // /////////////////////////////////////////////////////////////
// // // /////////////////////////////////////////////////////////////



import { useState } from 'react';
import FridgeBtns from './fridge-btn';
import FridgeImage from './FridgeImage';
import FridgeModal from './FridgeModal';
import { fridgeSections } from './FridgeData';
import DotIndicator from './DotIndicator'; // Import the new component

function Fridge() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("Food Storage");

  const handleSectionClick = (sectionName) => {
    setSelectedSection(fridgeSections[sectionName]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSection(null);
  };

  return (
    <>
      <h2 className="text-center">Optimal Fridge Storage & Shelf Life of Common Food Items</h2>
      <div className="relative flex h-full p-4 md:p-24 justify-center items-center bg-pink-200">
        <div className="w-full flex justify-center">
          <FridgeImage />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] pl-28">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center  w-[85%]">
            <div className="col-span-2 h-28 flex items-center justify-center" onClick={() => handleSectionClick("Top Shelf")}>
              <DotIndicator shelfLife="medium" /> {/* Add dot for each section */}
            </div>
            <div className="col-start-3 h-28 flex items-center justify-center" onClick={() => handleSectionClick("Fridge Door")}>
              <DotIndicator shelfLife="short" />
            </div>
            <div className="col-span-2 h-48 row-start-2 flex items-center justify-center" onClick={() => handleSectionClick("Middle Shelf")}>
              <DotIndicator shelfLife="medium" />
            </div>
            <div className="col-start-3 h-28 flex items-center justify-center" onClick={() => handleSectionClick("Fridge Door")}>
              <DotIndicator shelfLife="short" />
            </div>
            <div className="col-span-2 h-24 row-start-3 flex items-center justify-center" onClick={() => handleSectionClick("Bottom Shelf")}>
              <DotIndicator shelfLife="long" />
            </div>
            <div className="col-start-3 h-28 row-start-3 flex items-center justify-center" onClick={() => handleSectionClick("Fridge Door")}>
              <DotIndicator shelfLife="short" />
            </div>
            <div className="col-span-1 h-28 flex items-center justify-center" onClick={() => handleSectionClick("High Humidity Drawer")}>
              <DotIndicator shelfLife="long" />
            </div>
            <div className="col-span-1 h-28 flex items-center justify-center" onClick={() => handleSectionClick("Low Humidity Drawer")}>
              <DotIndicator shelfLife="medium" />
            </div>
            <div className="col-start-3 h-28 flex items-center justify-center" onClick={() => handleSectionClick("Fridge Door")}>
              <DotIndicator shelfLife="short" />
            </div>
          </div>
        </div>

        <div className="absolute w-full flex justify-center z-10 xs:bottom-24 sm:bottom-16 md:bottom-24 lg:bottom-[6.1rem] mr-40 xs:mr-16 sm:mr-28 md:mr-40">
          <FridgeBtns view={view} setView={setView} />
        </div>
      </div>

      <FridgeModal isOpen={isModalOpen} section={selectedSection} view={view} onClose={handleCloseModal} />
    </>
  );
}

export default Fridge;