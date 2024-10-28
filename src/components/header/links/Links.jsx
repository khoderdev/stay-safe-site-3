import { motion } from 'framer-motion';
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
    y: 50,
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
    { text: 'MDC', route: '/mdc' },
    { text: 'OHS', route: '/ohs' },
    { text: 'Contact', route: '/contact' },
    { text: 'About us', route: '/about-us' },
    { text: 'Environmental Health', route: '/environmental-health' },
    { text: 'Patient Guidance & Support', route: '/patient-guidance-support' },
  
  ];

  return (
    <motion.div className='links' variants={variants}>
      {items.map(({ text, route }) => (
        <motion.a
          href={route}
          key={text}
          className="menu-link !text-[#212121] dark:!text-white-bg"
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: '#e63946' }}
          whileTap={{ scale: 0.95 }}
        >
          {text}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MenuLinks;
