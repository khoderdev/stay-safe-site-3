import React, { useRef, useState, useEffect, lazy } from "react";

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
// const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
// const ChartsText = lazy(() => import("../components/Charts/ChartsText"));
const Balloon = lazy(() => import("../components/Balloon/Balloon"));
const Antibiotics = lazy(() => import("../components/bacteria/Antibiotics"));

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
    <div className="relative">
      {/* Sticky Hero Section */}
      {/* <div className="sticky top-0 flex flex-col items-center justify-start bg-white-bg dark:bg-black z-10">
        <div className="animate-fade-in">
          <ChartsText />
        </div>
      </div> */}

      {/* Normal Scrolling Sections */}
      {/* <div className="sticky h-screen dark:text-white-bg2 bg-white-bg dark:bg-black z-10"> */}
      {/* <div className="bg-white-bg dark:bg-black">
          <BarCharts />
        </div> */}
      <div className="bg-white-bg dark:bg-black">
        <Balloon />
      </div>
      <div className="bg-white-bg dark:bg-black">
        <DXPrevention />
      </div>

      <div className="p-4 bg-white-bg dark:bg-black">
        <PackYearsCalculator />
      </div>

      <div className="bg-gray-200 dark:bg-black">
        <PrevelenceCircle />
      </div>

      <div className="py-32 bg-white-bg dark:bg-black">
        <HandMonster />
      </div>

      <div className="bg-white-bg dark:bg-black">
        <Bacteria />
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
