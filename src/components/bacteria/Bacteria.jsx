// import BacteriaImage from '/images/bacteria.png';
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const bacteria = BacteriaImage;

// function CursorTrackingImage({ imageUrl, size = 100 }) {
//   // State to keep track of the cursor's x and y positions
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Update cursor position on mouse move
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setCursorPosition({ x: event.clientX, y: event.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <motion.div
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         pointerEvents: 'none', // Makes sure the div does not interfere with clicks
//         zIndex: 1000, // Make sure it appears above other content
//       }}
//       // Bind x and y position to cursor's coordinates
//       animate={{
//         x: cursorPosition.x - size / 2, // Center the image around the cursor
//         y: cursorPosition.y - size / 2,
//       }}
//       transition={{
//         type: 'spring',
//         stiffness: 100, // Adjust stiffness for a smoother or quicker movement
//         damping: 10,    // Adjust damping to control the "bounce"
//       }}
//     >
//       <img
//       className='w-[20%]'
//         src={bacteria}
//         alt='Cursor Tracking'
//         // style={{
//         //   width: size,
//         //   height: size,
//         //   borderRadius: '50%', 
//         // }}
//       />
//     </motion.div>
//   );
// }

// export default CursorTrackingImage;
import BacteriaImage from '/images/bacteria.png';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CursorTrackingImage({ imageUrl, size = 100 }) {
  // State to keep track of the cursor's x and y positions
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Use motion values for smooth animations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use spring animation to smooth the cursor following behavior
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Calculate a "graceful" movement towards the cursor
      const xOffset = clientX - size / 2;
      const yOffset = clientY - size / 2;

      // Update motion values with the new positions
      x.set(xOffset);
      y.set(yOffset);

      // Update state (optional, for other uses if needed)
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, size]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Makes sure the div does not interfere with clicks
        zIndex: 1000, // Make sure it appears above other content
        x: springX,   // Use spring animations for smoother movements
        y: springY,
      }}
      // Add a subtle rotation effect based on cursor movement
      animate={{
        rotate: cursorPosition.x / window.innerWidth * 15 - 7.5, // Slight rotation based on horizontal position
      }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
      }}
    >
      <img
        className='w-[20%]'
        src={BacteriaImage}
        alt='Cursor Tracking'
        style={{
          width: size,
          height: size,
          willChange: 'transform', // Optimize performance
        }}
      />
    </motion.div>
  );
}

export default CursorTrackingImage;
