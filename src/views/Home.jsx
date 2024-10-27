import Hero from '../components/hero/Hero';
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import PackYearsCalculator from "../components/calculator/index";
import MediDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PHQ9 from '../components/depressing-screening/PHQ9';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';

export default function Home() {

  return (
    <main  className='scroll- space-y-8'>
      <section className="panel bg-[#f0f0fe] dark:bg-black">
        <Hero />
      </section>
      <section className="panel h-screen bg-white dark:bg-[#000]">
        <OnScrollComponent />
      </section>
      <section className="panel h-screen bg-white dark:bg-black">
        <SearchPharmacies />
      </section>
      <section className="panel h-screen bg-white dark:bg-black">
        <PackYearsCalculator />
      </section>
      <section className="panel h-screen bg-[#f0f0fe] dark:bg-[#000]">
        <MediDietScore />
      </section>
      <section className="panel bg-[#fff] dark:bg-black">
        <PHQ9 />
      </section>
    </main>
  );
}
