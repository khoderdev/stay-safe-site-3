import React from 'react'
import { motion } from 'framer-motion';

function BottomSection() {
  return (
    <motion.div
      className="font-normal text-center sm:text-3xl flex items-center justify-center dark:text-white-bg2 "
      // variants={fadeInVariant}
    >
      Using antibiotics appropriately helps to combat antimicrobial resistance and ensures these lifesaving drugs will be available in the future
    </motion.div>
  )
}

export default BottomSection