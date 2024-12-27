import React, { useRef, useState, useEffect, lazy } from "react";

// Lazy load components
const PackYearsCalculator = lazy(() =>
  import("../components/calculator/index")
);
const DXPrevention = lazy(() =>
  import("../components/dx-prevention/DXPrevention")
);
const HandMonster = lazy(() => import("../components/HandMonster"));
const PrevelenceCircle = lazy(() =>
  import("../components/circle/PrevelenceCircle")
);
const Bacteria = lazy(() => import("../components/bacteria/Bacteria"));
const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
const Balloon = lazy(() => import("../components/Balloon/Balloon"));



const Home = React.memo(() => {
  const [isInView, setIsInView] = useState(false);
  const balloonRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (balloonRef.current) {
      observer.current.observe(balloonRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar-hide h-full bg-white-fg dark:bg-black">
        <div className="py-16">
          <BarCharts />
        </div>

        <div ref={balloonRef} id="balloon-section" className="">
          <Balloon isInView={isInView} />
        </div>

        <div className="section flex">
          <DXPrevention />
        </div>

        <div className="section">
          <PackYearsCalculator />
        </div>

        <div className="section">
          <PrevelenceCircle />
        </div>

        <div className="py-16 mb-10">
          <HandMonster />
        </div>

        <div className="flex">
          <Bacteria />
        </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
