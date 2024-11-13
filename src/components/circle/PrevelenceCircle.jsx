import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Circle1, Final, Circle2 } from './images';

export const ScrollAnimations = () => {
	return (
		<div className='bg-zinc-950 text-zinc-50'>
			<div className='relative z-10'>
				<div className='h-[150vh]' />
				<WhileInView />
				<div className='h-[150vh]' />
			</div>
		</div>
	);
};

const WhileInView = () => {
	return (
		<div className='relative mx-auto grid h-32 w-96 place-content-center'>
			<PrevelenceCircle />
		</div>
	);
};

function PrevelenceCircle() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount: 'all',
	});

	return (
		<>
			<div className='relative flex items-center justify-center h-screen overflow-hidden z-50 '>
				<motion.img
					ref={ref}
					src={Circle1}
					alt='circle1'
					className='w-[90%] md:w-[43%] absolute transition-transform duration-200 ease-in-out'
					animate={{
						rotate: isInView ? [0, 180] : 0,
					}}
					transition={{
						duration: 1,
						ease: 'easeInOut',
					}}
				/>
				<div className='flex items-center md:pl-6 '>
					<div className=' mr-4'>
						<img className='w-10 md:w-20 xl:w-32' src={Circle2} alt='1in6' />
					</div>

					<div className='w-28 md:w-72 md:pl-8'>
						<p className='text-[0.5rem] md:text-sm xl:text-xl font-semibold  text-white-bg'>
							One in Six children and adolescents <br /> (ages 2-19) are
							overweight. Globally, <br />
							over one billion people live with <br />
							obesity, including nearly 880 million adults and 159 million
							youths.
						</p>
					</div>
				</div>
				<motion.img
					ref={ref}
					src={Final}
					className='w-[68%] md:w-[33%] absolute transition-transform duration-200 ease-in-out'
					alt='circle2'
					animate={{
						rotate: isInView ? [180, 0] : 180,
					}}
					transition={{
						repeat: 1,
						repeatType: 'reverse',
						duration: 1,
						ease: 'easeInOut',
					}}
				/>
			</div>
		</>
	);
}
export default PrevelenceCircle;
