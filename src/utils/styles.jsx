export const inputStyles = ({
  marginTop = 'mt-0',
  marginLeft = 'ml-0',
  paddingX = 'px-3',
  paddingY = 'py-0',
  width = 'w-0',
} = {}) => `
  ${marginTop} ${marginLeft} ${paddingX} ${paddingY} ${width}
  w-full !py-[13.5px] border border-gray-300 dark:border-black
  rounded-md bg-white-fg dark:bg-[#000] text-black dark:text-white-bg
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
  cursor-pointer w-full !py-[13px] border border-gray-300 dark:border-black
  rounded-md bg-white-fg dark:bg-[#000] text-black dark:text-white-bg
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm hover:shadow-md
`;

export const localitySelect = ({
  disabled = false,
} = {}) => `
  !w-full !py-[13px] cursor-pointer border border-gray-300 dark:border-black
  rounded-md 
  ${disabled ? '!bg-white-bg dark:!bg-[#212121] dark:text-white-bg p-2 !w-full cursor-not-allowed'
  : 'bg-white-fg dark:bg-[#000] text-black dark:text-white-bg px-2 !w-full'}
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-300 ease-in-out shadow-sm 
  ${disabled ? 'shadow-none ' : 'hover:shadow-md'}
`;
