import React, { useState, lazy } from "react";
import { motion } from "framer-motion";

const Modal = lazy(() =>
  import("../../components/modals/Modal")
);
const PHQ9Quiz = lazy(() =>
  import("../../components/depressing-screening/PHQ9")
);

function Balloon({ isInView }) {
  const [isPHQ9ModalOpen, setIsPHQ9ModalOpen] = useState(false);

  const openPHQ9Modal = () => {
    setIsPHQ9ModalOpen(true);
  };

  return (
    <div className="flex flex-col-reverse py-20 justify-start sm:flex sm:flex-row">
      <div className="flex flex-col p-8">
        <div className="w-fit flex items-center ">
          <motion.p
            className="text-6xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 1],
            }}
          >
            <motion.span
              className="block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.6, -0.05, 0.01, 1],
              }}
            >
              Your Mental Health Matters.
            </motion.span>
            <motion.span
              className="block mb-4 text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 1],
              }}
            >
              You are Not Alone 300 Million <br/>People Experience Depression.
            </motion.span>

            <motion.span
              className="block mb-4 text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.6, -0.05, 0.01, 1],
              }}
            >
             
              <span className=""> </span>
            </motion.span>
          </motion.p>
        </div>

        <button onClick={openPHQ9Modal} className="btn-3 mt-4">
          Take the Screening Now
        </button>
      </div>

      <img
        src="/images/balloon.gif"
        loading="lazy"
        alt="Balloon"
        className="ml-0 w-full sm:w-[35%]"
      />
      <Modal
        isOpen={isPHQ9ModalOpen}
        setIsOpen={setIsPHQ9ModalOpen}
        closeOnOutsideClick={false}
      >
        <PHQ9Quiz />
      </Modal>
    </div>
  );
}

export default Balloon;
