import React from 'react';
import { useAtom } from 'jotai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from 'react-icons/ci';
import { dateOfBirthAtom } from '../../../atoms/store';
import { inputStyles } from '../../../utils/styles';

const formatDate = (date) => {
	if (!date) return '';
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
	<div className='w-full'>
		<input
			type='text'
			readOnly
			ref={ref}
			value={value}
			placeholder='DD/MM/YYYY'
			onClick={onClick}
			className={`${inputStyles()} !w-full !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black`}
		/>
		<div
			className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
			onClick={onClick}
		>
			<CiCalendar className='w-6 h-6 text-[#000] dark:text-white-whites' />
		</div>
	</div>
));

const DateInput = ({ label }) => {
	const [dateOfBirth, setDateOfBirth] = useAtom(dateOfBirthAtom);

	// Convert the value (which is a string) back to a Date object for DatePicker
	const dateValue = dateOfBirth
		? new Date(dateOfBirth.split('/').reverse().join('-'))
		: null;

	return (
		<div className='w-full'>
			<label className='block mb-2 text-sm !text-black dark:!text-white-bg'>
				{label}
			</label>
			<DatePicker
				selected={dateValue}
				onChange={(date) => {
					// Format the date as DD/MM/YYYY and update the atom
					const formattedDate = formatDate(date);
					setDateOfBirth(formattedDate); // Update the Jotai atom state
				}}
				dateFormat='dd/MM/yyyy'
				className='w-full px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				popperClassName='custom-popper'
				calendarClassName='custom-calendar'
				customInput={<CustomDateInput />}
				showMonthDropdown
				showYearDropdown
				dropdownMode='select'
				autoComplete='off'
			/>
		</div>
	);
};

export default DateInput;
