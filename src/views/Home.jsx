import PackYearsCalculator from "../components/calculator/index";
import DXPrevention from "../components/dx-prevention/DXPrevention";
import HandMonster from "../components/HandMonster";
import PrevelenceCircle from "../components/circle/PrevelenceCircle";
import { useRef, useState, useEffect } from "react";
import Bacteria from "../components/bacteria/Bacteria";
import BarCharts from "../components/Charts/BarCharts";
import Balloon from "../components/Balloon/Balloon";

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const balloonRef = useRef(null);

  // Scroll event handler
  const handleScroll = () => {
    if (balloonRef.current) {
      const rect = balloonRef.current.getBoundingClientRect();
      const isElementInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsInView(isElementInView);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
}
