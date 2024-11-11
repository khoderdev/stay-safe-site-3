import './index.css';

const ServiceAnimatedCard = ({
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
		<section id={sectionId} className='advertisers-service-sec'>
			<div className='container'>
				<div className='service-card !text-left'>
					<h3>{title}</h3>
					<p>{description}</p>
					<button
						onClick={handleClick}
						className=' self-center border-pink border px-5 py-2 relati overflow-hidden bg-white-bg hover:bg-transparent rounded-md font-semibold text-black hover:text-[#0e100f] dark:hover:text-[#f0f0ee] dark:hover:border-[#f0f0ee] text-white shadow-md '
					>
						<span className='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-pink group-hover:h-full opacity-90'></span>
						<span className='relative text-sm group-hover:text-white-bg'>
							{buttonText}
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ServiceAnimatedCard;
