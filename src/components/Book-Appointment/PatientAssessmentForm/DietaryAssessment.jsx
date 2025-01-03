import { useState } from 'react';
import PropTypes from 'prop-types';
import {inputStyles, selectStyles } from '../../../utils/styles';

function DietaryAssessment({ formData, setFormData, nextStep }) {
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
      'specialDiet',
      'threeMealsADay',
      'regularIntervals',
      'averageMealDuration',
      'mealLocation',
      'eatingCompany',
      'waterIntake',
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
      <h2 className='text-center font-semibold text-2xl mb-6'>Dietary Assessment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Do you follow any special diet or have restrictions?</label>
          <select
            name="specialDiet"
            value={formData.specialDiet}
            onChange={handleChange}
            // required
            className={`${selectStyles()}  !bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.specialDiet && <span className="error">{errors.specialDiet}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Do you eat 3 meals a day?</label>
          <select
            name="threeMealsADay"
            value={formData.threeMealsADay}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>
          </select>
          {errors.threeMealsADay && <span className="error">{errors.threeMealsADay}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Do you eat at regular time intervals?</label>
          <select
            name="regularIntervals"
            value={formData.regularIntervals}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>
          </select>
          {errors.regularIntervals && <span className="error">{errors.regularIntervals}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Average meal duration (time spent on meal)</label>
          <input
            type="number"
            name="averageMealDuration"
            value={formData.averageMealDuration}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          />
          {errors.averageMealDuration && <span className="error">{errors.averageMealDuration}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Where do you usually eat your meals?</label>
          <input
            type="text"
            name="mealLocation"
            value={formData.mealLocation}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          />
          {errors.mealLocation && <span className="error">{errors.mealLocation}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">You eat alone or with company?</label>
          <select
            name="eatingCompany"
            value={formData.eatingCompany}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="alone">Alone</option>
            <option value="withCompany">With Company</option>
          </select>
          {errors.eatingCompany && <span className="error">{errors.eatingCompany}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">How many liters of water do you usually drink a day?</label>
          <input
            type="number"
            name="waterIntake"
            value={formData.waterIntake}
            onChange={handleChange}
            // required
            className={`${inputStyles()}  !bg-white-fg dark:!bg-[#000]`}
          />
          {errors.waterIntake && <span className="error">{errors.waterIntake}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
DietaryAssessment.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default DietaryAssessment;
