import React from 'react'
import { motion } from 'framer-motion';


function TopSection() {
  return (
    <motion.div
      className="bg-white-bg2 dark:bg-black !z-10 text-2xl dark:text-white-bg2 text-center flex justify-center items-center h-full p-4"
    // variants={fadeInVariant}
    >
      Antibiotics are medications specifically designed to kill certain bacteria or stop their growth. However, their use can sometimes lead to side effects and contribute to antimicrobial resistance where bacteria develop the ability to resist the drugs meant to eliminate them.
      It's important to remember that antibiotics aren’t always the solution when you’re feeling unwell.
    </motion.div>
  )
}
export default TopSection