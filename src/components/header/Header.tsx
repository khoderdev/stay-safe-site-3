import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from "../../hooks/useAuth";
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import MenuLinks from './links/Links';


export default function Header() {
  const { currentUser, logout, loading } = useAuth();
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
    <header ref={headerRef} className="bg-white-fg dark:bg-black shadow-md  dark:shadow-[#00000021] relative z-50 flex items-center justify-between lg:pl-32 lg:pr-6">
      {/* Logo */}
      <motion.div
        className="flex-shrink-0 pl-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-dark.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'block' : 'hidden'}`}
          />
          <img
            src="/logo-light.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'hidden' : 'block'}`}
          />
        </Link>
      </motion.div>

      {/* Sidebar Menu */}
      <motion.nav
        className={`fixed top-0 left-0 h-full w-full bg-white-fg dark:bg-[#212121] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
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
          <Link to="/" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            Home
          </Link>
          <Link to="/mdc" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            MDC
          </Link>
          <Link to="/environmental-health" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            Environmental Health
          </Link>
          <Link to="/ohs" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            OHS
          </Link>
          <Link to="/patient-guidance-support" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            Patient Guidance & Support
          </Link>
          <Link to="/about-us" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            About us
          </Link>
          <Link to="/write" className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            Write
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            <span>Loading...</span> // Show loading state
          ) : (
            <>
              <Link to={"/posts"} className="font-semibold dark:text-white-bg">{currentUser?.name || 'User'}</Link>
              <Link onClick={logout} className="font-semibold dark:text-white-bg">Logout</Link>
            </>
          )}

        </div>
        <div className="flex space-x-2 pr-2 items-center">
          <div className='z-50 '>
            <ThemeToggle />
          </div>
          <button onClick={toggleSidebar} className="md:hidden p-2 text-3xl text-black dark:text-white-bg z-50 relative focus:outline-none border-none bg-transparent">
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
    </header>
  );
}


