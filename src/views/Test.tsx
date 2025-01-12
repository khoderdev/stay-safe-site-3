import React, { useRef, useEffect, useState } from 'react';
import '../components/hero/CircularText.css';

// Circular Text Component
const CircularText = ({ radius, fontSize, children }) => {
  const text = "Nutrition • Education • Prevention • Safety • Health • Sustainability • ";
  const textArray = text.split('');
  const angle = 360 / text.length;

  return (
    <div className="circle-container">
      <div className="circle-text text-[#000] font-bold">
        {textArray.map((char, index) => {
          const style = {
            transform: `rotate(${index * angle}deg) translateY(-${radius}px)`,
            fontSize: `${fontSize}px`, // Dynamic font size
          };
          return (
            <span key={index} style={style}>
              {char}
            </span>
          );
        })}
      </div>
      {/* Central Logo */}
      {children}
    </div>
  );
};

// Combined Component
function CircularTextHoldingTest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        // const containerWidth = containerRef.current.offsetWidth;
        const containerWidth = containerRef.current?.offsetWidth;
        const containerHeight = containerRef.current?.offsetHeight;
        const newRadius = Math.min(containerWidth, containerHeight) * 0.7; // Adjust radius based on container size
        const newFontSize = newRadius * 0.1; // Adjust font size based on radius
        setRadius(newRadius);
        setFontSize(newFontSize);
      }
    };

    // Initial size calculation
    updateSize();

    // Recalculate on window resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    // <div
    //   ref={containerRef}
    //   className="relative flex items-center justify-center rounded-full 
    //   w-[18vw] h-[18vw] max-w-[18rem] max-h-[18rem] 

    //   xl:w-[24vw] xl:h-[24vw] xl:max-w-[19rem] xl:max-h-[19rem] 
    //   2xl:w-[26vw] 2xl:h-[26vw] 2xl:max-w-[20rem] 2xl:max-h-[20rem] 
    //   3xl:w-[28vw] 3xl:h-[28vw] 3xl:max-w-[22rem] 3xl:max-h-[22rem] 
    //   4xl:w-[30vw] 4xl:h-[30vw] 4xl:max-w-[23rem] 4xl:max-h-[23rem] 

    //   "
    // >
    //   {/* Circular Text with Central Logo */}
    //   <CircularText radius={radius} fontSize={fontSize}>
    //     <div
    //       className="relative flex items-center justify-center rounded-full
    //       w-[80%] sm:w-[90%] md:w-[100%] lg:w-[100%] xl:w-[80%] 2xl:w-[90%] 3xl:w-[100%] h-auto"
    //     >
    //       <img
    //         src="/white-logo-anim.gif"
    //         alt="StaySafe Logo"
    //         loading="lazy"
    //         className="absolute object-contain transform xl:scale-125 h-auto ml-2 mt-4 sm:mt-8 lg:ml-6 lg:mt-8"
    //       />
    //     </div>
    //   </CircularText>
    // </div>
    <div
      ref={containerRef}
      className="relative flex items-center justify-center rounded-full 3xl:!w-[28vw] 3xl:!h-[28vw] 3xl:!max-w-[20rem] 3xl:!max-h-[20rem] 4xl:!w-[30vw] 4xl:!h-[30vw] 4xl:!max-w-[23rem] 4xl:!max-h-[23rem] "
      style={{
        width: '22vw', // Wrapper size to fit circular text
        height: '22vw',
        maxWidth: '18rem', // Constrain maximum size
        maxHeight: '18rem',
      }}
    >
      {/* Circular Text with Central Logo */}
      <CircularText radius={radius} fontSize={fontSize}>
        <div
          className="relative flex items-center justify-center rounded-full
          w-[80%]
          sm:w-[90%] h-auto
          md:w-[100%]
          lg:w-[100%]
          xl:w-[80%]
          2xl:w-[90%]
          3xl:w-[100%]

          "

        >
          <img
            src="/white-logo-anim.gif"
            alt="StaySafe Logo"
            loading="lazy"
            className="absolute object-contain transform xl:scale-125 h-auto ml-2 mt-4 sm:mt-8 lg:ml-6 lg:mt-8"
          />
        </div>
      </CircularText>
    </div>
  );
}


export default CircularTextHoldingTest;