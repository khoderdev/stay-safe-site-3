import React, { useState } from "react";
import PHQ9Modal from "../components/modals/PHQ9";
import PHQ9Quiz from "../components/depressing-screening/PHQ9";
import SearchPharmacies from "../components/pharmacies/SearchPharmacies";
import STOPBang from "../components/calculator/stop-bang/StopBang";
import Titles from "../components/calculator/stop-bang/Titles";
import STIQuiz from "../components/calculator/STI/STIQuiz";

function PreventiveHealthPatientServicesPage() {
  const [isPHQ9ModalOpen, setIsPHQ9ModalOpen] = useState(false);
  const [isStopBangModalOpen, setIsStopBangModalOpen] = useState(false);

  const openPHQ9Modal = () => {
    setIsPHQ9ModalOpen(true);
  };

  const openStopBangModal = () => {
    setIsStopBangModalOpen(true);
  };

  return (
    <>
      <div class="relative h-screen bg-white-bg dark:bg-black ">
        <div className="h-screen flex flex-col items-center justify-start pt-10 bg-white-bg dark:bg-black">
          <h1 className="text-4xl md:text-6xl font-semibold flex flex-col px-6 dark:text-white-bg mb-1">
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
          <PHQ9Modal isOpen={isPHQ9ModalOpen} setIsOpen={setIsPHQ9ModalOpen}>
            <PHQ9Quiz />
          </PHQ9Modal>
        </div>

        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-[#000]">
          <SearchPharmacies />
        </div>

        <div className="section bg-white-bg dark:bg-black p-4 md:p-8">
          <Titles />
          <button
            className="btn-1 text-center !text-2xl !px-12 !py-8 place-self-center rounded-lg text-white bg-blue-500 hover:bg-blue-700 drop-shadow-lg"
            onClick={openStopBangModal}
          >
            Start Screening
          </button>

          {/* STOP-Bang Modal */}
          <PHQ9Modal
            isOpen={isStopBangModalOpen}
            setIsOpen={setIsStopBangModalOpen}
          >
            <STOPBang />
          </PHQ9Modal>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-white-fg dark:bg-black">
          <STIQuiz />
        </div>
      </div>
    </>
  );
}
export default PreventiveHealthPatientServicesPage;
