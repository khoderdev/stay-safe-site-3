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
    <div className="relative bg-white-bg dark:bg-black">
      {/* Sticky Hero Section */}
      <div className="">
        <Balloon />
      </div>
      <div className="bg-gray-900">
        <DXPrevention />
      </div>

      <div className="p-4">
        <PackYearsCalculator />
      </div>

      <div className="bg-gray-200">
        <PrevelenceCircle />
      </div>

      <div className="py-32">
        <HandMonster />
      </div>

      <div className="">
        <Bacteria />
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
