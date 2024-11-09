import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";

export const ScrollAnimations = () => {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <div className="relative z-10">
        <div className="h-[150vh]" />
        <WhileInView />
        <div className="h-[150vh]" />
      </div>
    </div>
  );
};

const WhileInView = () => {
  return (
    <div className="relative mx-auto grid h-32 w-96 place-content-center">
      <ScrollRotatingImage />
    </div>
  );
};

const ScrollRotatingImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);

  return (
    <div className="!bg-black flex h-screen overflow-hidden z-50">
      {/* Circle 1 */}
      <motion.img
        ref={ref}
        src="/public/images/Group66.svg"
        alt="circle1"
        className="absolute transition-transform duration-200 ease-in-out"
        animate={{
          rotate: isInView ? [180, 0] : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Centering circle1
      />

      {/* Circle 2 */}
      <motion.img
        ref={ref}
        src="/public/images/Group66.svg"
        alt="circle2"
        className="absolute transition-transform duration-200 ease-in-out"
        animate={{
          rotate: isInView ? [0, 180] : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.4)', // Centering circle2 and scaling down further
        }}
      />
    </div>


  );
};
