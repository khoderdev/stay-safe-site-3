import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import MenuLinks from './links/Links';
import SocialLinks from './links/SocialLinks';


export default function Header() {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <header ref={headerRef} className="bg-white dark:bg-black shadow-md shadow-slate-200 dark:shadow-[#00000021] relative z-50 flex items-center justify-between lg:pl-32 lg:pr-6">
      {/* Logo */}
      <motion.div
        className="flex-shrink-0 pl-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-light.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'block' : 'hidden'}`}
          />
          <img
            src="/logo-dark.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'hidden' : 'block'}`}
          />
        </Link>
      </motion.div>

      {/* Sidebar Menu */}
      <motion.nav
        className={`fixed top-0 left-0 h-full w-full bg-white dark:bg-[#212121] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <ul className="flex flex-col items-center space-y-8 text-center mt-20">
          <MenuLinks />
        </ul>
      </motion.nav>

      {/* Overlay when menu is open */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar} 
        />
      )}

      {/* Desktop Menu */}
      <div className='flex justify-between items-center space-x-10'>
        <nav className="hidden md:flex space-x-6 text-[1rem] font-semibold">
          <Link to="/" className="text-black hover:text-blue dark:text-[#f0f0ee] dark:hover:text-blue transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-blue dark:text-[#f0f0ee] dark:hover:text-blue transition-colors">
            About
          </Link>
          <Link to="/services" className="text-black hover:text-blue dark:text-[#f0f0ee] dark:hover:text-blue transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-black hover:text-blue dark:text-[#f0f0ee] dark:hover:text-blue transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex space-x-2 pr-2 items-center">
          <div className='hidden md:block'>
            <SocialLinks />
          </div>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Menu Toggle Button */}
          <button onClick={toggleSidebar} className="md:hidden p-2 text-3xl text-black dark:text-white z-50 relative focus:outline-none border-none bg-transparent">
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
    </header>
  );
}
