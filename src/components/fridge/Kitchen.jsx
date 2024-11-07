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
// // // //         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'
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
// // // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
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
// // //         className={`w-full h-full bg-cover bg-center transition-transform duration-500 ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'
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
// // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
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
// // //         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'} ${zoom ? 'scale-[2] md:scale-[2.5] lg:scale-[3]' : 'scale-100'}`}
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
// // //           className="absolute top-4 right-4 p-2 bg-white text-black rounded shadow-lg hover:bg-gray-300"
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
// // import React, { useState, useRef } from 'react';
// // import Fridge from './Fridge';

// // const ZoomableImage = () => {
// //   const [zoom, setZoom] = useState(false);
// //   const [zoomPosition, setZoomPosition] = useState({ x: '50%', y: '50%' });
// //   const [dragging, setDragging] = useState(false);
// //   const [translate, setTranslate] = useState({ x: 0, y: 0 });
// //   const initialMousePosition = useRef({ x: 0, y: 0 });
// //   const initialTranslate = useRef({ x: 0, y: 0 });

// //   // Handle double-click to toggle zoom
// //   const handleDoubleClick = (event) => {
// //     if (zoom) {
// //       setZoom(false);
// //       setTranslate({ x: 0, y: 0 });
// //     } else {
// //       const { offsetX, offsetY, target } = event.nativeEvent;
// //       const { offsetWidth, offsetHeight } = target;

// //       const x = `${(offsetX / offsetWidth) * 100}%`;
// //       const y = `${(offsetY / offsetHeight) * 100}%`;

// //       setZoomPosition({ x, y });
// //       setZoom(true);
// //     }
// //   };

// //   // Start dragging
// //   const handleMouseDown = (event) => {
// //     if (zoom) {
// //       setDragging(true);
// //       initialMousePosition.current = { x: event.clientX, y: event.clientY };
// //       initialTranslate.current = { ...translate };
// //     }
// //   };

// //   // Handle drag movement with boundary restrictions
// //   const handleMouseMove = (event) => {
// //     if (dragging && zoom) {
// //       const deltaX = event.clientX - initialMousePosition.current.x;
// //       const deltaY = event.clientY - initialMousePosition.current.y;

// //       const scale = 2.5;
// //       const viewportWidth = window.innerWidth;
// //       const viewportHeight = window.innerHeight;

// //       // Calculate scaled image dimensions
// //       const scaledWidth = viewportWidth * scale;
// //       const scaledHeight = viewportHeight * scale;

// //       // Maximum translation values to keep the edges visible
// //       const maxTranslateX = (scaledWidth - viewportWidth) / 2;
// //       const maxTranslateY = (scaledHeight - viewportHeight) / 2;

// //       const newTranslateX = initialTranslate.current.x + deltaX;
// //       const newTranslateY = initialTranslate.current.y + deltaY;

// //       setTranslate({
// //         x: Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX)),
// //         y: Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY)),
// //       });
// //     }
// //   };

// //   // Stop dragging
// //   const handleMouseUp = () => setDragging(false);
// //   return (
// //     <div
// //       className="relative w-full h-screen bg-blue-200 overflow-hidden"
// //       onMouseDown={handleMouseDown}
// //       onMouseMove={handleMouseMove}
// //       onMouseUp={handleMouseUp}
// //       onMouseLeave={handleMouseUp}
// //     >
// //       {/* Image Container */}
// //       <div
// //         onDoubleClick={handleDoubleClick}
// //         className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}`}
// //         style={{
// //           backgroundImage: 'url(/public/fridge/kitchen2.jpg)',
// //           transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// //           transform: zoom
// //             ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
// //             : 'scale(1) translate(0, 0)',
// //           cursor: zoom ? 'grab' : 'auto',
// //         }}
// //         onMouseDown={(e) => zoom && e.preventDefault()}
// //       >
// //         {/* Fridge Component positioned on the left side */}
// //         <div
// //           className="absolute w-64 top-[32%] left-[5%]"
// //         >
// //           <Fridge />
// //         </div>
// //       </div>
// //     </div>
// //   );
// //   // return (
// //   //   <div
// //   //     className="relative w-full h-screen bg-blue-200 overflow-hidden"
// //   //     onMouseDown={handleMouseDown}
// //   //     onMouseMove={handleMouseMove}
// //   //     onMouseUp={handleMouseUp}
// //   //     onMouseLeave={handleMouseUp}
// //   //   >
// //   //     <div className=''>
// //   //       <Fridge />
// //   //     </div>
// //   //     {/* Image Container */}
// //   //     <div
// //   //       onDoubleClick={handleDoubleClick}
// //   //       className={`w-full h-full bg-cover bg-center ${zoom ? '' : 'transition-transform duration-500'}


// //   //         `
// //   //       }
// //   //       style={{
// //   //         backgroundImage: 'url(/public/fridge/kitchen2.jpg)',
// //   //         transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
// //   //         transform: zoom
// //   //           ? `scale(2.5) translate(${translate.x}px, ${translate.y}px)`
// //   //           : 'scale(1) translate(0, 0)',
// //   //         cursor: zoom ? 'grab' : 'auto',
// //   //       }}
// //   //       onMouseDown={(e) => zoom && e.preventDefault()}
// //   //     />
// //   //   </div>
// //   // );
// // };

// // export default ZoomableImage;
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const EquirectangularPanorama = () => {
//   const containerRef = useRef(null);
//   let camera, scene, renderer;
//   let isUserInteracting = false;
//   let onPointerDownMouseX = 0, onPointerDownMouseY = 0;
//   let lon = 0, onPointerDownLon = 0;
//   let lat = 0, onPointerDownLat = 0;
//   let phi = 0, theta = 0;

//   useEffect(() => {
//     init();
//     window.addEventListener('resize', onWindowResize);

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//     };
//   }, []);

//   const init = () => {
//     const container = containerRef.current;

//     // Set up the camera
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

//     // Set up the scene
//     scene = new THREE.Scene();

//     // Create a sphere geometry and scale it to point inward
//     const geometry = new THREE.SphereGeometry(500, 60, 40);
//     geometry.scale(-1, 1, 1);

//     // Load the texture for the panorama
//     const texture = new THREE.TextureLoader().load('/public/fridge/kitchen2.jpg');
//     texture.colorSpace = THREE.SRGBColorSpace;
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // Set up the renderer
//     renderer = new THREE.WebGLRenderer();
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setAnimationLoop(animate);
//     container.appendChild(renderer.domElement);

//     container.style.touchAction = 'none';
//     container.addEventListener('pointerdown', onPointerDown);

//     document.addEventListener('wheel', onDocumentMouseWheel);
//   };

//   const onWindowResize = () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   };

//   const onPointerDown = (event) => {
//     if (!event.isPrimary) return;

//     isUserInteracting = true;
//     onPointerDownMouseX = event.clientX;
//     onPointerDownMouseY = event.clientY;
//     onPointerDownLon = lon;
//     onPointerDownLat = lat;

//     document.addEventListener('pointermove', onPointerMove);
//     document.addEventListener('pointerup', onPointerUp);
//   };

//   const onPointerMove = (event) => {
//     if (!event.isPrimary) return;

//     lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
//     lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
//   };

//   const onPointerUp = (event) => {
//     if (!event.isPrimary) return;

//     isUserInteracting = false;
//     document.removeEventListener('pointermove', onPointerMove);
//     document.removeEventListener('pointerup', onPointerUp);
//   };

//   const onDocumentMouseWheel = (event) => {
//     const fov = camera.fov + event.deltaY * 0.05;
//     camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
//     camera.updateProjectionMatrix();
//   };

//   const animate = () => {
//     if (!isUserInteracting) lon += 0.1;

//     lat = Math.max(-85, Math.min(85, lat));
//     phi = THREE.MathUtils.degToRad(90 - lat);
//     theta = THREE.MathUtils.degToRad(lon);

//     const x = 500 * Math.sin(phi) * Math.cos(theta);
//     const y = 500 * Math.cos(phi);
//     const z = 500 * Math.sin(phi) * Math.sin(theta);

//     camera.lookAt(x, y, z);
//     renderer.render(scene, camera);
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}></div>
//       <div id="info" style={{ position: 'absolute', top: 0, padding: '10px', color: 'white' }}>
//         <a href="#" target="_blank" rel="noopener noreferrer">three.js webgl</a> - equirectangular panorama demo. Photo by <a href="http://www.flickr.com/photos/jonragnarsson/2294472375/" target="_blank" rel="noopener noreferrer">Jón Ragnarsson</a>
//       </div>
//     </div>
//   );
// };

// export default EquirectangularPanorama;
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875

const Kitchen = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#191920']} />
    <fog attach="fog" args={['#191920', 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
                  
      </mesh>
    </group>
    <Environment preset="city" />
  </Canvas>
)

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}
export default Kitchen;