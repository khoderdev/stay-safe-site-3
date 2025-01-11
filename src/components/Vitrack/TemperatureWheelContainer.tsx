import React, { useEffect, useRef } from 'react';

const NoScrollContainer = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const preventScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const disableScroll = () => {
      // Add event listeners to prevent scroll
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventScrollKeyDown, { passive: false });
    };

    const enableScroll = () => {
      // Remove scroll prevention
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeyDown);
    };

    const preventScrollKeyDown = (event) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (keys.includes(event.key)) {
        event.preventDefault();
      }
    };

    if (container) {
      container.addEventListener('mouseenter', disableScroll);
      container.addEventListener('mouseleave', enableScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', disableScroll);
        container.removeEventListener('mouseleave', enableScroll);
      }
      enableScroll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-fit min-h-[500px] h-full mx-auto"
      style={{ overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

export default NoScrollContainer;
