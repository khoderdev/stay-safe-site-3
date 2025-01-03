import React, { useState, lazy } from "react";
import Modal from "../components/modals/Modal";
import PHQ9Quiz from "../components/depressing-screening/PHQ9";
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import STOPBang from "../components/calculator/stop-bang/StopBang";
import Titles from "../components/calculator/stop-bang/Titles";
import STIQuiz from "../components/calculator/STI/STIQuiz";
// import "../components/calculator/STI/STI.css";
import { motion } from "framer-motion";

const BarCharts = lazy(() => import("../components/Charts/BarCharts"));
const ChartsText = lazy(() => import("../components/Charts/ChartsText"));

function PreventiveHealthPatientServicesPage() {
  const [isPHQ9ModalOpen, setIsPHQ9ModalOpen] = useState(false);
  const [isStopBangModalOpen, setIsStopBangModalOpen] = useState(false);
  const [isStIModalOpen, setIsStIModalOpen] = useState(false);

  const openPHQ9Modal = () => {
    setIsPHQ9ModalOpen(true);
  };

  const openStopBangModal = () => {
    setIsStopBangModalOpen(true);
  };

  const openStIModal = () => {
    setIsStIModalOpen(true);
  };

  return (
    <>
      <div className="relative h-screen bg-white-bg dark:bg-black ">
        {/* <div className="sticky top-0 flex flex-col items-center justify-start bg-white-bg dark:bg-black z-10"> */}
        <div className="animate-fade-in">
          <ChartsText />
        </div>
        {/* </div> */}

        <div className="bg-white-bg dark:bg-black">
        <BarCharts />
        </div>
        <div className="h-screen flex flex-col items-center justify-start pt-28 bg-white-bg dark:bg-black">
          <h1 className="text-6xl font-semibold leading-tight dark:text-white-bg2 flex flex-col px-6 mb-1">
            Your Mental Health Matters
            <span className="text-xl md:text-2xl font-normal">
              Take the confidential depression screening tool as an initial step
              to understand your mental health status.
            </span>
          </h1>
          <button
            className="btn-1 text-center !text-2xl !px-12 !py-8 mt-24 rounded-lg text-white bg-blue-500 hover:bg-blue-700 drop-shadow-lg"
            onClick={openPHQ9Modal}
          >
            Start Screening
          </button>

          {/* PHQ-9 Modal */}
          <Modal
            isOpen={isPHQ9ModalOpen}
            setIsOpen={setIsPHQ9ModalOpen}
            closeOnOutsideClick={false}
          >
            <PHQ9Quiz />
          </Modal>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-dark">
          <SearchPharmacies />
        </div>

        <div className="section bg-white-bg dark:bg-black p-4 md:p-8 py-16">
          <Titles />
          <button
            className="btn-1 text-center !text-2xl !px-12 !py-8 place-self-center rounded-lg text-white bg-blue-500 hover:bg-blue-700 drop-shadow-lg"
            onClick={openStopBangModal}
          >
            Start Screening
          </button>

          {/* STOP-Bang Modal */}
          <Modal
            isOpen={isStopBangModalOpen}
            setIsOpen={setIsStopBangModalOpen}
            closeOnOutsideClick={false}
          >
            <STOPBang />
          </Modal>
        </div>

        <>
          <div className="section bg-white-bg dark:bg-dark p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-star">
            <div className="w-full h-full flex flex-col items-center justify-start md:pt-10 space-y-20 ">
              <div className="">
                <h1 className="!text-5xl font-semibold dark:text-white-bg2 !leading-normal">
                  Test Your Knowledge About STIs!
                </h1>
              </div>
              <div className="">
                <button
                  className="btn-1 text-center !text-2xl !px-12 !py-8 place-self-center"
                  onClick={openStIModal}
                >
                  Start STI Test
                </button>
                <Modal
                  isOpen={isStIModalOpen}
                  setIsOpen={setIsStIModalOpen}
                  closeOnOutsideClick={false}
                >
                  <STIQuiz />
                </Modal>
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full p-4">
                {[...Array(9)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={`/images/std/${index + 1}.png`}
                      alt={`STI Awareness ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
export default PreventiveHealthPatientServicesPage;
