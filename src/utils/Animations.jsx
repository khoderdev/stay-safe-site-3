import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Dynamic animation hooks and utility functions
export const useDynamicAnimations = () => {
	// Reference to any section for scroll and in-view checks
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false });

	// Dynamic scroll value to create scroll-based animations
	const { scrollY } = useScroll();

	// Create a reusable parallax effect for any component
	const useParallax = (inputRange = [0, 500], outputRange = [0, 200]) => {
		return useTransform(scrollY, inputRange, outputRange);
	};

	// Generate a dynamic container animation
	const getContainerAnimation = (options = {}) => {
		const { staggerChildren = 0.2, delayChildren = 0 } = options;

		return {
			hidden: {},
			visible: {
				transition: {
					staggerChildren,
					delayChildren,
				},
			},
		};
	};

	// Generate a dynamic animation for words or buttons
	const getItemAnimation = (options = {}) => {
		const { duration = 0.5, yOffset = 10, ease = 'easeOut' } = options;

		return {
			hidden: {
				opacity: 0,
				y: yOffset,
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration,
					ease,
				},
			},
		};
	};

	// Create a dynamic floating effect
	const getFloatingAnimation = (options = {}) => {
		const {
			floatRange = 10, // Vertical movement range
			duration = 3, // Duration for one cycle
			ease = 'easeInOut',
		} = options;

		return {
			y: [0, -floatRange, 0],
			transition: {
				duration,
				repeat: Infinity,
				repeatType: 'mirror',
				ease,
			},
		};
	};

	return {
		sectionRef,
		isInView,
		useParallax,
		getContainerAnimation,
		getItemAnimation,
		getFloatingAnimation,
	};
};

// Data array for dynamic animated images
const animatedImages = [
	{
		id: 'image1',
		src: '/images/image1.png', // Replace with your dynamic image paths
		alt: 'Animated Image 1',
		className: 'mt-10',
		parallaxRange: [0, 500], // Input range for scroll effect
		parallaxOffset: [0, 150], // Output range for parallax effect
	},
	{
		id: 'image2',
		src: '/images/image2.png', // Replace with your dynamic image paths
		alt: 'Animated Image 2',
		className: 'mt-10',
		parallaxRange: [0, 500],
		parallaxOffset: [0, 100],
	},
	// Add more images dynamically here if needed
];

const AnimatedSection = () => {
	// Retrieve dynamic utilities
	const {
		sectionRef,
		isInView,
		useParallax,
		getContainerAnimation,
		getItemAnimation,
		getFloatingAnimation,
	} = useDynamicAnimations();

	return (
		<section ref={sectionRef} className='my-20'>
			<motion.div
				// Use dynamic container animation with customizable stagger
				variants={getContainerAnimation({
					staggerChildren: 0.3,
					delayChildren: 0.2,
				})}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				className='flex flex-col items-center space-y-8'
			>
				{/* Dynamic animated text */}
				<motion.h1
					variants={getItemAnimation({ duration: 0.6, yOffset: 20 })}
					className='text-4xl font-semibold'
				>
					Worried about your little one's health? Let us help you give them the
					best care.
				</motion.h1>

				{/* Dynamic animated button with floating effect */}
				<motion.button
					variants={getItemAnimation({ duration: 0.5, yOffset: 15 })}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					animate={getFloatingAnimation({ floatRange: 15, duration: 4 })}
					className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
				>
					Book an Appointment
				</motion.button>

				{/* Dynamic rendering of parallax images */}
				{animatedImages.map((item) => {
					// Calculate the parallax effect dynamically for each image
					const parallaxEffect = useParallax(
						item.parallaxRange,
						item.parallaxOffset
					);

					return (
						<motion.div
							key={item.id}
							style={{ y: parallaxEffect }}
							className={item.className}
						>
							<img src={item.src} alt={item.alt} />
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default AnimatedSection;
