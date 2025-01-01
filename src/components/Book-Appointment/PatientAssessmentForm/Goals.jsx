import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';

function Goals({ formData, setFormData, nextStep }) {
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

    const newErrors = {};
    // Validate each goal input
    for (let i = 1; i <= 3; i++) {
      if (!formData[`goal${i}`]) {
        newErrors[`goal${i}`] = `Goal ${i} is required.`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 text-center">
      <h2 className='text-center font-semibold text-2xl mb-6'>Goals</h2>
      <div className='grid grid-cols-1'>
        <div className="flex flex-col items-center">
          <label className="font-semibold mb-2 md:text-xl">
            If you want to change 3 things about your health and nutritional habits, what will they be?
          </label>

          {/* Goal 1 Input */}
          <label className="flex-col flex font-semibold text-left mb-2">
            First Thing
            <input
              type="text"
              name="goal1"
              value={formData.goal1}
              onChange={handleChange}
              className={`${inputStyles()} md:!w-96 mt-2 !bg-white-fg dark:!bg-[#000]`}
              placeholder="1"
            />
            {errors.goal1 && <span className="error">{errors.goal1}</span>}
          </label>

          {/* Goal 2 Input */}
          <label className="flex-col flex font-semibold text-left mb-2">
            Second Thing

            <input
              type="text"
              name="goal2"
              value={formData.goal2}
              onChange={handleChange}
              className={`${inputStyles()} md:!w-96 mt-2 !bg-white-fg dark:!bg-[#000]`}
              placeholder="2"
            />
            {errors.goal2 && <span className="error">{errors.goal2}</span>}
          </label>

          {/* Goal 3 Input */}
          <label className="flex-col flex font-semibold text-left mb-2">
            Third Thing

            <input
              type="text"
              name="goal3"
              value={formData.goal3}
              onChange={handleChange}
              className={`${inputStyles()} md:!w-96 mt-2 !bg-white-fg dark:!bg-[#000]`}
              placeholder="3"
            />
            {errors.goal3 && <span className="error">{errors.goal3}</span>}
          </label>


        </div>
      </div>
    </form>
  );
}

// PropTypes
Goals.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Goals;
