import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SmallCircle from "./SmallCircle";
import { Text } from "./images";
import CTA from "./CTA";

function PrevelenceCircle({ scrollContainerRef }) {
  const [rotation, setRotation] = useState(0); // Accumulated rotation value
  const lastScrollTop = useRef(0); // Store the last scroll position

  // Listen to the scroll container's scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const currentScrollTop = scrollContainer.scrollTop; // Current scroll position
        const deltaY = currentScrollTop - lastScrollTop.current; // Scroll delta
        lastScrollTop.current = currentScrollTop; // Update the last scroll position

        // Adjust rotation based on scroll delta
        const spinMultiplier = 0.3; // Reduced for slower spinning
        setRotation((prev) => prev + deltaY * spinMultiplier);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  return (
    <div className="w-full h-full flex flex-col bg-black">
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-[220dvh] overflow-hidden bg-black -2 border-pink">
        {/* First Circle (Normal Spin) */}
        <motion.div
          initial={{ rotateX: 0, rotateY: 0, z: 0 }}
          animate={{
            rotate: rotation, // Bind accumulated rotation state
          }}
          transition={{
            type: "tween",
            duration: 0.1, // Smooth out quick scroll animations
            ease: "easeOut",
          }}
          style={{
            perspective: 800,
          }}
          className="absolute w-full sm:w-[60%] md:w-[80%] xl:w-full  flex items-center justify-center"
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
          initial={{ rotateX: 0, rotateY: 0, z: 0 }}
          animate={{
            rotate: -rotation, // Reverse the rotation direction
          }}
          transition={{
            type: "tween",
            duration: 0.1, // Smooth out quick scroll animations
            ease: "easeOut",
          }}
          style={{
            perspective: 800,
          }}
          className="absolute w-[72%] sm:w-[43%] md:w-[60%] xl:w-[55%] h-auto rounded-full flex items-center justify-center"
        >
          <SmallCircle />
        </motion.div>
      </div>
      <div className="">
        <CTA />
      </div>
    </div>
  );
}

export default PrevelenceCircle;
