import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyles } from '../../../utils/styles';



function PersonalInfo({ formData, setFormData, nextStep }) {
  // State for handling form submission and errors
  const [errors, setErrors] = useState({});
  const [selectedEducation, setSelectedEducation] = useState(formData.education);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the education field is changed, update selectedEducation state
    if (name === 'education') {
      setSelectedEducation(value);
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
      <h2 className='text-center font-semibold text-2xl mb-6'>Personal Info</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col p-4">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Mobile Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Marital Status</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
            <option value="divorced">Divorced</option>
          </select>
          {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Number of Kids</label>
          <input
            type="number"
            name="numberOfKids"
            value={formData.numberOfKids}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Work Status</label>
          <select
            name="workStatus"
            value={formData.workStatus}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="retired">Retired</option>
          </select>
          {errors.workStatus && <span className="error">{errors.workStatus}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">How would you describe your current work status?</label>
          <select
            name="currentWorkDescription"
            value={formData.currentWorkDescription}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
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
          <label className="font-semibold">Working Schedule per week, if employed</label>
          <input
            type="text"
            name="workingSchedule"
            value={formData.workingSchedule}
            onChange={handleChange}
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          />
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Preferred Language</label>
          <select
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
          >
            <option value="">Select</option>
            <option value="arabic">Arabic</option>
            <option value="english">English</option>
          </select>
          {errors.preferredLanguage && <span className="error">{errors.preferredLanguage}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">Education</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
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
          <label className="font-semibold">Reason for Visit</label>
          <textarea
            name="reasonForVisit"
            value={formData.reasonForVisit}
            onChange={handleChange}
            required
            className={`${inputStyles()}  bg-white dark:!bg-[#000]`}
          />
          {errors.reasonForVisit && <span className="error">{errors.reasonForVisit}</span>}
        </div>

        <div className="flex flex-col p-4">
          <label className="font-semibold">How did you know about us?</label>
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleChange}
            required
            className={`${inputStyles()} !py-[6px]  bg-white dark:!bg-[#000]`}
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
            <div className="flex flex-col p-4">
              <label className="font-semibold">Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                required
                className={`${inputStyles()} !py-[6px] !w-52 bg-white dark:!bg-[#000]`}
              />
              {errors.fieldOfStudy && <span className="error">{errors.fieldOfStudy}</span>}
            </div>
          )}
      </div>
    </form>
  );
}

// Add prop types validation
PersonalInfo.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    address: PropTypes.string,
    maritalStatus: PropTypes.string,
    numberOfKids: PropTypes.number,
    workStatus: PropTypes.string,
    currentWorkDescription: PropTypes.string,
    workingSchedule: PropTypes.string,
    preferredLanguage: PropTypes.string,
    education: PropTypes.string,
    reasonForVisit: PropTypes.string,
    howDidYouKnow: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalInfo;
