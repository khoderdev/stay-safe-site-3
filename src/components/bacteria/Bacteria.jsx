// // // // // import BacteriaImage from '/images/bacteria.png';
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // const bacteria = BacteriaImage;

// // // // // function CursorTrackingImage({ imageUrl, size = 100 }) {
// // // // //   // State to keep track of the cursor's x and y positions
// // // // //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

// // // // //   // Update cursor position on mouse move
// // // // //   useEffect(() => {
// // // // //     const handleMouseMove = (event) => {
// // // // //       setCursorPosition({ x: event.clientX, y: event.clientY });
// // // // //     };
// // // // //     window.addEventListener('mousemove', handleMouseMove);

// // // // //     // Cleanup the event listener on component unmount
// // // // //     return () => {
// // // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <motion.div
// // // // //       style={{
// // // // //         position: 'absolute',
// // // // //         top: 0,
// // // // //         left: 0,
// // // // //         pointerEvents: 'none', // Makes sure the div does not interfere with clicks
// // // // //         zIndex: 1000, // Make sure it appears above other content
// // // // //       }}
// // // // //       // Bind x and y position to cursor's coordinates
// // // // //       animate={{
// // // // //         x: cursorPosition.x - size / 2, // Center the image around the cursor
// // // // //         y: cursorPosition.y - size / 2,
// // // // //       }}
// // // // //       transition={{
// // // // //         type: 'spring',
// // // // //         stiffness: 100, // Adjust stiffness for a smoother or quicker movement
// // // // //         damping: 10,    // Adjust damping to control the "bounce"
// // // // //       }}
// // // // //     >
// // // // //       <img
// // // // //       className='w-[20%]'
// // // // //         src={bacteria}
// // // // //         alt='Cursor Tracking'
// // // // //         // style={{
// // // // //         //   width: size,
// // // // //         //   height: size,
// // // // //         //   borderRadius: '50%',
// // // // //         // }}
// // // // //       />
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // export default CursorTrackingImage;
// // // // import BacteriaImage from '/images/bacteria.png';
// // // // import React, { useState, useEffect } from 'react';
// // // // import { motion, useMotionValue } from 'framer-motion';

// // // // function CursorTrackingImage({ size = 100 }) {
// // // //   // State to keep track of the cursor's x and y positions
// // // //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

// // // //   // Use motion values for smooth animations
// // // //   const x = useMotionValue(0);
// // // //   const y = useMotionValue(0);

// // // //   // Update cursor position on mouse move
// // // //   useEffect(() => {
// // // //     const handleMouseMove = (event) => {
// // // //       const { clientX, clientY } = event;

// // // //       // Calculate accurate positioning for the image center
// // // //       const xOffset = clientX - size / 2;
// // // //       const yOffset = clientY - size / 2;

// // // //       // Set motion values directly to avoid lag
// // // //       x.set(xOffset);
// // // //       y.set(yOffset);

// // // //       // Update state (optional, for other uses if needed)
// // // //       setCursorPosition({ x: clientX, y: clientY });
// // // //     };

// // // //     window.addEventListener('mousemove', handleMouseMove);

// // // //     // Cleanup the event listener on component unmount
// // // //     return () => {
// // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // //     };
// // // //   }, [x, y, size]);

// // // //   return (
// // // //     <motion.div
// // // //       style={{
// // // //         position: 'absolute',
// // // //         top: 0,
// // // //         left: 0,
// // // //         pointerEvents: 'none', // Makes sure the div does not interfere with clicks
// // // //         zIndex: 1000, // Make sure it appears above other content
// // // //         x,   // Use direct motion values for accuracy
// // // //         y,
// // // //       }}
// // // //     >
// // // //       <img
// // // //         className='w-[20%]'
// // // //         src={BacteriaImage}
// // // //         alt='Cursor Tracking'
// // // //         style={{
// // // //           width: size,
// // // //           height: size,
// // // //           willChange: 'transform', // Optimize performance
// // // //         }}
// // // //       />
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default CursorTrackingImage;

// // // import React from 'react';
// // // import { MouseTracker } from './MouseTracker';

// // // function Bacteria() {
// // // 	return <MouseTracker offset={{ x: 10, y: 10 }}>I TRACK U 👀</MouseTracker>;
// // // }

// // // export default Bacteria;
// // import React from 'react';
// // import { MouseTracker } from './MouseTracker';

// // function Bacteria() {
// // 	return (
// // 		<MouseTracker offset={{ x: 10, y: 10 }}>
// // 			I TRACK U 👀
// // 		</MouseTracker>
// // 	);
// // }

// // export default Bacteria;
// import React from 'react';
// import { useMousePosition } from 'react-use-mouse-position';

// function Bacteria() {
// 	// Get mouse position from the hook
// 	const { mouseX, mouseY } = useMousePosition();
// 	const imageRef = React.useRef(null);

// 	// Update the position of the image dynamically
// 	React.useEffect(() => {
// 		if (imageRef.current && mouseX != null && mouseY != null) {
// 			// Adjust the image's position based on mouse coordinates
// 			imageRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
// 		}
// 	}, [mouseX, mouseY]);

// 	return (
// 		<img
// 			src='/images/bacteria.png'
// 			ref={imageRef}
// 			className='w-1/2 absolute pointer-events-none' // Ensure the image follows the cursor
// 			style={{ top: 0, left: 0 }}
// 		/>
// 	);
// }

// export default Bacteria;
import React from 'react';
import { useMousePosition } from 'react-use-mouse-position';

function Bacteria() {
	// Get mouse position from the hook
	const { mouseX, mouseY } = useMousePosition();
	const imageRef = React.useRef(null);

	// Define an offset to make the image closer to the cursor
	const offset = { x: -20, y: -0 }; // Adjust these values as needed

	// Update the position of the image dynamically
	React.useEffect(() => {
		if (imageRef.current && mouseX != null && mouseY != null) {
			// Adjust the image's position based on mouse coordinates and the offset
			const adjustedX = mouseX + offset.x;
			const adjustedY = mouseY + offset.y;
			imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
		}
	}, [mouseX, mouseY]);

	return (
		<img
			src='/images/bacteria.png'
			ref={imageRef}
			className='w-40 sm:w-72 absolute pointer-events-none'
			style={{ top: 0, left: 0 }}
		/>
	);
}

export default Bacteria;
