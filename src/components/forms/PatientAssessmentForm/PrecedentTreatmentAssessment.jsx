import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';


function PrecedentTreatmentAssessment({ formData, setFormData, nextStep }) {
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
    const requiredFields = ['previousDieting', 'dietIssue', 'pillsUsed'];

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
      <h2 className='text-center font-semibold text-2xl mb-6'>Precedent Treatment Assessment</h2>
      <div className='grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold">Previous dieting? *</label>
          <select
            name="previousDieting"
            value={formData.previousDieting}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.previousDieting && <span className="error">{errors.previousDieting}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">What precisely in the previous diet didn't suit you? *</label>
          <input
            type="text"
            name="dietIssue"
            value={formData.dietIssue}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.dietIssue && <span className="error">{errors.dietIssue}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Did you try any type of pills that claim losing weight? *</label>
          <select
            name="pillsUsed"
            value={formData.pillsUsed}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.pillsUsed && <span className="error">{errors.pillsUsed}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
PrecedentTreatmentAssessment.propTypes = {
  formData: PropTypes.shape({
    previousDieting: PropTypes.string.isRequired,
    dietIssue: PropTypes.string.isRequired,
    pillsUsed: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PrecedentTreatmentAssessment;
