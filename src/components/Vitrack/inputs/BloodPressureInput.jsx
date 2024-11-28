// import React from 'react';
// import InputField from './InputField';

// const BloodPressureInput = ({ hand, systolic, diastolic, onChange }) => (
// 	<div>
// 		<div className="mb-2 dark:text-white-whites">{hand} Hand</div>
// 		<div className="flex space-x-8">
// 			<InputField
// 				label="Systolic"
// 				name={`${hand.toLowerCase()}HandBloodPressure.systolic`}
// 				value={systolic}
// 				onChange={onChange}
// 			/>
// 			<InputField
// 				label="Diastolic"
// 				name={`${hand.toLowerCase()}HandBloodPressure.diastolic`}
// 				value={diastolic}
// 				onChange={onChange}
// 			/>
// 		</div>
// 	</div>
// );

// export default BloodPressureInput;
import React from 'react';
import InputField from './InputField';

const BloodPressureInput = ({ hand, systolic, diastolic, onChange }) => (
	<div>
		<div className="mb-2 dark:text-white-whites">{hand} Hand</div>
		<div className="flex space-x-8">
			<InputField
				label="Systolic"
				name="systolic"
				value={systolic}
				onChange={onChange}
			/>
			<InputField
				label="Diastolic"
				name="diastolic"
				value={diastolic}
				onChange={onChange}
			/>
		</div>
	</div>
);

export default BloodPressureInput;
