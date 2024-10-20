import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Layers() {
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
      <section className="description panel bg-[#f0f0fe] dark:bg-black">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel bg-white dark:bg-[#000]">ONE</section>
      <section className="panel bg-[#f0f0fe] dark:bg-black">TWO</section>
      <section className="panel bg-white dark:bg-[#000]">THREE</section>
      <section className="panel bg-[#f0f0fe] dark:bg-black">FOUR</section>
    </main>
  );
}
