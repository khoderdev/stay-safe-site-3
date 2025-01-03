import React, { useEffect, useRef, useMemo, useCallback, lazy } from "react";
import MiddleSection from "./MiddleSection";
import { useMousePosition } from "react-use-mouse-position";

const Antibiotics = lazy(() => import("../../components/bacteria/Antibiotics"));

const Bacteria: React.FC = React.memo(() => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY } = useMousePosition();

  const offset = useMemo(() => ({ x: -20, y: -0 }), []);

  const updateImagePosition = useCallback(() => {
    if (
      imageRef.current &&
      containerRef.current &&
      mouseX !== null &&
      mouseY !== null
    ) {
      const container = containerRef.current.getBoundingClientRect();
      const image = imageRef.current.getBoundingClientRect();

      // Calculate boundaries
      const maxX = container.width - image.width;
      const maxY = container.height - image.height;

      // Calculate position relative to container
      let adjustedX = mouseX - container.left + offset.x;
      let adjustedY = mouseY - container.top + offset.y;

      // Clamp values within boundaries
      adjustedX = Math.max(0, Math.min(adjustedX, maxX));
      adjustedY = Math.max(0, Math.min(adjustedY, maxY));

      imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
    }
  }, [mouseX, mouseY, offset]);

  useEffect(() => {
    const rafId = requestAnimationFrame(updateImagePosition);
    return () => cancelAnimationFrame(rafId);
  }, [updateImagePosition]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-full overflow-hidden h-full relative"
    >
      <MiddleSection />
      <img
        src="/images/bacteria.png"
        ref={imageRef}
        className="w-40 sm:w-52 absolute pointer-events-none top-0 left-0 z-30"
        alt="Bacteria"
        loading="lazy"
      />
      <Antibiotics />
    </div>
  );
});

Bacteria.displayName = "Bacteria";

export default Bacteria;
