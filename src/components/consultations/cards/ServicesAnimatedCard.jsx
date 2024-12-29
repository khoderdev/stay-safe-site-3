// import './index.css';

// const ServiceAnimatedCard = ({
// 	sectionId,
// 	title,
// 	description,
// 	buttonText,
// 	onClick,
// 	setIsOpen,
// }) => {
// 	const handleClick = () => {
// 		setIsOpen(true);
// 		if (onClick) onClick();
// 	};

// 	return (
// 		<section id={sectionId} className='advertisers-service-sec'>
// 			<div className='container'>
// 				<div className='service-card text-left!'>
// 					<h3>{title}</h3>
// 					<p>{description}</p>
// 					<button
// 						onClick={handleClick}
// 						className=' self-center border-pink border px-5 py-2 relati overflow-hidden bg-white-bg hover:bg-transparent rounded-md font-semibold text-black hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee]  shadow-md '
// 					>
// 						<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
// 						<span className='relative text-sm group-hover:text-white-bg-bg'>
// 							{buttonText}
// 						</span>
// 					</button>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default ServiceAnimatedCard;

const ServicesAnimatedCard = ({
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
			className='relative w-96 h-96 overflow-hidden transition-transform duration-200 transform hover:scale- bg-white-bg dark:bg-transparent dark:drop-shadow-2xl dark:shadow-[#000] rounded-lg shadow-lg border border-pink group'
		>
			{/* Title (moves to the top on hover) */}
			<h3 className='absolute bottom-10 group-hover:absolute group-hover:top-[100px] group-hover:mb-0 group-hover:opacity-100 text-left text-3xl px-6 font-bold text-black dark:text-white-bg z-30 dark:text-white transition-transform duration-300 transform group-hover:translate-y-[-20%] mb-4'>
				{title}
			</h3>

			{/* Hover Overlay with Description and Button (slides up from bottom) */}
			<div className='bg-pink flex flex-col items-center justify-end px-6 pb-4 w-full h-full bg-opacity-90 text-left! opacity-0 transition-all duration-300 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0'>
				<p className='text-left text-lg group-hover:text-white-bg'>
					{description}
				</p>
				<button
					onClick={handleClick}
					className='btn-3 text-[15px]! p-2! px-3! transition-all! duration-300 ease-in-out bg-white-bg! hover:bg-transparent! rounded-md shadow-md hover:border-white-bg hover:text-white-bg dark:hover:border-white-bg'
				>
					{buttonText}
				</button>
			</div>
		</section>
	);
};

export default ServicesAnimatedCard;
// const ServiceAnimatedCard = ({
// 	sectionId,
// 	title,
// 	description,
// 	buttonText,
// 	setIsOpen,
// 	descriptionTextColor = '',
// }) => {
// 	const handleClick = () => {
// 		setIsOpen(true);
// 	};

// 	return (
// 		<section
// 			id={sectionId}
// 			className="relative w-96 h-96 overflow-hidden transition-transform duration-200 transform hover:scale-105 bg-white-bg dark:bg-transparent dark:drop-shadow-2xl dark:shadow-[#000] rounded-lg shadow-lg border border-pink group"
// 		>
// 			{/* Title */}
// 			<h3
// 				className="absolute bottom-10 group-hover:absolute group-hover:top-[100px] group-hover:mb-0 group-hover:opacity-100 text-left text-2xl px-6 font-bold text-black dark:text-white-bg z-30 transition-transform duration-300 transform group-hover:translate-y-[-20%] mb-4"
// 			>
// 				{title}
// 			</h3>

// 			{/* Hover Overlay */}
// 			<div
// 				className="bg-pink flex flex-col items-center justify-end px-6 pb-4 w-full h-full bg-opacity-90 text-left! opacity-0 transition-all duration-300 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
// 			>
// 				<p className={`text-left text-lg group-hover:text-white-bg ${descriptionTextColor}`}>
// 					{description}
// 				</p>
// 				<button
// 					onClick={handleClick}
// 					className="btn-3 text-[15px]! p-2! px-3! transition-all! duration-300 ease-in-out bg-white-bg! hover:bg-transparent! rounded-md shadow-md hover:border-white-bg hover:text-white-bg dark:hover:border-white-bg"
// 				>
// 					{buttonText}
// 				</button>
// 			</div>
// 		</section>
// 	);
// };

// export default ServiceAnimatedCard;
