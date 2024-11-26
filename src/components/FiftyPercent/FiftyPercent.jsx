// import React, { useState, useEffect } from 'react';

// const HalfCircleScroll = () => {
// 	return (
// 		<svg
// 			width='640'
// 			height='auto'
// 			viewBox='0 0 1080 1080'
// 			fill='none'
// 			xmlns='http://www.w3.org/2000/svg'
// 			className='absolute right-[-30%] rotate-180'
// 		>
// 			<defs>
// 				<clipPath id='half-circle'>
// 					<rect x='540' y='' width='1080' height='1080' />
// 				</clipPath>
// 			</defs>

// 			<circle
// 				cx='540'
// 				cy='540'
// 				r='537'
// 				stroke='#fff'
// 				stroke-opacity='1'
// 				stroke-width='6'
// 				clipPath='url(#half-circle)'
// 			/>
// 		</svg>
// 	);
// };

// export default HalfCircleScroll;
import React, { useState, useEffect } from 'react';

const HalfCircleScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollFraction = scrollTop / docHeight;
      const progress = Math.min(Math.max(scrollFraction, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the stroke dash offset based on scroll progress
  const circumference = 2 * Math.PI * 537; // Circle's circumference
  const strokeDashoffset = circumference * (10 - scrollProgress);

  return (
    <svg
      width='640'
      height='auto'
      viewBox='0 0 1080 1080'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute right-[-30%] rotate-180'
    >
      <defs>
        <clipPath id='half-circle'>
          <rect x='540' y='0' width='1080' height='1080' />
        </clipPath>
      </defs>

      <circle
        cx='540'
        cy='540'
        r='537'
        stroke='#fff'
        strokeOpacity='1'
        strokeWidth='6'
        clipPath='url(#half-circle)'
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default HalfCircleScroll;
