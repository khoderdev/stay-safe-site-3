import React from 'react';
import { Dropdown } from 'semantic-ui-react';

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
  <Dropdown
    placeholder={placeholder}
    fluid={fluid}
    search={search}
    selection={selection}
    options={options}
    onChange={onChange}
    value={value}
    open={open}
    {...props}
  />
);

export default DynamicDropdown;
