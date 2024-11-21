import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cls from 'classnames';

export const MouseTracker = ({
	children,
	className,
	offset = { x: 0, y: 0 },
}) => {
	const element = useRef({});

	useEffect(() => {
		function handler(e) {
			if (element.current) {
				const x = e.clientX + offset.x,
					y = e.clientY + offset.y;
				element.current.style.transform = `translate(${x}px, ${y}px)`;
				element.current.style.visibility = 'visible';
			}
		}
		document.addEventListener('mousemove', handler);
		return () => document.removeEventListener('mousemove', handler);
	}, [offset.x, offset.y]);

	return createPortal(
		<div className={cls('mouse-tracker', className)} ref={element}>
			{children}
		</div>,
		document.body
	);
};

// import { useRef, useEffect } from 'react';
// import cls from 'classnames';

// export const MouseTracker = ({
// 	children,
// 	className,
// 	offset = { x: 0, y: 0 },
// }) => {
// 	const element = useRef(null);
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		function handler(e) {
// 			if (element.current && containerRef.current) {
// 				// Calculate the mouse position relative to the container
// 				const rect = containerRef.current.getBoundingClientRect();
// 				const x = e.clientX - rect.left + offset.x;
// 				const y = e.clientY - rect.top + offset.y;

// 				// Only update the position if the cursor is inside the container
// 				if (
// 					e.clientX >= rect.left &&
// 					e.clientX <= rect.right &&
// 					e.clientY >= rect.top &&
// 					e.clientY <= rect.bottom
// 				) {
// 					element.current.style.transform = `translate(${x}px, ${y}px)`;
// 					element.current.style.visibility = 'visible';
// 				} else {
// 					element.current.style.visibility = 'hidden';
// 				}
// 			}
// 		}

// 		// Listen for mousemove events on the container instead of the document
// 		const container = containerRef.current;
// 		if (container) {
// 			container.addEventListener('mousemove', handler);
// 		}

// 		// Cleanup event listener on component unmount
// 		return () => {
// 			if (container) {
// 				container.removeEventListener('mousemove', handler);
// 			}
// 		};
// 	}, [offset.x, offset.y]);

// 	return (
// 		<div ref={containerRef} className='tracker-container'>
// 			<div className={cls('mouse-tracker', className)} ref={element}>
// 				{children}
// 			</div>
// 		</div>
// 	);
// };
