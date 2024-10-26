import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/hero/Hero';
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import PackYearsCalculator from "../components/calculator/index";
import MediDietScore from '../components/calculator/medi-diet-score/MediDietScore';
import PHQ9 from '../components/depressing-screening/PHQ9';
import OnScrollComponent from '../components/dx-prevention/OnScrollComponent';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) => self.isActive && !scrollTween.current && goToSection(i),
          id: 'panel-' + i,
        });
      });

      ScrollTrigger.create({
        scroller: main.current, // Use the Locomotive scroll container
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    }, main);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  const goToSection = (i) => {
    gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  return (
    <main ref={main} className='scroll-container space-y-8'>
      <section className="panel bg-[#f0f0fe] dark:bg-black">
        <Hero />
      </section>
      <section className="panel h-screen bg-white dark:bg-[#000]">
        <OnScrollComponent />
      </section>
      <section className="panel h-screen bg-white dark:bg-[#000]">
        <PackYearsCalculator />
      </section>
      <section className="panel h-screen bg-[#f0f0fe] dark:bg-black">
        <MediDietScore />
      </section>
      <section className="panel bg-[#fff] dark:bg-[#000]">
        <PHQ9 />
      </section>
    </main>
  );
}
