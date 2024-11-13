import { useRef } from 'react';
import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import MediterraneanDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PrevelenceCircle from '../components/circle/PrevelenceCircle';
import MDCServices from '../components/MDCServices';
import Puzzle from '../components/puzzle/Puzzle';
import Kitchen from '../components/fridge/Kitchen';

function MDC() {
	const sectionRef = useRef(null);

	return (
		<div className='flex flex-col'>
			<div className='bg-white-bg2 dark:bg-[#000]'>
				<MDCServices targetRef={sectionRef} />
			</div>
			<div className='section'>
				<Kitchen />
			</div>

			<div
				ref={(el) => {
					sectionRef.current = el;
				}}
				className='section flex flex-col justify-center bg-white-bg2 dark:bg-black'
			>
				<Consultations />
			</div>

			<div className='flex p-8 bg-white-fg dark:bg-[#000]'>
				<BMICalculator />
			</div>

			<div className='section bg-white-fg'>
				<Puzzle />
			</div>

			<div className='section bg-white-bg2 dark:bg-black'>
				<FoodAndNutrition />
			</div>

			<div className='section p-4'>
				<MediterraneanDietScore />
			</div>
			<div className='sm:!h-[65dvh] bg-white-bg2 dark:bg-black'>
				<QualitativeDiets />
			</div>
			<div className='section bg-[#000]'>
				<PrevelenceCircle />
			</div>
			<div className='section bg-black'></div>
		</div>
	);
}

export default MDC;
