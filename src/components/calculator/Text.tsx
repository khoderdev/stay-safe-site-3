import React, { useState, lazy } from "react";

const Modal = lazy(() => import("../../components/modals/Modal"));
const PackYearsCalculator = lazy(() => import("./index"));

function Text() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <h1 className="text-9xl font-bold mb-4">iScreen</h1>
      <div className="w-1/2">
        Why Wait Until its too late? Why wait for symptoms when you can stay
        ahead of your health? The iScreen calculator is your personalized tool
        to identify the tests you need, empowering you to take control of your
        health and well-being. Stay one step ahead of potential health concerns
        Get tailored recommendations based on your profile Be confident your
        health information is safe Start your journey with the iScreen
        calculator and join the movement toward better health today!
      </div>

      <div className="col-span-1 md:col-span-2">
      </div>
      <button onClick={openModal} className="btn-3 mt-6">
        Start Screening
      </button>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        closeOnOutsideClick={false}
      >
        <PackYearsCalculator />
      </Modal>
    </>
  );
}

export default Text;
