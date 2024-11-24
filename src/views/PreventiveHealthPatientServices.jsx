import React, { useState } from 'react';
import PHQ9Modal from '../components/modals/PHQ9';
import PHQ9Quiz from '../components/depressing-screening/PHQ9';
import SearchPharmacies from '../components/pharmacies/SearchPharmacies';
import STOPBang from '../components/calculator/stop-bang/StopBang';
import Titles from '../components/calculator/stop-bang/Titles';

function PreventiveHealthPatientServicesPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openQuizModal = () => {
		setIsModalOpen(true);
	};
	const openStopBang = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<div class='relative h-screen bg-white-bg dark:bg-black '>
				<div class='h-screen flex flex-col items-center justify-start pt-10 bg-white-bg dark:bg-black'>
					<h1 className='text-4xl md:text-6xl font-semibold flex flex-col px-6 dark:text-white-bg mb-1'>
						Your Mental Health Matters
						<span className='text-xl md:text-2xl font-normal'>
							Take the confidential depression screening tool as an initial step
							to understand your mental health status. 
						</span>
					</h1>
					<button
						className='btn-1 text-center !text-2xl !px-12 !py-8 mt-24 rounded-lg text-white bg-blue-500 hover:bg-blue-700 drop-shadow-lg'
						onClick={openQuizModal}
					>
						Start Screening
					</button>

					<PHQ9Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
						<PHQ9Quiz />
					</PHQ9Modal>
				</div>

				<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'>
					<SearchPharmacies />
				</div>
				<div class='section  bg-white-bg dark:bg-black  p-4 md:p-8'>
					<Titles />
					<PHQ9Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
						<STOPBang />
					</PHQ9Modal>
					<button
						className='btn-1 text-center !text-2xl !px-12 !py-8 place-self-center rounded-lg text-white bg-blue-500 hover:bg-blue-700 drop-shadow-lg'
						onClick={openStopBang}
					>
						Start Screening
					</button>
				</div>
				<div class='sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]'></div>
			</div>
		</>
	);
}
export default PreventiveHealthPatientServicesPage;
