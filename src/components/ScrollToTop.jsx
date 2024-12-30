import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;
    
    // Show button only when scrolling down and past threshold
    if (currentScrollY > 300 && currentScrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to throttle scroll events
      window.requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Include lastScrollY in dependencies

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-4 md:right-10 z-50 p-3 bg-transparent text-pink font-semibold transition-all duration-300 flex items-center justify-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <SlArrowUp className="w-7 h-7" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
