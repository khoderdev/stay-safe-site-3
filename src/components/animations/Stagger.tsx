import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import React from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);

  return (
    <div className="App" ref={scope}>
      <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        Click Me!
      </motion.button>
      <ul>
        {items.map((item, index) => (
          <motion.li key={index}>{item}</motion.li>
        ))}
      </ul>
    </div>
  );
}
