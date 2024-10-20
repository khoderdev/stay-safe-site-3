// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './hero.css';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const flipVariants = {
  initial: {
    opacity: 0,
    rotateY: 0,
  },
  animate: {
    opacity: 1,
    rotateY: [0, 180, 360],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};



const rotateVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      delay: 1.7,
    },
  },
};

// const sliderVariants = {
//   initial: {
//     x: '0', // Start from outside the viewport (right side)
//   },
//   animate: {
//     x: '-820%', // Move to outside the viewport (left side)
//     transition: {
//       repeat: Infinity,
//       repeatType: 'loop',
//       duration: 2,
//       ease: 'linear', // Ensure smooth, continuous movement
//     },
//   },
// };

const sliderVariants = {
  animate: {
    x: ['0%', '-500%'], // Slide from 0% to -100%
    transition: {
      duration: 20, // Adjust the duration for speed
      repeat: Infinity,
      ease: 'linear', // Continuous motion
    },
  },
};

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: '-120%',
//     transition: {
//       repeat: Infinity,
//       repeatType: 'mirror',
//       duration: 2,
//     },
//   },
// };

const Hero = () => {

  return (
    <div className='hero sm:p-6 -mt-[18rem] text-black dark:text-[#f0f0ee]'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants} className='pb-4 text-4xl text-pink'>
            Stay Safe
          </motion.h2>

          <motion.h1
            className='text-[3rem] md:text-[4rem]'
            variants={flipVariants}
            initial='initial'
            animate='animate'
          >
            We Can
            <motion.span
              className='ml-3 inline-block text-pink font-bold'
              variants={rotateVariants}
              initial='initial'
              animate='animate'
            >
              Turn
            </motion.span>
            <motion.span
              className='ml-3 inline-block text-[3rem] md:text-[4rem]'
              initial='initial'
              animate='animate'
            >
              Things Around
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
        <motion.div
          className="slidingTextContainer !text-slate-200 dark:!text-[#212121]"
          variants={sliderVariants}
          initial='initial'
          animate='animate'
          style={{ display: 'flex' }} // Use flex to align items
        >
          {/* Duplicated text for seamless scrolling */}
          <span style={{ marginRight: '50px' }}>Stay Safe Public Health</span>
          <span style={{ marginRight: '50px' }}>Stay Safe Public Health</span>
          {/* Add more duplicates if necessary for better effect */}
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer !text-slate-200"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Stay Safe Public Health
      </motion.div> */}
    </div>
  );
};

export default Hero;

// return (
//   <div className="h-[calc(100vh-100px)] overflow-hidden relative sm:p-6 -mt-44 md:!-mt-96 text-black dark:text-[#f0f0ee]">
//     <div className="max-w-[1000px] h-full mx-auto">
//       <motion.div
//         className="w-full h-full flex flex-col justify-center gap-[40px] sm:gap-[20px] items-center text-center"
//         variants={textVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.h2 className="text-[30px] text-[#e55e72] tracking-[10px] uppercase" variants={textVariants}>
//           StaySafe
//         </motion.h2>
//         <motion.h1
//           className="text-[68px] sm:text-[36px]"
//           variants={flipVariants}
//           initial="initial"
//           animate="animate"
//         >
//           We Can
//           <motion.span
//             className="ml-3 inline-block text-pink"
//             variants={rotateVariants}
//             initial="initial"
//             animate="animate"
//           >
//             Turn
//           </motion.span>
//           <motion.span
//             className="ml-3 inline-block"
//             initial="initial"
//             animate="animate"
//           >
//             Things Around
//           </motion.span>
//         </motion.h1>
//       </motion.div>
//     </div>

//     <motion.div
//       className="slidingTextContainer"
//       variants={sliderVariants}
//       initial="initial"
//       animate="animate"
//     >
//       Stay Safe Public Health
//     </motion.div>

//     <div className="imageContainer h-full absolute top-0 right-0 sm:h-[50%] sm:bottom-0">
//       <img
//         src="path/to/your/image.jpg"
//         alt="Description"
//         className="w-full h-[110%] mr-[100px] object-contain sm:mr-0"
//       />
//     </div>
//   </div>
// );

