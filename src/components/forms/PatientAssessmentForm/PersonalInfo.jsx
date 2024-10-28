import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles, selectStyles } from '../../../utils/styles';
import Countries from '../Countries';



function PersonalInfo({ formData, setFormData, nextStep }) {
  // State for handling form submission and errors
  const [errors, setErrors] = useState({});
  const [selectedEducation, setSelectedEducation] = useState(formData.education || "");
  const [selectedCountry, setSelectedCountry] = useState(formData.country || "");


  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the education field is changed, update selectedEducation state
    if (name === 'education') {
      setSelectedEducation(value);
    }
    if (name === 'country') {
      setSelectedCountry(value);
    }

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
      'email', 'fullName', 'dateOfBirth', 'phone', 'country',
      'address', 'maritalStatus', 'numberOfKids', 'workStatus',
      'currentWorkDescription', 'workingSchedule', 'preferredLanguage',
      'education', 'reasonForVisit', 'howDidYouKnow'
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
      <h2 className='text-center font-semibold mb-2 text-2xl mb-6'>Personal Info</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}   bg-white dark:!bg-[#000]`}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}   bg-white dark:!bg-[#000]`}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Mobile Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}   bg-white dark:!bg-[#000]`}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Country</label>
          <Countries
            value={selectedCountry || ""}
            onChange={handleChange}
          />

          {errors.country && <span className="error">{errors.country}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Marital Status</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()} bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
          </select>
          {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Number of Kids</label>
          <input
            type="number"
            name="numberOfKids"
            value={formData.numberOfKids || ""}
            onChange={handleChange}
            className={`${inputStyles()} bg-white dark:!bg-[#000]`}
          />
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Work Status</label>
          <select
            name="workStatus"
            value={formData.workStatus || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()}  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="retired">Retired</option>
          </select>
          {errors.workStatus && <span className="error">{errors.workStatus}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">How would you describe your current work status?</label>
          <select
            name="currentWorkDescription"
            value={formData.currentWorkDescription || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()}   bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="location-based">Location-based</option>
            <option value="online">Online</option>
            <option value="office-setting">Office setting</option>
            <option value="outdoor">Outdoor</option>
            <option value="traveling-extensively">Traveling extensively</option>
            <option value="other">Other (please specify)</option>
          </select>
          {errors.currentWorkDescription && <span className="error">{errors.currentWorkDescription}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Working Schedule per week, if employed</label>
          <input
            type="text"
            name="workingSchedule"
            value={formData.workingSchedule || ""}
            onChange={handleChange}
            className={`${inputStyles()}   bg-white dark:!bg-[#000]`}
          />
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Preferred Language</label>
          <select
            name="preferredLanguage"
            value={formData.preferredLanguage || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()}   bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="arabic">Arabic</option>
            <option value="english">English</option>
          </select>
          {errors.preferredLanguage && <span className="error">{errors.preferredLanguage}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Education</label>
          <select
            name="education"
            value={formData.education || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()}   bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="No Formal Education">No Formal Education</option>
            <option value="Diploma">Diploma</option>
            <option value="Some Primary Education">Some Primary Education</option>
            <option value="Completed Primary Education">Completed Primary Education</option>
            <option value="Some Secondary Education">Some Secondary Education</option>
            <option value="Completed Secondary Education (High School Diploma or Equivalent)">Completed Secondary Education (High School Diploma or Equivalent)</option>
            <option value="Some Post-Secondary Education (College/University)">Some Post-Secondary Education (College/University)</option>
            <option value="Completed Post-Secondary Education (Associate Degree or Equivalent)">Completed Post-Secondary Education (Associate Degree or Equivalent)</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate (PhD or Equivalent)">Doctorate (PhD or Equivalent)</option>
          </select>
          {errors.education && <span className="error">{errors.education}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">Reason for Visit</label>
          <input
            name="reasonForVisit"
            value={formData.reasonForVisit || ""}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.reasonForVisit && <span className="error">{errors.reasonForVisit}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold mb-2">How did you know about us?</label>
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow || ""}
            onChange={handleChange}
            required
            className={`${selectStyles()}   bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="internet-search">Internet search (e.g., Google)</option>
            <option value="social-media">Social media (Facebook, Instagram, LinkedIn, etc.)</option>
            <option value="friend-family">Friend or family referral</option>
            <option value="event-conference">Event or conference</option>
            <option value="advertisement">Advertisement (online or print)</option>
            <option value="news-article">News article or blog</option>
            <option value="email-newsletter">Email newsletter</option>
            <option value="other">Other (please specify)</option>
          </select>
          {errors.howDidYouKnow && <span className="error">{errors.howDidYouKnow}</span>}
        </div>

        {[
          'Some Post-Secondary Education (College/University)',
          'Completed Post-Secondary Education (Associate Degree or Equivalent)',
          "Bachelor's Degree",
          "Master's Degree",
          'Doctorate (PhD or Equivalent)',
        ].includes(selectedEducation) && (
            <div className="flex flex-col px-4">
              <label className="font-semibold mb-2">Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy || ""}
                onChange={handleChange}
                required
                className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
              />
              {errors.fieldOfStudy && <span className="error">{errors.fieldOfStudy}</span>}
            </div>
          )}
      </div>
    </form>
  );
}
PersonalInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalInfo;
