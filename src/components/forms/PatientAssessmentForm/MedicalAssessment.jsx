import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';


function MedicalAssessment({ formData, setFormData, nextStep }) {
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
      'pastMedicalHistory',
      'pastSurgicalHistory',
      'foodIntolerance',
      'foodAllergies',
      'medications',
      'smokingStatus',
      'drinkingStatus',
      'familyHistory',
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

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className='text-center font-semibold text-2xl mb-6'>Medical Assessment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* Form Fields (same as previous implementation) */}
        <div className="flex flex-col p-4">
          <label className="font-semibold">Past Medical History (PMH)</label>
          <textarea
            name="pastMedicalHistory"
            value={formData.pastMedicalHistory}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.pastMedicalHistory && <span className="error">{errors.pastMedicalHistory}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Past Surgical History (PSH)</label>
          <textarea
            name="pastSurgicalHistory"
            value={formData.pastSurgicalHistory}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.pastSurgicalHistory && <span className="error">{errors.pastSurgicalHistory}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Food Intolerance *</label>
          <input
            type="text"
            name="foodIntolerance"
            value={formData.foodIntolerance}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          />
          {errors.foodIntolerance && <span className="error">{errors.foodIntolerance}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Food Allergies *</label>
          <select
            name="foodAllergies"
            value={formData.foodAllergies}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          >
            <option value="">Select an option</option>
            <option value="eggs">Eggs</option>
            <option value="milk">Milk</option>
            <option value="mustard">Mustard</option>
            <option value="peanut">Peanut</option>
            <option value="tree nuts">Tree Nuts</option>
            <option value="crustaceans & molluscs">Crustaceans & Molluscs</option>
            <option value="fish">Fish</option>
            <option value="sesame">Sesame</option>
            <option value="soy">Soy</option>
            <option value="sulphites">Sulphites</option>
            <option value="wheat">Wheat</option>
          </select>
          {errors.foodAllergies && <span className="error">{errors.foodAllergies}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Medication/Supplements, Specify</label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          />
          {errors.medications && <span className="error">{errors.medications}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Do you Smoke? *</label>
          <select
            name="smokingStatus"
            value={formData.smokingStatus}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.smokingStatus && <span className="error">{errors.smokingStatus}</span>}
        </div>

        {formData.smokingStatus === 'yes' && (
          <>
            <div className="flex flex-col p-4">
              <label className="font-semibold">How many packs a day? (pack 20 cigarettes)</label>
              <input
                type="number"
                name="packsPerDay"
                value={formData.packsPerDay}
                onChange={handleChange}
                className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
              />
            </div>

            <div className="flex flex-col p-4">
              <label className="font-semibold">How many smoking years?</label>
              <input
                type="number"
                name="smokingYears"
                value={formData.smokingYears}
                onChange={handleChange}
                className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
              />
            </div>
          </>
        )}

        <div className="flex flex-col p-4">
          <label className="font-semibold">Do you drink alcohol? *</label>
          <select
            name="drinkingStatus"
            value={formData.drinkingStatus}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.drinkingStatus && <span className="error">{errors.drinkingStatus}</span>}
        </div>

        {formData.drinkingStatus === 'yes' && (
          <>
            <div className="flex flex-col p-4">
              <label className="font-semibold">How often do you drink alcohol?</label>
              <select
                name="drinkingFrequency"
                value={formData.drinkingFrequency}
                onChange={handleChange}
                className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
              >
                <option value="">Select</option>
                <option value="never">Never</option>
                <option value="monthly or less">Monthly or less</option>
                <option value="2 to 4 times_month">2 to 4 times a month</option>
                <option value="2 to3 times week">2 to 3 times a week</option>
                <option value="4 or more times week">4 or more times a week</option>
              </select>
            </div>

            <div className="flex flex-col p-4">
              <label className="font-semibold">How many drinks containing alcohol do you have on a typical day when you are drinking?</label>
              <select
                name="typicalDrinks"
                value={formData.typicalDrinks}
                onChange={handleChange}
                className={`${inputStyles()} !py-[6px] bg-white dark:!bg-[#000]`}
              >
                <option value="">Select</option>
                <option value="1 or 2">1 or 2</option>
                <option value="3 or 4">3 or 4</option>
                <option value="5 or 6">5 or 6</option>
                <option value="7 to 9">7 to 9</option>
                <option value="10 or more">10 or more</option>
              </select>
            </div>

          </>
        )}

        <div className="flex flex-col p-4">
          <label className="font-semibold">Family History *</label>
          <textarea
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.familyHistory && <span className="error">{errors.familyHistory}</span>}
        </div>
      </div>
    </form>
  );
}

// PropTypes
MedicalAssessment.propTypes = {
  formData: PropTypes.shape({
    pastMedicalHistory: PropTypes.string.isRequired,
    pastSurgicalHistory: PropTypes.string.isRequired,
    foodAllergies: PropTypes.string.isRequired,
    medications: PropTypes.string.isRequired,
    smokingStatus: PropTypes.string.isRequired,
    packsPerDay: PropTypes.number,
    smokingYears: PropTypes.number,
    drinkingStatus: PropTypes.string.isRequired,
    drinkingFrequency: PropTypes.string,
    typicalDrinks: PropTypes.string,
    familyHistory: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default MedicalAssessment;
