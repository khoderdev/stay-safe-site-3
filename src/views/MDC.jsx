// import BMICalculator from '../components/calculator/bmi/BMICalculator';
// import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
// import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
// import Consultations from '../components/consultations/Consultations';
// import MDCHero from '../components/hero/MDCHero';
// import { useScrollSections } from '../hooks/useScrollSections';
// import Fridge from '../components/fridge/Fridge';
// import MediterraneanDietScore from '../components/calculator/medi-diet-score/MediDietScore';
// import PrevelenceCircle from '../components/circle/PrevelenceCircle';
// import MDCServices from '../components/MDCServices';

// function MDC() {
//   const sectionsRef = useScrollSections();

//   return (
//     <div className="flex flex-col">
//       <div ref={(el) => (sectionsRef.current[0] = el)} className="section bg-white-bg2">
//         <MDCServices />
//       </div>
//       <div ref={(el) => (sectionsRef.current[0] = el)} className="section bg-white-bg2">
//         <Fridge />
//       </div>
//       <div ref={(el) => (sectionsRef.current[0] = el)} className="section">
//         <MDCHero />
//       </div>

//       <div ref={(el) => (sectionsRef.current[1] = el)} className="section bg-white-bg2">
//         <Consultations />
//       </div>

//       <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
//         <BMICalculator />
//       </div>

//       <div ref={(el) => (sectionsRef.current[3] = el)} className="section bg-white-bg2">
//         <FoodAndNutrition />
//       </div>

//       <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
//         <MediterraneanDietScore />
//       </div>
//       <div ref={(el) => (sectionsRef.current[5] = el)} className="section bg-white-bg2">
//         <QualitativeDiets />
//       </div>
//       <div ref={(el) => (sectionsRef.current[6] = el)} className="section bg-black">
//         <PrevelenceCircle />
//       </div>
//       <div ref={(el) => (sectionsRef.current[7] = el)} className="section">
//         {/* <MDCServices /> */}
//       </div>
//     </div>
//   );
// }

// export default MDC;
import { useRef } from 'react';
import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import Fridge from '../components/fridge/Fridge';
import MediterraneanDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PrevelenceCircle from '../components/circle/PrevelenceCircle';
import MDCServices from '../components/MDCServices';
import Puzzle from '../components/puzzle/Puzzle';
import Kitchen from '../components/fridge/Kitchen';

function MDC() {
	const sectionRef = useRef(null);

	return (
		<div className='flex flex-col'>
			<div className='bg-white-bg2'>
				<MDCServices targetRef={sectionRef} />
			</div>
			<div className='section'>
				<Kitchen />
			</div>
			<div className='section '>
				<Puzzle />
			</div>

			<div
				ref={(el) => {
					sectionRef.current = el;
				}}
				className='section flex flex-col justify-center bg-white-bg2 dark:bg-black'
			>
				<Consultations />
			</div>

			<div className='flex p-8'>
				<BMICalculator />
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
