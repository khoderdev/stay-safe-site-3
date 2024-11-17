import React from 'react';
import PHQ9Quiz from '../components/depressing-screening/PHQ9';

function PreventiveHealthPatientServicesPage() {
	return (
		<div class='relative'>
			<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-bg dark:bg-black'>
				<PHQ9Quiz />
			</div>
			<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'></div>
			<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-bg dark:bg-black'></div>
			<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'></div>
		</div>
	);
}
export default PreventiveHealthPatientServicesPage;
