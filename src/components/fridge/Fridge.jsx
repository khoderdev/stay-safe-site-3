import { useState } from 'react';
import FridgeBtns from './fridge-btn';
import FridgeImage from './FridgeImage';
import FridgeModal from './FridgeModal';
import { fridgeSections } from './FridgeData';
import DotIndicator from './DotIndicator';

function Fridge() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("Food Storage");

  const handleSectionClick = (sectionName, itemName = null) => {
    const section = { ...fridgeSections[sectionName] };
    if (itemName && typeof section.shelfLife === 'object') {
      section.selectedItem = { name: itemName, shelfLife: section.shelfLife[itemName] };
    }
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSection(null);
  };

  return (
    <>
      <h2 className="text-center dark:text-white-bg pt-10 mb-[-3rem]">
        Optimal Fridge Storage & Shelf Life of Common Food Items
      </h2>
      <div className="relative flex h-full p-4 md:p-24 justify-center items-center bg-pink-200">
        {/* <div className="absolute w-full flex justify-center z-10 xs:top-2 sm:top-1 md:top-[4.8rem] lg:top-[] lg:mr-[12rem] mr-40 xs:mr-16 sm:mr-36 md:mr-32">
          <FridgeBtns view={view} setView={setView} />
        </div> */}
        <div className="w-full flex justify-center">
          <img src='/public/fridge/FRIDGE.svg' alt='fridge' className='w-[50%]' />
        </div>

        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-[55%] md:pl-28">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center w-full md:w-[85%] ">
            <div className="col-span-2 md:h-28 flex items-end md:justify-evenly mr-6 md:px-16"
              onClick={() => handleSectionClick("Top Shelf")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className='md:ml-48 md:mb-12' />}
            </div>

            <div className="col-start-3 md:h-28 flex items-center mr-12 justify-center"
              onClick={() => handleSectionClick("Fridge Door", "Pickles")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className="mb-10" />}
            </div>

            <div className="col-span-2 md:h-48 flex items-end md:justify-evenly mr-6 md:px-16"
              onClick={() => handleSectionClick("Middle Shelf")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className="md:mb-20" />}
            </div>

            <div className="col-start-3 md:h-28 flex items-center mr-12 justify-start"
              onClick={() => handleSectionClick("Fridge Door", "Ketchup, cocktails, or chili sauce")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" />}
            </div>

            <div className="col-span-2 md:h-24 row-start-3 flex items-end justify-around pl-6 pb-3 pr-0 gap-x-1"
              onClick={() => handleSectionClick("Bottom Shelf")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className="mb-9" />}
            </div>

            <div className="col-start-3 h-32 md:h-28 row-start-3 flex items-end justify-end pr-0 gap-x-1 mr-16"
              onClick={() => handleSectionClick("Fridge Door", "Mustard")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" />}
            </div>

            <div className="col-span-1 h-28 flex items-center justify-center"
              onClick={() => handleSectionClick("High Humidity Drawer")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className='ml-44 mb-24' />}
            </div>

            <div className="col-span-1 h-28 flex items-center justify-center"
              onClick={() => handleSectionClick("Low Humidity Drawer")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" className='ml-24 mb-24' />}
            </div>

            <div className="col-start-3 h-28 flex items-center justify-center"
              onClick={() => handleSectionClick("Fridge Door", "Fruit juice")}>
              {view === "Food Storage" && <DotIndicator shelfLife="short" />}
            </div>
          </div>
        </div> */}
      </div>

      <FridgeModal
        isOpen={isModalOpen}
        section={selectedSection}
        view={view}
        onClose={handleCloseModal}
        hideSectionName={view === "ShelfLife"}
      />
    </>
  );
}

export default Fridge;
