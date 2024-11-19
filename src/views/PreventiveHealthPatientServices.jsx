import React, { useState } from 'react';
import PHQ9Modal from '../components/modals/PHQ9';
import PHQ9Quiz from '../components/depressing-screening/PHQ9';
import SearchPharmacies from '../components/pharmacies/SearchPharmacies';
import STOPBang from '../components/calculator/stop-bang/StopBang';

function PreventiveHealthPatientServicesPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openQuizModal = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<div class='relative h-screen bg-white-bg dark:bg-black '>
				<h1 className='text-4xl font-semibold flex flex-col px-6 dark:text-white-bg mb-1'>
					Your Mental Health Matters
					<span className='text-lg font-normal'>
						Take the confidential depression screening tool as an initial step
						to understand your mental health status. 
					</span>
				</h1>
				<button
					className='btn-1 text-center px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-700'
					onClick={openQuizModal}
				>
					Start Screening
				</button>

				{/* <div class=' h-screen flex flex-col'> */}
				<PHQ9Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
					<PHQ9Quiz />
				</PHQ9Modal>
				{/* </div> */}
				{/* <div class=' top-0 h- flex flex-col items-center justify-start pt-20 bg-white-bg dark:bg-black border'>
					
				</div> */}

				<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'>
					<SearchPharmacies />
				</div>
				<div class='  bg-white-bg dark:bg-black'>
					<STOPBang/>
				</div>
				<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'></div>
			</div>
		</>
	);
}
export default PreventiveHealthPatientServicesPage;
