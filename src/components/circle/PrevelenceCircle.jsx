// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import SmallCircle from "./SmallCircle";
// import { Text } from "./images";
// import CTA from "./CTA";

// function PrevelenceCircle() {
//   const { scrollY } = useScroll();
//   const rotationForward = useSpring(0, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const rotationReverse = useSpring(0, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     const updateRotation = () => {
//       const latest = scrollY.get();
//       const rotation = latest * 0.3; // Adjust multiplier for rotation speed
//       rotationForward.set(rotation);
//       rotationReverse.set(-rotation); // Opposite direction
//     };

//     window.addEventListener("scroll", updateRotation);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", updateRotation);
//     };
//   }, [scrollY, rotationForward, rotationReverse]);

//   return (
//     <div className="w-full h-full flex flex-col ">
//       <div className="relative z-40 flex flex-col items-center justify-center w-full min-h-screen md:h-[200dvh] overflow-hidden">
//         {/* First Circle (Normal Spin) */}
//         <motion.div
//           style={{
//             rotate: rotationForward,
//             perspective: 800,
//           }}
//           className="absolute w-full flex items-center justify-center z-40 h-[100%] sm:h-[120%] lg:h-[50%] xl:h-[60%] 2xl:w-[43%]"
//         >
//           <SmallCircle />
//         </motion.div>

//         <div className="w-[50%] flex items-center justify-center md:pl-6 xl:pl-10 2xl:pr-10 z-40">
//           <div className="mr-4">
//             <img
//               className="w-10 sm:w-[7rem] md:w-[8rem] lg:w-[7rem] xl:w-[9rem] z-40"
//               src={Text}
//               alt="1in6"
//             />
//           </div>
//           <div className="w-52 sm:w-64 md:w-96 lg:w-[50%] md:pl-2">
//             <p className="xsm:text-[0.6rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.8rem] font-semibold text-white-bg text-justify">
//               One in Six children and adolescents (ages 2-19) are overweight.
//               Globally, over one billion people live with obesity, including
//               nearly 880 million adults and 159 million youths.
//             </p>
//           </div>
//         </div>
//         {/* Second Circle (Opposite Spin) */}
//         <motion.div
//           style={{
//             rotate: rotationReverse,
//             perspective: 800,
//           }}
//           className="absolute w-[70%] h-[87%] sm:w-[80%] sm:h-[50%] md:h-[80%] lg:w-[63%] xl:h-[50%] xl:w-[65%] 2xl:w-[60%] z-40 rounded-full flex items-center justify-center"
//         >
//           <SmallCircle />
//         </motion.div>
//       </div>
//       <div className="px-6 md:mt-16">
//         <CTA />
//       </div>
//     </div>
//   );
// }

// export default PrevelenceCircle;


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
    restDelta: 0.001,
  });

  const rotationReverse = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateRotation = () => {
      const latest = scrollY.get();
      const rotation = latest * 0.3; // Adjust multiplier for rotation speed
      rotationForward.set(rotation);
      rotationReverse.set(-rotation); // Opposite direction
    };

    window.addEventListener("scroll", updateRotation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateRotation);
    };
  }, [scrollY, rotationForward, rotationReverse]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center justify-center w-full min-h-screen md:h-[200dvh] overflow-hidden">
        {/* First Circle (Normal Spin) */}
        <motion.div
          style={{
            rotate: rotationForward,
            perspective: 800,
          }}
          className="absolute w-full h-full flex items-center justify-center z-40"
          // className="absolute w-full flex items-center justify-center z-40 h-[100%] sm:h-[120%] lg:h-[50%] xl:h-[60%] 2xl:w-[43%]"
        >
          <SmallCircle />
        </motion.div>

        {/* Text Content */}
        {/* <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 sm:px-6 lg:px-8 z-40">
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"> */}
          <div className="w-[50%] flex items-center justify-center md:pl-6 xl:pl-10 2xl:pr-10 z-40">
          <div className="mr-4">
            <img
              className="w-10 sm:w-[7rem] md:w-[8rem] lg:w-[7rem] xl:w-[9rem] z-40"
              src={Text}
              alt="1in6"
            />
          </div>
          <div className="w-1/2">
            <p className="xsm:text-[0.6rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.8rem] font-semibold text-white-bg text-justify">
              One in Six children and adolescents (ages 2-19) are overweight. Globally, over one billion people live with obesity, including nearly 880 million adults and 159 million youths.
            </p>
          </div>
        </div>

        {/* Second Circle (Opposite Spin) */}
        <motion.div
          style={{
            rotate: rotationReverse,
            perspective: 800,
          }}
          className="absolute w-[70%] h-[70%] sm:w-[75%] sm:h-[75%] xl:w-[70%] xl:h-[70%] 2xl:w-[60%] 2xl:h-[60%] z-40 rounded-full flex items-center justify-center"
        >
          <SmallCircle />
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <CTA />
      </div>
    </div>
  );
}

export default PrevelenceCircle;