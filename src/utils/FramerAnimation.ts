// Page Transitions
const pageVariants = {
  init: {
    opacity: 0,
    y: '-100%',
  },
  anim: {
    opacity: 1,
    y: 0,
  },
  last: {
    opacity: 0,
    y: '-100%',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
};

// Fade In/Out
const fadeVariants = {
  init: { opacity: 0 },
  anim: { opacity: 1 },
  last: { opacity: 0 },
};

const fadeTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

// Slide In/Out
const slideVariants = {
  init: { x: '-100%', opacity: 0 },
  anim: { x: 0, opacity: 1 },
  last: { x: '100%', opacity: 0 },
};

const slideTransition = {
  type: 'tween',
  // ease: 'easeInOut',
  ease: 'anticipate',
  duration: 0.3,
};

// Scale In/Out
const scaleVariants = {
  init: { scale: 0, opacity: 0 },
  anim: { scale: 1, opacity: 1 },
  last: { scale: 0, opacity: 0 },
};

const scaleTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

// Rotate In/Out
const rotateVariants = {
  init: { rotate: -180, opacity: 0 },
  anim: { rotate: 0, opacity: 1 },
  last: { rotate: 180, opacity: 0 },
};

const rotateTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

// Bounce In/Out
const bounceVariants = {
  init: { y: -50, opacity: 0 },
  anim: { y: 0, opacity: 1 },
  last: { y: 50, opacity: 0 },
};

const bounceTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
};

// Staggered Animations
const staggerContainer = {
  init: {},
  anim: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  init: { opacity: 0, y: 20 },
  anim: { opacity: 1, y: 0 },
};

// Keyframe Animations
const keyframeVariants = {
  init: { opacity: 0, scale: 0 },
  anim: {
    opacity: [0, 1, 0.5, 1],
    scale: [0, 1.2, 0.9, 1],
    transition: {
      duration: 1.5,
      times: [0, 0.3, 0.6, 1],
    },
  },
};

// Custom Path Animations
const pathVariants = {
  init: { x: 0, y: 0 },
  anim: {
    x: [0, 100, 0],
    y: [0, -50, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Hover Animations
const hoverVariants = {
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

// Tap Animations
const tapVariants = {
  tap: {
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

// Drag Animations
const dragConstraints = { top: -50, bottom: 50, left: -50, right: 50 };

// Exit Animations
const exitVariants = {
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
    },
  },
};

// Background Color Change
const colorVariants = {
  init: { backgroundColor: '#ffffff' },
  anim: { backgroundColor: '#ff0000' },
};

// Text Animations
const textVariants = {
  init: { opacity: 0, y: 20 },
  anim: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  init: { opacity: 0, y: 20 },
  anim: { opacity: 1, y: 0 },
};

// Custom SVG Animations
const svgVariants = {
  init: { pathLength: 0 },
  anim: { pathLength: 1 },
};

// Export all animations
export {
  pageVariants,
  pageTransition,
  fadeVariants,
  fadeTransition,
  slideVariants,
  slideTransition,
  scaleVariants,
  scaleTransition,
  rotateVariants,
  rotateTransition,
  bounceVariants,
  bounceTransition,
  staggerContainer,
  staggerItem,
  keyframeVariants,
  pathVariants,
  hoverVariants,
  tapVariants,
  dragConstraints,
  exitVariants,
  colorVariants,
  textVariants,
  letterVariants,
  svgVariants,
};




// const pageVariants = {
//   init: {
//     opacity: 0,
//     y: '-100%',
//   },
//   anim: {
//     opacity: 1,
//     y: 0,
//   },
//   last: {
//     opacity: 0,
//     y: '-100%',
//   },
// };

// const pageTransition = {
//   type: 'tween',
//   ease: 'anticipate',
//   duration: 1,
// };

// export { pageVariants, pageTransition };