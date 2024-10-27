import PropTypes from 'prop-types';

function ServiceCard({ title, description, buttonText, onButtonClick }) {
  return (
    <div className="flex flex-col items-stretch justify-between bg-white dark:bg-[#191919] dark:text-[#f0f0fe] rounded-lg drop-shadow-lg p-5">
      <label className="text-[25px]">{title}</label>
      <p className="h-full py-6">{description}</p>
      <div className='py-4'>
        <button className="btn-2 bg-[#d4eff4]" onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

ServiceCard.defaultProps = {
  buttonText: 'Book Now',
  onButtonClick: () => alert('Booking...'),
};

export default ServiceCard;
