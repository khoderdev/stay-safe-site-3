import PropTypes from 'prop-types'; 

const Button = ({
  children,
  onClick,
  type = 'button',
  customStyles = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        btn-4 
        ${customStyles} 
        ${disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'flex justify-between border-transparent border-2 rounded-md px-5 py-2 text-[1.3rem] transition-all duration-300 ease-in-out bg-[#0e100f] hover:bg-transparent hover:border-[#0e100f] hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md'
        }
      `}
    >
      {children}
    </button>
  );
};

// Define prop-types for the Button component
Button.propTypes = {
  children: PropTypes.node.isRequired, // Expecting children as a React node, and required
  onClick: PropTypes.func.isRequired,  // onClick should be a function and required
  type: PropTypes.string,              // type is a string
  customStyles: PropTypes.string,      // customStyles is a string
  disabled: PropTypes.bool,            // disabled is a boolean
};

// Define default values for optional props
Button.defaultProps = {
  type: 'button',                      // Default type is 'button'
  customStyles: '',                    // Default customStyles is an empty string
  disabled: false,                     // Default disabled is false
};

export default Button;
