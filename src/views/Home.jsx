import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from '../components/hero/Hero';
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import PackYearsCalculator from "../components/calculator/index";
import MediDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PHQ9 from '../components/depressing-screening/PHQ9';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';

export default function Home() {
  const main = useRef();
  const scrollTween = useRef();
  const { contextSafe } = useGSAP(
    () => {
      const panels = gsap.utils.toArray('.panel');
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
          id: 'panel-' + i,
          markers: false,
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    },
    { scope: main }
  );

  const goToSection = contextSafe((i) => {
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      id: 'scrollTween',
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main}>
      <section className="panel bg-[#f0f0fe] dark:bg-black ">
        <Hero />
      </section>
      <section className="panel bg-white dark:bg-[#000]">
        <OnScrollComponent />
      </section>
      <section className="panel bg-[#f0f0fe] dark:bg-black">
        <SearchPharmacies />
      </section>
      <section className="panel bg-white dark:bg-[#000]">
        <PackYearsCalculator />
      </section>
      <section className="panel bg-[#f0f0fe] dark:bg-black">
        <MediDietScore />
      </section>
      <section className="panel bg-[#fff] dark:bg-black">
        <PHQ9 />
      </section>
    </main>
  );
}
