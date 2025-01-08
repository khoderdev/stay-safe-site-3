// import React, { useState } from 'react';
// import TemperatureWheel from './TemperatureWheel';

// interface TemperatureTabsProps {
//   temperature: string;
//   setTemperature: (value: string) => void;
// }

// const TemperatureTabs: React.FC<TemperatureTabsProps> = ({
//   temperature,
//   setTemperature,
// }) => {
//   const [activeTab, setActiveTab] = useState('celsius');

//   const handleTemperatureChange = (value: string) => {
//     setTemperature(value); // Update the global state
//   };

//   const formatFahrenheit = (value: string) => {
//     const celsius = parseFloat(value);
//     const fahrenheit = (celsius * 9) / 5 + 32;
//     return `${fahrenheit.toFixed(1)} °F`;
//   };

//   return (
//     <div>
//       {/* Tab List */}
//       <div className="flex justify-center items-center mt-4">
//         <ul className="flex flex-wrap -mb-px text-sm font-medium text-center space-x-2" role="tablist">
//           <li className="" role="presentation">
//             <button
//               className={`inline-block p-2 border rounded-lg dark:text-gray-50 ${
//                 activeTab === 'celsius'
//                   ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
//                   : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
//               }`}
//               id="celsius-tab"
//               type="button"
//               role="tab"
//               aria-controls="celsius"
//               aria-selected={activeTab === 'celsius'}
//               onClick={() => setActiveTab('celsius')}
//             >
//               Celsius (°C)
//             </button>
//           </li>
//           <li className="me-2" role="presentation">
//             <button
//               className={`inline-block p-2 border rounded-lg dark:text-gray-50 ${
//                 activeTab === 'fahrenheit'
//                   ? 'text-blue-600 border-blue-600 dark:text-pink dark:border-pink'
//                   : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
//               }`}
//               id="fahrenheit-tab"
//               type="button"
//               role="tab"
//               aria-controls="fahrenheit"
//               aria-selected={activeTab === 'fahrenheit'}
//               onClick={() => setActiveTab('fahrenheit')}
//             >
//               Fahrenheit (°F)
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div id="default-tab-content">
//         {/* Celsius Tab */}
//         <div
//           className={`p-4 rounded-lg ${
//             activeTab === 'celsius' ? 'block' : 'hidden'
//           }`}
//           id="celsius"
//           role="tabpanel"
//           aria-labelledby="celsius-tab"
//         >
//           <TemperatureWheel
//             min={35.0}
//             max={39.0}
//             step={0.1}
//             defaultValue={temperature}
//             onChange={handleTemperatureChange}
//           />
//         </div>

//         {/* Fahrenheit Tab */}
//         <div
//           className={`p-4 rounded-lg ${
//             activeTab === 'fahrenheit' ? 'block' : 'hidden'
//           }`}
//           id="fahrenheit"
//           role="tabpanel"
//           aria-labelledby="fahrenheit-tab"
//         >
//           <TemperatureWheel
//             min={35.0}
//             max={39.0}
//             step={0.1}
//             defaultValue={temperature}
//             onChange={handleTemperatureChange}
//             formatValue={formatFahrenheit}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemperatureTabs;


import React, { useState } from 'react';
import TemperatureWheel from './TemperatureWheel';

const TemperatureTabs: React.FC = () => {
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [temperature, setTemperature] = useState('37.0');
  const [tempWarning, setTempWarning] = useState<{ color: string; message: string } | null>(null);

  const handleTemperatureChange = (value: string) => {
    setTemperature(value);
    const warning = temperatureWarning(value);
    setTempWarning(warning);
  };

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white-bg2 dark:!bg-[#000] rounded-xl min-h-[400px] overflow-hidden">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-50">
        Oral Temperature
      </h1>
      <div className="flex justify-center my-4">
        <button
          onClick={() => setUnit('C')}
          className={`px-4 py-2 ${unit === 'C' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          °C
        </button>
        <button
          onClick={() => setUnit('F')}
          className={`px-4 py-2 ${unit === 'F' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          °F
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <TemperatureWheel
          min={35.0}
          max={39.0}
          step={0.1}
          defaultValue={temperature}
          onChange={handleTemperatureChange}
          className="bg-[#fff] dark:bg-black !h-72 !py-9 rounded-xl shadow-inner"
          formatValue={(value) =>
            value === '35.0'
              ? '35 and Below'
              : value === '39.0'
                ? '39 and Above'
                : value
          }
          unit={unit}
        />
      </div>
      {tempWarning && (
        <div
          className={`w-full p-3 rounded font-medium text-md text-gray-50 ${tempWarning.color === 'green'
            ? 'bg-green-500'
            : tempWarning.color === 'yellow'
              ? 'bg-yellow-500'
              : tempWarning.color === 'orange'
                ? 'bg-orange-500'
                : 'bg-red-500'
            }`}
        >
          {tempWarning.message}
        </div>
      )}
    </div>
  );
};

export default TemperatureTabs;