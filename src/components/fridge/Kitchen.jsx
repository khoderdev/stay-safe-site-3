import React, { useState, useRef } from 'react';
import Fridge from './Fridge';

const ZoomableImage = () => {
  const [zoom, setZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
  const [dragging, setDragging] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const initialMousePosition = useRef({ x: 0, y: 0 });
  const initialTranslate = useRef({ x: 0, y: 0 });

  // Handle double-click to toggle zoom
  const handleDoubleClick = (event) => {
    if (zoom) {
      setZoom(false);
      setTranslate({ x: 0, y: 0 });
    } else {
      const { offsetX, offsetY, target } = event.nativeEvent;
      const { offsetWidth, offsetHeight } = target;

      const x = `${(offsetX / offsetWidth) * 100}%`;
      const y = `${(offsetY / offsetHeight) * 100}%`;

      setZoomPosition({ x, y });
      setZoom(true);
    }
  };

  // Start dragging
  const handleMouseDown = (event) => {
    if (zoom) {
      setDragging(true);
      initialMousePosition.current = { x: event.clientX, y: event.clientY };
      initialTranslate.current = { ...translate };
    }
  };

  // Handle drag movement with boundary restrictions
  const handleMouseMove = (event) => {
    if (dragging && zoom) {
      const deltaX = event.clientX - initialMousePosition.current.x;
      const deltaY = event.clientY - initialMousePosition.current.y;

      const scale = 2.5;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate scaled image dimensions
      const scaledWidth = viewportWidth * scale;
      const scaledHeight = viewportHeight * scale;

      // Maximum translation values to keep the edges visible
      const maxTranslateX = (scaledWidth - viewportWidth) / 2;
      const maxTranslateY = (scaledHeight - viewportHeight) / 2;

      const newTranslateX = initialTranslate.current.x + deltaX;
      const newTranslateY = initialTranslate.current.y + deltaY;

      setTranslate({
        x: Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX)),
        y: Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY)),
      });
    }
  };

  // Stop dragging
  const handleMouseUp = () => setDragging(false);
  return (
    <div
      className="relative w-full h-screen bg-blue-200 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Image Container */}
      <div
        onDoubleClick={handleDoubleClick}
        className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}`}
        style={{
          backgroundImage: 'url(/public/fridge/kitchen2.jpg)',
          transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
          transform: zoom
            ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
            : 'scale(1) translate(0, 0)',
          cursor: zoom ? 'grab' : 'auto',
        }}
        onMouseDown={(e) => zoom && e.preventDefault()}
      >
        {/* Fridge Component positioned on the left side */}
        <div
          className="relative w-64 top-[32%] left-[5%]"
        >
          {/* <Fridge /> */}
        </div>
      </div>
    </div>
  );
}
export default ZoomableImage;