import { useState } from 'react';
import FridgeBtns from './fridge-btn';
import FridgeModal from './FridgeModal';
import { fridgeSections } from './FridgeData';
import DotIndicator from './DotIndicator';

import {
  Butter,
  Cheese,
  Chicken,
  PotatoChicken,
  Fish,
  Eggs,
  Fruits,
  Vegetables,
  Pickles,
  Ketchup,
  Sauce,
  Soya,
  Juice,
  Water,
  SoftDrinks,
  Milk,
  Meat,
  ChickenMeat,
  Meat2
}
  from './fridgeItems'
import { Link } from 'react-router-dom';

function Fridge() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("Food Storage");

  const handleSectionClick = ( ) => {
    // const section = { ...fridgeSections[sectionName] };
    // if (itemName && typeof section.shelfLife === 'object') {
    //   section.selectedItem = { name: itemName, shelfLife: section.shelfLife[itemName] };
    // }
    setSelectedSection("dsg");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSection(null);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <h2 className="text-center dark:text-white-bg pt-10 mb-20">
        Optimal Fridge Storage & Shelf Life of Common Food Items
      </h2> */}

      <div className={`relative flex w-fit h-full justify-center items-center
        border-2
        border-blue-400
        sm:border-purple-400
        md:border-cyan-400
        lg:border-red-300-400
        xl:border-yellow-300
        2xl:border-orange-500-400
        3xl:border-red-700
        `}>
        <div className="flex justify-center items-center max-w-2xl md:max-w-3xl xl:max-w-4xl">
          <div className='w-96  h-96'></div>
          <img loading="lazy" src='/fridge/f2.png' alt='fridge' className='w-full ' />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-5 sm:p-10 md:p-10 h-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full p- pt-8 border">

            {/* Main Fridge */}
            <div className="col-span-2 row-start-1 flex items-end justify-around border">
              <img loading="lazy" src={PotatoChicken} className='w-28 sm:w-32 mt-[-20px] mb-[-10px] sm:mb-[-10px] md:w-32 md:mb-[-10px] lg:w-36 lg:mb-[-20px]' onClick={handleSectionClick} />
              <img loading="lazy" src={ChickenMeat} className='w-24 sm:w-32 mt-[-20px] mb-[-10px] sm:mb-[-10px] md:w-28 md:mb-[-10px] lg:w-36 lg:mb-[-20px]' onClick={handleSectionClick} />
            </div>

            <div className="col-span-2 row-start-2 border flex items-center justify-center">
              <img loading="lazy" src={Milk} className='w-10 sm:w-12 mt-[-25px] sm:mt-[-24px] md:w-14' onClick={handleSectionClick} />
              <img loading="lazy" src={Cheese} className='w-20 sm:w-28 mt-[25px] md:w-32 md:mt-[17px]' onClick={handleSectionClick} />
              {/* <img loading="lazy" src={Butter} className='w-20 md:w-36 mt-2' onClick={handleSectionClick} /> */}
              <img loading="lazy" src={Eggs} className='w-24 sm:w-28 mt-[25px] md:w-32 md:mt-[27px]' onClick={handleSectionClick} />
            </div>

            <div className="col-span-2 row-start-3 border grid grid-cols-3 items-start justify-items-center border-green-500">
              <img loading="lazy" src={Meat} className='w-20 md:w-44 ' onClick={handleSectionClick} />
              <img loading="lazy" src={Chicken} className='w-20 md:w-36 ' onClick={handleSectionClick} />
              <img loading="lazy" src={Fish} className='w-20 md:w-36 mt-[-12px]' onClick={handleSectionClick} />
              <img loading="lazy" src={Vegetables} className='col-span-full w-40 md:w-44 mt-[-33px]' onClick={handleSectionClick} />
            </div>

            <div className="col-span-2 row-start-4 border flex items-start justify-center">
              <img loading="lazy" src={Fruits} className='w-32 md:w-36 mt-[-3px]' onClick={handleSectionClick} />
            </div>

            {/* Fridge Door */}
            <div className="col-span-3 row-start-1 border flex items-center justify-center">
              <img loading="lazy" src={SoftDrinks} className='w-20 w-20 mt-[10px] sm:mt-8 sm:w-28' onClick={handleSectionClick} />
            </div>

            <div className="col-span-3 row-start-2 flex items-start sm:items-center justify-start sm:justify-start">
              <img loading="lazy" src={Ketchup} className='w-24 w-24 mt-[-10px] sm:w-28 sm:mt-[-40px] md:w-32 md:mt-[-25px]' onClick={handleSectionClick} />
              <img loading="lazy" src={Soya} className='w-16 w-24 sm:w-16 mt-[25px] sm:mt-[-2px] md:w-20 md:mt-[17px]' onClick={handleSectionClick} />
              <img loading="lazy" src={Pickles} className='w-16 w-24 sm:w-14 mt-[25px] sm:mt-[-2px] md:w-16 md:mt-[17px]' onClick={handleSectionClick} />
            </div>

            <div className="col-span-3 row-start-3 border mb-[-60px] flex items-center  justify-start pl-4 space-x-6">
              <img loading="lazy" src={Water} className='w-20 sm:w-28 mt-[-24px]' onClick={handleSectionClick} />
              <img loading="lazy" src={Juice} className='w-14 sm:mt-[25px] sm:w-16' onClick={handleSectionClick} />
            </div>

            {/* <div className="col-span-3 row-start-4 border border-purple-600 flex items-center justify-center">
              8
            </div> */}

          </div>
        </div>
      </div>

      <FridgeModal
        isOpen={isModalOpen}
        section={selectedSection}
        view={view}
        onClose={handleCloseModal}
        hideSectionName={view === "ShelfLife"}
      />
    </div>
  );
}

export default Fridge;