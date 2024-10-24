// // // // // import './DXPrevention.css';
// // // // // import { motion } from 'framer-motion';

// // // // // function DXPrevention() {
// // // // //   return (
// // // // //     <div className='flex flex-col justify-between items-center py-10 pb-18 sm:flex sm:flex-row sm:w-full sm:justify-between'>
// // // // //       <div className="p-1 sm:pl-6">
// // // // //         <motion.img src='/prevention-no-loop.gif' alt='dx prevention' className='2xl:pl-20 w-[80%] 2xl:w-full' />
// // // // //         <motion.button
// // // // //           className='sliding-button'
// // // // //           initial={{ y: '-100vh' }}  // Start above the viewport
// // // // //           animate={{ y: 0 }}         // Animate to center of the gif
// // // // //           transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 1.5 }}
// // // // //           whileTap={{ scale: 0.8, rotate: 90 }}
// // // // //         >
// // // // //           Let's Show you How
// // // // //         </motion.button>
// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default DXPrevention;

// // // // import { useEffect, useRef } from 'react';
// // // // import './DXPrevention.css';
// // // // import { motion } from 'framer-motion';
// // // // import gsap from 'gsap';
// // // // import useAnimatedSplitting from '../../hooks/useAnimatedSplitting';

// // // // function DXPrevention() {
// // // //   const titlesRef = useRef([]);
// // // //   useEffect(() => {
// // // //     // Observe each title element
// // // //     const observer = new IntersectionObserver((entries) => {
// // // //       entries.forEach(entry => {
// // // //         if (entry.isIntersecting) {
// // // //           const title = entry.target;
// // // //           const words = [...title.querySelectorAll('.word')];

// // // //           // Set the perspective for each word's parent
// // // //           words.forEach((word) => gsap.set(word.parentNode, { perspective: 1000 }));

// // // //           // Create the animation using GSAP
// // // //           gsap.fromTo(
// // // //             words,
// // // //             {
// // // //               'will-change': 'opacity, transform',
// // // //               z: () => gsap.utils.random(500, 950),
// // // //               opacity: 0,
// // // //               xPercent: () => gsap.utils.random(-100, 100),
// // // //               yPercent: () => gsap.utils.random(-10, 10),
// // // //               rotationX: () => gsap.utils.random(-90, 90),
// // // //             },
// // // //             {
// // // //               duration: 2,
// // // //               ease: 'expo',
// // // //               opacity: 1,
// // // //               rotationX: 0,
// // // //               rotationY: 0,
// // // //               xPercent: 0,
// // // //               yPercent: 0,
// // // //               z: 0,
// // // //               stagger: {
// // // //                 each: 0.2,
// // // //                 from: 'random',
// // // //               },
// // // //             }
// // // //           );
// // // //         }
// // // //       });
// // // //     });

// // // //     titlesRef.current.forEach(title => {
// // // //       observer.observe(title);
// // // //     });

// // // //     // Cleanup: disconnect the observer on unmount
// // // //     return () => {
// // // //       titlesRef.current.forEach(title => {
// // // //         observer.unobserve(title);
// // // //       });
// // // //       observer.disconnect();
// // // //     };
// // // //   }, []);

// // // //   useAnimatedSplitting('animated__content', {
// // // //     duration: 2,
// // // //     ease: 'expo',
// // // //     stagger: 0.2,
// // // //     from: 'random',
// // // //   });

// // // //   return (
// // // //     <div id="section-2">
// // // //       <div className="imageContainer">
// // // //         <motion.img
// // // //           src='/prevention-no-loop.gif'
// // // //           alt='dx prevention'
// // // //           className='w-[80%] 2xl:w-full'
// // // //         />
// // // //         <div className="animated__content" data-splitting ref={(el) => titlesRef.current[0] = el}>
// // // //           <motion.button
// // // //             className='sliding-button'
// // // //             initial={{ y: '100vh' }}
// // // //             animate={{ y: 0 }}
// // // //             transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 1.5 }}
// // // //             whileTap={{ scale: 1.5, bounce: 50 }}
// // // //           >
// // // //             Let's Show You How
// // // //           </motion.button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DXPrevention;
// // // import { useEffect, useRef } from 'react';
// // // import './DXPrevention.css';
// // // import { motion } from 'framer-motion';
// // // import gsap from 'gsap';

// // // function DXPrevention() {
// // //   const buttonRef = useRef(null);

// // //   useEffect(() => {
// // //     // GSAP Animation for the button
// // //     const button = buttonRef.current;

// // //     // Set initial perspective and transformations
// // //     gsap.set(button, { perspective: 1000 });

// // //     // Create a timeline for animation
// // //     const timeline = gsap.timeline({
// // //       scrollTrigger: {
// // //         trigger: button, // Trigger when the button is in view
// // //         start: 'top 80%', // Adjust based on where you want the animation to start
// // //       },
// // //     });

// // //     // Animation from outside the viewport to its position with rotation effects
// // //     timeline.fromTo(
// // //       button,
// // //       {
// // //         opacity: 0,
// // //         y: 500, // Move the button from below the viewport
// // //         // rotationX: 90, // Add a rotation effect
// // //       },
// // //       {
// // //         duration: 0.5,
// // //         opacity: 1,
// // //         y: 0,
// // //         rotationX: 0,
// // //         ease: 'expo.in',
// // //       }
// // //     );
// // //   }, []);

// // //   return (
// // //     <div id="section-2">
// // //       <div className="imageContainer">
// // //         <motion.img
// // //           src='/prevention.gif'
// // //           alt='dx prevention'
// // //           className=' 2xl:w-full'
// // //         />
// // //         <div className="animated__content">
// // //           <motion.button
// // //             ref={buttonRef}
// // //             className='sliding-button p-52'
// // //           >
// // //             Let's Show You How
// // //           </motion.button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default DXPrevention;
// // import { useEffect, useRef } from 'react';
// // import './DXPrevention.css';
// // import { motion } from 'framer-motion';
// // import gsap from 'gsap';

// // function DXPrevention() {
// //   const buttonRef = useRef(null);

// //   useEffect(() => {
// //     // GSAP Animation for the button
// //     const button = buttonRef.current;

// //     // Set initial perspective and transformations
// //     gsap.set(button, { perspective: 1000 });

// //     // Create a timeline for animation
// //     const timeline = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: button, // Trigger when the button is in view
// //         start: 'top 80%', // Adjust based on where you want the animation to start
// //       },
// //     });

// //     // Slide the button from left to its position with easing effects
// //     timeline.fromTo(
// //       button,
// //       {
// //         opacity: 0,
// //         x: '-100vw', // Start the button from off-screen on the left
// //       },
// //       {
// //         duration: 0, // Adjust the duration as needed
// //         delay: 10,
// //         opacity: 1,
// //         x: 250, // Move the button to its final position
// //         ease: 'expo.out', // Smooth easing
// //       }
// //     );
// //   }, []);

// //   return (
// //     <div id="section-2">
// //       <div className="imageContainer">
// //         <motion.img
// //           src='/prevention.gif'
// //           alt='dx prevention'
// //           className='2xl:w-full'
// //         />
// //         <div className="animated__content">
// //           <motion.button
// //             ref={buttonRef}
// //             className='sliding-button p-52'
// //           >
// //             Let's Show You How
// //           </motion.button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DXPrevention;
import { useEffect, useRef } from 'react';
import './DXPrevention.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function DXPrevention() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the button
    const button = buttonRef.current;

    // Set initial perspective and transformations
    gsap.set(button, { perspective: 1000 });

    // Create a timeline for animation
    const timeline = gsap.timeline({
      // scrollTrigger: {
      //   trigger: button, // Trigger when the button is in view
      //   start: 'top 80%', // Adjust based on where you want the animation to start
      // },
    });

    // Slide the button from left to its position with a 10-second delay
    timeline.fromTo(
      button,
      {
        opacity: 0,
        x: '-100vw', // Start the button from off-screen on the left
      },
      {
        duration: 1, // Adjust the duration for the animation effect
        delay: 18, // Delay the animation by 10 seconds
        opacity: 1,
        x: 0, // Move the button to its final position
        ease: 'expo.out', // Smooth easing
      }
    );
  }, []);

  return (
    <div id="section-2">
      <div className="imageContainer">
        <motion.img
          src='/prev-circle.gif'
          alt='dx prevention'
          className='2xl:w-full'
        />
        {/* <div className="animated__content">
          <motion.button
            ref={buttonRef}
            className='sliding-button p-52'
          >
            Let's Show You How
          </motion.button>
        </div> */}
      </div>
    </div>
  );
}

export default DXPrevention;
// import { useEffect, useRef } from 'react';
// import './DXPrevention.css';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// function DXPrevention() {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;

//     // Set initial perspective and transformations
//     gsap.set(button, { perspective: 1000 });

//     // Create a timeline for animation
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: button, // Use the button ref directly
//         start: 'top 80%', // Adjust based on where you want the animation to start
//         toggleActions: 'play none none reverse', // Controls when the animation should play
//       },
//     });

//     // Slide the button from left to its position with a delay
//     timeline.fromTo(
//       button,
//       {
//         opacity: 0,
//         x: '-100vw', // Start the button from off-screen on the left
//       },
//       {
//         duration: 1, // Adjust the duration for the animation effect
//         delay: 0, // Remove delay or adjust as needed
//         opacity: 1,
//         x: 0, // Move the button to its final position
//         ease: 'expo.out', // Smooth easing
//       }
//     );

//     // Cleanup function to kill ScrollTrigger on unmount
//     return () => {
//       if (ScrollTrigger.getById(button)) {
//         ScrollTrigger.getById(button).kill();
//       }
//     };
//   }, []);

//   return (
//     <div id="section-2">
//       <div className="imageContainer">
//         <motion.img
//           src='/prevention.gif'
//           alt='dx prevention'
//           className='2xl:w-full'
//         />
//         <div className="animated__content">
//           <motion.button
//             ref={buttonRef}
//             className='sliding-button p-52'
//           >
//             Let's Show You How
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DXPrevention;
