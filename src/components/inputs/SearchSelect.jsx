import React from 'react';
import ModernDropdown from './ModernDropdown';

const DynamicDropdown = ({
	options = [],
	placeholder = 'Select an option',
	fluid = true,
	search = true,
	selection = true,
	open,
	onChange,
	value,
	...props
}) => (
	<ModernDropdown
		placeholder={placeholder}
		fluid={fluid}
		search={search}
		options={options}
		onChange={onChange}
		value={value}
		{...props}
	/>
);

export default DynamicDropdown;
