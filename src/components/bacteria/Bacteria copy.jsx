import React from 'react';
import { useMousePosition } from 'react-use-mouse-position';
import { motion } from 'framer-motion';

function Bacteria() {
  const { mouseX, mouseY } = useMousePosition();
  const imageRef = React.useRef(null);
  const offset = { x: -20, y: -0 };

  React.useEffect(() => {
    if (imageRef.current && mouseX != null && mouseY != null) {
      const adjustedX = mouseX + offset.x;
      const adjustedY = mouseY + offset.y;
      imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
    }
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex flex-col select-none">
      {/* Grid Container */}
      <div className="grid grid-cols-12 grid-rows-5 gap-4 h-[100dvh] text-center text-5xl dark:text-white-bg2 font-semibold">
        <div className="col-span-8 row-span-1 col-start-3 text-3xl dark:text-white-bg2 flex justify-center items-end">
          BE ANTIBIOTICS AWARE
        </div>
        <div className="col-span-8 col-start-3 row-start-2 text-4xl dark:text-white-bg2">
          Everyone has a role to play in improving antibiotic use.
        </div>
        {/* Empty Row */}
			<br/>
        <div className="col-span-2 col-start-3 row-start-2 flex items-end justify-end">
          Get the
        </div>
        <div className="col-span-2 col-start-3 row-start-3 flex items-center justify-end">
          at the
        </div>
        <div className="col-span-2 col-start-3 row-start-4 flex justify-end">
          for the
        </div>
        <div className="col-span-2 col-start-9 row-start-2 flex items-end justify-start">
          antibiotic
        </div>
        <div className="col-span-2 col-start-9 row-start-3 flex items-center justify-start">
          dose
        </div>
        <div className="col-span-2 col-start-9 row-start-4 flex justify-start">
          duration
        </div>

        {/* Animated "Right" Word */}
        <motion.div
          className="col-span-4 row-span-3 col-start-5 row-start-2 text-[10rem] flex justify-center items-center font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }} // Fade in and out effect
          transition={{
            duration: 2, // Duration for one cycle
            repeat: Infinity, // Repeat indefinitely
            repeatType: 'loop', // Loop animation
            ease: 'easeInOut', // Smooth easing
          }}
        >
          Right
        </motion.div>
      </div>

      {/* Image Inside Grid */}
      <img
        src="/images/bacteria.png"
        ref={imageRef}
        className="w-40 sm:w-72 absolute pointer-events-none"
        style={{ top: -200, left: 30 }}
      />
    </div>
  );
}

export default Bacteria;
