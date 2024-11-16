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
			<div className='relative flex items-center justify-center h-[120dvh] overflow-hidden z-20 '>
				<motion.img
					ref={ref}
					src={Circle1}
					alt='circle1'
					className='w-[90%] md:w-[55%] absolute transition-transform duration-200 ease-in-out z-30'
					animate={{
						rotate: isInView ? [0, 180] : 0,
					}}
					transition={{
						duration: 1,
						ease: 'easeInOut',
					}}
				/>
				<div className='flex items-center md:pl-6 z-30'>
					<div className=' mr-4'>
						<img className='w-10 md:w-20 xl:w-32 z-30' src={Circle2} alt='1in6' />
					</div>

					<div className='w-28 md:w-80 md:pl-2'>
						<p className='text-[0.5rem] md:text-lg xl:text-2xl font-semibold text-white-bg text-justify'>
							One in Six children and adolescents  (ages 2-19) are
							overweight. Globally,
							over one billion people live with 
							obesity, including nearly 880 million adults and 159 million
							youths.
						</p>
					</div>
				</div>
				<motion.img
					ref={ref}
					src={Final}
					className='w-[68%] md:w-[40%] absolute transition-transform duration-200 ease-in-out'
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
