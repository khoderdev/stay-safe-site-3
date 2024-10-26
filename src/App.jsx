import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import router from './router';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  useEffect(() => {
    let locomotiveScroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.05, // Adjust the inertia (lower = more smoothness)
        getDirection: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update ScrollTrigger on each scroll
      locomotiveScroll.on('scroll', ScrollTrigger.update);

      // Setup ScrollTrigger to sync with Locomotive Scroll
      ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, 0, 0)
            : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('[data-scroll-container]').style.transform
          ? 'transform'
          : 'fixed',
      });

      // Refresh on ScrollTrigger refresh
      ScrollTrigger.addEventListener('refresh', () => {
        locomotiveScroll.update(); // Update Locomotive Scroll positions
      });

      // Initial refresh
      ScrollTrigger.refresh();
    };

    initScroll();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.removeEventListener('refresh'); // Remove the refresh listener
      locomotiveScroll?.destroy(); // Destroy Locomotive Scroll instance
    };
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;