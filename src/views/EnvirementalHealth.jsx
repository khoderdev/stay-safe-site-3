// import React from 'react'
// import CarbonFootprintCalculator from '../components/calculator/carbon-footprint/CarbonFootprint'

// function EnvirementalHealth() {
//   return (

//     <>
//       <h1 className="text-xl md:text-4xl font-semibold my-6 text-center text-black dark:text-white-bg">
//         Enviremental Health
//       </h1>
//       <CarbonFootprintCalculator />
//     </>

//   )
// }

// export default EnvirementalHealth


import { useScrollSections } from '../hooks/useScrollSections';
import CarbonFootprintCalculator from '../components/calculator/carbon-footprint/CarbonFootprint'



export default function EnvirementalHealth() {
  const sectionsRef = useScrollSections();
  return (
    <div className="flex flex-col">
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section pt-16 bg-white-bg dark:bg-black">
        <CarbonFootprintCalculator />
      </div>

    </div>
  );
}
