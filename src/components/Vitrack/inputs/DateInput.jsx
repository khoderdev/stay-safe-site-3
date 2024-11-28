// // import React, { useState } from 'react';
// // import DatePicker from 'react-datepicker';
// // import { Input } from 'semantic-ui-react';
// // import 'react-datepicker/dist/react-datepicker.css';
// // import { inputStyles } from '../../utils/styles';

// // const DateInput = ({ label, name, value, onChange }) => {
// //   // Convert "DD/MM/YYYY" to Date object
// //   const parseDateToObj = (dateStr) => {
// //     const [day, month, year] = dateStr.split('/');
// //     return new Date(year, month - 1, day); // JavaScript months are 0-indexed
// //   };

// //   // Convert Date object to "DD/MM/YYYY"
// //   const formatDateToDDMMYYYY = (dateObj) => {
// //     const day = String(dateObj.getDate()).padStart(2, '0');
// //     const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
// //     const year = dateObj.getFullYear();
// //     return `${day}/${month}/${year}`;
// //   };

// //   // State for date picker handling
// //   const [selectedDate, setSelectedDate] = useState(
// //     value ? parseDateToObj(value) : null
// //   );

// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //     const formattedDate = date ? formatDateToDDMMYYYY(date) : '';
// //     onChange({
// //       target: {
// //         name,
// //         value: formattedDate,
// //       },
// //     });
// //   };

// //   // Handle manual input change
// //   const handleManualChange = (e) => {
// //     const inputValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

// //     // Auto-format to DD/MM/YYYY
// //     let formattedValue = inputValue;
// //     if (inputValue.length > 2) {
// //       formattedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
// //     }
// //     if (inputValue.length > 4) {
// //       formattedValue = `${inputValue.slice(0, 2)}/${inputValue.slice(
// //         2,
// //         4
// //       )}/${inputValue.slice(4, 8)}`;
// //     }

// //     onChange({
// //       target: {
// //         name,
// //         value: formattedValue,
// //       },
// //     });

// //     // Update the date picker if the manual input is valid
// //     if (formattedValue.length === 10) {
// //       const dateObj = parseDateToObj(formattedValue);
// //       setSelectedDate(dateObj);
// //     }
// //   };

// //   return (
// //     <div>
// //       <label className='block text-sm mb-2'>{label}</label>

// //       <DatePicker
// //         selected={selectedDate}
// //         onChange={handleDateChange}
// //         customInput={
// //           <Input
// //             placeholder='DD/MM/YYYY'
// //             value={value}
// //             onChange={handleManualChange}
// //             className={`${inputStyles()} `}
// //           />
// //         }
// //         dateFormat='dd/MM/yyyy'
// //         showMonthDropdown
// //         showYearDropdown
// //         dropdownMode='select'
// //         // Customize styles with Tailwind CSS
// //         className='border border-gray-300 p-2 rounded-lg shadow-sm text-gray-700 w-full'
// //         popperClassName='bg-black border rounded-lg shadow-lg p-2'
// //         calendarClassName='border rounded-lg bg-black shadow-md'
// //         dayClassName={(date) =>
// //           date.getDay() === 0 || date.getDay() === 6
// //             ? 'text-pink'
// //             : 'text-gray-700'
// //         }
// //         todayButton='Today'
// //         todayClassName='bg-blue-500 text-white rounded-md px-2 py-1'
// //       />
// //     </div>
// //   );
// // };

// // export default DateInput;
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Input } from 'semantic-ui-react';
// import { CiCalendar } from 'react-icons/ci';
// import './styles.css';
// import { inputStyles } from '../../utils/styles';

// const formatDate = (date) => {
// 	if (!date) return '';
// 	const day = String(date.getDate()).padStart(2, '0');
// 	const month = String(date.getMonth() + 1).padStart(2, '0');
// 	const year = date.getFullYear();
// 	return `${day}/${month}/${year}`;
// };

// const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
// 	<div className='w-full'>
// 		<input
// 			type='text'
// 			readOnly
// 			ref={ref}
// 			value={value}
// 			placeholder='DD/MM/YYYY'
// 			onClick={onClick}
// 			className={`${inputStyles()} !w-full !text-black dark:!text-white-bg !bg-white-bg dark:!bg-black`}
// 		/>
// 		<div
// 			className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
// 			onClick={onClick}
// 		>
// 			<CiCalendar className='w-6 h-6 text-[#000] dark:text-white-whites' />
// 		</div>
// 	</div>
// ));

// const DateInput = ({ label, value, onChange }) => {
// 	// Convert the value (which is a string) back to a Date object for DatePicker
// 	const dateValue = value
// 		? new Date(value.split('/').reverse().join('-'))
// 		: null;

// 	return (
// 		<div className='w-full'>
// 			<label className='block text-sm !text-black dark:!text-white-bg'>
// 				{label}
// 			</label>
// 			<DatePicker
// 				selected={dateValue}
// 				onChange={(date) => {
// 					// Format the date as DD/MM/YYYY and pass it to the parent
// 					const formattedDate = formatDate(date);
// 					onChange({ target: { name: 'dateOfBirth', value: formattedDate } });
// 				}}
// 				dateFormat='dd/MM/yyyy'
// 				className='w-full px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
// 				popperClassName='custom-popper'
// 				calendarClassName='custom-calendar'
// 				customInput={<CustomDateInput />}
// 				showMonthDropdown
// 				showYearDropdown
// 				dropdownMode='select'
// 			/>
// 		</div>
// 	);
// };

// export default DateInput;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from 'react-icons/ci';
import '../styles.css';
import { inputStyles } from '../../../utils/styles';

const formatDate = (date) => {
	if (!date) return '';
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
	<div className='relative w-full'>
		<input
			type='text'
			readOnly
			ref={ref}
			value={value}
			placeholder='DD/MM/YYYY'
			onClick={onClick}
			className={`${inputStyles()} w-full text-black dark:text-white-bg bg-white-bg dark:bg-black`}
		/>
		<div
			className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
			onClick={onClick}
		>
			<CiCalendar className='w-6 h-6 text-[#000] dark:text-white-whites' />
		</div>
	</div>
));

const DateInput = ({ label, value, onChange }) => {
	// Convert the value (which is a string) back to a Date object for DatePicker
	const dateValue = value
		? new Date(value.split('/').reverse().join('-'))
		: null;

	return (
		<div className='w-full'>
			<label className='block text-sm text-black dark:text-white-bg mb-1'>
				{label}
			</label>
			<DatePicker
				selected={dateValue}
				onChange={(date) => {
					// Format the date as DD/MM/YYYY and pass it to the parent
					const formattedDate = formatDate(date);
					onChange({ target: { name: 'dateOfBirth', value: formattedDate } });
				}}
				dateFormat='dd/MM/yyyy'
				className='w-full px-4 py-2 border rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				popperClassName='custom-popper'
				calendarClassName='custom-calendar'
				customInput={<CustomDateInput />}
				showMonthDropdown
				showYearDropdown
				dropdownMode='select'
			/>
		</div>
	);
};

export default DateInput;
