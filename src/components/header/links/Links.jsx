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
    { text: 'Medical Dietry Clinic', route: '/mdc' },
    { text: 'Preventive Health & Patient Services', route: '/preventive-health-patient-services' },
    { text: 'Health & Safety', route: '/health-and-safety' },
    { text: 'Public Health Interventions', route: '/public-health-interventions' },
    { text: 'Public Health Academy', route: '/public-health-academy' },
    { text: 'Patient Guidance & Support', route: '/patient-guidance-support' },
    { text: 'About us', route: '/about-us' },
  
  ];

  return (
    <motion.div className='flex flex-col dark:bg-dark w-full ' variants={variants}>
      {items.map(({ text, route }) => (
        <motion.a
          href={route}
          key={text}
          className="w-full dark:bg-dark hover:bg-pink dark:hover:bg-pink p-4 hover:border hover:border-pink z-50 text-[24px] leading-snug text-left !text-[#212121] font-semibold  dark:!text-white-bg"
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
