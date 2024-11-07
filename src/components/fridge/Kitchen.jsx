// // import React, { useState } from 'react';

// // const Kitchen = () => {
// //   const [zoom, setZoom] = useState(false);
// //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });

// //   // Handle double-click to zoom
// //   const handleDoubleClick = (event) => {
// //     const { offsetX, offsetY, target } = event.nativeEvent;
// //     const { offsetWidth, offsetHeight } = target;

// //     // Calculate click position as a percentage
// //     const x = `${(offsetX / offsetWidth) * 100}%`;
// //     const y = `${(offsetY / offsetHeight) * 100}%`;

// //     // Set zoom position and activate zoom
// //     setZoomPosition({ x, y });
// //     setZoom(true);
// //   };

// //   // Handle zoom out
// //   const handleZoomOut = () => {
// //     setZoom(false);
// //   };

// //   return (
// //     <div className="relative w-full h-screen bg-gray-200 overflow-hidden">
// //       {/* Image Container */}
// //       <div
// //         onDoubleClick={handleDoubleClick}
// //         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'
// //           }`}
// //         style={{
// //           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
// //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// //         }}
// //       />

// //       {/* Zoom Out Button */}
// //       {zoom && (
// //         <button
// //           onClick={handleZoomOut}
// //           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
// //         >
// //           Zoom Out
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default Kitchen;
// import React, { useState, useRef } from 'react';

// const ZoomableImage = () => {
//   const [zoom, setZoom] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
//   const [dragging, setDragging] = useState(false);
//   const [translate, setTranslate] = useState({ x: 0, y: 0 });
//   const initialMousePosition = useRef({ x: 0, y: 0 });
//   const initialTranslate = useRef({ x: 0, y: 0 });

//   // Handle double-click to zoom
//   const handleDoubleClick = (event) => {
//     const { offsetX, offsetY, target } = event.nativeEvent;
//     const { offsetWidth, offsetHeight } = target;

//     // Calculate the zoom origin point in percentage
//     const x = `${(offsetX / offsetWidth) * 100}%`;
//     const y = `${(offsetY / offsetHeight) * 100}%`;

//     setZoomPosition({ x, y });
//     setZoom(true);
//   };

//   // Handle zoom out
//   const handleZoomOut = () => {
//     setZoom(false);
//     setTranslate({ x: 0, y: 0 }); // Reset translation to default view
//   };

//   // Start dragging on mouse down
//   const handleMouseDown = (event) => {
//     if (zoom) {
//       setDragging(true);
//       initialMousePosition.current = { x: event.clientX, y: event.clientY };
//       initialTranslate.current = { ...translate };
//     }
//   };

//   // Update position while dragging
//   const handleMouseMove = (event) => {
//     if (dragging && zoom) {
//       const deltaX = event.clientX - initialMousePosition.current.x;
//       const deltaY = event.clientY - initialMousePosition.current.y;

//       setTranslate({
//         x: initialTranslate.current.x + deltaX,
//         y: initialTranslate.current.y + deltaY,
//       });
//     }
//   };

//   // Stop dragging on mouse up
//   const handleMouseUp = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       className="relative w-full h-screen bg-gray-200 overflow-hidden"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       {/* Image Container */}
//       <div
//         onDoubleClick={handleDoubleClick}
//         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'
//           }`}
//         style={{
//           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
//           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
//           transform: zoom
//             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
//             : 'scale(1) translate(0, 0)',
//           cursor: zoom ? 'grab' : 'auto', // Set cursor to indicate draggable when zoomed
//         }}
//         onMouseDown={(e) => zoom && e.preventDefault()} // Prevent text selection on drag
//       />

//       {/* Zoom Out Button */}
//       {zoom && (
//         <button
//           onClick={handleZoomOut}
//           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
//         >
//           Zoom Out
//         </button>
//       )}
//     </div>
//   );
// };

// export default ZoomableImage;
// import React, { useState, useRef } from 'react';

// const ZoomableImage = () => {
//   const [zoom, setZoom] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
//   const [dragging, setDragging] = useState(false);
//   const [translate, setTranslate] = useState({ x: 0, y: 0 });
//   const initialMousePosition = useRef({ x: 0, y: 0 });
//   const initialTranslate = useRef({ x: 0, y: 0 });

//   // Handle double-click to zoom
//   const handleDoubleClick = (event) => {
//     const { offsetX, offsetY, target } = event.nativeEvent;
//     const { offsetWidth, offsetHeight } = target;

//     const x = `${(offsetX / offsetWidth) * 100}%`;
//     const y = `${(offsetY / offsetHeight) * 100}%`;

//     setZoomPosition({ x, y });
//     setZoom(true);
//   };

//   // Handle zoom out
//   const handleZoomOut = () => {
//     setZoom(false);
//     setTranslate({ x: 0, y: 0 }); // Reset to default position
//   };

//   // Start dragging
//   const handleMouseDown = (event) => {
//     if (zoom) {
//       setDragging(true);
//       initialMousePosition.current = { x: event.clientX, y: event.clientY };
//       initialTranslate.current = { ...translate };
//     }
//   };

//   // Drag movement with immediate response
//   const handleMouseMove = (event) => {
//     if (dragging && zoom) {
//       const deltaX = event.clientX - initialMousePosition.current.x;
//       const deltaY = event.clientY - initialMousePosition.current.y;

//       // Calculate new position and restrict it within bounds
//       const newTranslateX = initialTranslate.current.x + deltaX;
//       const newTranslateY = initialTranslate.current.y + deltaY;

//       // Determine boundaries based on the zoom scale and viewport
//       const scale = 2.5; // Scale factor for zoom level
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       // Calculate boundary limits
//       const maxTranslateX = (viewportWidth * (scale - 1)) / 4;
//       const maxTranslateY = (viewportHeight * (scale - 1)) / 2;

//       // Apply restrictions and update translation
//       setTranslate({
//         x: Math.min(maxTranslateX, Math.max(-maxTranslateX, newTranslateX)),
//         y: Math.min(maxTranslateY, Math.max(-maxTranslateY, newTranslateY)),
//       });
//     }
//   };

//   // Stop dragging
//   const handleMouseUp = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       className="relative w-full h-screen bg-gray-200 overflow-hidden"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       {/* Image Container */}
//       <div
//         onDoubleClick={handleDoubleClick}
//         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'} ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'}`}
//         style={{
//           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
//           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
//           transform: zoom
//             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
//             : 'scale(1) translate(0, 0)',
//           cursor: zoom ? 'grab' : 'auto',
//         }}
//         onMouseDown={(e) => zoom && e.preventDefault()} // Prevent text selection during drag
//       />

//       {/* Zoom Out Button */}
//       {zoom && (
//         <button
//           onClick={handleZoomOut}
//           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
//         >
//           Zoom Out
//         </button>
//       )}
//     </div>
//   );
// };

// export default ZoomableImage;
// import React, { useState, useRef } from 'react';

// const ZoomableImage = () => {
//   const [zoom, setZoom] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
//   const [dragging, setDragging] = useState(false);
//   const [translate, setTranslate] = useState({ x: 0, y: 0 });
//   const initialMousePosition = useRef({ x: 0, y: 0 });
//   const initialTranslate = useRef({ x: 0, y: 0 });

//   // Handle double-click to toggle zoom
//   const handleDoubleClick = (event) => {
//     if (zoom) {
//       // Zoom out if already zoomed in
//       setZoom(false);
//       setTranslate({ x: 0, y: 0 });
//     } else {
//       // Zoom in if currently zoomed out
//       const { offsetX, offsetY, target } = event.nativeEvent;
//       const { offsetWidth, offsetHeight } = target;

//       const x = `${(offsetX / offsetWidth) * 100}%`;
//       const y = `${(offsetY / offsetHeight) * 100}%`;

//       setZoomPosition({ x, y });
//       setZoom(true);
//     }
//   };

//   // Start dragging
//   const handleMouseDown = (event) => {
//     if (zoom) {
//       setDragging(true);
//       initialMousePosition.current = { x: event.clientX, y: event.clientY };
//       initialTranslate.current = { ...translate };
//     }
//   };

//   // Handle drag movement with boundary restrictions
//   const handleMouseMove = (event) => {
//     if (dragging && zoom) {
//       const deltaX = event.clientX - initialMousePosition.current.x;
//       const deltaY = event.clientY - initialMousePosition.current.y;

//       const newTranslateX = initialTranslate.current.x + deltaX;
//       const newTranslateY = initialTranslate.current.y + deltaY;

//       const scale = 2.5;
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       const maxTranslateX = (viewportWidth * (scale - 1)) / 2;
//       const maxTranslateY = (viewportHeight * (scale - 1)) / 2;

//       setTranslate({
//         x: Math.min(maxTranslateX, Math.max(-maxTranslateX, newTranslateX)),
//         y: Math.min(maxTranslateY, Math.max(-maxTranslateY, newTranslateY)),
//       });
//     }
//   };

//   // Stop dragging
//   const handleMouseUp = () => setDragging(false);

//   return (
//     <div
//       className="relative w-full h-screen bg-gray-200 overflow-hidden"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       {/* Image Container */}
//       <div
//         onDoubleClick={handleDoubleClick}
//         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}`}
//         style={{
//           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
//           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
//           transform: zoom
//             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
//             : 'scale(1) translate(0, 0)',
//           cursor: zoom ? 'grab' : 'auto',
//         }}
//         onMouseDown={(e) => zoom && e.preventDefault()}
//       />
//     </div>
//   );
// };

// export default ZoomableImage;
import React, { useState, useRef } from 'react';

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
          backgroundImage: 'url(/public/fridge/kitchen.jpg)',
          transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
          transform: zoom
            ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
            : 'scale(1) translate(0, 0)',
          cursor: zoom ? 'grab' : 'auto',
        }}
        onMouseDown={(e) => zoom && e.preventDefault()}
      />
    </div>
  );
};

export default ZoomableImage;
