import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';

function PsychologicalAssessment({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    const requiredFields = ['stressed', 'emotionalEater', 'sleepHours'];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className='text-center font-semibold text-2xl mb-6'>Psychological Assessment</h2>
      <div className='grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold">Stressed/Traumatized? *</label>
          <select
            name="stressed"
            value={formData.stressed}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.stressed && <span className="error">{errors.stressed}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Emotional eater? *</label>
          <select
            name="emotionalEater"
            value={formData.emotionalEater}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.emotionalEater && <span className="error">{errors.emotionalEater}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">How many hours of sleep do you get a day? *</label>
          <input
            type="number"
            name="sleepHours"
            value={formData.sleepHours}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          />
          {errors.sleepHours && <span className="error">{errors.sleepHours}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
PsychologicalAssessment.propTypes = {
  formData: PropTypes.shape({
    stressed: PropTypes.string.isRequired,
    emotionalEater: PropTypes.string.isRequired,
    sleepHours: PropTypes.number.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PsychologicalAssessment;
