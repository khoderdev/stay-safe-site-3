import BMICalculator from '../components/calculator/bmi/BMICalculator';
import ServiceCard from '../components/consultations/ServiceCard';
import QualitativeDiets from '../components/qualitative-diets/QualitativeDiets';
import FoodAndNutrition from '../components/quiz/FoodAndNutrition';

function MDC() {
  return (
    <div>
      <div className='flex w-full h-screen '>
        <img src='/images/MDC-anim.gif' alt='mdc' className='w-full h-full object-contain mt-[-4rem]' />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 p-2 py-4 bg-[#d4eff4] dark:bg-black">
        <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
          <ServiceCard
            title="Clinic Counseling"
            description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, & Personalized Dietary Education, Blood Lipid Profile (Cholesterol, HDL, LDL, Triglyceride) & Blood Glucose."
            buttonText="Get Started"
            onButtonClick={() => console.log("Online Counseling booked")}
          />
        </div>

        <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
          <ServiceCard
            title="In-House Consultation"
            description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, Personalized Dietary Education, & Labs, including Lipid profile (Cholesterol HDL, LDL, & Triglyceride) & Blood Glucose."
            buttonText="Learn More"
            onButtonClick={() => console.log("Online Counseling booked")}
          />
        </div>

        <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
          <ServiceCard
            title="Online Counseling"
            description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, & Personalized Dietary Education."
            buttonText="Book Now"
            onButtonClick={() => console.log("Online Counseling booked")}
          />
        </div>

        <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
          <ServiceCard
            title="Corporate Therapeutic Services"
            description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
            buttonText="Reach Out"
            onButtonClick={() => console.log("Online Counseling booked")}
          />
        </div>

        <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
          <ServiceCard
            title="Community Therapeutic Services"
            description="Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity."
            buttonText="Contact us"
            onButtonClick={() => console.log("Online Counseling booked")}
          />
        </div>

        <div className="col-span-1 grid-rows-2"></div>
      </div>

      <BMICalculator />
      <FoodAndNutrition />
      <QualitativeDiets />
    </div>
  );
}

export default MDC;
