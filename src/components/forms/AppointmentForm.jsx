import { useState } from "react";
import Stepper from "./Stepper";
import PersonalInfo from "./PatientAssessmentForm/PersonalInfo";
import MedicalAssessment from "./PatientAssessmentForm/MedicalAssessment";
import PhysicalActivityAssessment from "./PatientAssessmentForm/PhysicalActivityAssessment";
import PsychologicalAssessment from "./PatientAssessmentForm/PsychologicalAssessment";
import DietaryAssessment from "./PatientAssessmentForm/DietaryAssessment";
import PrecedentTreatmentAssessment from "./PatientAssessmentForm/PrecedentTreatmentAssessment";
import Goals from "./PatientAssessmentForm/Goals";
import Calendar from "./PatientAssessmentForm/Calendar";
import { createAppointment } from "../../services/api";
import {
  AppointmentProvider,
  useAppointment,
} from "../../context/AppointmentContext";

const AppointmentFormContent = () => {
  const { appointmentDetails, clearAppointment } = useAppointment();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    maritalStatus: "",
    numberOfKids: "",
    workStatus: "",
    currentWorkDescription: "",
    workingSchedule: "",
    preferredLanguage: "",
    education: "",
    fieldOfStudy: "",
    reasonForVisit: "",
    howDidYouKnow: "",
    pastMedicalHistory: "",
    pastSurgicalHistory: "",
    foodAllergies: "",
    medications: "",
    smokingStatus: "",
    drinkingStatus: "",
    typicalDrinks: "",
    familyHistory: "",
    specialDiet: "",
    threeMealsADay: "",
    regularIntervals: "",
    averageMealDuration: "",
    mealLocation: "",
    eatingCompany: "",
    waterIntake: "",
    goal1: "",
    goal2: "",
    goal3: "",
    accessToFacilities: "",
    physicallyActive: "",
    activityType: "",
    exerciseDaily: "",
    hoursPerWeek: "",
    duration: "",
    favoriteSport: "",
    limitations: "",
    exercisePlan: "",
    previousDieting: "",
    dietIssue: "",
    pillsUsed: "",
    stressed: "",
    emotionalEater: "",
    sleepHours: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // Handle moving to the next or previous step
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  // Reset form state
  const resetForm = () => {
    setCurrentStep(0);
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      maritalStatus: "",
      numberOfKids: "",
      workStatus: "",
      currentWorkDescription: "",
      workingSchedule: "",
      preferredLanguage: "",
      education: "",
      fieldOfStudy: "",
      reasonForVisit: "",
      howDidYouKnow: "",
      pastMedicalHistory: "",
      pastSurgicalHistory: "",
      foodAllergies: "",
      medications: "",
      smokingStatus: "",
      drinkingStatus: "",
      typicalDrinks: "",
      familyHistory: "",
      specialDiet: "",
      threeMealsADay: "",
      regularIntervals: "",
      averageMealDuration: "",
      mealLocation: "",
      eatingCompany: "",
      waterIntake: "",
      goal1: "",
      goal2: "",
      goal3: "",
      accessToFacilities: "",
      physicallyActive: "",
      activityType: "",
      exerciseDaily: "",
      hoursPerWeek: "",
      duration: "",
      favoriteSport: "",
      limitations: "",
      exercisePlan: "",
      previousDieting: "",
      dietIssue: "",
      pillsUsed: "",
      stressed: "",
      emotionalEater: "",
      sleepHours: "",
      appointmentDate: "",
      appointmentTime: "",
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      if (!appointmentDetails) {
        alert("Please select an appointment date and time before submitting.");
        return;
      }

      const response = await createAppointment({
        ...formData,
        ...appointmentDetails,
        submissionDate: new Date().toISOString(),
        status: "pending",
      });

      setIsSubmitted(true);
      alert("Form and Appointment Submitted Successfully");

      setTimeout(() => {
        resetForm();
        clearAppointment();
      }, 400);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // Handle clicking on a step indicator
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="form-component flex flex-col py-4 md:px-14 bg-white-bg dark:bg-black dark:text-white-bg">
      {/* Stepper component */}
      <Stepper
        steps={[
          "Step 1",
          "Step 2",
          "Step 3",
          "Step 4",
          "Step 5",
          "Step 6",
          "Step 7",
        ]}
        currentStep={currentStep}
        isSubmitted={isSubmitted}
        onStepClick={handleStepClick}
      />

      {/* Form content for each step */}
      <div className="form-content flex my-4">
        {currentStep === 0 && (
          <div className="w-full space-x-4">
            <PersonalInfo
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}

        {currentStep === 1 && (
          <div className="w-full space-x-4">
            <MedicalAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full space-x-4">
            <PhysicalActivityAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full space-x-4">
            <DietaryAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 4 && (
          <div className="w-full space-x-4">
            <PsychologicalAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 5 && (
          <div className="w-full space-x-4">
            <PrecedentTreatmentAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 6 && (
          <div className="w-full space-x-4">
            <Goals
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {/* Render confirmation step and booking calendar when the form is submitted */}
        {currentStep === 7 && (
          <div className="w-full flex flex-col sm:flex-row p-4 gap-6">
            <div className="sm:w-1/2 border-2 border-gray-300 rounded-lg p-6 text-center flex flex-col items-center custom-scrollbar h-1/2">
              <h2 className="text-2xl font-semibold mb-2">Confirmation</h2>
              <p className="text-gray-400 mb-4">
                Review your information and select an appointment time.
              </p>
              <div className="summary grid grid-cols-2 sm:grid-cols-3 gap-4 w-full border-t border-gray-300 pt-4">
                {Object.entries(formData)
                  .filter(([key]) => !key.startsWith("appointment"))
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col p-4 bg-[#000] border border-black rounded-lg shadow-md transition transform hover:scale-105 duration-300 hover"
                    >
                      <span className="text-[#f0f0fed3] font-semibold">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </span>
                      <span className="text-[#f0f0fed3]">
                        {value || "Not provided"}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="sm:w-1/2">
              <Calendar />
              {appointmentDetails && (
                <div className="mt-6 p-4 bg-green-700 rounded-lg w-full">
                  <h3 className="text-xl font-semibold text-white-whites mb-2">
                    Your Appointment is at:
                  </h3>
                  <p className="text-white-whites">
                    Date: {appointmentDetails.appointmentDate}
                  </p>
                  <p className="text-white-whites">
                    Time: {appointmentDetails.appointmentTime}
                  </p>
                </div>
              )}
              <button
                onClick={handleSubmit}
                disabled={!appointmentDetails}
                className={`mt-6 px-8 py-3 rounded-lg text-white-whites font-semibold transition-all duration-300 ${
                  appointmentDetails
                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {appointmentDetails
                  ? "Submit Appointment"
                  : "Select an Appointment Time"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="button-group flex justify-center my-4 space-x-12">
        {currentStep > 0 && (
          <button
            onClick={previousStep}
            className="bg-[#71743c] rounded-lg hover hover:bg-transparent border-2  hover:border-2 border-[#71743c] !w-24"
          >
            Previous
          </button>
        )}
        {currentStep < 7 && (
          <button
            onClick={nextStep}
            className="bg-[#71743c] p-1.5 rounded-lg hover hover:bg-transparent border-2 hover:border-2 border-[#71743c] !w-24"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const AppointmentForm = () => {
  return (
    <AppointmentProvider>
      <AppointmentFormContent />
    </AppointmentProvider>
  );
};

export default AppointmentForm;
