// import React from 'react';

// const ReviewSection = ({ formData }) => (
// 	<div className='p-6 bg-[#000] shadow-md rounded-lg space-y-4'>
// 		<ul className='space-y-2'>
// 			{Object.entries(formData).map(([key, value]) => (
// 				<li key={key} className='flex justify-between'>
// 					<span className='font-semibold text-white-bg2 capitalize'>
// 						{key.replace(/([A-Z])/g, ' $1')}
// 					</span>
// 					<span className='text-white-bg2'>
// 						{typeof value === 'object'
// 							? JSON.stringify(value, null, 2)
// 							: value || 'N/A'}
// 					</span>
// 				</li>
// 			))}
// 		</ul>
// 	</div>
// );

// export default ReviewSection;
import React from 'react';
import { getWarnings } from './conditions'; // Import the getWarnings logic

const ReviewSection = ({ formData }) => {
	// Get the list of warnings based on the form data
	const warnings = getWarnings(formData);

	return (
		<div className='p-6 bg-[#000] shadow-md rounded-lg space-y-4'>
			{/* Display the submitted form data */}
			<div className='bg-gray-800 p-4 rounded-lg'>
				<h2 className='text-white font-semibold text-lg mb-2'>Form Data</h2>
				<ul className='space-y-2'>
					{Object.entries(formData).map(([key, value]) => (
						<li key={key} className='flex justify-between'>
							<span className='font-semibold text-white-bg2 capitalize'>
								{key.replace(/([A-Z])/g, ' $1')}
							</span>
							<span className='text-white-bg2'>
								{typeof value === 'object'
									? JSON.stringify(value, null, 2)
									: value || 'N/A'}
							</span>
						</li>
					))}
				</ul>
			</div>

			{/* Display the generated warnings */}
			<div className='bg-gray-700 p-4 rounded-lg'>
				<h2 className='text-white font-semibold text-lg mb-2'>
					Health Warnings
				</h2>
				{warnings.length > 0 ? (
					<ul className='list-disc pl-6 space-y-2'>
						{warnings.map((warning, index) => (
							<li key={index} className='text-red-400'>
								{warning}
							</li>
						))}
					</ul>
				) : (
					<p className='text-green-400'>
						All metrics are within normal ranges. No immediate action required.
					</p>
				)}
			</div>
		</div>
	);
};

export default ReviewSection;
