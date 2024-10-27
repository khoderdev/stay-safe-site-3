import { useScrollSections } from '../hooks/useScrollSections';
import Hero from '../components/hero/Hero';
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import PackYearsCalculator from "../components/calculator/index";
import MediDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PHQ9 from '../components/depressing-screening/PHQ9';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';
import DXPrevention from '../components/dx-prevention/DXPrevention';

export default function Home() {
  const sectionsRef = useScrollSections();
  return (
    <div className="flex flex-col">
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section panel bg-[#f0f0fe] dark:bg-black">
        <Hero />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="section bg-white dark:bg-[#000]">
        <DXPrevention />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="section bg-white dark:bg-black">
        <SearchPharmacies />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} className="section bg-white dark:bg-black">
        <PackYearsCalculator />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)} className="section bg-[#f0f0fe] dark:bg-[#000]">
        <MediDietScore />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)} className="section bg-white dark:bg-black">
        <PHQ9 />
      </div>
    </div>
  );
}
