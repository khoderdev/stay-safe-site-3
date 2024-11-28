import React from 'react';

const ReviewSection = ({ formData }) => (
	<div className="p-6 bg-[#000] shadow-md rounded-lg space-y-4">
		<ul className="space-y-2">
			{Object.entries(formData).map(([key, value]) => (
				<li key={key} className="flex justify-between">
					<span className="font-semibold text-white-bg2 capitalize">
						{key.replace(/([A-Z])/g, ' $1')}
					</span>
					<span className="text-white-bg2">
						{typeof value === 'object'
							? JSON.stringify(value, null, 2)
							: value || 'N/A'}
					</span>
				</li>
			))}
		</ul>
	</div>
);

export default ReviewSection;
