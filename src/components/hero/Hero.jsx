import { motion } from 'framer-motion';
import './hero.css';
import { Link } from 'react-router-dom';

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const flipVariants = {
	initial: {
		opacity: 0,
		rotateY: 0,
	},
	animate: {
		opacity: 1,
		rotateY: [0, 180, 360],
		transition: {
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
};

const rotateVariants = {
	initial: {
		rotate: 0,
	},
	animate: {
		rotate: 360,
		transition: {
			duration: 0.5,
			ease: 'linear',
			delay: 1.7,
		},
	},
};

const sliderVariants = {
	animate: {
		x: ['0%', '-500%'],
		transition: {
			duration: 20,
			repeat: Infinity,
			ease: 'linear',
		},
	},
};

const Hero = () => {
	return (
		<div className='hero sm:p-6 -mt-[18rem] text-black dark:text-white-bg'>
			<div className='wrapper'>
				<motion.div
					className='textContainer'
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					<motion.h2
						variants={textVariants}
						className='pb-4 text-4xl text-pink'
					>
						Stay Safe
					</motion.h2>

					<motion.h1
						className='text-[3rem] md:text-[4rem]'
						variants={flipVariants}
						initial='initial'
						animate='animate'
					>
						We Can
						<motion.span
							className='ml-3 inline-block text-pink font-bold'
							variants={rotateVariants}
							initial='initial'
							animate='animate'
						>
							Turn
						</motion.span>
						<motion.span
							className='ml-3 inline-block text-[3rem] md:text-[4rem]'
							initial='initial'
							animate='animate'
						>
							Things Around
						</motion.span>
					</motion.h1>
					<Link to={'./volenteering'} className='btn-1 text-white-whites p-4! place-self-center'>
						Join Our Team
					</Link>
				</motion.div>
			</div>
			<div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
				<motion.div
					className='slidingTextContainer text-slate-200! dark:text-[#212121]!'
					variants={sliderVariants}
					initial='initial'
					animate='animate'
					style={{ display: 'flex' }}
				>
					{/* Duplicated text for seamless scrolling */}
					{/* <span style={{ marginRight: '50px' }}>Stay Safe Public Health</span> */}
					<span style={{ marginRight: '50px' }}>Stay Safe Public Health</span>
					{/* Add more duplicates if necessary for better effect */}
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
