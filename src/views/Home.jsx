// import React, { useRef, useState, useEffect, lazy } from "react";

// const PackYearsCalculator = lazy(() =>
//   import("../components/calculator/index")
// );
// const DXPrevention = lazy(() =>
//   import("../components/dx-prevention/DXPrevention")
// );
// const HandMonster = lazy(() => import("../components/HandMonster"));
// const PrevelenceCircle = lazy(() =>
//   import("../components/circle/PrevelenceCircle")
// );
// const Bacteria = lazy(() => import("../components/bacteria/Bacteria"));
// const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
// const Balloon = lazy(() => import("../components/Balloon/Balloon"));
// const Antibiotics = lazy(() => import("../components/bacteria/Antibiotics"));

// const Home = React.memo(() => {
//   const [isInView, setIsInView] = useState(false);
//   const balloonRef = useRef(null);
//   const observer = useRef(null);

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (balloonRef.current) {
//       observer.current.observe(balloonRef.current);
//     }

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="sticky top-0 h-[200vh] flex flex-col items-center justify-start bg-gray-950">
//         <BarCharts />
//       </div>
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#000]">
//         <h2 className="text-4xl font-bold">The Second slide</h2>
//         <p className="mt-2">Scroll Down for next slide</p>
//       </div>
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
//         <h2 className="text-4xl font-bold">The Third slide</h2>
//         <p className="mt-2">Scroll Down</p>
//       </div>
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
//         <h2 className="text-4xl font-bold">The Fourth slide</h2>
//       </div>
//     </div>
//   );
// });

// Home.displayName = "Home";

// export default Home;

// // // /////////////////////////////////////////////
// // // /////////////////////////////////////////////
// // // /////////////////////////////////////////////
// // // /////////////////////////////////////////////

// // import React, { useRef, useState, useEffect, lazy } from "react";

// // const PackYearsCalculator = lazy(() =>
// //   import("../components/calculator/index")
// // );
// // const DXPrevention = lazy(() =>
// //   import("../components/dx-prevention/DXPrevention")
// // );
// // const HandMonster = lazy(() => import("../components/HandMonster"));
// // const PrevelenceCircle = lazy(() =>
// //   import("../components/circle/PrevelenceCircle")
// // );
// // const Bacteria = lazy(() => import("../components/bacteria/Bacteria"));
// // const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
// // const Balloon = lazy(() => import("../components/Balloon/Balloon"));
// // const Antibiotics = lazy(() => import("../components/bacteria/Antibiotics"));

// // const Home = React.memo(() => {
// //   const [isInView, setIsInView] = useState(false);
// //   const balloonRef = useRef(null);
// //   const observer = useRef(null);

// //   useEffect(() => {
// //     observer.current = new IntersectionObserver(
// //       ([entry]) => {
// //         setIsInView(entry.isIntersecting);
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (balloonRef.current) {
// //       observer.current.observe(balloonRef.current);
// //     }

// //     return () => {
// //       if (observer.current) {
// //         observer.current.disconnect();
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div className="flex flex-col overflow-y-scroll scrollbar-hide h-full bg-white-fg dark:bg-black">
// //       <div className="section py-16">
// //         <BarCharts />
// //       </div>

// //       <div ref={balloonRef} id="balloon-section" className="">
// //         <Balloon isInView={isInView} />
// //       </div>

// //       <div className="section flex">
// //         <DXPrevention />
// //       </div>

// //       <div className="p-4">
// //         <PackYearsCalculator />
// //       </div>

// //       <div className="section bg-gray-200 dark:bg-black">
// //         <PrevelenceCircle />
// //       </div>

// //       <div className="py-16 mb-10">
// //         <HandMonster />
// //       </div>

// //       <div className="md:pt-16">
// //         <Bacteria />
// //       </div>

// //       <div className="py-24">
// //         <Antibiotics />
// //       </div>
// //     </div>
// //   );
// // });

// // Home.displayName = "Home";

// // export default Home;
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
      {/* BarCharts Section with High Height */}
      <div className="sticky  top-0 flex flex-col items-center justify-start">
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
      <div className="sticky top-0 h-screen flex flex-col items-center justify-start bg-black">
        <BarCharts />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#000]">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
