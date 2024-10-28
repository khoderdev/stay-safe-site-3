import { useState } from 'react';
import Stepper from './Stepper';
import PersonalInfo from './PatientAssessmentForm/PersonalInfo';
import MedicalAssessment from './PatientAssessmentForm/MedicalAssessment';
import PhysicalActivityAssessment from './PatientAssessmentForm/PhysicalActivityAssessment';
import PsychologicalAssessment from './PatientAssessmentForm/PsychologicalAssessment';
import DietaryAssessment from './PatientAssessmentForm/DietaryAssessment';
import PrecedentTreatmentAssessment from './PatientAssessmentForm/PrecedentTreatmentAssessment';
import Goals from './PatientAssessmentForm/Goals';
import { createAppointment } from '../../services/api';


const FormComponent = () => {
  // Only include the steps to be displayed in the stepper
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7"];
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Store form data dynamically
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
  });

  // Handle moving to the next or previous step
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
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
      familyHistory: "",
      specialDiet: "",
      threeMealsADay: "",
      regularIntervals: "",
      averageMealDuration: "",
      mealLocation: "",
      eatingCompany: "",
      waterIntake: "",
      goals: "",
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
    });
  };

  // Submit the form, mark final step as completed, and reset the form
  const handleSubmit = async () => {
    try {
      // Make API call to create an appointment
      const response = await createAppointment(formData);
      setIsSubmitted(true);
      alert("Form Submitted Successfully");

      // Reset the form after a delay to allow user to see the submission status
      setTimeout(resetForm, 400);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };
  // const handleSubmit = () => {
  //   setIsSubmitted(true);
  //   alert("Form Submitted");

  //   // Reset the form after a delay to allow user to see the submission status
  //   setTimeout(resetForm, 400);
  // };

  // Handle clicking on a step indicator
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="form-component flex flex-col p-4 bg-white dark:bg-black dark:text-[#f0f0fe]">
      {/* Stepper component */}
      <Stepper steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} onStepClick={handleStepClick} />

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
        {/* Render confirmation step only when the form is submitted */}
        {currentStep === steps.length && (
          <div className="space-y-6 border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center max-w-8xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Confirmation</h2>
            <p className="text-gray-600 mb-4">Review and submit your information.</p>
            <div className="summary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full border-t pt-4">
              {Object.entries(formData).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center text-lg p-2 bg-gray-50 border-b w-full rounded-md shadow-sm"
                >
                  <span className="text-gray-700 capitalize">{key}:</span>
                  <span className="text-gray-800">{value || "Not provided"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="button-group flex justify-center space-x-12">
        {currentStep > 0 && (
          <button onClick={previousStep} className="bg-pink rounded-lg hover hover:bg-transparent border-2  hover:border-2 border-pink !w-24">Previous</button>
        )}
        {currentStep < steps.length && (
          <button onClick={nextStep} className="bg-green-500 p-1.5 rounded-lg hover hover:bg-transparent border-2 hover:border-2 border-pink !w-24">Next</button>
        )}
        {currentStep === steps.length && (
          <button onClick={handleSubmit} className="bg-pink rounded-lg hover border-2 hover:bg-transparent  hover:border-2 border-pink !w-24">Submit</button>
        )}
      </div>
    </div>
  );
};

export default FormComponent;