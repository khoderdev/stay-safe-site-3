import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Button = forwardRef(({
  children,
  onClick,
  type = 'button',
  customStyles,
  disabled,
}, ref) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled !== undefined ? disabled : false}
      ref={ref} // Forward the ref to the button element
      className={`
        btn-4 
        ${customStyles !== undefined ? customStyles : ''}
        ${disabled !== undefined ? disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'flex justify-between border-transparent border-2 rounded-md px-5 py-2 text-[1.3rem] transition-all duration-300 ease-in-out bg-[#0e100f] hover:bg-transparent hover:border-[#0e100f] hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md hover:scale-110'
          : 'flex justify-between border-transparent border-2 rounded-md px-5 py-2 text-[1.3rem] transition-all duration-300 ease-in-out bg-[#0e100f] hover:bg-transparent hover:border-[#0e100f] hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md hover:scale-110'
        }
      `}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired, // Expecting children as a React node, required
  onClick: PropTypes.func,             // onClick is optional
  type: PropTypes.string,              // type is a string
  customStyles: PropTypes.string,      // customStyles is a string
  disabled: PropTypes.bool,            // disabled is a boolean
};

export default Button;
