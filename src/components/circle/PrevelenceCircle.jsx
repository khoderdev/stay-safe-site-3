import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SmallCircle from './SmallCircle';
import { Text } from './images';
import CTA from './CTA';

function PrevelenceCircle() {
	const { scrollY } = useScroll();
	const rotationForward = useSpring(0, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const rotationReverse = useSpring(0, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useEffect(() => {
		const updateRotation = () => {
			const latest = scrollY.get();
			const rotation = latest * 0.3; // Adjust multiplier for rotation speed
			rotationForward.set(rotation);
			rotationReverse.set(-rotation); // Opposite direction
		};

		window.addEventListener('scroll', updateRotation);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('scroll', updateRotation);
		};
	}, [scrollY, rotationForward, rotationReverse]);

	return (
		<div className='w-full h-full flex flex-col'>
			<div className='relative z-40 flex flex-col items-center justify-center w-full min-h-[70dvh] md:h-[200dvh] overflow-hidden '>
				{/* First Circle (Normal Spin) */}
				<motion.div
					style={{
						rotate: rotationForward,
						perspective: 800,
					}}
					className='absolute w-full flex items-center justify-center z-40'
				>
					<SmallCircle />
				</motion.div>

				<div className='w-[50%] flex items-center justify-center md:pl-6 xl:pl-10 z-40'>
					<div className='mr-4'>
						<img className='w-10 sm:w-[8rem] md:w-[10rem] z-40' src={Text} alt='1in6' />
					</div>
					<div className='w-52 sm:w-64 md:w-96 xl:w-[60%] md:pl-2'>
						<p className='xsm:text-[0.6rem] sm:text-[1.1rem] md:text-[1.6rem] lg:text-[1.9rem] font-semibold text-white-bg text-justify'>
							One in Six children and adolescents (ages 2-19) are overweight.
							Globally, over one billion people live with obesity, including
							nearly 880 million adults and 159 million youths.
						</p>
					</div>
				</div>
				{/* Second Circle (Opposite Spin) */}
				<motion.div
					style={{
						rotate: rotationReverse,
						perspective: 800,
					}}
					className='absolute w-[70%] h-screen md:h-[58%] xl:h-[58%] z-40 bg- rounded-full flex items-center justify-center'
				>
					<SmallCircle />
				</motion.div>
			</div>
			<div className='px-6 md:mt-16'>
				<CTA />
			</div>
		</div>
	);
}

export default PrevelenceCircle;
