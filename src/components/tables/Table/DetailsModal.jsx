
const DetailsModal = ({ entry, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="bg-white-fg p-6 rounded-lg mx-3 md:w-1/2 ">
      <h3 className="text-xl font-bold mb-4">{entry.pathogen}</h3>
      <p><strong>Illness:</strong> {entry.illness}</p>
      <p><strong>Onset Time:</strong> {entry.symptoms}</p>
      <p><strong>Symptoms:</strong> {entry.onsetTimeDuration}</p>
      <p><strong>Duration:</strong> {entry.durpreventionation}</p>
      <p><strong>Causes:</strong> {entry.causes}</p>
      <p><strong>Causes:</strong> {entry.comments}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-sm"
      >
        Close
      </button>
    </div>
  </div>
);

export default DetailsModal;
