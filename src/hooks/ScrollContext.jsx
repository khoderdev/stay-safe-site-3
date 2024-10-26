// // ScrollContext.jsx
// import React, { createContext, useContext, useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const ScrollContext = createContext();

// export const useScrollContext = () => useContext(ScrollContext);

// export const ScrollProvider = ({ children }) => {
//   const scrollContainerRef = useRef(null);
//   const locomotiveScrollRef = useRef(null);

//   useEffect(() => {
//     const initScroll = async () => {
//       const LocomotiveScroll = (await import('locomotive-scroll')).default;
//       locomotiveScrollRef.current = new LocomotiveScroll({
//         el: scrollContainerRef.current,
//         smooth: true,
//         lerp: 0.05,
//         getDirection: true,
//         mobile: { smooth: true },
//         tablet: { smooth: true },
//       });

//       locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

//       ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
//         scrollTop(value) {
//           return arguments.length
//             ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
//             : locomotiveScrollRef.current.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight,
//           };
//         },
//         pinType: scrollContainerRef.current.style.transform ? 'transform' : 'fixed',
//       });

//       ScrollTrigger.addEventListener('refresh', () => locomotiveScrollRef.current.update());
//       ScrollTrigger.refresh();
//     };

//     initScroll();

//     return () => {
//       ScrollTrigger.removeEventListener('refresh');
//       locomotiveScrollRef.current?.destroy();
//     };
//   }, []);

//   return (
//     <ScrollContext.Provider value={{ scrollContainerRef, locomotiveScrollRef }}>
//       <div ref={scrollContainerRef} data-scroll-container>
//         {children}
//       </div>
//     </ScrollContext.Provider>
//   );
// };
