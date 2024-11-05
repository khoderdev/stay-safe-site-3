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
import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import MDCHero from '../components/hero/MDCHero';
import { useScrollSections } from '../hooks/useScrollSections';
import Fridge from '../components/fridge/Fridge';
import MediterraneanDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PrevelenceCircle from '../components/circle/PrevelenceCircle';
import MDCServices from '../components/MDCServices';

function MDC() {
  const sectionsRef = useScrollSections();
  const sectionCount = 10; // Adjust if you have more or fewer sections
  sectionsRef.current = Array(sectionCount).fill(null);
  return (
    <div className="flex flex-col">
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section bg-white-bg2">
        <MDCServices targetRef={sectionsRef.current[3]} />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="section bg-white-bg2">
        <Fridge />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
        <MDCHero />
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)} className="section bg-white-bg2">
        <Consultations />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
        <BMICalculator />
      </div>

      <div ref={(el) => (sectionsRef.current[5] = el)} className="section bg-white-bg2">
        <FoodAndNutrition />
      </div>

      <div ref={(el) => (sectionsRef.current[6] = el)} className="section">
        <MediterraneanDietScore />
      </div>
      <div ref={(el) => (sectionsRef.current[7] = el)} className="section bg-white-bg2">
        <QualitativeDiets />
      </div>
      <div ref={(el) => (sectionsRef.current[8] = el)} className="section bg-black">
        <PrevelenceCircle />
      </div>
      <div ref={(el) => (sectionsRef.current[9] = el)} className="section">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default MDC;

