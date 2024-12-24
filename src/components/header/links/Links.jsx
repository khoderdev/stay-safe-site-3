import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './links.css';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
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
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
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
      className="flex flex-col w-full" 
      variants={variants}
      initial="closed"
      animate="open"
    >
      {items.map(({ text, route }) => (
        <motion.div key={text} variants={itemVariants}>
          <Link
            to={route}
            className="block w-full py-3 px-8 text-xl font-semibold text-gray-800 dark:text-white-bg hover:bg-pink/10 dark:hover:bg-pink/10 transition-colors duration-200"
            onClick={(e) => {
              // Close mobile menu when link is clicked
              document.body.style.overflow = 'unset';
            }}
          >
            {text}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuLinks;
