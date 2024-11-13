import Hero from '../components/hero/Hero';
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import PackYearsCalculator from "../components/calculator/index";
import PHQ9 from '../components/depressing-screening/PHQ9';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" panel bg-white-bg dark:bg-black">
        <Hero />
      </div>
      <div className="section flex bg-white-fg dark:bg-[#000]">
        <OnScrollComponent />
      </div>

      <div className="section bg-white-bg2 dark:bg-black">
        <SearchPharmacies />
      </div>
      <div className="section p-4 bg-white-fg dark:bg-[#000]">
        <PackYearsCalculator />
      </div>
      <div className="section bg-white-fg dark:bg-black">
        <PHQ9 />
      </div>
    </div>
  );
}
