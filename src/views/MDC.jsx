// // import BMICalculator from '../components/calculator/bmi/BMICalculator';
// // import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
// // import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
// // import Consultations from '../components/consultations/Consultations';
// // import MDCHero from '../components/hero/MDCHero';

// // function MDC() {

// //   return (
// //     <div className=''>
// //       <div className=' '>
// //         <MDCHero />
// //       </div>

// //       <div className=''>
// //         <Consultations />
// //       </div>

// //       <div className=''>
// //         <BMICalculator />
// //       </div>

// //       <div className=''>
// //         <FoodAndNutrition />
// //       </div>

// //       <div className=''>
// //         <QualitativeDiets />
// //       </div>
// //     </div>
// //   );
// // }

// // export default MDC;
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////


// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import BMICalculator from '../components/calculator/bmi/BMICalculator';
// import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
// import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
// import Consultations from '../components/consultations/Consultations';
// import MDCHero from '../components/hero/MDCHero';

// function MDC() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       multiplier: window.innerWidth > 768 ? 1.15 : 1.05, // Slightly slower multiplier for more fluidity
//       class: 'is-inview', // Class added to elements in view
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//     });

//     // Handle smooth updates on resize with debounce
//     const debounce = (func, delay) => {
//       let timeout;
//       return () => {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, delay);
//       };
//     };
//     const handleResize = debounce(() => {
//       scroll.update();
//     }, 100);

//     window.addEventListener('resize', handleResize);

//     return () => {
//       scroll.destroy();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} data-scroll-container>
//       <div data-scroll-section data-scroll data-scroll-speed="1" data-scroll-position="top">
//         <MDCHero />
//       </div>

//       <div data-scroll-section data-scroll data-scroll-class="fade-in" data-scroll-repeat>
//         <Consultations />
//       </div>

//       <div data-scroll-section data-scroll data-scroll-speed="0.8" data-scroll-position="center">
//         <BMICalculator />
//       </div>

//       <div data-scroll-section data-scroll data-scroll-speed="1.2" data-scroll-class="fade-in" data-scroll-repeat>
//         <FoodAndNutrition />
//       </div>

//       <div data-scroll-section data-scroll data-scroll-speed="0.7" data-scroll-position="bottom">
//         <QualitativeDiets />
//       </div>
//     </div>
//   );
// }

// export default MDC;
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import MDCHero from '../components/hero/MDCHero';
import { useScrollSections } from '../hooks/useScrollSections';

function MDC() {
  const sectionsRef = useScrollSections();

  return (
    <div className="flex flex-col">
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section">
        <MDCHero />
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)} className="section">
        <Consultations />
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
        <BMICalculator />
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)} className="section">
        <FoodAndNutrition />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
        <QualitativeDiets />
      </div>
    </div>
  );
}

export default MDC;
