import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SmallCircle from './SmallCircle';
import TextImage from './TextImage';

function PrevelenceCircle({ scrollContainerRef }) {
	const [rotation, setRotation] = useState(0); // Accumulated rotation value
	const lastScrollTop = useRef(0); // Store the last scroll position

	// Listen to the scroll container's scroll event
	useEffect(() => {
		const handleScroll = () => {
			const scrollContainer = scrollContainerRef.current;
			if (scrollContainer) {
				const currentScrollTop = scrollContainer.scrollTop; // Current scroll position
				const deltaY = currentScrollTop - lastScrollTop.current; // Scroll delta
				lastScrollTop.current = currentScrollTop; // Update the last scroll position

				// Adjust rotation based on scroll delta
				const spinMultiplier = 1; // Reduced for slower spinning
				setRotation((prev) => prev + deltaY * spinMultiplier);
			}
		};

		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll);
			}
		};
	}, [scrollContainerRef]);

	return (
		<div className='relative z-30 flex items-center justify-center w-full h-full  bg-black -2 border-pink'>
			{/* First Circle (Normal Spin) */}
			<motion.div
				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
				animate={{
					rotate: rotation, // Bind accumulated rotation state
				}}
				transition={{
					type: 'tween',
					duration: 0.1, // Smooth out quick scroll animations
					ease: 'easeOut',
				}}
				style={{
					perspective: 800,
				}}
				className='absolute w-full sm:w-[60%] xl:w-full flex items-center justify-center'
			>
				<SmallCircle />
			</motion.div>

			{/* Second Circle (Opposite Spin) */}
			<motion.div
				initial={{ rotateX: 0, rotateY: 0, z: 0 }}
				animate={{
					rotate: -rotation, // Reverse the rotation direction
				}}
				transition={{
					type: 'tween',
					duration: 0.1, // Smooth out quick scroll animations
					ease: 'easeOut',
				}}
				style={{
					perspective: 800,
				}}
				className='absolute w-[80%] sm:w-[43%] xl:w-[55%] h-auto rounded-full flex items-center justify-center'
			>
				<SmallCircle />
			</motion.div>
			<img src={TextImage} alt='' />
		</div>
	);
}

export default PrevelenceCircle;
