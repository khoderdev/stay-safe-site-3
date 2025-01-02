// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Ischaemic Heart Disease", deaths: 9.1 },
//   { name: "COVID-19", deaths: 8.8 },
//   { name: "Stroke", deaths: 6.8 },
//   { name: "Chronic Obstructive Pulmonary Disease", deaths: 3.4 },
//   { name: "Lower Respiratory Infections", deaths: 2.5 },
//   { name: "Trachea, Bronchus, Lung Cancers", deaths: 1.9 },
//   { name: "Alzheimer Disease & other Dementias", deaths: 1.8 },
//   { name: "Diabetes Mellitus", deaths: 1.6 },
//   { name: "Kidney Diseases", deaths: 1.3 },
//   { name: "Tuberculosis", deaths: 1.25 },
// ];

// const BarCharts = () => {
//   return (
//     <div className="chart-container w-full flex flex-col p-8">
//       <div className="border rounded-lg p-4 ">
//         <div className="w-full md:w-2/3 flex items-center justify-center">
//           <h1 className="text-3xl !font-bold text-center md:text-left dark:text-white-bg2 mb-10">
//             Around 80% of the top 10 causes of death are preventable or
//             manageable through preventive measures and lifestyle changes
//           </h1>
//         </div>

//         <div className="flex flex-wrap md:flex-nowrap w-full">
//           <div className="flex flex-wrap md:flex-nowrap w-full">
//             {/* Fully responsive container */}
//             <ResponsiveContainer width="100%" height={400}>
//               <BarChart data={data}>
//                 <XAxis dataKey="name" interval={0} tick={false} stroke="none" />
//                 <YAxis stroke="none" />
//                 <Tooltip
//                   formatter={(value) => `${value} M`}
//                   labelFormatter={(label) => `Deaths from ${label}`}
//                 />
//                 <Bar
//                   dataKey="deaths"
//                   fill="#e55e72"
//                   barSize={55}
//                   radius={[10, 10, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//       <div className="sm:w-1/2 place-self-center mt-8 text-center dark:text-white-bg2 p-4">
//         <p className="text-lg ">
//           We’re committed to supporting you in managing your health, no matter
//           where you are in your journey. We understand that living with disease
//           can be challenging, but we want you to know that you’re not alone. Our
//           team is here to provide you with personalized guidance, resources, and
//           support. Together, we can create a plan that helps you take control of
//           your health, learn more about your condition, prevent complications,
//           and improve your quality of life. Gain access to personalized support.
//           Get Support Now.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BarCharts;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ischaemic Heart Disease", deaths: 9.1 },
  { name: "COVID-19", deaths: 8.8 },
  { name: "Stroke", deaths: 6.8 },
  { name: "Chronic Obstructive Pulmonary Disease", deaths: 3.4 },
  { name: "Lower Respiratory Infections", deaths: 2.5 },
  { name: "Trachea, Bronchus, Lung Cancers", deaths: 1.9 },
  { name: "Alzheimer Disease & other Dementias", deaths: 1.8 },
  { name: "Diabetes Mellitus", deaths: 1.6 },
  { name: "Kidney Diseases", deaths: 1.3 },
  { name: "Tuberculosis", deaths: 1.25 },
];

const BarCharts = () => {
  return (
    <div className="chart-container w-full flex flex-col p-8">
      {/* First Section */}
      <div className=" rounded-lg p-4 mb-8 bg-white shadow-lg">
        {/* <div className="w-full md:w-2/3 flex items-center justify-center">
          <h1 className="text-3xl !font-bold text-center md:text-left dark:text-white-bg2 mb-10">
            Around 80% of the top 10 causes of death are preventable or
            manageable through preventive measures and lifestyle changes
          </h1>
        </div> */}

        <div className="flex flex-wrap md:flex-nowrap w-full">
          <div className="flex flex-wrap md:flex-nowrap w-full">
            {/* Fully responsive container */}
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <XAxis dataKey="name" interval={0} tick={false} stroke="none" />
                <YAxis stroke="none" />
                <Tooltip
                  formatter={(value) => `${value} M`}
                  labelFormatter={(label) => `Deaths from ${label}`}
                />
                <Bar
                  dataKey="deaths"
                  fill="#e55e72"
                  barSize={55}
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="border rounded-lg p-4 bg-white shadow-lg">
        <div className="sm:w-1/2 place-self-center text-center dark:text-white-bg2 p-4">
          <p className="text-lg">
            We’re committed to supporting you in managing your health, no matter
            where you are in your journey. We understand that living with
            disease can be challenging, but we want you to know that you’re not
            alone. Our team is here to provide you with personalized guidance,
            resources, and support. Together, we can create a plan that helps
            you take control of your health, learn more about your condition,
            prevent complications, and improve your quality of life. Gain access
            to personalized support. Get Support Now.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default BarCharts;
