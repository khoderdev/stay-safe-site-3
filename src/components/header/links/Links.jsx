import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './links.css';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    y: 50,
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const MenuLinks = () => {
  const items = [
    { text: 'Home', route: '/' },
    { text: 'Medical Dietary Clinic', route: '/mdc' },
    { text: 'Preventive Health & Patient Services', route: '/preventive-health-patient-services' },
    { text: 'Health & Safety', route: '/health-and-safety' },
    { text: 'Public Health Interventions', route: '/public-health-interventions' },
    { text: 'Public Health Academy', route: '/public-health-academy' },
    { text: 'Patient Guidance & Support', route: '/patient-guidance-support' },
    { text: 'About us', route: '/about-us' },
  ];

  return (
    <motion.div 
      className="flex flex-col w-full pt-4" 
      variants={variants}
      initial="closed"
      animate="open"
    >
      {items.map(({ text, route }, i) => (
        <motion.div 
          key={text} 
          variants={itemVariants}
          custom={i}
          className="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
        >
          <Link
            to={route}
            className="block w-full py-4 px-8 text-lg font-medium text-gray-800 dark:text-white-bg hover:bg-pink/5 dark:hover:bg-pink/5 active:bg-pink/10 dark:active:bg-pink/10 transition-all duration-200 ease-out"
            onClick={(e) => {
              document.body.style.overflow = 'unset';
            }}
          >
            <motion.span
              className="inline-block w-full"
              whileTap={{ scale: 0.95 }}
            >
              {text}
            </motion.span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuLinks;
