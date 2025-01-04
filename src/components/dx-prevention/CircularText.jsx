import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import './CircularText.css';

const CircularText = forwardRef((props, ref) => {
  const text = "Prevent Disease Before it Starts ";
  const textArray = text.split("");

  return (
    <motion.div
      className="circular-text"
      ref={ref}
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {textArray.map((char, index) => (
        <span
          key={index}
          className="char text-pink"
          style={{ transform: `rotate(${index * (360 / textArray.length)}deg)` }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
});

// Set display name for the component
CircularText.displayName = 'CircularText';

export default CircularText;
