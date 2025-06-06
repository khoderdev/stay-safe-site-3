import { useState, useContext, lazy } from "react";
import { createAppointment } from "../../services/api";
import { AppointmentProvider, useAppointment } from "../../context/AppointmentContext";
import { addAppointment, updateAppointment } from "../../services/indexedDB";
import AuthContext from "../../hooks/authContext";
import { ArrowLeft } from "../icons/Icons";


const Stepper = lazy(() =>
  import("./Stepper")
);

const PersonalInfo = lazy(() =>
  import("./PatientAssessmentForm/PersonalInfo")
);

const MedicalAssessment = lazy(() =>
  import("./PatientAssessmentForm/MedicalAssessment")
);

const PhysicalActivityAssessment = lazy(() =>
  import("./PatientAssessmentForm/PhysicalActivityAssessment")
);

const PsychologicalAssessment = lazy(() =>
  import("./PatientAssessmentForm/PsychologicalAssessment")
);

const DietaryAssessment = lazy(() =>
  import("./PatientAssessmentForm/DietaryAssessment")
);

const PrecedentTreatmentAssessment = lazy(() =>
  import("./PatientAssessmentForm/PrecedentTreatmentAssessment")
);

const Goals = lazy(() =>
  import("./PatientAssessmentForm/Goals")
);

const Calendar = lazy(() =>
  import("./PatientAssessmentForm/Calendar")
);


const AppointmentFormContent = () => {
  const { appointmentDetails, clearAppointment } = useAppointment();
  const { isAuthenticated } = useContext(AuthContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "khoder jaber",
    email: "khoder.dev@gmail.com",
    phone: "81977112",
    country: "Lebanon",
    address: "Zgharta",
    maritalStatus: "single",
    numberOfKids: "0",
    workStatus: "employed",
    currentWorkDescription: "Online",
    workingSchedule: "23",
    preferredLanguage: "English",
    education: "Master's Degree",
    fieldOfStudy: "Computer Science",
    reasonForVisit: "checkup",
    howDidYouKnow: "Email newsletter",
    pastMedicalHistory: "No significant medical history",
    pastSurgicalHistory: "No previous surgeries",
    foodAllergies: "None",
    medications: "No current medications",
    smokingStatus: "Non-smoker",
    drinkingStatus: "Non-drinker",
    typicalDrinks: "Water",
    familyHistory: "No significant family medical history",
    specialDiet: "Balanced diet",
    threeMealsADay: "Yes",
    regularIntervals: "Every 4-5 hours",
    averageMealDuration: "20 minutes",
    mealLocation: "Home",
    eatingCompany: "Family",
    waterIntake: "2 liters per day",
    goal1: "Maintain healthy lifestyle",
    goal2: "Regular exercise routine",
    goal3: "Balanced nutrition",
    accessToFacilities: "Yes",
    physicallyActive: "Yes",
    activityType: "Mixed cardio and strength training",
    exerciseDaily: "Yes",
    hoursPerWeek: "10",
    duration: "1 hour per session",
    favoriteSport: "Swimming",
    limitations: "None",
    exercisePlan: "Regular gym attendance",
    previousDieting: "No",
    dietIssue: "None",
    pillsUsed: "No supplements",
    stressed: "Moderate",
    emotionalEater: "No",
    sleepHours: "7-8 hours",
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
      // Check authentication first
      if (!isAuthenticated) {
        alert("Please log in to book an appointment.");
        return;
      }

      // Check appointment selection
      if (!appointmentDetails) {
        alert("Please select an appointment date and time before submitting.");
        return;
      }

      // Log the current state for debugging
      console.log('Submitting appointment with details:', {
        isAuthenticated,
        appointmentDetails,
        formData
      });

      // Verify user data is present
      if (!appointmentDetails.userId || !appointmentDetails.userEmail) {
        console.error('Missing user data in appointment details:', appointmentDetails);
        alert("Your session information is incomplete. Please log out, log back in, and try again.");
        return;
      }

      const appointmentData = {
        ...formData,
        ...appointmentDetails,
        submissionDate: new Date().toISOString(),
        status: "pending",
        synced: false // Track sync status with backend
      };

      try {
        // Save to IndexedDB first
        const savedAppointment = await addAppointment(appointmentData);
        console.log('Appointment saved locally:', savedAppointment);

        // Attempt to sync with backend
        const response = await createAppointment(appointmentData);
        
        // Update sync status based on backend response
        if (!response.offline) {
          if (response.success) {
            await updateAppointment({
              ...savedAppointment,
              synced: true
            });
            console.log('Appointment synced with backend');
          } else {
            console.warn('Backend save failed:', response.message);
          }
        } else {
          console.log('Working in offline mode:', response.message);
        }

        setIsSubmitted(true);
        const successMessage = response.offline 
          ? "Appointment Booked Successfully! (Saved locally, will sync when connection is restored)"
          : response.success 
            ? "Appointment Booked Successfully!"
            : "Appointment Booked Successfully! (Saved locally, sync failed)";
            
        alert(successMessage);

        setTimeout(() => {
          resetForm();
          clearAppointment();
        }, 400);
      } catch (error) {
        if (error.name === 'ConstraintError') {
          alert("This appointment slot is already booked. Please select a different time.");
        } else {
          throw error;
        }
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("There was an error booking your appointment. Please try again.");
    }
  };

  // Handle clicking on a step indicator
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="form-component flex flex-col py-8 md:px-4 min-h-screen">
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
      <div className="form-content flex my-8">
        {currentStep === 0 && (
          <div className="w-full animate-fadeIn">
            <PersonalInfo
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}

        {currentStep === 1 && (
          <div className="w-full animate-fadeIn">
            <MedicalAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full animate-fadeIn">
            <PhysicalActivityAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full animate-fadeIn">
            <DietaryAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 4 && (
          <div className="w-full animate-fadeIn">
            <PsychologicalAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 5 && (
          <div className="w-full animate-fadeIn">
            <PrecedentTreatmentAssessment
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 6 && (
          <div className="w-full animate-fadeIn">
            <Goals
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 7 && (
          <div className="w-full flex flex-col md:flex-row gap-8 animate-fadeIn">
            <div className="md:w-1/2 bg-white-bg dark:bg-dark rounded-xl shadow-lg p-6 flex flex-col max-h-[800px]">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text dark:text-white-bg">
                Confirmation
              </h2>
              <p className=" dark:text-white-bg mb-6">
                Review your information and select an appointment time.
              </p>
              <div className="summary grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar pr-2">
                {Object.entries(formData)
                  .filter(([key]) => !key.startsWith("appointment"))
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-col p-4 bg-white-bg3 dark:bg-[#000] rounded-lg border border-gray-200 dark:border-[#000] hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-gray-700 dark:text-gray-50 text-sm">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <span className="text-gray-900 dark:text-gray-100 mt-1">
                        {value || "Not provided"}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="bg-white-bg  rounded-xl shadow-lg">
                <Calendar />
              </div>
              {appointmentDetails && (
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold dark:text-white-bg mb-4">
                    Your Appointment is at:
                  </h3>
                  <div className="space-y-2">
                    <p className="dark:text-white-bg flex items-center gap-2">
                      <span className="dark:text-white-bg/80">Date:</span>
                      {appointmentDetails.appointmentDate}
                    </p>
                    <p className="dark:text-white-bg flex items-center gap-2">
                      <span className="dark:text-white-bg/80">Time:</span>
                      {appointmentDetails.appointmentTime}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <button
                  onClick={previousStep}
                  className="w-1/2 flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-black dark:hover:dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Go Back
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={!appointmentDetails}
                  className={`w-1/2 py-4 px-6 rounded-xl  transition-all duration-300 ${
                    appointmentDetails
                      ? "bg-pink dark:text-white-bg hover:shadow-lg hover:scale-[1.02]"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {appointmentDetails
                    ? "Book Appointment"
                    : "Select an Appointment Time"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      {currentStep !== 7 && (
        <div className="button-group flex justify-center my-4 space-x-12">
          {currentStep > 0 && (
            <button
              onClick={previousStep}
              className="bg-[#71743c] rounded-lg hover:bg-transparent border-2 hover:border-[#71743c] !w-24"
            >
              Previous
            </button>
          )}
          {currentStep < 7 && (
            <button
              onClick={nextStep}
              className="bg-[#71743c] p-1.5 rounded-lg hover:bg-transparent border-2 hover:border-[#71743c] !w-24"
            >
              Next
            </button>
          )}
        </div>
      )}
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
