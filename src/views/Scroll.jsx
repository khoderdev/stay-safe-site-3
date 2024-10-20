import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 100,
          rotation: 360,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: 0.5,
            markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div ref={main}>
      <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column">
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </div>
  );
}
