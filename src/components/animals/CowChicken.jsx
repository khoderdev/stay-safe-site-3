import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cow from "./Cow";

function CowChickenPage() {
  // Get the scroll progress
  const { scrollY } = useScroll();

  // Use the scrollY to create a parallax effect for each component
  const cowY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax range for Cow
  const chickenY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax range for Chicken (same direction)

  return (
    <div className="flex items-center justify-between w-full px-4">
      {/* Animate Cow component */}
      <motion.div
        className=""
        initial={{ rotateX: 0, rotateY: 0, z: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        style={{
          perspective: 800,
          y: cowY,
        }}
      >
        <Cow />
      </motion.div>
    </div>
  );
}

export default CowChickenPage;
