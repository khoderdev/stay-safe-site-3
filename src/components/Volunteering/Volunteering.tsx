import React, { useState } from "react";
import { useAtom } from "jotai";
import InputField from "../Vitrack/inputs/InputField";
import Dropdown from "../Vitrack/inputs/Dropdown";
import DateInput from "../Vitrack/inputs/DateInput";
import {
  firstNameAtom,
  lastNameAtom,
  dateOfBirthAtom,
  genderAtom,
  nationalityAtom,
  countryAtom,
  addressAtom,
  phoneAtom,
  emergencyPhoneAtom,
  contactPersonAtom,
  languageAtom,
  tShirtSizeAtom,
  bloodGroupAtom,
  educationAtom,
  isOtherLanguageAtom,
  manualLanguageAtom,
  selectedSkillsAtom,
  selfDescriptionAtom,
  volunteerInterestAtom,
  imageConsentAtom,
} from "../../atoms/store";
import {
  countriesOptions,
  nationalitiesOptions,
  skillsOptions,
} from "../Vitrack/data";
import Modal from "./Modal";

const Volunteering = () => {
  // Personal Information States
  const [firstName, setFirstName] = useAtom(firstNameAtom);
  const [lastName, setLastName] = useAtom(lastNameAtom);
  const [dateOfBirth, setDateOfBirth] = useAtom(dateOfBirthAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [nationality, setNationality] = useAtom(nationalityAtom);
  const [country, setCountry] = useAtom(countryAtom);
  const [address, setAddress] = useAtom(addressAtom);
  const [phone, setPhone] = useAtom(phoneAtom);
  const [emergencyPhone, setEmergencyPhone] = useAtom(emergencyPhoneAtom);
  const [contactPerson, setContactPerson] = useAtom(contactPersonAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [tShirtSize, setTShirtSize] = useAtom(tShirtSizeAtom);
  const [bloodGroup, setBloodGroup] = useAtom(bloodGroupAtom);
  const [education, setEducation] = useAtom(educationAtom);
  const [isOtherLanguage, setIsOtherLanguage] = useAtom(isOtherLanguageAtom);
  const [manualLanguage, setManualLanguage] = useAtom(manualLanguageAtom);
  const [selectedSkills, setSelectedSkills] = useAtom(selectedSkillsAtom);
  const [selfDescription, setSelfDescription] = useAtom(selfDescriptionAtom);
  const [volunteerInterest, setVolunteerInterest] = useAtom(
    volunteerInterestAtom
  );
  const [imageConsent, setImageConsent] = useAtom(imageConsentAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSkills((prevSkills) =>
      checked
        ? [...prevSkills, value]
        : prevSkills.filter((skill) => skill !== value)
    );
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "dateOfBirth":
        setDateOfBirth(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "nationality":
        setNationality(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "emergencyPhone":
        setEmergencyPhone(value);
        break;
      case "contactPerson":
        setContactPerson(value);
        break;
      case "language":
        setLanguage(value);
        if (value === "Other") {
          setIsOtherLanguage(true);
        } else {
          setIsOtherLanguage(false);
          setManualLanguage(""); // Reset the manual language field if another option is selected
        }
        break;
      case "manualLanguage": // Handle the manual language input
        setManualLanguage(value);
        break;
      case "tShirtSize":
        setTShirtSize(value);
        break;
      case "bloodGroup":
        setBloodGroup(value);
        break;
      case "education":
        setEducation(value);
        break;
      case "imageConsent": // Handle image consent
        setImageConsent(isChecked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = {
      personalInfo: {
        firstName,
        lastName,
        dateOfBirth,
        gender,
      },
      contactInfo: {
        nationality,
        country,
        address,
        phone,
      },
      emergencyContact: {
        emergencyPhone,
        contactPerson,
      },
      additionalInfo: {
        language: isOtherLanguage ? manualLanguage : language,
        education,
        tShirtSize,
        bloodGroup,
        selectedSkills,
        selfDescription,
      },
      consent: {
        agreedToTerms,
        imageConsent,
      }
    };

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto" autoComplete="off">
        <div className="bg-white-bg3 dark:bg-dark rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-pink dark:bg-pink px-6 py-8 sm:px-10 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-50 text-center">
              Volunteer Registration Form
            </h2>
            <p className="mt-2 text-gray-50 text-center max-w-2xl mx-auto">
              Join our community of volunteers and make a difference in people's
              lives
            </p>
          </div>

          {/* Form Content */}
          <div className="px-4 py-8 sm:px-10 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {/* Personal Information Section */}
              <div className="col-span-full mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Personal Information
                </h3>
              </div>

              <InputField
                label="First Name"
                name="firstName"
                value={firstName || ""}
                onChange={handleChange}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                max={undefined}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={lastName || ""}
                onChange={handleChange}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                max={undefined}
              />
              <DateInput
                label="Date of Birth"
                name="dateOfBirth"
                value={dateOfBirth || ""}
                onChange={handleChange}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />
              <Dropdown
                label="Gender"
                name="gender"
                value={gender || ""}
                onChange={handleChange}
                options={["Male", "Female", "Other"]}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              />

              {/* Contact Information Section */}
              <div className="col-span-full mt-8 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Contact Information
                </h3>
              </div>

              <Dropdown
                label="Nationality"
                name="nationality"
                value={nationality || ""}
                onChange={handleChange}
                options={nationalitiesOptions}
                className="transition-all duration-200"
              />
              <Dropdown
                label="Country"
                name="country"
                value={country || ""}
                onChange={handleChange}
                options={countriesOptions}
                className="transition-all duration-200"
              />
              <InputField
                label="Address"
                name="address"
                value={address || ""}
                onChange={handleChange}
                className="transition-all duration-200"
                max={undefined}
              />
              <InputField
                label="Phone Number"
                name="phone"
                value={phone || ""}
                onChange={handleChange}
                className="transition-all duration-200"
                max={undefined}
              />

              {/* Emergency Contact Section */}
              <div className="col-span-full mt-8 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Emergency Contact
                </h3>
              </div>

              <InputField
                label="Emergency Contact Number"
                name="emergencyPhone"
                value={emergencyPhone || ""}
                onChange={handleChange}
                className="transition-all duration-200"
                max={undefined}
              />
              <InputField
                label="Contact Person (Relation)"
                name="contactPerson"
                value={contactPerson || ""}
                onChange={handleChange}
                className="transition-all duration-200"
                max={undefined}
              />

              {/* Additional Information Section */}
              <div className="col-span-full mt-8 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Additional Information
                </h3>
              </div>

              <Dropdown
                label="Language"
                name="language"
                value={language || ""}
                onChange={handleChange}
                options={["Arabic", "English", "Other"]}
                className="transition-all duration-200"
              />
              {isOtherLanguage && (
                <InputField
                  label="Please specify your language"
                  name="manualLanguage"
                  value={manualLanguage || ""}
                  onChange={handleChange}
                  className="transition-all duration-200"
                  max={undefined}
                />
              )}
              <Dropdown
                label="Education"
                name="education"
                value={education || ""}
                onChange={handleChange}
                options={[
                  "No Formal Education",
                  "Diploma",
                  "Some Primary Education",
                  "Completed Primary Education",
                  "Some Secondary Education",
                  "Completed Secondary Education (High School Diploma or Equivalent)",
                  "Some Post-Secondary Education (College/University)",
                  "Completed Post-Secondary Education (Associate Degree or Equivalent)",
                  "Bachelor's Degree",
                  "Master's Degree",
                  "Doctorate (PhD or Equivalent)",
                ]}
                className="transition-all duration-200"
              />

              <InputField
                label="T-Shirt Size"
                name="tShirtSize"
                value={tShirtSize || ""}
                onChange={handleChange}
                className="transition-all duration-200"
                max={undefined}
              />
              <Dropdown
                label="Blood Group"
                name="bloodGroup"
                value={bloodGroup || ""}
                onChange={handleChange}
                options={[
                  "A positive (A+)",
                  "A negative (A-)",
                  "B positive (B+)",
                  "B negative (B-)",
                  "AB positive (AB+)",
                  "AB negative (AB-)",
                  "O positive (O+)",
                  "O negative (O-)",
                ]}
                className="transition-all duration-200"
              />

              {/* Skills Section */}
              <div className="col-span-full mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Skills & Expertise
                </h3>
                <div className="bg-gray-50 dark:bg-black rounded-lg p-6">
                  <h4 className="text-sm  text-gray-700 dark:text-gray-200 mb-4">
                    Do you possess any of the following skills?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skillsOptions.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`skill-${index}`}
                          value={skill}
                          checked={selectedSkills.includes(skill)}
                          onChange={handleSkillChange}
                          className="w-4 h-4 text-pink rounded border-gray-300 focus:ring-pink dark:border-gray-600 dark:focus:ring-pink"
                        />
                        <label
                          htmlFor={`skill-${index}`}
                          className="text-sm text-gray-700 dark:text-gray-200"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Self Description Section */}
              <div className="col-span-full mt-8">
                <InputField
                  label="Can you tell us about yourself and your goals in life? What motivates you to become a volunteer at Stay Safe?"
                  name="selfDescription"
                  value={selfDescription}
                  onChange={(e) => setSelfDescription(e.target.value)}
                  textarea
                  className="transition-all duration-200 min-h-[150px]"
                  max={undefined}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="col-span-full mt-8">
                <div className="bg-gray-50 dark:bg-black rounded-lg p-6">
                  <p className="text-sm text-black dark:text-gray-200 mb-4">
                    I hereby declare that all the information provided in this
                    form is true, complete, and accurate to the best of my
                    knowledge.
                  </p>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={() => setAgreedToTerms(!agreedToTerms)}
                      id="agreeToTerms"
                      className="w-4 h-4 text-pink rounded border-gray-300 !focus:ring-pink dark:border-gray-600 dark:!focus:ring-pink"
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className="text-sm text-gray-700 dark:text-gray-200"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={openModal}
                        className="text-pink hover:text-blue-700 transition-all duration-200"
                      >
                        Terms of Service
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-full mt-8 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-pink text-white rounded-lg  shadow-sm hover:bg-pink focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  disabled={!agreedToTerms}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Volunteering;
