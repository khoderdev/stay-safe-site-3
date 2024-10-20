import { useEffect } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';

const useAnimatedSplitting = (className, options = {}) => {
  useEffect(() => {
    // Initialize Splitting.js to split the text into words
    const results = Splitting({ by: 'words' });

    // Get all elements with the specified class name
    const elements = document.querySelectorAll(`.${className}[data-splitting]`);

    elements.forEach((element) => {
      const words = [...element.querySelectorAll('.word')];

      // Set the perspective for each word's parent
      words.forEach((word) => gsap.set(word.parentNode, { perspective: 1000 }));

      // Create the animation using GSAP
      gsap.fromTo(
        words,
        {
          'will-change': 'opacity, transform',
          z: () => gsap.utils.random(500, 950),
          opacity: 0,
          xPercent: () => gsap.utils.random(-100, 100),
          yPercent: () => gsap.utils.random(-10, 10),
          rotationX: () => gsap.utils.random(-90, 90),
        },
        {
          duration: options.duration || 2, // Use passed duration or default to 2
          ease: options.ease || 'expo', // Use passed ease or default to 'expo'
          opacity: 1,
          rotationX: 0,
          rotationY: 0,
          xPercent: 0,
          yPercent: 0,
          z: 0,
          stagger: {
            each: options.stagger || 0.2, // Use passed stagger or default to 0.2
            from: options.from || 'random', // Use passed from option or default to 'random'
          },
        }
      );
    });

    // Cleanup GSAP animations on component unmount
    return () => {
      gsap.killTweensOf(results.flatMap(({ words }) => words));
    };
  }, [className, options]); // Add className and options as dependencies
};

export default useAnimatedSplitting;
