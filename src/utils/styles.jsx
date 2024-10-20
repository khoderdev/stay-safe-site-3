export const inputStyles = ({
  marginTop = 'mt-1',
  marginLeft = 'ml-2',
  paddingX = 'px-3',
  paddingY = 'py-1',
  width = 'w-20',
} = {}) => `
  ${marginTop} ${marginLeft} ${paddingX} ${paddingY} ${width}
  border border-gray-300 dark:border-black
  rounded-md bg-white dark:bg-[#000] text-black dark:text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm hover:shadow-md
`;

export const selectStyles = ({
  marginTop = 'mt-1',
  marginLeft = 'ml-2',
  paddingX = 'px-2',
  paddingY = 'py-[8px]',
  width = 'w-24',
} = {}) => `
  ${marginTop} ${marginLeft} ${paddingX} ${paddingY} ${width}
  cursor-pointer border border-gray-300 dark:border-black
  rounded-md bg-white dark:bg-[#000] text-black dark:text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm hover:shadow-md
`;
