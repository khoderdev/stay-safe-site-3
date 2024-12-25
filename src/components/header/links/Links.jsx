import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './links.css';

const menuItems = [
  { text: 'Home', route: '/' },
  {
    text: 'Preventive Health & Patient Services',
    route: '/preventive-health-patient-services',
    submenu: [
      { text: 'Medical Dietary Clinic', route: '/mdc' },
      { text: 'Vitrack', route: '/vitrack' },
    ]
  },
  { text: 'Health & Safety', route: '/health-and-safety' },
  { text: 'Public Health Interventions', route: '/public-health-interventions' },
  { text: 'Public Health Academy', route: '/public-health-academy' },
  {
    text: 'About us',
    route: '/about-us',
    submenu: [
      { text: 'Volunteers', route: '/volunteering' },
    ]
  }
];

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

const submenuVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      mass: 0.8,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 0.8,
    },
  },
};

const MenuItem = ({ item, onNavigate }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = (e) => {
    if (item.submenu) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  const handleNavigation = () => {
    if (!item.submenu) {
      onNavigate();
    }
  };

  const handleSubmenuNavigation = () => {
    onNavigate();
    setIsSubmenuOpen(false);
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
    >
      <Link
        to={item.route}
        className="block w-full py-4 px-8 text-lg font-medium text-gray-800 dark:text-white-bg hover:bg-pink/5 dark:hover:bg-pink/5 active:bg-pink/10 dark:active:bg-pink/10 transition-all duration-200 ease-out"
        onClick={(e) => {
          toggleSubmenu(e);
          handleNavigation();
        }}
      >
        <motion.div
          className="inline-flex items-center justify-between w-full"
          whileTap={{ scale: 0.98 }}
        >
          <span>{item.text}</span>
          {item.submenu && (
            <motion.div
              animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoChevronDown className="w-5 h-5" />
            </motion.div>
          )}
        </motion.div>
      </Link>

      <AnimatePresence>
        {item.submenu && isSubmenuOpen && (
          <motion.div
            variants={submenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden bg-gray-50 dark:bg-black"
          >
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.route}
                to={subItem.route}
                className="block py-3 px-12 text-base text-gray-700 dark:text-gray-50 hover:bg-pink/5 dark:hover:bg-pink/5 transition-colors duration-200"
                onClick={handleSubmenuNavigation}
              >
                {subItem.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MenuLinks = ({ onNavigate }) => {
  return (
    <motion.div 
      className="flex flex-col w-full pt-4" 
      variants={variants}
      initial="closed"
      animate="open"
    >
      {menuItems.map((item) => (
        <MenuItem key={item.route} item={item} onNavigate={onNavigate} />
      ))}
    </motion.div>
  );
};

export default MenuLinks;
