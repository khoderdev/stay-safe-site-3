export const inputStyles = ({
  marginTop = 'mt-0',
  marginLeft = 'ml-0',
  paddingX = 'px-3',
  paddingY = 'py-0',
  width = 'w-0',
} = {}) => `
  ${marginTop} ${marginLeft} ${paddingX} ${paddingY} ${width}
  border border-gray-300 dark:border-black
  rounded-md bg-white dark:bg-[#000] text-black dark:text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm hover:shadow-md
`;

export const selectStyles = ({
  marginTop = 'mt-0',
  marginLeft = 'ml-0',
  paddingX = 'px-2',
  paddingY = 'py-0',
  width = 'w-0',
} = {}) => `
  ${marginTop} ${marginLeft} ${paddingX} ${paddingY} ${width}
  cursor-pointer border border-gray-300 dark:border-black
  rounded-md bg-white dark:bg-[#000] text-black dark:text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm hover:shadow-md
`;

export const localitySelect = ({
  disabled = false,
} = {}) => `
  cursor-pointer border border-gray-300 dark:border-black
  rounded-md 
  ${disabled ? 'bg-blue text-blue cursor-not-allowed'
  : 'bg-white dark:bg-[#000] text-black dark:text-white'}
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm 
  ${disabled ? 'shadow-none ' : 'hover:shadow-md'}
`;
