import React from 'react';

const HoverHandler = ({
	id,
	ishovered,
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
			{React.cloneElement(children, { ishovered })}
		</g>
	);
};

export default HoverHandler;
