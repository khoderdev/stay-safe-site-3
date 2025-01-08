import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import MenuLinks from "./links/Links";
import Dropdown from "./Dropdown";

export default function Header() {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    return `relative inline-flex items-center text-base transition-all duration-200
      ${
        isActive(path)
          ? "text-white-bg2 bg-pink dark:bg-pink"
          : "text-gray-700 dark:text-gray-200 hover:text-pink dark:hover:text-pink"
      } 
      rounded-lg before:content-[''] before:absolute before:inset-0 before:bg-current 
      before:rounded-lg before:opacity-0 hover:before:opacity-5 active:scale-95`;
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };

  const sidebarVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        mass: 0.8,
      },
    },
  };

  return (
    <header
      ref={headerRef}
      className="fixed w-full h-[4.5rem] bg-white/60 dark:bg-black/50 backdrop-blur-md shadow-lg dark:shadow-[#00000021] flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      {/* Logo */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-dark.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${
              theme === "dark" ? "block" : "hidden"
            }`}
          />
          <img
            src="/logo-light.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${
              theme === "dark" ? "hidden" : "block"
            }`}
          />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-end flex-1 gap-2 pr-3">
        <Link to="/" className={`${getLinkClassName("/")} px-3 py-1`}>
          Home
        </Link>
        <Dropdown
          title="Preventive Health"
          items={[
            {
              label: "Patient Services",
              to: "/preventive-health-patient-services",
            },
            { label: "Medical Dietary Clinic", to: "/mdc" },
            { label: "Vitrack", to: "/vitrack" },
          ]}
          className={`relative inline-flex items-center text-base transition-all duration-200
            ${
              isActive("/preventive-health-patient-services") ||
              isActive("/mdc") ||
              isActive("/vitrack")
                ? "text-white-bg2 bg-pink"
                : "text-gray-700 dark:text-gray-200 hover:text-pink dark:hover:text-pink"
            } 
            rounded-lg px-3 py-2`}
          mainLink={undefined}
        />
        <Link
          to="/health-and-safety"
          className={`${getLinkClassName(
            "/health-and-safety"
          )} px-3 py-2 whitespace-nowrap`}
        >
          Health & Safety
        </Link>
        <Link
          to="/public-health-interventions"
          className={`${getLinkClassName(
            "/public-health-interventions"
          )} px-3 py-2 whitespace-nowrap`}
        >
          Public Health Interventions
        </Link>
        <Link
          to="/public-health-academy"
          className={`${getLinkClassName(
            "/public-health-academy"
          )} px-3 py-2 whitespace-nowrap`}
        >
          Public Health Academy
        </Link>
        <Dropdown
          title="About us"
          mainLink="/about-us"
          items={[
            { label: "Volunteers", to: "/volunteering" },
            { label: "Contact us", to: "/contact-us" },
          ]}
          className={`relative inline-flex items-center text-base transition-all duration-200
            ${
              isActive("/about-us") ||
              isActive("/volunteering") ||
              isActive("/contact-us")
                ? "text-white-bg2 bg-pink dark:bg-pink"
                : "text-gray-700 dark:text-gray-200 hover:text-pink dark:hover:text-pink"
            } 
            rounded-lg px-3 py-2`}
        />
      </div>

      {/* Mobile Menu Button and Theme Toggle */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-3xl text-gray-700 dark:text-white-bg z-50 relative focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className="fixed top-0 left-0 right-0 h-[100dvh] w-full dark:text-white-bg bg-white-fg dark:bg-[#212121] shadow-lg z-40 lg:hidden overflow-y-auto"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="h-full pt-20 pb-8">
          <MenuLinks
            onNavigate={() => {
              toggleSidebar();
              document.body.style.overflow = "unset";
            }}
          />
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
    </header>
  );
}