import React, { useState } from 'react';
import TemperatureWheel from './TemperatureWheel';
import { temperatureWarning } from '../conditions';

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