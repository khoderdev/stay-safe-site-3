// import React from 'react';

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white-bg dark:bg-black p-6 rounded-lg w-full sm:w-2/3 md:w-1/2">
//         <h2 className="text-lg font-bold mb-4">Terms of Service</h2>
//         <p className="text-sm mb-4">
//           I agree to abide by the organization’s policies, procedures, and code of conduct and ethics. I will act in a manner that upholds the values and reputation of Stay Safe.<br/>
//           I consent to the use of photographs, videos, or other media recordings taken during my volunteer activities. I understand that these materials may be used for promotional purposes, including but not limited to publications, the organization’s website, and social media platforms. If family members are included in these images, I also provide consent for their use.<br/>
//           I further agree to maintain confidentiality and not disclose any sensitive or private information obtained through my volunteer work.
//         </p>
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white-bg dark:bg-dark p-6 rounded-lg w-full sm:w-2/3 md:w-1/2">
        <h2 className="text-lg font-bold mb-4">Terms of Service</h2>
        <div className="space-y-4"> {/* Added space-y-4 for vertical spacing between paragraphs */}
          <p className="text-sm">
            I agree to abide by the organization’s policies, procedures, and code of conduct and ethics. I will act in a manner that upholds the values and reputation of Stay Safe.
          </p>
          <p className="text-sm">
            I consent to the use of photographs, videos, or other media recordings taken during my volunteer activities. I understand that these materials may be used for promotional purposes, including but not limited to publications, the organization’s website, and social media platforms. If family members are included in these images, I also provide consent for their use.
          </p>
          <p className="text-sm">
            I further agree to maintain confidentiality and not disclose any sensitive or private information obtained through my volunteer work.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-pink text-white-bg rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
