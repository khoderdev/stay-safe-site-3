import React from 'react';
import { useMousePosition } from 'react-use-mouse-position';
import { motion } from 'framer-motion';

function Bacteria() {
	const { mouseX, mouseY } = useMousePosition();
	const imageRef = React.useRef(null);
	const offset = { x: -20, y: -0 };

	React.useEffect(() => {
		if (imageRef.current && mouseX != null && mouseY != null) {
			const adjustedX = mouseX + offset.x;
			const adjustedY = mouseY + offset.y;
			imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
		}
	}, [mouseX, mouseY]);

	return (
		<div className='relative flex flex-col select-none pt-24'>
			{/* Grid Container */}

			<div className='grid grid-cols-12 grid-rows-12 p-2 gap-y-6 sm:gap-14 text-center text-xl sm:text-5xl dark:text-white-bg2 font-semibold'>
				<div className='col-span-8 row-span-2 col-start-3'>
					BE ANTIBIOTICS AWARE
				</div>
				<div className='col-span-12 row-span-2 row-start-3 sm:text-4xl'>
					Everyone has a role to play in improving antibiotic use.
				</div>
				<div className='col-span-3 row-span-2 row-start-5 flex items-end justify-end'>
					Get the
				</div>
				<div className='col-span-3 row-span-2 col-start-1 row-start-7 flex items-center justify-end'>
					at the
				</div>
				<div className='col-span-3 row-span-2 col-start-1 row-start-9 flex justify-end'>
					for the
				</div>
				<div className='col-span-3 row-span-2 col-start-10 row-start-5 flex items-end justify-start'>
					antibiotic
				</div>
				<div className='col-span-3 row-span-2 col-start-10 row-start-7 flex items-center justify-start'>
					dose
				</div>
				<div className='col-span-3 row-span-2 col-start-10 row-start-9 flex justify-start'>
					duration
				</div>
				{/* <div className='col-span-6 row-span-6 col-start-4 row-start-5'>9</div> */}
				{/* Animated "Right" Word */}
				<motion.div
					className='col-span-6 row-span-6 col-start-4 row-start-5 text-6xl sm:text-[10rem] flex justify-center items-center font-bold'
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1, 0] }} // Fade in and out effect
					transition={{
						duration: 2, // Duration for one cycle
						repeat: Infinity, // Repeat indefinitely
						repeatType: 'loop', // Loop animation
						ease: 'easeInOut', // Smooth easing
					}}
				>
					Right
				</motion.div>
			</div>

			{/* Image Inside Grid */}
			<img
				src='/images/bacteria.png'
				ref={imageRef}
				className='w-40 sm:w-72 absolute pointer-events-none'
				style={{ top: -200, left: 30 }}
			/>
		</div>
	);
}

export default Bacteria;
