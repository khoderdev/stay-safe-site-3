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
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import MDCHero from '../components/hero/MDCHero';

gsap.registerPlugin(ScrollTrigger);

function MDC() {
  const sectionsRef = useRef([]); // To store references to each section

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      // Create a GSAP timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom', // Start when the top of the section hits the bottom of the viewport
          end: 'bottom top', // End when the bottom of the section hits the top of the viewport
          scrub: 1, // Smooth scrubbing, takes the duration into account
          markers: false, // Enable this for debugging
        },
      });

      // Fade-in and slide-up animation
      tl.fromTo(
        section,
        { opacity: 0, y: 50 }, // Start from transparent and slightly below
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out', // Easing function for a smoother animation
        }
      );

      // Add a subtle parallax effect
      tl.to(section, {
        y: -30, // Slight upward movement to create parallax
        ease: 'none', // No easing for this effect
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true, // Sync with scrolling
        },
      });
    });

    return () => {
      // Clean up scroll triggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
