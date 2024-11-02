// import React, { useEffect, useRef } from "react";
// import {
//   motion,
//   useInView,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// export const ScrollAnimations = () => {
//   return (
//     <div className="bg-zinc-950 text-zinc-50">
//       <div className="relative z-10">
//         <div className="h-[150vh]" />
//         <WhileInView />
//         <div className="h-[150vh]" />
//       </div>
//       <div
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
//         }}
//         className="fixed inset-0"
//       />
//     </div>
//   );
// };

// const WhileInView = () => {
//   return (
//     <div className="relative mx-auto grid h-32 w-96 place-content-center">
//       <h1 className="relative z-0 text-3xl font-black uppercase">
//         Show me on scroll
//       </h1>
//       <motion.div
//         initial={{
//           opacity: 1,
//         }}
//         whileInView={{
//           opacity: 0,
//         }}
//         viewport={{
//           amount: "all",
//         }}
//         onViewportEnter={() => console.log("Enter!")}
//         onViewportLeave={() => console.log("Exit!")}
//         className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
//       />
//     </div>
//   );
// };

// const UseInView = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     amount: "all",
//   });

//   useEffect(() => {
//     console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
//   }, [isInView]);

//   return (
//     <div
//       ref={ref}
//       className="relative mx-auto grid h-32 w-96 place-content-center"
//     >
//       <h1 className="relative z-0 text-3xl font-black uppercase">
//         Show me on scroll
//       </h1>
//       <motion.div
//         animate={{
//           y: isInView ? "-100%" : "0%",
//         }}
//         className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
//       />
//       <motion.div
//         animate={{
//           y: isInView ? "100%" : "0%",
//         }}
//         className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
//       />
//       <motion.div
//         animate={{
//           y: isInView ? "-100%" : "0%",
//         }}
//         className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
//       />
//     </div>
//   );
// };

// const UseScrollBasic = () => {
//   const { scrollYProgress } = useScroll();

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log(latest);
//   });

//   const background = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["#FFFFFF", "#6366F1"]
//   );

//   return (
//     <motion.div
//       style={{
//         scaleX: scrollYProgress,
//         background,
//         x: "-50%",
//         y: "-50%",
//       }}
//       className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
//     />
//   );
// };

// const UseScrollAdvanced = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//     // offset: ["start start", "end start"],
//   });

//   const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

//   return (
//     <motion.div
//       ref={targetRef}
//       style={{ rotate }}
//       className="mx-auto size-48 bg-indigo-500"
//     />
//   );
// };

// const UseScrollWithContainer = () => {
//   const containerRef = useRef(null);
//   const targetRef = useRef(null);
//   const { scrollXProgress } = useScroll({
//     container: containerRef,
//     target: targetRef,
//     axis: "x",
//     offset: ["end start", "start start"],
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8"
//     >
//       <div className="w-screen shrink-0" />
//       <motion.div
//         ref={targetRef}
//         style={{ opacity: scrollXProgress }}
//         className="mx-auto size-48 shrink-0 bg-zinc-50"
//       />
//       <div className="w-screen shrink-0" />
//     </div>
//   );
// };

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
