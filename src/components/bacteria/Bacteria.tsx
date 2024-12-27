import React, { useEffect, useRef, useMemo, useCallback } from "react";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import { useMousePosition } from "react-use-mouse-position";

const Bacteria: React.FC = React.memo(() => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { mouseX, mouseY } = useMousePosition();
  
  const offset = useMemo(() => ({ x: -20, y: -0 }), []);

  const updateImagePosition = useCallback(() => {
    if (imageRef.current && mouseX !== null && mouseY !== null) {
      const adjustedX = mouseX + offset.x;
      const adjustedY = mouseY + offset.y;
      imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
    }
  }, [mouseX, mouseY, offset]);

  useEffect(() => {
    const rafId = requestAnimationFrame(updateImagePosition);
    return () => cancelAnimationFrame(rafId);
  }, [updateImagePosition]);

  return (
    <div className="flex flex-col overflow-hidden h-full">
      <MiddleSection />
      <div className="py-16">
        <BottomSection />
      </div>
      <img
        src="/images/bacteria.png"
        ref={imageRef}
        className="w-40 sm:w-52 absolute pointer-events-none"
        alt="Bacteria"
        loading="lazy"
      />
    </div>
  );
});

Bacteria.displayName = 'Bacteria';

export default Bacteria;
