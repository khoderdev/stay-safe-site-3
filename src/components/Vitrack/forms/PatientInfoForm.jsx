import React from 'react';
import InputField from '../inputs/InputField';
import Dropdown from '../inputs/Dropdown';
import DateInput from '../inputs/DateInput';
import {
	countriesOptions,
	nationalitiesOptions,
	diseasesOptions,
} from '../data';

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

		{/* Only show the 'otherHealthCondition' input if 'healthCondition' is 'Others' */}
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
			<label className='block text-sm text-black dark:text-white-bg mb-2 font-semibold'>
				Do you have any Known Allergies to medications?
			</label>
			<div className='flex items-center space-x-6 mb-4'>
				<label className='flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer'>
					<input
						type='radio'
						name='allergiesMed'
						value='Yes'
						onChange={handleChange}
						checked={formData.allergiesMed === 'Yes'}
						className='hidden peer'
					/>
					<span className='w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500'>
						<span className='w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100'></span>
					</span>
					<span>Yes</span>
				</label>
				<label className='flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer'>
					<input
						type='radio'
						name='allergiesMed'
						value='No'
						onChange={handleChange}
						checked={formData.allergiesMed === 'No'}
						className='hidden peer'
					/>
					<span className='w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500'>
						<span className='w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100'></span>
					</span>
					<span>No</span>
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
			<label className='block text-sm text-black dark:text-white-bg mb-2 font-semibold'>
				Do you have any Known Food Allergies?
			</label>
			<div className='flex items-center space-x-6 mb-4'>
				<label className='flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer'>
					<input
						type='radio'
						name='hasNutritionAllergie'
						value='Yes'
						onChange={handleChange}
						checked={formData.hasNutritionAllergie === 'Yes'}
						className='hidden peer'
					/>
					<span className='w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500'>
						<span className='w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100'></span>
					</span>
					<span>Yes</span>
				</label>
				<label className='flex items-center space-x-2 text-black dark:text-white-bg cursor-pointer'>
					<input
						type='radio'
						name='hasNutritionAllergie'
						value='No'
						onChange={handleChange}
						checked={formData.hasNutritionAllergie === 'No'}
						className='hidden peer'
					/>
					<span className='w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500'>
						<span className='w-3 h-3 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100'></span>
					</span>
					<span>No</span>
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
