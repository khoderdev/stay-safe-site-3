import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './buttons/Button';

function MDCServices({ targetRef }) {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false });

	const text =
		'MDC Services From personalized consultations at our clinics, at home or online to large-scale community initiatives, we are dedicated to making nutrition accessible, understandable, and enjoyable for everyone.';

	// Splits the text into individual words to allow for separate animations.
	// `text.split(' ')` divides the sentence into an array of words wherever there's a space.
	const words = text.split(' ');

	// Animation settings for the container that holds all the words and the button.
	// This container will control how the child elements (words and button) are staggered during animation.
	const containerAnimation = {
		// The initial hidden state when the animation is not yet triggered.
		hidden: {},

		// The visible state that triggers when the animation should play.
		// The `staggerChildren` property sets a delay between each child’s animation.
		// In this case, each child (word or button) will animate with a 0.2-second delay between them.
		visible: {
			transition: {
				staggerChildren: 0.2, // Control stagger timing between children animations.
			},
		},
	};

	// Animation settings for individual words (and button) animation.
	// Defines how each word should appear and behave during the animation.
	const wordAnimation = {
		// The initial hidden state of each word, making it invisible and slightly moved down.
		hidden: {
			opacity: 0, // Completely transparent (invisible).
			y: 10, // Slightly below its final position (10 pixels down).
		},

		// The visible state that animates each word from the `hidden` state to the visible state.
		visible: {
			opacity: 1, // Fully visible.
			y: 0, // Moves to its final position (original spot, no vertical offset).
			transition: {
				duration: 0.5, // Animation duration for each word (0.5 seconds).
				ease: 'easeOut', // Animation easing function for a smooth finish.
			},
		},
	};

	// Function to handle scrolling to a specific section smoothly.
	// Uses the targetRef to scroll the page to the desired section when invoked.
	const handleScrollToSection = () => {
		// Checks if `targetRef` is defined and has a current DOM element reference.
		if (targetRef && targetRef.current) {
			// Scrolls smoothly to the referenced section.
			targetRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div
			className='flex flex-col items-center justify-center text-center py-14 p-4 md:p-10'
			ref={sectionRef}
		>
			<motion.div
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={containerAnimation}
				className='text-3xl dark:text-white-bg leading-relaxed md:text-4xl md:leading-relaxed font-semibold m-0 uppercase'
			>
				{words.map((word, index) => (
					<motion.span key={index} variants={wordAnimation}>
						{word}&nbsp;
					</motion.span>
				))}

				{/* Button as part of the same animation sequence */}
				<motion.div variants={wordAnimation}>
					<Button
						customStyles='bg-transparent place-self-center !border-2 !border-black hover:!border-transparent hover:!bg-pink !p-6 !rounded-full !mt-10 uppercase dark:!border-pink dark:!text-pink dark:hover:!text-white-bg'
						aria-label='Show details'
						onClick={handleScrollToSection}
					>
						Let's Show You How
					</Button>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default MDCServices;
