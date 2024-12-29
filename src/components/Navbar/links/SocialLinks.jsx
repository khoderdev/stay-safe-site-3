import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons/Icons';

const SocialLinks = () => {
  return (
    <div>
      <motion.div
        className="flex space-x-4"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Link
          to='/'
          className='hover:text-blue-500 transition-colors w-6'
        >
          <TwitterIcon />
        </Link>
        <Link
          to='/'
          className='hover:text-blue-600 transition-colors w-6'
        >
          <FacebookIcon />
        </Link>
        <Link
          to='/'
          className='hover:text-gray-400 transition-colors w-6'
        >
          <GithubIcon />
        </Link>
        <Link
          to='/'
          className='hover:text-blue-700 transition-colors w-6'
        >
          <LinkedinIcon />
        </Link>
      </motion.div>
    </div>
  )
}

export default SocialLinks