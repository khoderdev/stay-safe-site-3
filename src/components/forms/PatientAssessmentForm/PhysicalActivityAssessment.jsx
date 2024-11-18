import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles, selectStyles } from '../../../utils/styles';

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
    <form onSubmit={handleSubmit} className="">
      <h2 className='text-center font-semibold text-2xl mb-6'>Physical Activity Assessment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Access to Sport Facilities</label>
          <select
            name="accessToFacilities"
            value={formData.accessToFacilities}
            onChange={handleChange}

            className={`${selectStyles()}  bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.accessToFacilities && <span className="error">{errors.accessToFacilities}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Physically Active?</label>
          <select
            name="physicallyActive"
            value={formData.physicallyActive}
            onChange={handleChange}

            className={`${selectStyles()}  bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>
          </select>
          {errors.physicallyActive && <span className="error">{errors.physicallyActive}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Activity Type</label>
          <input
            type="text"
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}

            className={`${inputStyles()}  bg-white-fg dark:!bg-[#000]`}
          />
          {errors.activityType && <span className="error">{errors.activityType}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Exercise Daily?</label>
          <select
            name="exerciseDaily"
            value={formData.exerciseDaily}
            onChange={handleChange}

            className={`${selectStyles()}  bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.exerciseDaily && <span className="error">{errors.exerciseDaily}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Number of hours/week</label>
          <input
            type="number"
            name="hoursPerWeek"
            value={formData.hoursPerWeek}
            onChange={handleChange}

            className={`${inputStyles()}  bg-white-fg dark:!bg-[#000]`}
          />
          {errors.hoursPerWeek && <span className="error">{errors.hoursPerWeek}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}

            className={`${inputStyles()}  bg-white-fg dark:!bg-[#000]`}
          />
          {errors.duration && <span className="error">{errors.duration}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Favorite Sport</label>
          <input
            type="text"
            name="favoriteSport"
            value={formData.favoriteSport}
            onChange={handleChange}

            className={`${inputStyles()}  bg-white-fg dark:!bg-[#000]`}
          />
          {errors.favoriteSport && <span className="error">{errors.favoriteSport}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Limitations</label>
          <input
            name="limitations"
            value={formData.limitations}
            onChange={handleChange}

            className={`${inputStyles()} bg-white-fg dark:!bg-[#000]`}
          />
          {errors.limitations && <span className="error">{errors.limitations}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Exercise Plan</label>
          <input
            name="exercisePlan"
            value={formData.exercisePlan}
            onChange={handleChange}

            className={`${inputStyles()} bg-white-fg dark:!bg-[#000]`}
          />
          {errors.exercisePlan && <span className="error">{errors.exercisePlan}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
PhysicalActivityAssessment.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PhysicalActivityAssessment;
