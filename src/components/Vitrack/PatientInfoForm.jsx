import React from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';
import DateInput from './DateInput';
import {
	countriesOptions,
	nationalitiesOptions,
	diseasesOptions,
} from './data';

const PatientInfoForm = ({ formData, handleChange }) => (
	<div className='p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8'>
		<InputField
			label='First Name'
			name='firstName'
			value={formData.firstName || ''}
			onChange={handleChange}
		/>
		<InputField
			label='Last Name'
			name='lastName'
			value={formData.lastName || ''}
			onChange={handleChange}
		/>
		<DateInput
			label='Date of Birth'
			name='dateOfBirth'
			value={formData.dateOfBirth || ''}
			onChange={handleChange}
		/>
		<Dropdown
			label='Gender'
			name='gender'
			value={formData.gender || ''}
			onChange={handleChange}
			options={['Male', 'Female', 'Other']}
		/>

		<Dropdown
			label='Nationality'
			name='nationality'
			value={formData.nationality || ''}
			onChange={handleChange}
			options={nationalitiesOptions}
		/>
		<Dropdown
			label='Country'
			name='country'
			value={formData.country || ''}
			onChange={handleChange}
			options={countriesOptions}
		/>
		<InputField
			label='Address'
			name='address'
			value={formData.address || ''}
			onChange={handleChange}
		/>
		<Dropdown
			label='Health Condition'
			name='healthCondition'
			value={formData.healthCondition || ''}
			onChange={handleChange}
			options={[...diseasesOptions, 'Others']}
		/>

		{formData.healthCondition === 'Others' && (
			<InputField
				label='Specify Your Health Condition'
				name='otherHealthCondition'
				value={formData.otherHealthCondition || ''}
				onChange={handleChange}
				placeholder='Specify your health condition'
			/>
		)}

		{/* Known Allergies to Medications */}
		<div>
			<label className='block text-sm text-black dark:text-white-bg mb-1'>
				Do you have any Known Allergies to medications?
			</label>
			<div className='flex items-center space-x-4 mb-4'>
				<label className='text-black dark:text-white-bg'>
					<input
						type='radio'
						name='allergiesMed'
						value='Yes'
						onChange={handleChange || ''}
						checked={formData.allergiesMed === 'Yes'}
						className='mr-2 dark:text-white-bg'
					/>
					Yes
				</label>
				<label className='text-black dark:text-white-bg'>
					<input
						type='radio'
						name='allergiesMed'
						value='No'
						onChange={handleChange || ''}
						checked={formData.allergiesMed === 'No'}
						className='mr-2 dark:text-white-bg'
					/>
					No
				</label>
			</div>
			{formData.allergiesMed === 'Yes' && (
				<InputField
					label='Please specify your medication allergies'
					name='specificAllergiesMed'
					value={formData.specificAllergiesMed || ''}
					onChange={handleChange}
				/>
			)}
		</div>

		{/* Known Food Allergies */}
		<div>
			<label className='block text-sm text-black dark:text-white-bg mb-1'>
				Do you have any Known Food Allergies?
			</label>
			<div className='flex items-center space-x-4 mb-4'>
				<label className='text-black dark:text-white-bg'>
					<input
						type='radio'
						name='hasNutritionAllergie'
						value='Yes'
						onChange={handleChange || ''}
						checked={formData.hasNutritionAllergie === 'Yes'}
						className='mr-2'
					/>
					Yes
				</label>
				<label className='text-black dark:text-white-bg'>
					<input
						type='radio'
						name='hasNutritionAllergie'
						value='No'
						onChange={handleChange || ''}
						checked={formData.hasNutritionAllergie === 'No'}
						className='mr-2'
					/>
					No
				</label>
			</div>
			{formData.hasNutritionAllergie === 'Yes' && (
				<Dropdown
					label='Please specify your food allergies'
					name='specificNutritionAllergie'
					value={formData.specificNutritionAllergie || ''}
					onChange={handleChange}
					options={[
						'Milk',
						'Eggs',
						'Fish',
						'Shellfish',
						'Tree Nuts',
						'Peanuts',
						'Wheat',
						'Soybeans',
						'Sesame',
					]}
				/>
			)}
		</div>

		<Dropdown
			label='Vitrack Kit'
			name='vitrackKit'
			value={formData.vitrackKit || ''}
			onChange={handleChange}
			options={['Granted', 'I have my Own Tools']}
		/>
	</div>
);

export default PatientInfoForm;
