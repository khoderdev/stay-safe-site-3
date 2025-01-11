import InputField from './InputField';

// Blood Pressure Input component
const BloodPressureInput = ({ hand, systolic, diastolic, onChange }) => (
	<div>
		<div className='mb-2 dark:text-white-whites'>{hand} Hand</div>
		<div className='flex space-x-8'>
			<InputField
				label='Systolic'
				type='number'
				name='systolic'
				value={systolic || ''} 
				onChange={onChange}
			/>
			<InputField
				label='Diastolic'
				type='number'
				name='diastolic'
				value={diastolic || ''} 
				onChange={onChange}
			/>
		</div>
	</div>
);
export default BloodPressureInput;
