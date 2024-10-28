import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';

function PhysicalActivityAssessment({ formData, setFormData, nextStep }) {
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
    const requiredFields = [
      'accessToFacilities',
      'physicallyActive',
      'activityType',
      'exerciseDaily',
      'hoursPerWeek',
      'duration',
      'favoriteSport',
      'limitations',
      'exercisePlan',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed to the next step if no errors
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className='grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col">
          <label className="font-semibold">Access to Sport Facilities *</label>
          <select
            name="accessToFacilities"
            value={formData.accessToFacilities}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.accessToFacilities && <span className="error">{errors.accessToFacilities}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Physically Active? *</label>
          <select
            name="physicallyActive"
            value={formData.physicallyActive}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>
          </select>
          {errors.physicallyActive && <span className="error">{errors.physicallyActive}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Activity Type *</label>
          <input
            type="text"
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.activityType && <span className="error">{errors.activityType}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Exercise Daily? *</label>
          <select
            name="exerciseDaily"
            value={formData.exerciseDaily}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.exerciseDaily && <span className="error">{errors.exerciseDaily}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Number of hours/week *</label>
          <input
            type="number"
            name="hoursPerWeek"
            value={formData.hoursPerWeek}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.hoursPerWeek && <span className="error">{errors.hoursPerWeek}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Duration *</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.duration && <span className="error">{errors.duration}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Favorite Sport *</label>
          <input
            type="text"
            name="favoriteSport"
            value={formData.favoriteSport}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.favoriteSport && <span className="error">{errors.favoriteSport}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Limitations *</label>
          <textarea
            name="limitations"
            value={formData.limitations}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.limitations && <span className="error">{errors.limitations}</span>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Exercise Plan *</label>
          <textarea
            name="exercisePlan"
            value={formData.exercisePlan}
            onChange={handleChange}

            className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
          />
          {errors.exercisePlan && <span className="error">{errors.exercisePlan}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
PhysicalActivityAssessment.propTypes = {
  formData: PropTypes.shape({
    accessToFacilities: PropTypes.string.isRequired,
    physicallyActive: PropTypes.string.isRequired,
    activityType: PropTypes.string.isRequired,
    exerciseDaily: PropTypes.string.isRequired,
    hoursPerWeek: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    favoriteSport: PropTypes.string.isRequired,
    limitations: PropTypes.string.isRequired,
    exercisePlan: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PhysicalActivityAssessment;
