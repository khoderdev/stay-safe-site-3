// import React, { useEffect } from 'react';
// import { useAtom } from 'jotai';
// import { symptomsList } from '../data';
// import { temperatureAtom, symptomsAtom } from '../../../atoms/store';
// import { getWarnings } from '../conditions';

// function Symptoms() {
// 	const [temperature, setTemperature] = useAtom(temperatureAtom);
// 	const [symptoms, setSymptoms] = useAtom(symptomsAtom);

// 	const getHealthWarnings = () => {
// 		const warnings = getWarnings({
// 			temperature,
// 			symptoms,
// 		});

// 		return warnings;
// 	};

// 	const handleSymptomsChange = (e) => {
// 		const { value, checked } = e.target;
// 		setSymptoms((prevSymptoms) =>
// 			checked
// 				? [...prevSymptoms, value]
// 				: prevSymptoms.filter((symptom) => symptom !== value)
// 		);
// 	};

// 	const warnings = getHealthWarnings();

// 	// Use useEffect to monitor state changes and log warnings
// 	useEffect(() => {
// 		console.log('Temperature or Symptoms changed:', { temperature, symptoms });
// 		console.log('Warnings:', warnings);
// 	}, [temperature, symptoms]);

// 	return (
// 		<div className='p-6 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
// 			{/* Symptoms */}
// 			<div className='col-span-full'>
// 				<h2 className='text-xl font-semibold dark:text-white-bg2 mb-4'>
// 					Symptoms
// 				</h2>
// 				<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
// 					{symptomsList.map((symptom, index) => (
// 						<label key={index} className='flex items-center space-x-2'>
// 							<input
// 								type='checkbox'
// 								value={symptom || ''}
// 								onChange={handleSymptomsChange}
// 								checked={symptoms.includes(symptom)}
// 								className='form-checkbox'
// 							/>
// 							<span className='dark:text-white-bg2'>{symptom}</span>
// 						</label>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Symptoms;



import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { symptomsList } from '../data';
import { temperatureAtom, symptomsAtom } from '../../../atoms/store';
import { getWarnings } from '../conditions';

function Symptoms() {
  const [temperature] = useAtom(temperatureAtom);
  const [symptoms, setSymptoms] = useAtom(symptomsAtom);

  const getHealthWarnings = () => {
    const warnings = getWarnings({
      temperature,
      symptoms,
    });
    return warnings;
  };

  const handleSymptomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSymptoms((prevSymptoms) =>
      checked
        ? [...prevSymptoms, value]
        : prevSymptoms.filter((symptom) => symptom !== value)
    );
  };

  const warnings = getHealthWarnings();

  // Use useEffect to monitor state changes and log warnings
  useEffect(() => {
    console.log('Temperature or Symptoms changed:', { temperature, symptoms });
    console.log('Warnings:', warnings);
  }, [temperature, symptoms]);

  return (
    <div className='p-6 sm:p-7 rounded-lg bg-white-bg2 dark:bg-[#000] space-y-6 shadow-lg'>
      {/* Symptoms Section */}
      <div className='col-span-full'>
        <h2 className='text-2xl font-bold dark:text-gray-50 mb-6'>Symptoms</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {symptomsList.map((symptom, index) => (
            <label
              key={index}
              className='flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-dark cursor-pointer'
            >
              {/* Custom Checkbox */}
              <div className='relative flex items-center'>
                <input
                  type='checkbox'
                  value={symptom}
                  onChange={handleSymptomsChange}
                  checked={symptoms.includes(symptom)}
                  className='absolute opacity-0 h-0 w-0'
                />
                {/* Custom Checkbox Design */}
                <div
                  className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${
                    symptoms.includes(symptom)
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-white dark:bg-dark border-gray-400 dark:border-gray-600'
                  }`}
                >
                  {/* Checkmark Icon */}
                  {symptoms.includes(symptom) && (
                    <svg
                      className='w-3 h-3 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  )}
                </div>
              </div>
              {/* Symptom Text */}
              <span className='text-gray-800 dark:text-gray-200'>{symptom}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Symptoms;