// // import { useEffect, useState } from 'react';

// // function PrevelenceCircle() {
// //   const [angle1, setAngle1] = useState(0);
// //   const [angle2, setAngle2] = useState(90);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setAngle1((prev) => prev + 20);
// //       setAngle2((prev) => prev - 10);
// //     };

// //     window.addEventListener('scroll', handleScroll);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className='p-4 border' style={styles.container}>
// //       <img
// //         src='/public/images/6-mlawan.svg'
// //         alt='circle1'
// //         width={650}
// //         style={{ ...styles.circle, transform: `rotate(${angle1}deg)` }}
// //       />
// //       <div className='flex'>
// //         <div className='mr-4'>
// //           <img width={65} src='/public/images/1.svg' alt='1in6' />
// //         </div>
// //         <div className='w-80  '>
// //           <p className='dark:text-white-bg font-semibold'>
// //             children and adolescents ages 2 to 19 are overweight.
// //             More than one billion people in the world are now living with obesity, nearly 880 million adults and 159 million children and adolescents aged 5-19 years.
// //           </p>
// //         </div>
// //       </div>


// //       <img
// //         src='/public/images/6-mlawan.svg'
// //         width={480}
// //         alt='circle2'
// //         style={{ ...styles.circle, transform: `rotate(${angle2}deg)` }}
// //       />
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     position: 'relative',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     height: '100vh',
// //     overflow: 'hidden',
// //   },
// //   circle: {
// //     position: 'absolute',
// //     transition: 'transform 0.1s linear',
// //   },
// // };

// // export default PrevelenceCircle;

// function PrevelenceCircle({
//   primaryImage = '/public/images/group66.svg',
//   secondaryImage = '/public/images/final.svg',
//   infoImage = '/public/images/1.svg',
//   infoText = 'One in Six children and adolescents (ages 2-19) are overweight. Globally, over one billion people live with obesity, including nearly 880 million adults and 159 million youths.',
// }) {

//   return (
//     <div className="relative flex items-center justify-center h-screen overflow-hidden z-50 bg-gray-100 dark:bg-gray-900">
//       <img
//         src={primaryImage}
//         alt="Primary rotating circle"
//         width={650}
//         className="absolute transition-transform duration-200 ease-in-out"
//       />
//       <div className="flex items-center md:pl-6 text-center space-x-4">
//         <div>
//           <img width={65} src={infoImage} alt="1 in 6 statistic icon" />
//         </div>
//         <div className="md:w-72 md:pl-8">
//           <p className="text-sm font-semibold text-gray-800 dark:text-white">
//             {infoText}
//           </p>
//         </div>
//       </div>
//       <img
//         src={secondaryImage}
//         alt="Secondary rotating circle"
//         className="w-[80%] md:w-[35%] absolute transition-transform duration-200 ease-in-out"
//       />
//     </div>
//   );
// }
// export default PrevelenceCircle;


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
      <PrevelenceCircle />
    </div>
  );
};

function PrevelenceCircle() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden z-50 ">
        <motion.img
          ref={ref}
          src="/public/images/group66.svg"
          alt="circle1"
          className="w-[90%] md:w-[43%] absolute transition-transform duration-200 ease-in-out"
          animate={{
            rotate: isInView ? [0, 180] : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
        <div className="flex items-center md:pl-6 ">
          <div className=" mr-4">
            <img className="w-10 md:w-20 xl:w-32" src="/public/images/1.svg" alt="1in6" />
          </div>

          <div className="w-28 md:w-72 md:pl-8">
            <p className="text-[0.5rem] md:text-sm xl:text-xl font-semibold  text-white-bg">
              One in Six children and adolescents <br /> (ages 2-19) are overweight. Globally, <br />over one billion people live with <br />obesity, including nearly 880 million adults and 159 million youths.
            </p>
          </div>
        </div>
        <motion.img
          ref={ref}
          src="/public/images/final.svg"
          className="w-[68%] md:w-[33%] absolute transition-transform duration-200 ease-in-out"
          alt="circle2"
          animate={{
            rotate: isInView ? [180, 0] : 180,
          }}
          transition={{
            repeat: 1,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}
export default PrevelenceCircle;





// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// function PrevelenceCircle() {
//   const [scrollDirection, setScrollDirection] = useState(0);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const direction = currentScrollY > lastScrollY ? 1 : -1; // 1 for scroll down, -1 for scroll up
//       setScrollDirection(direction);
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={styles.container}>
//       <motion.img
//         src='/public/images/final.svg'
//         alt='circle1'
//         width={650}
//         style={styles.circle}
//         animate={{ rotate: scrollDirection === 1 ? 180 : -60 }}
//         transition={{
//           duration: 1, // Smooth transition for each scroll
//           ease: 'easeInOut',
//         }}
//       />

//       <div className='flex pl-6'>
//         <div className='mr-4'>
//           <img width={65} src='/public/images/1.svg' alt='1in6' />
//         </div>
//         <div className='w-72 pl-6'>
//           <p className='text-sm dark:text-white-bg font-semibold'>
//             One in Six children and adolescents (ages 2-19) are overweight. Globally, over one billion people live with obesity, including nearly 880 million adults and 159 million youths.
//           </p>
//         </div>
//       </div>

//       <motion.img
//         src='/public/images/final.svg'
//         alt='circle2'
//         width={480}
//         style={styles.circle}
//         animate={{ rotate: scrollDirection === 1 ? -180 : 180 }}
//         transition={{
//           duration: 1,
//           ease: 'easeInOut',
//         }}
//       />
//     </div>
//   );
// }

// const styles = {
//   container: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     overflow: 'hidden',
//   },
//   circle: {
//     position: 'absolute',
//   },
// };

// export default PrevelenceCircle;
