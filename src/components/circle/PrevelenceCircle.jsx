import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SmallCircle from "./SmallCircle";
import { Text } from "./images";
import CTA from "./CTA";

function PrevelenceCircle() {
  const { scrollY } = useScroll();
  const rotationForward = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const rotationReverse = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const rotation = latest * 0.1; // Adjust multiplier for rotation speed
      rotationForward.set(rotation);
      rotationReverse.set(-rotation); // Opposite direction
    });
  }, [scrollY, rotationForward, rotationReverse]);

  return (
    <div className="w-full h-full flex flex-col bg-black">
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-[200dvh] overflow-hidden bg-black -2 border-pink">
        {/* First Circle (Normal Spin) */}
        <motion.div
          style={{
            rotate: rotationForward,
            perspective: 800,
          }}
          className="absolute w-full sm:w-[60%] md:w-[80%] xl:w-full flex items-center justify-center"
        >
          <SmallCircle />
        </motion.div>

        <div className="w-[50%] sm:w-[30%] md:w-[40%] xl:w-[37%] flex items-center justify-center md:pl-6 xl:pl-10 z-50 ">
          <div className="mr-4">
            <img className="w-10 md:w-20 xl:w-44 z-50" src={Text} alt="1in6" />
          </div>
          <div className="w-28 md:w-80 xl:w-[60%] md:pl-2">
            <p className="text-[0.5rem] md:text-lg xl:text-2xl font-semibold text-white-bg text-justify">
              One in Six children and adolescents (ages 2-19) are overweight.
              Globally, over one billion people live with obesity, including
              nearly 880 million adults and 159 million youths.
            </p>
          </div>
        </div>
        {/* Second Circle (Opposite Spin) */}
        <motion.div
          style={{
            rotate: rotationReverse,
            perspective: 800,
          }}
          className="absolute w-[72%] sm:w-[43%] md:w-[60%] xl:w-[55%] h-auto rounded-full flex items-center justify-center"
        >
          <SmallCircle />
        </motion.div>
      </div>
      <div className="px-6">
        <CTA />
      </div>
    </div>
  );
}

export default PrevelenceCircle;
