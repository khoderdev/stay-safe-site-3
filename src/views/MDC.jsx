import React, { lazy, Suspense } from "react";
import { columns } from "../components/Table/columns";

// Lazy load components
const BMICalculator = lazy(() =>
  import("../components/calculator/bmi/BMICalculator")
);
const QualitativeDiets = lazy(() =>
  import("../components/qualitative-diets/QualitativeDiets")
);
const FoodAndNutrition = lazy(() =>
  import("../components/quiz/FoodAndNutrition")
);
const Consultations = lazy(() =>
  import("../components/consultations/Consultations")
);
const MediterraneanDietScore = lazy(() =>
  import("../components/calculator/medi-diet-score/MediDietScore")
);
const Puzzle = lazy(() => import("../components/puzzle/Puzzle"));
const Kitchen = lazy(() => import("../components/fridge/Kitchen"));
const CowChickenPage = lazy(() => import("../components/animals/CowChicken"));
const FoodSafetyTable = lazy(() =>
  import("../components/Table/FoodSafetyTable").then((module) => ({
    default: () => <module.FoodSafetyTable columns={columns} />,
  }))
);
const Child = lazy(() => import("../components/child/Child"));
const BreastColored = lazy(() => import("../components/breast/Breast"));
const Fry = lazy(() => import("../components/Fry/Fry"));

const MDC = React.memo(() => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar-hide h-full bg-white-fg dark:bg-black">
      <div className="section bg-white-bg dark:bg-black">
        <Fry />
      </div>
      <div className="section bg-white-bg dark:bg-black">
        <CowChickenPage />
      </div>

      <div className="section bg-white-bg2 dark:bg-black">
        <Consultations />
      </div>

      <div className="section flex bg-white-bg dark:bg-black">
        <Kitchen />
      </div>

      <div className="section bg-white-bg2">
        <Puzzle />
      </div>

      <div className="section bg-white-fg dark:bg-black">
        <FoodAndNutrition />
      </div>

      <div className="section p-6 bg-white-bg2 dark:bg-black">
        <MediterraneanDietScore />
      </div>

      <div className="flex sm:!h-[65dvh] p-8 bg-white-fg dark:bg-[#000]">
        <BMICalculator />
      </div>

      <div className="sm:!h-[65dvh] bg-white-bg dark:bg-black">
        <QualitativeDiets />
      </div>

      <div className="section py-52 bg-white-bg dark:bg-black">
        <Child />
      </div>

      <div className="items-center flex justify-center bg-white-bg dark:bg-black">
        <BreastColored />
      </div>

      <div className="section panel bg-white-bg dark:bg-[#000]">
        <FoodSafetyTable />
      </div>
    </div>
  );
});

MDC.displayName = "MDC";

export default MDC;
