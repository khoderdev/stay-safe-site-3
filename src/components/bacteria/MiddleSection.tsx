import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Right from "./Right";

const MiddleSection: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isClicked) {
      setIsVisible(true);
    }
  }, [isClicked]);

  const handleMouseLeave = useCallback(() => {
    if (!isClicked) {
      setIsVisible(false);
    }
  }, [isClicked]);

  const handleClickInside = useCallback(() => {
    setIsVisible((prev) => !prev);
    setIsClicked((prev) => !prev);
  }, []);

  useEffect(() => {
    const currentRef = containerRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      if (currentRef && !currentRef.contains(event.target as Node)) {
        setIsVisible(false);
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const animations = useMemo(
    () => ({
      fadeInVariant: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.5,
          },
        },
      },
      containerVariant: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      },
      descriptionVariant: {
        hidden: {
          opacity: 0,
          y: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.4,
          },
        },
      },
    }),
    []
  );

  return (
    <motion.div className=" relative flex flex-col select-none bg-white-fg dark:bg-black">
      <motion.div>
        <motion.div
          className=" dark:text-white-bg2"
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClickInside}
        >
          <motion.div
            className="col-span-8 col-start-3 row-start-2 text-center font-normal text-[14px] sm:text-[20px] flex items-center justify-center dark:text-white-bg2"
            variants={animations.fadeInVariant}
          >
            Everyone has a role to play in improving antibiotic use.
          </motion.div>

          <motion.div
            className="text-[29px] sm:text-5xl mt-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            BE{" "}
            <span className="underline mt-1 cursor-pointer text-[29px] sm:text-5xl text-[#d23c88]">
              ANTIBIOTICS
            </span>{" "}
            AWARE
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div
                className=""
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl py-4 px-2 drop-shadow-md rounded pt-4 text-center bg-white-bg3 dark:!bg-[#000] opacity-1 z-40 relative flex flex-col w-[88%] sm:w-[70%] md:w-[34%]  sm:mx-0 place-self-center">
                  Antibiotics are medications specifically designed to kill
                  certain bacteria or stop their growth. However, their use can
                  sometimes lead to side effects and contribute to antimicrobial
                  resistance where bacteria develop the ability to resist the
                  drugs meant to eliminate them.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <Right />
      </motion.div>
    </motion.div>
  );
});

MiddleSection.displayName = "MiddleSection";

export default MiddleSection;
