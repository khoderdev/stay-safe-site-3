// // // // import React, { useState } from 'react';

// // // // const Kitchen = () => {
// // // //   const [zoom, setZoom] = useState(false);
// // // //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });

// // // //   // Handle double-click to zoom
// // // //   const handleDoubleClick = (event) => {
// // // //     const { offsetX, offsetY, target } = event.nativeEvent;
// // // //     const { offsetWidth, offsetHeight } = target;

// // // //     // Calculate click position as a percentage
// // // //     const x = `${(offsetX / offsetWidth) * 100}%`;
// // // //     const y = `${(offsetY / offsetHeight) * 100}%`;

// // // //     // Set zoom position and activate zoom
// // // //     setZoomPosition({ x, y });
// // // //     setZoom(true);
// // // //   };

// // // //   // Handle zoom out
// // // //   const handleZoomOut = () => {
// // // //     setZoom(false);
// // // //   };

// // // //   return (
// // // //     <div className="relative w-full h-screen bg-gray-200 overflow-hidden">
// // // //       {/* Image Container */}
// // // //       <div
// // // //         onDoubleClick={handleDoubleClick}
// // // //         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-2 md:scale-[2.5] lg:scale-3' : 'scale-100'
// // // //           }`}
// // // //         style={{
// // // //           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
// // // //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// // // //         }}
// // // //       />

// // // //       {/* Zoom Out Button */}
// // // //       {zoom && (
// // // //         <button
// // // //           onClick={handleZoomOut}
// // // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded-sm shadow-lg hover:bg-gray-300"
// // // //         >
// // // //           Zoom Out
// // // //         </button>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Kitchen;
// // // import React, { useState, useRef } from 'react';

// // // const ZoomableImage = () => {
// // //   const [zoom, setZoom] = useState(false);
// // //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
// // //   const [dragging, setDragging] = useState(false);
// // //   const [translate, setTranslate] = useState({ x: 0, y: 0 });
// // //   const initialMousePosition = useRef({ x: 0, y: 0 });
// // //   const initialTranslate = useRef({ x: 0, y: 0 });

// // //   // Handle double-click to zoom
// // //   const handleDoubleClick = (event) => {
// // //     const { offsetX, offsetY, target } = event.nativeEvent;
// // //     const { offsetWidth, offsetHeight } = target;

// // //     // Calculate the zoom origin point in percentage
// // //     const x = `${(offsetX / offsetWidth) * 100}%`;
// // //     const y = `${(offsetY / offsetHeight) * 100}%`;

// // //     setZoomPosition({ x, y });
// // //     setZoom(true);
// // //   };

// // //   // Handle zoom out
// // //   const handleZoomOut = () => {
// // //     setZoom(false);
// // //     setTranslate({ x: 0, y: 0 }); // Reset translation to default view
// // //   };

// // //   // Start dragging on mouse down
// // //   const handleMouseDown = (event) => {
// // //     if (zoom) {
// // //       setDragging(true);
// // //       initialMousePosition.current = { x: event.clientX, y: event.clientY };
// // //       initialTranslate.current = { ...translate };
// // //     }
// // //   };

// // //   // Update position while dragging
// // //   const handleMouseMove = (event) => {
// // //     if (dragging && zoom) {
// // //       const deltaX = event.clientX - initialMousePosition.current.x;
// // //       const deltaY = event.clientY - initialMousePosition.current.y;

// // //       setTranslate({
// // //         x: initialTranslate.current.x + deltaX,
// // //         y: initialTranslate.current.y + deltaY,
// // //       });
// // //     }
// // //   };

// // //   // Stop dragging on mouse up
// // //   const handleMouseUp = () => {
// // //     setDragging(false);
// // //   };

// // //   return (
// // //     <div
// // //       className="relative w-full h-screen bg-gray-200 overflow-hidden"
// // //       onMouseDown={handleMouseDown}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseUp={handleMouseUp}
// // //     >
// // //       {/* Image Container */}
// // //       <div
// // //         onDoubleClick={handleDoubleClick}
// // //         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-2 md:scale-[2.5] lg:scale-3' : 'scale-100'
// // //           }`}
// // //         style={{
// // //           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
// // //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// // //           transform: zoom
// // //             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
// // //             : 'scale(1) translate(0, 0)',
// // //           cursor: zoom ? 'grab' : 'auto', // Set cursor to indicate draggable when zoomed
// // //         }}
// // //         onMouseDown={(e) => zoom && e.preventDefault()} // Prevent text selection on drag
// // //       />

// // //       {/* Zoom Out Button */}
// // //       {zoom && (
// // //         <button
// // //           onClick={handleZoomOut}
// // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded-sm shadow-lg hover:bg-gray-300"
// // //         >
// // //           Zoom Out
// // //         </button>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ZoomableImage;
// // // import React, { useState, useRef } from 'react';

// // // const ZoomableImage = () => {
// // //   const [zoom, setZoom] = useState(false);
// // //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
// // //   const [dragging, setDragging] = useState(false);
// // //   const [translate, setTranslate] = useState({ x: 0, y: 0 });
// // //   const initialMousePosition = useRef({ x: 0, y: 0 });
// // //   const initialTranslate = useRef({ x: 0, y: 0 });

// // //   // Handle double-click to zoom
// // //   const handleDoubleClick = (event) => {
// // //     const { offsetX, offsetY, target } = event.nativeEvent;
// // //     const { offsetWidth, offsetHeight } = target;

// // //     const x = `${(offsetX / offsetWidth) * 100}%`;
// // //     const y = `${(offsetY / offsetHeight) * 100}%`;

// // //     setZoomPosition({ x, y });
// // //     setZoom(true);
// // //   };

// // //   // Handle zoom out
// // //   const handleZoomOut = () => {
// // //     setZoom(false);
// // //     setTranslate({ x: 0, y: 0 }); // Reset to default position
// // //   };

// // //   // Start dragging
// // //   const handleMouseDown = (event) => {
// // //     if (zoom) {
// // //       setDragging(true);
// // //       initialMousePosition.current = { x: event.clientX, y: event.clientY };
// // //       initialTranslate.current = { ...translate };
// // //     }
// // //   };

// // //   // Drag movement with immediate response
// // //   const handleMouseMove = (event) => {
// // //     if (dragging && zoom) {
// // //       const deltaX = event.clientX - initialMousePosition.current.x;
// // //       const deltaY = event.clientY - initialMousePosition.current.y;

// // //       // Calculate new position and restrict it within bounds
// // //       const newTranslateX = initialTranslate.current.x + deltaX;
// // //       const newTranslateY = initialTranslate.current.y + deltaY;

// // //       // Determine boundaries based on the zoom scale and viewport
// // //       const scale = 2.5; // Scale factor for zoom level
// // //       const viewportWidth = window.innerWidth;
// // //       const viewportHeight = window.innerHeight;

// // //       // Calculate boundary limits
// // //       const maxTranslateX = (viewportWidth * (scale - 1)) / 4;
// // //       const maxTranslateY = (viewportHeight * (scale - 1)) / 2;

// // //       // Apply restrictions and update translation
// // //       setTranslate({
// // //         x: Math.min(maxTranslateX, Math.max(-maxTranslateX, newTranslateX)),
// // //         y: Math.min(maxTranslateY, Math.max(-maxTranslateY, newTranslateY)),
// // //       });
// // //     }
// // //   };

// // //   // Stop dragging
// // //   const handleMouseUp = () => {
// // //     setDragging(false);
// // //   };

// // //   return (
// // //     <div
// // //       className="relative w-full h-screen bg-gray-200 overflow-hidden"
// // //       onMouseDown={handleMouseDown}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseUp={handleMouseUp}
// // //     >
// // //       {/* Image Container */}
// // //       <div
// // //         onDoubleClick={handleDoubleClick}
// // //         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'} ${zoom ? 'scale-2 md:scale-[2.5] lg:scale-3' : 'scale-100'}`}
// // //         style={{
// // //           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
// // //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// // //           transform: zoom
// // //             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
// // //             : 'scale(1) translate(0, 0)',
// // //           cursor: zoom ? 'grab' : 'auto',
// // //         }}
// // //         onMouseDown={(e) => zoom && e.preventDefault()} // Prevent text selection during drag
// // //       />

// // //       {/* Zoom Out Button */}
// // //       {zoom && (
// // //         <button
// // //           onClick={handleZoomOut}
// // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded-sm shadow-lg hover:bg-gray-300"
// // //         >
// // //           Zoom Out
// // //         </button>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ZoomableImage;
// // // import React, { useState, useRef } from 'react';

// // // const ZoomableImage = () => {
// // //   const [zoom, setZoom] = useState(false);
// // //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
// // //   const [dragging, setDragging] = useState(false);
// // //   const [translate, setTranslate] = useState({ x: 0, y: 0 });
// // //   const initialMousePosition = useRef({ x: 0, y: 0 });
// // //   const initialTranslate = useRef({ x: 0, y: 0 });

// // //   // Handle double-click to toggle zoom
// // //   const handleDoubleClick = (event) => {
// // //     if (zoom) {
// // //       // Zoom out if already zoomed in
// // //       setZoom(false);
// // //       setTranslate({ x: 0, y: 0 });
// // //     } else {
// // //       // Zoom in if currently zoomed out
// // //       const { offsetX, offsetY, target } = event.nativeEvent;
// // //       const { offsetWidth, offsetHeight } = target;

// // //       const x = `${(offsetX / offsetWidth) * 100}%`;
// // //       const y = `${(offsetY / offsetHeight) * 100}%`;

// // //       setZoomPosition({ x, y });
// // //       setZoom(true);
// // //     }
// // //   };

// // //   // Start dragging
// // //   const handleMouseDown = (event) => {
// // //     if (zoom) {
// // //       setDragging(true);
// // //       initialMousePosition.current = { x: event.clientX, y: event.clientY };
// // //       initialTranslate.current = { ...translate };
// // //     }
// // //   };

// // //   // Handle drag movement with boundary restrictions
// // //   const handleMouseMove = (event) => {
// // //     if (dragging && zoom) {
// // //       const deltaX = event.clientX - initialMousePosition.current.x;
// // //       const deltaY = event.clientY - initialMousePosition.current.y;

// // //       const newTranslateX = initialTranslate.current.x + deltaX;
// // //       const newTranslateY = initialTranslate.current.y + deltaY;

// // //       const scale = 2.5;
// // //       const viewportWidth = window.innerWidth;
// // //       const viewportHeight = window.innerHeight;

// // //       const maxTranslateX = (viewportWidth * (scale - 1)) / 2;
// // //       const maxTranslateY = (viewportHeight * (scale - 1)) / 2;

// // //       setTranslate({
// // //         x: Math.min(maxTranslateX, Math.max(-maxTranslateX, newTranslateX)),
// // //         y: Math.min(maxTranslateY, Math.max(-maxTranslateY, newTranslateY)),
// // //       });
// // //     }
// // //   };

// // //   // Stop dragging
// // //   const handleMouseUp = () => setDragging(false);

// // //   return (
// // //     <div
// // //       className="relative w-full h-screen bg-gray-200 overflow-hidden"
// // //       onMouseDown={handleMouseDown}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseUp={handleMouseUp}
// // //       onMouseLeave={handleMouseUp}
// // //     >
// // //       {/* Image Container */}
// // //       <div
// // //         onDoubleClick={handleDoubleClick}
// // //         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}`}
// // //         style={{
// // //           backgroundImage: 'url(/public/fridge/kitchen.jpg)',
// // //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// // //           transform: zoom
// // //             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
// // //             : 'scale(1) translate(0, 0)',
// // //           cursor: zoom ? 'grab' : 'auto',
// // //         }}
// // //         onMouseDown={(e) => zoom && e.preventDefault()}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default ZoomableImage;
// import React, { useState, useRef } from 'react';
// import Fridge from './Fridge';

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
//       setZoom(false);
//       setTranslate({ x: 0, y: 0 });
//     } else {
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

//       const scale = 2.5;
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       // Calculate scaled image dimensions
//       const scaledWidth = viewportWidth * scale;
//       const scaledHeight = viewportHeight * scale;

//       // Maximum translation values to keep the edges visible
//       const maxTranslateX = (scaledWidth - viewportWidth) / 2;
//       const maxTranslateY = (scaledHeight - viewportHeight) / 2;

//       const newTranslateX = initialTranslate.current.x + deltaX;
//       const newTranslateY = initialTranslate.current.y + deltaY;

//       setTranslate({
//         x: Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX)),
//         y: Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY)),
//       });
//     }
//   };

//   // Stop dragging
//   const handleMouseUp = () => setDragging(false);
//   return (
//     <div
//       className="relative w-full h-screen bg-blue-200 overflow-hidden"
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
//           backgroundImage: 'url(/public/fridge/kitchen2.jpg)',
//           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
//           transform: zoom
//             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
//             : 'scale(1) translate(0, 0)',
//           cursor: zoom ? 'grab' : 'auto',
//         }}
//         onMouseDown={(e) => zoom && e.preventDefault()}
//       >
//         {/* Fridge Component positioned on the left side */}
//         {/* <div
//           className="absolute w-64 top-[32%] left-[5%]"
//         >
//           <Fridge />
//         </div> */}
//       </div>
//     </div>
//   );


//   // ////////////////////////////////////////////////////////
//   // ////////////////////////////////////////////////////////
//   // ////////////////////////////////////////////////////////
//   // ////////////////////////////////////////////////////////


  
//   // return (
//   //   <div
//   //     className="relative w-full h-screen bg-blue-200 overflow-hidden"
//   //     onMouseDown={handleMouseDown}
//   //     onMouseMove={handleMouseMove}
//   //     onMouseUp={handleMouseUp}
//   //     onMouseLeave={handleMouseUp}
//   //   >
//   //     <div className=''>
//   //       <Fridge />
//   //     </div>
//   //     {/* Image Container */}
//   //     <div
//   //       onDoubleClick={handleDoubleClick}
//   //       className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}


//   //         `
//   //       }
//   //       style={{
//   //         backgroundImage: 'url(/public/fridge/kitchen2.jpg)',
//   //         transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
//   //         transform: zoom
//   //           ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
//   //           : 'scale(1) translate(0, 0)',
//   //         cursor: zoom ? 'grab' : 'auto',
//   //       }}
//   //       onMouseDown={(e) => zoom && e.preventDefault()}
//   //     />
//   //   </div>
//   // );
// };

// export default ZoomableImage;
// // import React, { useEffect, useRef } from 'react';
// // import * as THREE from 'three';

// // const EquirectangularPanorama = () => {
// //   const containerRef = useRef(null);
// //   let camera, scene, renderer;
// //   let isUserInteracting = false;
// //   let onPointerDownMouseX = 0, onPointerDownMouseY = 0;
// //   let lon = 0, onPointerDownLon = 0;
// //   let lat = 0, onPointerDownLat = 0;
// //   let phi = 0, theta = 0;

// //   useEffect(() => {
// //     init();
// //     window.addEventListener('resize', onWindowResize);

// //     return () => {
// //       window.removeEventListener('resize', onWindowResize);
// //     };
// //   }, []);

// //   const init = () => {
// //     const container = containerRef.current;

// //     // Set up the camera
// //     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

// //     // Set up the scene
// //     scene = new THREE.Scene();

// //     // Create a sphere geometry and scale it to point inward
// //     const geometry = new THREE.SphereGeometry(500, 60, 40);
// //     geometry.scale(-1, 1, 1);

// //     // Load the texture for the panorama
// //     const texture = new THREE.TextureLoader().load('/public/fridge/kitchen2.jpg');
// //     texture.colorSpace = THREE.SRGBColorSpace;
// //     const material = new THREE.MeshBasicMaterial({ map: texture });

// //     const mesh = new THREE.Mesh(geometry, material);
// //     scene.add(mesh);

// //     // Set up the renderer
// //     renderer = new THREE.WebGLRenderer();
// //     renderer.setPixelRatio(window.devicePixelRatio);
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     renderer.setAnimationLoop(animate);
// //     container.appendChild(renderer.domElement);

// //     container.style.touchAction = 'none';
// //     container.addEventListener('pointerdown', onPointerDown);

// //     document.addEventListener('wheel', onDocumentMouseWheel);
// //   };

// //   const onWindowResize = () => {
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //   };

// //   const onPointerDown = (event) => {
// //     if (!event.isPrimary) return;

// //     isUserInteracting = true;
// //     onPointerDownMouseX = event.clientX;
// //     onPointerDownMouseY = event.clientY;
// //     onPointerDownLon = lon;
// //     onPointerDownLat = lat;

// //     document.addEventListener('pointermove', onPointerMove);
// //     document.addEventListener('pointerup', onPointerUp);
// //   };

// //   const onPointerMove = (event) => {
// //     if (!event.isPrimary) return;

// //     lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
// //     lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
// //   };

// //   const onPointerUp = (event) => {
// //     if (!event.isPrimary) return;

// //     isUserInteracting = false;
// //     document.removeEventListener('pointermove', onPointerMove);
// //     document.removeEventListener('pointerup', onPointerUp);
// //   };

// //   const onDocumentMouseWheel = (event) => {
// //     const fov = camera.fov + event.deltaY * 0.05;
// //     camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
// //     camera.updateProjectionMatrix();
// //   };

// //   const animate = () => {
// //     // Remove or comment out the following line to stop automatic rotation
// //     // if (!isUserInteracting) lon += 0.1;
  
// //     lat = Math.max(-85, Math.min(85, lat));
// //     phi = THREE.MathUtils.degToRad(90 - lat);
// //     theta = THREE.MathUtils.degToRad(lon);
  
// //     const x = 500 * Math.sin(phi) * Math.cos(theta);
// //     const y = 500 * Math.cos(phi);
// //     const z = 500 * Math.sin(phi) * Math.sin(theta);
  
// //     camera.lookAt(x, y, z);
// //     renderer.render(scene, camera);
// //   };
  

// //   return (
// //     <div>
// //       <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}></div>
// //       <div id="info" style={{ position: 'absolute', top: 0, padding: '10px', color: 'white' }}>
// //         <a href="#" target="_blank" rel="noopener noreferrer">three.js webgl</a> - equirectangular panorama demo. Photo by <a href="http://www.flickr.com/photos/jonragnarsson/2294472375/" target="_blank" rel="noopener noreferrer">Jón Ragnarsson</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EquirectangularPanorama;



// //////////////////////////////
// //////////////////////////////
// //////////////////////////////
// //////////////////////////////

// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment, Html, useGLTF } from '@react-three/drei';

// const Model = ({ url }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} />;
// };

// const ThreeDModelViewer = ({ modelUrl }) => {
//   return (
//     <Canvas
//       style={{ width: '100%', height: '100vh' }}
//       camera={{ position: [0, 1, 5], fov: 50 }}
//     >
//       <Suspense fallback={<Html>Loading 3D model...</Html>}>
//         <Model url={modelUrl} />
//         <OrbitControls />
//         <Environment preset="sunset" />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ThreeDModelViewer;
