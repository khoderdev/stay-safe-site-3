import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useSmoothScroll = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smoothMobile: false,
    });

    return () => scroll.destroy();
  }, [ref]);
};

export default useSmoothScroll;
