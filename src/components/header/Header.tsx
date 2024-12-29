import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import MenuLinks from "./links/Links";
import Dropdown from "./Dropdown";

export default function Header() {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed w-full bg-white/60 dark:bg-black/50 backdrop-blur-md shadow-lg dark:shadow-[#00000021] z-50 flex items-center justify-between !px-4 lg:!px-24"
    >
      {/* Logo */}
      <motion.div
        className="shrink-0 pl-2"
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
      <div className="hidden md:flex items-center !space-x-4 lg:!space-x-8 text-black dark:text-white-bg2">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Dropdown
          title="Services"
          items={[
            {
              label: "Preventive Health & Patient Services",
              to: "/preventive-health-patient-services",
            },
            { label: "Medical Dietary Clinic", to: "/mdc" },
            { label: "Vitrack", to: "/vitrack" },
          ]}
          className={
            "block px-4 py-2 text-black dark:text-white-bg2 hover:bg-gray-100 dark:hover:bg-pink dark:hover:text-white-bg2 rounded-md transition-colors"
          }
        />
        <Link to="/health-and-safety" className="nav-link">
          Health & Safety
        </Link>
        <Link to="/public-health-interventions" className="nav-link">
          Public Health Interventions
        </Link>
        <Link to="/public-health-academy" className="nav-link">
          Public Health Academy
        </Link>
        <Dropdown
          title="About us"
          mainLink="/about-us"
          items={[{ label: "Volunteers", to: "/volunteering" }]}
          className={"text-pink"}
        />
      </div>

      {/* Mobile Menu Button and Theme Toggle */}
      <div className="flex items-center !space-x-4 ">
        <ThemeToggle />
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 text-3xl text- dark:text-white-bg z-50 relative focus:outline-hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className="fixed top-0 left-0 right-0 h-[100dvh] w-full dark:text-white-bg bg-white-fg dark:bg-[#212121] shadow-lg z-40 md:hidden overflow-y-auto"
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
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 md:hidden"
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
