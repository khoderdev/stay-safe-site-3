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

// // Custom Tooltip Component
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const deaths = payload[0].value;
//     return (
//       <div
//         className={`custom-tooltip p-2 rounded shadow-lg ${
//           document.body.classList.contains("dark") ? "bg-dark text-white-bg" : "bg-white-bg text-black"
//         }`}
//       >
//         <h4 className="label">{label}</h4>
//         <p className="desc">{`Deaths: ${deaths} Million`}</p>
//       </div>
//     );
//   }

//   return null;
// };

// const BarCharts = () => {
//   return (
//     <div className="chart-container w-full flex flex-col p-8">
//       <div className="rounded-lg shadow-lg">
//         <div className="flex flex-wrap md:flex-nowrap w-full">
//           <div className="flex flex-wrap md:flex-nowrap w-full">
//             <ResponsiveContainer width="100%" height={400}>
//               <BarChart data={data}>
//                 <XAxis dataKey="name" interval={0} tick={false} stroke="none" />
//                 <YAxis stroke="none" />
//                 <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
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

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const deaths = payload[0].value;
    return (
      <div
        className={`custom-tooltip p-2 rounded shadow-lg ${
          document.body.classList.contains("dark")
            ? "bg-dark text-white-bg"
            : "bg-white-bg text-black"
        }`}
      >
        <h4 className="label">{label}</h4>
        <p className="desc">{`Deaths: ${deaths} Million`}</p>
      </div>
    );
  }

  return null;
};

const BarCharts = () => {
  return (
    <div className="chart-container w-full h-full flex flex-col p-8">
      <div className="rounded-lg shadow-lg">
        <div className="flex flex-wrap md:flex-nowrap w-full">
          <div className="flex flex-wrap md:flex-nowrap w-full">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <XAxis dataKey="name" interval={0} tick={false} stroke="none" />
                <YAxis stroke="none" />
                <Tooltip content={<CustomTooltip />} />
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
    </div>
  );
};

export default BarCharts;
