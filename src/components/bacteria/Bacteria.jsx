import BacteriaImage from '/images/bacteria.png';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bacteria = BacteriaImage;

function CursorTrackingImage({ imageUrl, size = 100 }) {
  // State to keep track of the cursor's x and y positions
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Makes sure the div does not interfere with clicks
        zIndex: 1000, // Make sure it appears above other content
      }}
      // Bind x and y position to cursor's coordinates
      animate={{
        x: cursorPosition.x - size / 2, // Center the image around the cursor
        y: cursorPosition.y - size / 2,
      }}
      transition={{
        type: 'spring',
        stiffness: 100, // Adjust stiffness for a smoother or quicker movement
        damping: 10,    // Adjust damping to control the "bounce"
      }}
    >
      <img
      className='w-[20%]'
        src={bacteria}
        alt='Cursor Tracking'
        // style={{
        //   width: size,
        //   height: size,
        //   borderRadius: '50%', 
        // }}
      />
    </motion.div>
  );
}

export default CursorTrackingImage;
