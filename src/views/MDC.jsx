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
import Cow from '../components/animals/Cow';
import CowChickenPage from '../components/animals/CowChicken';
import { FoodSafetyTable } from '../components/Table/FoodSafetyTable';
import { columns } from '../components/Table/columns';
import CTA from '../components/circle/CTA';
import Child from '../components/child/Child';
import Breast, { BreastColored } from '../components/breast/Breast';

function MDC() {
	const sectionRef = useRef(null);

	return (
		<div className='flex flex-col bg-white-bg2 dark:bg-[#000]'>
			<div className='section bg-white-bg'>
				<CowChickenPage />
			</div>

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

			<div className='flex sm:!h-[65dvh] p-8 bg-white-fg dark:bg-[#000]'>
				<BMICalculator />
			</div>

			<div className='section bg-white-bg2'>
				<Puzzle />
			</div>

			<div className='section !py-52 bg-white-fg dark:bg-black'>
				<FoodAndNutrition />
			</div>

			<div className='section p-6 bg-white-bg2'>
				<MediterraneanDietScore />
			</div>
			<div className='sm:!h-[65dvh] bg-white-bg dark:bg-black'>
				<QualitativeDiets />
			</div>

			<div className='section py-52 bg-[#000]'>
				<Child />
			</div>
			<div className=' h-[150dvh] pt-52 items-center flex justify-center bg-white-bg dark:bg-black'>
				<BreastColored/>
				{/* <Breast /> */}
			</div>

			<div className='h-[150dvh] bg-white-bg dark:bg-[#000]'>
				<FoodSafetyTable columns={columns} data={FoodSafetyTable} />
			</div>
		</div>
	);
}

export default MDC;
