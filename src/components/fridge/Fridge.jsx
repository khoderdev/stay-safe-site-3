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
  Grape,
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
  Meat2
}
  from './fridgeItems'
import { Link } from 'react-router-dom';

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
    <div className='flex flex-col items-center justify-center'>
      <h2 className="text-center dark:text-white-bg pt-10 mb-20">
        Optimal Fridge Storage & Shelf Life of Common Food Items
      </h2>

      <div className={`relative flex w-fit h-full justify-center items-center
        xsm:bg-gr een-300
        bg-blue-400
        sm:bg-purple-400
        md:bg-cyan-400
        lg:bg-red-300-400
        xl:bg-yellow-300
        2xl:bg-orange-500-400
        3xl:bg-red-700
        `}>
        <div className="flex justify-center items-center max-w-2xl md:max-w-3xl xl:max-w-4xl">
          <img src='/public/fridge/f2.png' alt='fridge' className='w-full ' />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-5 sm:p-10 md:p-10 h-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full p- pt-8 border">

            {/* Main Fridge */}
            <div className="col-span-2 row-start-1 flex items-end justify-center border">
              <img src={PotatoChicken} className='w-28 md:w-36' onClick={() => { alert("Clicked") }} />
              <img src={Meat2} className='w-28 md:w-36 mt-' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-2 border flex items-center justify-center">
              <img src={Milk} className='xsm:w-10 sm:w-12 xsm:mt-[-25px] sm:mt-[-24px] md:w-14' onClick={() => { alert("Clicked") }} />
              <img src={Cheese} className='xsm:w-20 sm:w-28 xsm:mt-[25px] md:w-32 md:mt-[17px]' onClick={() => { alert("Clicked") }} />
              {/* <img src={Butter} className='w-20 md:w-36 mt-2' onClick={() => { alert("Clicked") }} /> */}
              <img src={Eggs} className='xsm:w-24 sm:w-28 xsm:mt-[25px] md:w-32 md:mt-[27px]' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-3 border grid grid-cols-3 items-start justify-items-center border-green-500">
              <img src={Meat} className='w-20 md:w-44 ' onClick={() => { alert("Clicked") }} />
              <img src={Chicken} className='w-20 md:w-36 ' onClick={() => { alert("Clicked") }} />
              <img src={Fish} className='w-20 md:w-36 mt-[-12px]' onClick={() => { alert("Clicked") }} />
              <img src={Vegetables} className='col-span-full w-40 md:w-44 mt-[-33px]' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-4 border flex items-start justify-center">
              <img src={Fruits} className='w-32 md:w-36 mt-[-3px]' onClick={() => { alert("Clicked") }} />
            </div>

            {/* Fridge Door */}
            <div className="col-span-3 row-start-1 border flex items-center justify-center">
              <img src={SoftDrinks} className='w-20 xsm:w-20 mt-[10px] sm:mt-8 sm:w-28' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-3 row-start-2 flex items-start sm:items-center justify-start sm:justify-start">
              <img src={Ketchup} className='xsm:w-24 w-24 mt-[-10px] sm:w-28 sm:mt-[-40px] md:w-32 md:mt-[-25px]' onClick={() => { alert("Clicked") }} />
              <img src={Soya} className='xsm:w-16 w-24 sm:w-16 xsm:mt-[25px] sm:mt-[-2px] md:w-20 md:mt-[17px]' onClick={() => { alert("Clicked") }} />
              <img src={Pickles} className='xsm:w-16 w-24 sm:w-14 xsm:mt-[25px] sm:mt-[-2px] md:w-16 md:mt-[17px]' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-3 row-start-3 border mb-[-60px] flex items-center  justify-start pl-4 space-x-6">
              <img src={Water} className='w-20 sm:w-28 mt-[-24px]' onClick={() => { alert("Clicked") }} />
              <img src={Juice} className='w-14 sm:mt-[25px] sm:w-16' onClick={() => { alert("Clicked") }} />
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