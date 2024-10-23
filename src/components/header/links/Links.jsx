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
  }
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
  }
};

const MenuLinks = () => {
  const items = [
    'Homepage',
    'Who are we',
    'Projects',
    'Contact',
  ];

  return (
    <>
      <motion.div className='links' variants={variants}>
        {items.map((item) => (
          <motion.a
            href={`#${item}`}
            key={item}
            className="menu-link !text-[#212121] dark:!text-white"
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: '#e63946' }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default MenuLinks;
