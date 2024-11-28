// import React, { useState } from 'react';

// const HoverHandler = ({ id, onHoverStart, onHoverEnd, children }) => {
// 	const [isHovered, setHovered] = useState(false);

// 	const handleMouseEnter = () => {
// 		setHovered(true);
// 		if (onHoverStart) onHoverStart(id); // Notify parent about hover start
// 	};

// 	const handleMouseLeave = () => {
// 		setHovered(false);
// 		if (onHoverEnd) onHoverEnd(id); // Notify parent about hover end
// 	};

// 	return (
// 		<div
// 			id={id}
// 			onMouseEnter={handleMouseEnter}
// 			onMouseLeave={handleMouseLeave}
// 		>
// 			{children(isHovered)} {/* Pass isHovered state to children */}
// 		</div>
// 	);
// };

// export default HoverHandler;
import React from 'react';

const HoverHandler = ({
	id,
	isHovered,
	onHoverStart,
	onHoverEnd,
	children,
}) => {
	const handleMouseEnter = () => {
		if (onHoverStart) onHoverStart(id);
	};

	const handleMouseLeave = () => {
		if (onHoverEnd) onHoverEnd(id);
	};

	return (
		<g id={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{React.cloneElement(children, { isHovered })}
		</g>
	);
};

export default HoverHandler;
