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
const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
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
      <div className="sticky top-0 flex flex-col items-center justify-start bg-white-bg dark:bg-black z-10">
        <div className="flex flex-col items-center place-self-center text-center dark:text-white-bg2 p-4 pt-20">
          <div className="sm:w-1/2 flex items-center justify-center">
            <h1 className="text-3xl !font-bold text-center md:text- dark:text-white-bg2 mb-10">
              Around 80% of the top 10 causes of death are preventable or
              manageable through preventive measures and lifestyle changes
            </h1>
          </div>
          <p className="text-lg sm:w-[80%]">
            We’re committed to supporting you in managing your health, no matter
            where you are in your journey. We understand that living with
            disease can be challenging, but we want you to know that you’re not
            alone. Our team is here to provide you with personalized guidance,
            resources, and support. Together, we can create a plan that helps
            you take control of your health, learn more about your condition,
            prevent complications, and improve your quality of life. Gain access
            to personalized support. Get Support Now.
          </p>
        </div>
      </div>

      {/* Sticky BarCharts Section */}
      <div className="sticky flex flex-col items-center justify-start bg-white-bg dark:bg-black z-10">
        <BarCharts />
      </div>
      <div className="sticky h-screen dark:text-white-bg2 bg-white-bg dark:bg-black z-10">
        {/* Normal Scrolling Sections */}
        <div className="bg-white-bg dark:bg-black">
          <DXPrevention />
        </div>

        <div className="bg-white-bg dark:bg-black">
          <PackYearsCalculator />
        </div>

        <div className="bg-gray-200 dark:bg-black">
          <PrevelenceCircle />
        </div>

        <div className="bg-white-bg dark:bg-black">
          <HandMonster />
        </div>

        <div className="bg-white-bg dark:bg-black">
          <Bacteria />
        </div>

        <div className="py-16 bg-white-bg dark:bg-black">
          <Antibiotics />
        </div>
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
