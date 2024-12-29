import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  showCloseButton = true,
  closeOnOutsideClick = false,
  width = '50%',
  height = '95dvh',
  position = 'center',
  animation = 'scale',
  customBackdrop,
  customCloseButton,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) onClose();
    setIsOpen(false);
  };

  const getAnimationVariants = () => {
    const variants = {
      scale: {
        initial: { scale: 0, rotate: '12.5deg' },
        animate: { scale: 1, rotate: '0deg' },
        exit: { scale: 0, rotate: '0deg' },
      },
      slide: {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
      },
      fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
    };
    return variants[animation] || variants.scale;
  };

  const getPositionClass = () => {
    const positions = {
      center: 'items-center justify-center',
      top: 'items-start justify-center pt-20',
      bottom: 'items-end justify-center pb-20',
    };
    return positions[position] || positions.center;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (closeOnOutsideClick) {
              handleClose();
            }
            e.stopPropagation();
          }}
          className={`fixed inset-0 z-50 flex ${getPositionClass()} ${
            customBackdrop ||
            'bg-slate-900/20 backdrop-blur-sm'
          }`}
        >
          <motion.div
            {...getAnimationVariants()}
            onClick={(e) => e.stopPropagation()}
            className={`relative rounded-lg w-full overflow-hidden
              ${
                typeof width === 'string'
                  ? `max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[${width}]`
                  : `max-w-[${width}px]`
              }
              ${
                typeof height === 'string'
                  ? `max-h-[${height}]`
                  : `max-h-[${height}px]`
              }
              overflow-y-auto scrollbar-hide shadow-xl 
              ring-1 ring-dark/20 
              bg-white-bg dark:bg-dark dark:text-white-bg
            `}
          >
            {showCloseButton && (
              <div className='sticky top-0 z-10 pr-3 pt-2 flex justify-end bg-inherit'>
                {customCloseButton || (
                  <button
                    onClick={handleClose}
                    className='text-gray-400 hover:text-black dark:hover:text-white-bg transition-colors duration-200'
                  >
                    <AiOutlineClose size={24} />
                  </button>
                )}
              </div>
            )}

            <div className='flex flex-col dark:text-white-bg overflow-y-auto scrollbar-hide p-4 mt-[-1.5rem]'>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
