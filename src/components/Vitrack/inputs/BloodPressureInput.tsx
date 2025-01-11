// import React, { forwardRef } from 'react';
// import InputField from './InputField';

// // Blood Pressure Input component
// const BloodPressureInput = forwardRef<HTMLInputElement, {
//   hand: string;
//   systolic: string;
//   diastolic: string;
//   onChange: (e: { target: { name: string; value: string; }; }) => void;
// }>((props, ref) => (
//   <div>
//     <div className='mb-2 dark:text-white-whites'>{props.hand} Hand</div>
//     <div className='flex space-x-8'>
//       <InputField
//         label='Systolic'
//         type='number'
//         name='systolic'
//         value={props.systolic || ''}
//         onChange={props.onChange}
//         ref={ref} // Assign the ref to the InputField component
//         max={undefined} />
//       <InputField
//         label='Diastolic'
//         type='number'
//         name='diastolic'
//         value={props.diastolic || ''}
//         onChange={props.onChange} max={undefined} ref={undefined} />
//     </div>
//   </div>
// ));
// export default BloodPressureInput;
import React, { forwardRef } from 'react';
import InputField from './InputField';

const BloodPressureInput = forwardRef<HTMLInputElement, {
  hand: string;
  systolic: string;
  diastolic: string;
  onChange: (e: { target: { name: string; value: string; }; }) => void;
}>((props, ref) => (
  <div>
    <div className='mb-2 dark:text-white-whites'>{props.hand} Hand</div>
    <div className='flex space-x-8'>
      <InputField
        label='Systolic'
        type='number'
        name='systolic'
        value={props.systolic || ''}
        onChange={props.onChange}
        ref={ref as React.Ref<HTMLInputElement>}
        max={undefined}
      />
      <InputField
        label='Diastolic'
        type='number'
        name='diastolic'
        value={props.diastolic || ''}
        onChange={props.onChange}
        max={undefined}
      />
    </div>
  </div>
));

export default BloodPressureInput;