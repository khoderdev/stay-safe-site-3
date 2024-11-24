import Hero from '../components/hero/Hero';
import PackYearsCalculator from '../components/calculator/index';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';
import HandMonster from '../components/HandMonster';
import PrevelenceCircle from '../components/circle/PrevelenceCircle';
import CTA from '../components/circle/CTA';
import { useRef } from 'react';
import Bacteria from '../components/bacteria/Bacteria';
import FiftyPercent from '../components/FiftyPercent/FiftyPercent';
import BarCharts from '../components/Charts/BarCharts';
import CirclesCharts from '../components/Charts/CirclesCharts';

export default function Home() {
	const scrollContainerRef = useRef(null);

	return (
		<div
			ref={scrollContainerRef}
			className='flex flex-col overflow-y-scroll h-full'
		>
			<div className='section panel bg-white-bg dark:bg-black'>
				<Hero />
			</div>

			<div className='section flex bg-white-fg dark:bg-[#000]'>
				{/* <CirclesCharts /> */}
				<BarCharts />
			</div>
			<div className='section flex bg-white-fg dark:bg-[#000]'>
				<OnScrollComponent />
			</div>

			<div className='section bg-white-bg2 dark:bg-black'>
				<PackYearsCalculator />
			</div>

			<div className='h-[120dvh] pt-10 sm:pt-64 xl:pt-80 z-30 bg-black'>
				<PrevelenceCircle scrollContainerRef={scrollContainerRef} />
			</div>
			<div className='section pt-72 sm:pt-[40rem] sm:pb-96 xl:pt-[50rem] bg-white-fg dark:bg-black'>
				{/* <CTA /> */}
			</div>

			<div className='section bg-white-fg dark:bg-[#000]'>
				<HandMonster />
			</div>
			<div className='section bg-white-fg dark:bg-black'>
				<Bacteria />
			</div>
			<div className='section bg-white-fg dark:bg-black'>
				<FiftyPercent />
			</div>
			<div className='section bg-white-fg dark:bg-black'>
			</div>
		</div>
	);
}
