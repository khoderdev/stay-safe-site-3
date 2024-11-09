import { createContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionsRef = useRef([]); // To store references to each section

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom', // Start when the top of the section hits the bottom of the viewport
          end: 'bottom top', // End when the bottom of the section hits the top of the viewport
          scrub: 1.6, // Smooth scrubbing, takes the duration into account
          markers: false, // Enable this for debugging
        },
      });

      // Fade-in and slide-up animation
      tl.fromTo(
        section,
        { opacity: 0, y: 0 }, // Start from transparent and slightly below
        {
          opacity: 100,
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
    <ScrollContext.Provider value={sectionsRef}>
      {children}
    </ScrollContext.Provider>
  );
};
export default ScrollContext;
