import BMICalculator from '../components/calculator/bmi/BMICalculator';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';
import Consultations from '../components/consultations/Consultations';
import MDCHero from '../components/hero/MDCHero';
import { useScrollSections } from '../hooks/useScrollSections';

function MDC() {
  const sectionsRef = useScrollSections();

  return (
    <div className="flex flex-col">
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section">
        <MDCHero />
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)} className="section">
        <Consultations />
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
        <BMICalculator />
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)} className="section">
        <FoodAndNutrition />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
        <QualitativeDiets />
      </div>
    </div>
  );
}

export default MDC;
