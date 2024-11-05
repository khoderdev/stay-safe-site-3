// import { useNavigate } from 'react-router-dom'
// import ServiceCard from './ServiceCard';

// function Consultations() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 p-2 py-4 bg-[#d4eff4] dark:bg-black">
//         <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
//           <ServiceCard
//             title="Clinic Counseling"
//             description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, & Personalized Dietary Education, Blood Lipid Profile (Cholesterol, HDL, LDL, Triglyceride) & Blood Glucose."
//             buttonText="Get Started"
//             onButtonClick={() => console.log("Clinic Counseling booked")}
//           />
//         </div>

//         <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
//           <ServiceCard
//             title="In-House Consultation"
//             description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, Personalized Dietary Education, & Labs, including Lipid profile (Cholesterol HDL, LDL, & Triglyceride) & Blood Glucose."
//             buttonText="Learn More"
//             onButtonClick={() => console.log("In-House Consultation booked")}
//           />
//         </div>

//         <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
//           <ServiceCard
//             title="Online Counseling"
//             description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, & Personalized Dietary Education."
//             buttonText="Book Now"
//             onButtonClick={() => navigate("/book-appointment")}
//           />
//         </div>

//         <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
//           <ServiceCard
//             title="Corporate Therapeutic Services"
//             description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
//             buttonText="Reach Out"
//             onButtonClick={() => console.log("Corporate Therapeutic Services booked")}
//           />
//         </div>

//         <div className="col-span-1 w-full h-full md:flex md:justify-between text-left">
//           <ServiceCard
//             title="Community Therapeutic Services"
//             description="Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity."
//             buttonText="Contact us"
//             onButtonClick={() => console.log("Community Therapeutic Services booked")}
//           />
//         </div>
//         <div className="col-span-1 grid-rows-2"></div>
//       </div>
//     </div>
//   )
// }

// export default Consultations
import './index.css'
import ServiceAnimatedCrad from './ServiceAnimatedCard'
import ServiceCard from './ServiceCard';
function Consultations() {

  return (
    <>
      <div className='gap-4 grid grid-cols-1 md:grid-cols-3 justify-items-center'>
        <ServiceAnimatedCrad
          sectionId="clinic"
          // image='/public/images/psychological.png'
          title="Clinic Counseling"
          description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, & Personalized Dietary Education, Blood Lipid Profile (Cholesterol, HDL, LDL, Triglyceride) & Blood Glucose."
        />
        <ServiceAnimatedCrad
          sectionId="in-house"
          image='/public/images/psychological.png'
          title="In-House Consultation"
          description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, Measurements, Personalized Dietary Education, & Labs, including Lipid profile (Cholesterol HDL, LDL, & Triglyceride) & Blood Glucose."
        />
        <ServiceAnimatedCrad
          sectionId="online"
          image='/public/images/psychological.png'
          title="Online Counseling"
          description="Therapeutic Counseling, Medical Dietary Assessment, Customized Meal Plan, & Personalized Dietary Education."
        />

        <ServiceAnimatedCrad
          sectionId="corporate"
          image='/public/images/psychological.png'
          title="Corporate Therapeutic Services"
          description="Specific to the workplace, Stay Safe notes that healthy eating increases productivity, decreases the number of sick days, increases happiness and improves employees' overall performance."
        />
        {/* <div></div> */}
        <ServiceAnimatedCrad
          sectionId="comunity"
          image='/public/images/psychological.png'
          title="Community Therapeutic Services"
          description="Nutritional well-being is a prerequisite for full social, mental & physical potential of a population so that all people can lead full, productive lives & contribute to the development of the community with dignity.."
        />
      </div>
    </>
  )


}

export default Consultations