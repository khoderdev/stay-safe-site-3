import { useState } from 'react';
import FridgeBtns from './fridge-btn';
import FridgeModal from './FridgeModal';
import { fridgeSections } from './FridgeData';
import DotIndicator from './DotIndicator';

import {
  FRIDGE2,
  FRIDGE5,
  FRIDGE9,
  Butter,
  Cheese,
  Chicken,
  ChickenMeat,
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
    <>
      <h2 className="text-center dark:text-white-bg pt-10 mb-20">
        Optimal Fridge Storage & Shelf Life of Common Food Items
      </h2>

      <div className="relative flex w-fit h-full justify-center items-center">
        <div className="flex justify-center items-center md:max-w-3xl">
          <img src='/public/fridge/f2.png' alt='fridge' className='w-full ' />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-5 sm:p-10 md:p-10 h-full">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full p- pt-16 border">
            {/* Main Fridge */}
            <div className="col-span-2 row-start-1 flex items-end justify-center pr-4">
              <img src={ChickenMeat} className='w-36 md:w-auto md:mt-[-10px] object-cover' onClick={() => { alert("Clicked") }} />
              <img src={FRIDGE2} className='w-36 ml-4 md:w-auto md:mt-[-10px]' onClick={() => { alert("Clicked") }} />
              {/* <img src={FRIDGE5} width={150} className='' onClick={() => { alert("Clicked") }} /> */}
              <img src={Grape} className='w-36 md:w-auto mt-0' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-2 border flex items-start justify-center pr-4">
              <img src={Milk} width={70} className='mt-4 sm:mt-[46px]' onClick={() => { alert("Clicked") }} />
              <img src={Cheese} width={90} className='mt-8 sm:mt-8' onClick={() => { alert("Clicked") }} />
              <img src={Butter} width={120} className='mt-12 sm:mt-[46px]' onClick={() => { alert("Clicked") }} />
              <img src={Eggs} width={130} className='mt-12 sm:mt-11' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-3 border flex items-start justify-center pr-4">
              <img src={FRIDGE9} className='w-72 md:w-auto' onClick={() => { alert("Clicked") }} />
              <img src={Chicken} width={200} className='mt-3' onClick={() => { alert("Clicked") }} />
              <img src={Fish} width={200} className='sm:mt-5' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-2 row-start-4 border flex items-start justify-between px-4">
              <img src={Vegetables} width={120} onClick={() => { alert("Clicked") }} />
              <img src={Fruits} width={120} onClick={() => { alert("Clicked") }} />

            </div>

            {/* Fridge Door */}
            <div className="col-span-3 row-start-1 border flex items-center justify-center">
              <img src={SoftDrinks} className='w-28 mt-[-15px] sm:mt-0 sm:w-1/2' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-3 row-start-2 flex items-start justify-center pl-4">
              <img src={Ketchup} width={100} className='mt-[-24px] sm:mt-[18px] w-24' onClick={() => { alert("Clicked") }} />
              <img src={Soya} width={130} className='mt- sm:mt-14' onClick={() => { alert("Clicked") }} />
            </div>

            <div className="col-span-3 row-start-3 border mb-[-60px] flex items-center  justify-center space-x-6">
              <img src={Water} className='w-16 sm:w-28 mt-[-35px]' onClick={() => { alert("Clicked") }} />
              <img src={Juice} className='sm:mt-[25px] w-10 sm:w-16' onClick={() => { alert("Clicked") }} />
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
    </>
  );
}

export default Fridge;