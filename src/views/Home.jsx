import Hero from '../components/hero/Hero';
import PackYearsCalculator from '../components/calculator/index';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';
import HandMonster from '../components/HandMonster';
import PrevelenceCircle from '../components/circle/PrevelenceCircle';
import CTA from '../components/circle/CTA';
import { useRef, useState, useEffect } from 'react';
import Bacteria from '../components/bacteria/Bacteria';
import FiftyPercent from '../components/FiftyPercent/FiftyPercent';
import BarCharts from '../components/Charts/BarCharts';
import Balloon from '../components/Balloon/Balloon';

export default function Home() {
	const scrollContainerRef = useRef(null);
	const [isInView, setIsInView] = useState(false);

	// Scroll event handler
	const handleScroll = () => {
		const balloonElement =
			scrollContainerRef.current.querySelector('#balloon-section');
		const rect = balloonElement.getBoundingClientRect();
		const isElementInView = rect.top <= window.innerHeight && rect.bottom >= 0;

		setIsInView(isElementInView);
	};

	// Attach the scroll event listener
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			ref={scrollContainerRef}
			className='flex flex-col overflow-y-scroll scrollbar-hide h-full bg-white-fg dark:bg-black'
		>
			<div className='section panel'></div>

			<div className='section flex'>
				{/* <CirclesCharts /> */}
				<BarCharts />
			</div>

			<div id='balloon-section' className=''>
				<Balloon isInView={isInView} />
			</div>

			<div className='section flex'>
				<OnScrollComponent />
			</div>

			<div className='section'>
				<PackYearsCalculator />
			</div>

			<div className='h-[120dvh] pt-10 sm:pt-64 xl:pt-80 z-30'>
				<PrevelenceCircle scrollContainerRef={scrollContainerRef} />
			</div>

			<div className='section pt-72 sm:pt-[40rem] sm:pb-96 xl:pt-[50rem]'>
				{/* <CTA /> */}
			</div>

			<div className='section pt-20'>
				<HandMonster />
			</div>

			<div className='section'>
				<Bacteria />
			</div>

			<div className='section'>
				<Hero />
			</div>
		</div>
	);
}
