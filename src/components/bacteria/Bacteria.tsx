import React, { useEffect, useRef } from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';
import { useMousePosition } from 'react-use-mouse-position';

function Bacteria() {
	const imageRef = useRef(null);
	const { mouseX, mouseY } = useMousePosition();
	const offset = { x: -20, y: -0 };

	// Update position of the image based on mouse coordinates
	useEffect(() => {
		if (imageRef.current && mouseX !== null && mouseY !== null) {
			const adjustedX = mouseX + offset.x;
			const adjustedY = mouseY + offset.y;
			imageRef.current.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
		}
	}, [mouseX, mouseY]);

	return (
		<div className='flex flex-col overflow-y-scroll h-full'>
			<MiddleSection />
			<BottomSection />
			<img
				src="/images/bacteria.png"
				ref={imageRef}
				className="w-40 sm:w-52 absolute pointer-events-none"
				// style={{ top: 25, left: 30 }}
			/>
		</div>
	);
}
export default Bacteria;