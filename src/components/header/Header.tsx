import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
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
      y: 70,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: "-150%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <header
      ref={headerRef}
      className="fixed w-full bg-white-fg dark:bg-black shadow-md dark:shadow-[#00000021]  z-50 flex items-center justify-between lg:pl-32 lg:pr-6"
    >
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
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Dropdown
          title="Preventive Health & Patient Services"
          mainLink="/preventive-health-patient-services"
          items={[
            { label: "Medical Dietary Clinic", to: "/mdc" },
            { label: "Vitrack", to: "/vitrack" },
          ]}
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
        />
      </div>

      {/* Mobile Menu Button and Theme Toggle */}
      <div className="flex items-center space-x-4 pr-4">
        <ThemeToggle />
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 text-3xl text- dark:text-white-bg z-50 relative focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className="fixed top-0 left-0 h-full w-full dark:text-white-bg bg-white-fg dark:bg-[#212121] shadow-lg z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="pt-20">
          <MenuLinks />
        </div>
      </motion.nav>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 dark:text-white-bg  z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
}
