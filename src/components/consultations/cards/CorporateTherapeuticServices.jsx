const Corporate = ({
	sectionId,
	title,
	description,
	buttonText,
	onClick,
	setIsOpen,
}) => {
	const handleClick = () => {
		setIsOpen(true);
		if (onClick) onClick();
	};

	return (
		<section
			id={sectionId}
			className='relative w-96 h-[300px] overflow-hidden transition-transform duration-200 transform hover:scale-[1.03] hover:translate-y-[-5px] select-none bg-white-fg dark:bg-[#000] dark:drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-lg shadow-lg shadow-gray-300 dark:shadow-[#111]  border-transparent hover:border-gradient-to-r from-pink-500 to-purple-500 group'
		>
			{/* Title (moves to the top on hover) */}
			<h3 className='absolute bottom-10 group-hover:absolute group-hover:top-[75px] group-hover:mb-0 group-hover:opacity-100 text-left text-3xl px-6 font-bold text-black dark:text-white-bg z-50 dark:text-white transition-transform duration-300 transform group-hover:translate-y-[-20%] mb-4 select-none'>
				Corporate Therapeutic Services
			</h3>

			{/* Hover Overlay with Description and Button (slides up from bottom) */}
			<div className='bg-pink flex flex-col items-center justify-end px-6 pb-4 w-full h-full bg-opacity-90 !text-left opacity-0 transition-all duration-300 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0'>
				<p className='text-left text-lg group-hover:text-white-bg select-none'>
					Specific to the workplace, Stay Safe notes that healthy eating
					increases productivity, decreases the number of sick days, increases
					happiness and improves employees' overall performance.
				</p>
				<button
					onClick={handleClick}
					className='btn-3 !text-[15px] !p-2 !px-3 !transition-all duration-300 ease-in-out !bg-white-bg hover:!bg-transparent rounded-md shadow-md hover:border-white-bg hover:text-white-bg dark:hover:border-white-bg select-none'
				>
					Start your journey
				</button>
			</div>
			<div className='absolute bottom-0 left-0 w-full h-[8px] bg-pink group-hover:bg-transparent transition-all duration-300'></div>
		</section>
	);
};

export default Corporate;
