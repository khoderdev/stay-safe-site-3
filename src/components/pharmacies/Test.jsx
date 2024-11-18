import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useParallax = (multiplier = 0.3) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * multiplier);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);

  return offsetY;
};

function Test() {
  const parallaxY = useParallax(0.3);

  return (
    <div className='flex flex-col md:flex md:flex-row w-full overflow-y-scroll overflow-x-hidden h-screen pt-8 sm: perspective'>
      <div className='flex flex-col w-[33%] p-2 items-center'>
        <motion.img
          src='/pharma4.gif'
          alt='pharma'
          className=''
          style={{ y: parallaxY }}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        />
      </div>
    </div>
  )
}

export default Test