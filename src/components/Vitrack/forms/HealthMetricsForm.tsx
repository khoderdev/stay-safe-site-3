import React, { useRef, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import InputField from '../inputs/InputField';
import BloodPressureInput from '../inputs/BloodPressureInput';
import {
  temperatureAtom,
  heartRateAtom,
  respiratoryRateAtom,
  leftHandOxygenAtom,
  rightHandOxygenAtom,
  symptomsAtom,
  painScaleAtom,
  bloodPressureSetsAtom,
  activeUnitAtom,
  showModalAtom,
  currentSetIdAtom,
  timerAtom,
  bothHandsResultsAverageAtom,
} from '../../../atoms/store';
import { getWarnings, temperatureWarning } from '../conditions';
import TemperatureWheel from '../inputs/TemperatureWheel';
import NoScrollContainer from '../TemperatureWheelContainer';
import { celsiusToFahrenheitMapping } from '../data';

const HealthMetricsForm = () => {
  const [temperature, setTemperature] = useAtom(temperatureAtom);
  const [heartRate, setHeartRate] = useAtom(heartRateAtom);
  const [respiratoryRate, setRespiratoryRate] = useAtom(respiratoryRateAtom);
  const [leftHandOxygen, setLeftHandOxygen] = useAtom(leftHandOxygenAtom);
  const [rightHandOxygen, setRightHandOxygen] = useAtom(rightHandOxygenAtom);
  const [symptoms] = useAtom(symptomsAtom);
  const [painScale, setPainScale] = useAtom(painScaleAtom);
  const [bloodPressureSets, setBloodPressureSets] = useAtom(bloodPressureSetsAtom);
  const [activeUnit, setActiveUnit] = useAtom(activeUnitAtom);
  const [showModal, setShowModal] = useAtom(showModalAtom);
  const [currentSetId, setCurrentSetId] = useAtom(currentSetIdAtom);
  const rightHandSystolicRef = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useAtom(timerAtom);
  const [bothHandsResultsAverage, setBothHandsResultsAverage] = useAtom(bothHandsResultsAverageAtom);

  const [showLeftHandWarnings, setShowLeftHandWarnings] = useState(false);
  const [showAverageWarnings, setShowAverageWarnings] = useState(false);

  useEffect(() => {
    if (bloodPressureSets.length > 0) {
      setCurrentSetId(bloodPressureSets[0].id);
    }
  }, [bloodPressureSets]);

  const handleTemperatureChange = (value: string) => {
    const [numericValue, unit] = value.split(' ');
    setTemperature(`${numericValue} °${activeUnit}`);
  };

  const tempWarning = temperatureWarning(temperature, symptoms);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    switch (name) {
      case 'heartRate':
        setHeartRate(value);
        break;
      case 'respiratoryRate':
        setRespiratoryRate(value);
        break;
      case 'leftHandOxygen':
        setLeftHandOxygen(value);
        break;
      case 'rightHandOxygen':
        setRightHandOxygen(value);
        break;
      case 'painScale':
        setPainScale(value);
        break;
      default:
        break;
    }
  };

  const handleDynamicChange = (id: number, hand: string, name: string, value: string) => {
    setBloodPressureSets((prevSets) =>
      prevSets.map((set) =>
        set.id === id
          ? {
            ...set,
            [hand]: { ...set[hand], [name]: value },
          }
          : set
      )
    );

    const currentSet = bloodPressureSets.find((set) => set.id === currentSetId);
    if (currentSet) {
      const leftSystolic = parseFloat(currentSet.leftHand.systolic) || 0;
      const leftDiastolic = parseFloat(currentSet.leftHand.diastolic) || 0;
      const rightSystolic = parseFloat(currentSet.rightHand.systolic) || 0;
      const rightDiastolic = parseFloat(currentSet.rightHand.diastolic) || 0;

      const bothHandsSystolicResultsAverage = (leftSystolic + rightSystolic) / 2 + 0.5;
      const bothHandsDiastolicResultsAverage = (leftDiastolic + rightDiastolic) / 2;

      setBothHandsResultsAverage({
        systolic: bothHandsSystolicResultsAverage,
        diastolic: bothHandsDiastolicResultsAverage,
      });
    }
  };

  const addBloodPressureSet = () => {
    const newSet = {
      id: bloodPressureSets.length + 1,
      isDefault: false,
      leftHand: { systolic: '', diastolic: '' },
      rightHand: { systolic: '', diastolic: '' },
    };
    setBloodPressureSets([...bloodPressureSets, newSet]);
    setCurrentSetId(newSet.id);
  };

  const removeBloodPressureSet = (id: number) => {
    setBloodPressureSets(bloodPressureSets.filter((set) => set.id !== id));
  };

  const calculateWarnings = (systolic: number, diastolic: number, type: 'left' | 'right' | 'average') => {
    return getWarnings({
      temperature,
      systolicBP: systolic,
      diastolicBP: diastolic,
      heartRate,
      respiratoryRate,
      spO2: leftHandOxygen,
      symptoms,
    }).filter((warning) => warning.type === 'bloodPressure')
      .map((warning) => ({
        ...warning,
        type,
      }));
  };

  const handleGetResult = () => {
    const leftHandHasValues = bloodPressureSets.some(
      (set) => set.leftHand.systolic && set.leftHand.diastolic
    );
    const rightHandHasValues = bloodPressureSets.some(
      (set) => set.rightHand.systolic && set.rightHand.diastolic
    );

    if (leftHandHasValues && !rightHandHasValues) {
      setShowModal(true);
    } else if (leftHandHasValues && rightHandHasValues) {
      const currentSet = bloodPressureSets.find((set) => set.id === currentSetId);
      if (currentSet) {
        const leftSystolic = parseFloat(currentSet.leftHand.systolic) || 0;
        const leftDiastolic = parseFloat(currentSet.leftHand.diastolic) || 0;
        const rightSystolic = parseFloat(currentSet.rightHand.systolic) || 0;
        const rightDiastolic = parseFloat(currentSet.rightHand.diastolic) || 0;

        const bothHandsSystolicResultsAverage = ((leftSystolic + rightSystolic) / 2).toFixed(1);
        const bothHandsDiastolicResultsAverage = ((leftDiastolic + rightDiastolic) / 2).toFixed(1);

        setBothHandsResultsAverage({
          systolic: parseFloat(bothHandsSystolicResultsAverage),
          diastolic: parseFloat(bothHandsDiastolicResultsAverage),
        });

        setShowAverageWarnings(true);
        setShowLeftHandWarnings(false);
      }
    } else if (leftHandHasValues) {
      setShowLeftHandWarnings(true);
      setShowAverageWarnings(false);
    }
  };

  const handleModalYes = () => {
    setShowModal(false);
    setShowLeftHandWarnings(true);
  };

  const handleModalMeasureSecondHand = () => {
    setShowModal(false);
    if (rightHandSystolicRef.current) {
      rightHandSystolicRef.current.focus();
    }
  };

  return (
    <div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white-bg dark:bg-dark p-6 rounded-lg shadow-lg max-w-sm">
            <p className="text-lg font-semibold text-pink text-center">
              To ensure accurate results, measure blood pressure in both arms. Are you sure you want to proceed?
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={handleModalYes}
                className="px-4 py-2 bg-gray-500 text-white-whites rounded hover:bg-gray-600"
              >
                Yes
              </button>
              <button
                onClick={handleModalMeasureSecondHand}
                className="px-4 py-2 bg-pink text-white-whites rounded hover:bg-rose-500"
              >
                Measure Second Arm
              </button>
            </div>
          </div>
        </div>
      )}

      <NoScrollContainer>
        <div className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white-bg2 dark:!bg-[#000] rounded-xl min-h-[400px] overflow-hidden">
          <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-50">
            Oral Temperature
          </h1>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setActiveUnit('C')}
              className={`px-4 py-2 font-semibold ${activeUnit === 'C'
                ? 'bg-pink text-gray-50 shadow-lg transform scale-110 duration-100'
                : 'bg-gray-200'
                }`}
            >
              °C
            </button>
            <button
              onClick={() => setActiveUnit('F')}
              className={`px-4 py-2 font-semibold ${activeUnit === 'F'
                ? 'bg-pink text-gray-50 shadow-lg transform scale-110 duration-100'
                : 'bg-gray-200'
                }`}
            >
              °F
            </button>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <TemperatureWheel
              min={35.0}
              max={39.0}
              step={0.1}
              defaultValue={
                activeUnit === 'C'
                  ? temperature
                  : celsiusToFahrenheitMapping[temperature.split(' ')[0]] || '98.6 °F'
              }
              onChange={handleTemperatureChange}
              className="bg-[#fff] dark:bg-black !h-72 !py-9 rounded-xl shadow-inner"
              formatValue={(value) =>
                value === (activeUnit === 'C' ? '35.0' : '95.0')
                  ? `${value} and Below`
                  : value === (activeUnit === 'C' ? '39.0' : '104.0')
                    ? `${value} and Above`
                    : value
              }
              unit={activeUnit}
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
      </NoScrollContainer>

      <div className='border-2 rounded-lg p-2 space-y-2 border-[#e6e6e6] dark:border-black'>
        <p className='text-center font-semibold dark:text-white-whites'>
          Blood Pressure
        </p>
        {bloodPressureSets.map((set) => {
          const leftHandWarnings = calculateWarnings(
            parseFloat(set.leftHand.systolic),
            parseFloat(set.leftHand.diastolic),
            'left'
          );
          const rightHandWarnings = calculateWarnings(
            parseFloat(set.rightHand.systolic),
            parseFloat(set.rightHand.diastolic),
            'right'
          );

          const hasLeftHandValues = set.leftHand.systolic && set.leftHand.diastolic;
          const hasRightHandValues = set.rightHand.systolic && set.rightHand.diastolic;
          const averageWarnings =
            hasLeftHandValues && hasRightHandValues
              ? calculateWarnings(
                bothHandsResultsAverage.systolic || 0,
                bothHandsResultsAverage.diastolic || 0,
                'average'
              )
              : [];

          return (
            <div
              key={set.id}
              className='space-y-4 relative border border-[#e6e6e6] dark:border-black p-4 rounded'
            >
              <button
                type='button'
                className='absolute font-bold text-3xl hover:scale-125 duration-200 top-2 right-2 text-red-500'
                onClick={() => removeBloodPressureSet(set.id)}
              >
                -
              </button>
              <div className='grid grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
                <BloodPressureInput
                  hand='Left'
                  systolic={set.leftHand.systolic}
                  diastolic={set.leftHand.diastolic}
                  onChange={(e: { target: { name: string; value: string; }; }) =>
                    handleDynamicChange(
                      set.id,
                      'leftHand',
                      e.target.name,
                      e.target.value
                    )
                  }
                />
                <BloodPressureInput
                  hand='Right'
                  systolic={set.rightHand.systolic}
                  diastolic={set.rightHand.diastolic}
                  onChange={(e: { target: { name: string; value: string; }; }) =>
                    handleDynamicChange(
                      set.id,
                      'rightHand',
                      e.target.name,
                      e.target.value
                    )
                  }
                  ref={rightHandSystolicRef}
                />
              </div>

              {showLeftHandWarnings && leftHandWarnings.length > 0 && (
                <div className="bg-gray-200 dark:bg-black ring ring-gray-200 dark:ring-black shadow-lg dark:text-gray-50 p-3 rounded">
                  <h3 className="font-bold mb-2">Left Hand Blood Pressure Warnings:</h3>
                  <ul className="space-y-2">
                    {leftHandWarnings.map((warning, index) => (
                      <li key={index} className={warning.color ? `text-${warning.color}-500` : ''}>
                        {warning.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showAverageWarnings && averageWarnings.length > 0 && (
                <div className="bg-gray-200 dark:bg-black ring ring-gray-200 dark:ring-black shadow-lg dark:text-gray-50 p-3 rounded">
                  <h3 className="font-bold mb-2">Average Blood Pressure Warnings:</h3>
                  <ul className="space-y-2">
                    {averageWarnings.map((warning, index) => (
                      <li key={index} className={warning.color ? `text-${warning.color}-500` : ''}>
                        {warning.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}

        <div className='flex space-x-4'>
          <button
            type='button'
            onClick={addBloodPressureSet}
            className='flex items-center font-bold text-3xl text-pink hover:scale-125 duration-200'
          >
            +
          </button>
        </div>

        <button
          type='button'
          onClick={handleGetResult}
          className='px-4 py-2 bg-pink text-white-whites rounded hover:bg-rose-500'
        >
          Get Result
        </button>
      </div>

      <InputField
        label='Heart Rate (bpm)'
        name='heartRate'
        value={heartRate || ''}
        onChange={handleChange}
        type='number'
      />
      <InputField
        label='Respiratory Rate (breaths/min)'
        name='respiratoryRate'
        value={respiratoryRate || ''}
        onChange={handleChange}
        type='number'
      />
      <div className='grid grid-cols-2 gap-x-14'>
        <InputField
          label='Left Hand Oxygen Saturation (%)'
          name='leftHandOxygen'
          value={leftHandOxygen || ''}
          onChange={handleChange}
          type='number'
          min={0}
          max={100}
        />
        <InputField
          label='Right Hand Oxygen Saturation (%)'
          name='rightHandOxygen'
          value={rightHandOxygen || ''}
          onChange={handleChange}
          type='number'
          min={0}
          max={100}
        />
      </div>

      <div className='col-span-full mt-6'>
        <label className='block text-sm dark:text-white-bg2'>Pain Scale</label>
        <input
          type='range'
          name='painScale'
          min='0'
          max='10'
          value={painScale || 0}
          onChange={handleChange}
          className='mt-1 w-full cursor-pointer'
        />
        <span className='block text-center dark:text-white-bg2'>
          {painScale}/10
        </span>
      </div>
    </div>
  );
};

export default HealthMetricsForm;


// // /////////////////////////////////////
// // /////////////////////////////////////
// // /////////////////////////////////////
// // /////////////////////////////////////



// import React, { useRef, useState, useEffect } from 'react';
// import { useAtom } from 'jotai';
// import InputField from '../inputs/InputField';
// import BloodPressureInput from '../inputs/BloodPressureInput';
// import {
//   temperatureAtom,
//   heartRateAtom,
//   respiratoryRateAtom,
//   leftHandOxygenAtom,
//   rightHandOxygenAtom,
//   symptomsAtom,
//   painScaleAtom,
//   bloodPressureSetsAtom,
//   activeUnitAtom,
//   showModalAtom,
//   currentSetIdAtom,
//   timerAtom,
//   bothHandsResultsAverageAtom,
// } from '../../../atoms/store';
// import { getWarnings, temperatureWarning } from '../conditions';
// import TemperatureWheel from '../inputs/TemperatureWheel';
// import NoScrollContainer from '../TemperatureWheelContainer';
// import { celsiusToFahrenheitMapping } from '../data';

// const HealthMetricsForm = () => {
//   const [temperature, setTemperature] = useAtom(temperatureAtom);
//   const [heartRate, setHeartRate] = useAtom(heartRateAtom);
//   const [respiratoryRate, setRespiratoryRate] = useAtom(respiratoryRateAtom);
//   const [leftHandOxygen, setLeftHandOxygen] = useAtom(leftHandOxygenAtom);
//   const [rightHandOxygen, setRightHandOxygen] = useAtom(rightHandOxygenAtom);
//   const [symptoms] = useAtom(symptomsAtom);
//   const [painScale, setPainScale] = useAtom(painScaleAtom);
//   const [bloodPressureSets, setBloodPressureSets] = useAtom(bloodPressureSetsAtom);
//   const [activeUnit, setActiveUnit] = useAtom(activeUnitAtom);
//   const [showModal, setShowModal] = useAtom(showModalAtom);
//   const [currentSetId, setCurrentSetId] = useAtom(currentSetIdAtom);
//   const rightHandSystolicRef = useRef<HTMLInputElement>(null);
//   const [timer, setTimer] = useAtom(timerAtom);
//   const [bothHandsResultsAverage, setBothHandsResultsAverage] = useAtom(bothHandsResultsAverageAtom);

//   const [showLeftHandWarnings, setShowLeftHandWarnings] = useState(false);
//   const [showAverageWarnings, setShowAverageWarnings] = useState(false);

//   useEffect(() => {
//     if (bloodPressureSets.length > 0) {
//       setCurrentSetId(bloodPressureSets[0].id);
//     }
//   }, [bloodPressureSets]);

//   const handleTemperatureChange = (value: string) => {
//     const [numericValue, unit] = value.split(' ');
//     setTemperature(`${numericValue} °${activeUnit}`);
//   };

//   const tempWarning = temperatureWarning(temperature, symptoms);

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'heartRate':
//         setHeartRate(value);
//         break;
//       case 'respiratoryRate':
//         setRespiratoryRate(value);
//         break;
//       case 'leftHandOxygen':
//         setLeftHandOxygen(value);
//         break;
//       case 'rightHandOxygen':
//         setRightHandOxygen(value);
//         break;
//       case 'painScale':
//         setPainScale(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleDynamicChange = (id: number, hand: string, name: string, value: string) => {
//     setBloodPressureSets((prevSets) =>
//       prevSets.map((set) =>
//         set.id === id
//           ? {
//             ...set,
//             [hand]: { ...set[hand], [name]: value },
//           }
//           : set
//       )
//     );

//     const currentSet = bloodPressureSets.find((set) => set.id === currentSetId);
//     if (currentSet) {
//       const leftSystolic = parseFloat(currentSet.leftHand.systolic) || 0;
//       const leftDiastolic = parseFloat(currentSet.leftHand.diastolic) || 0;
//       const rightSystolic = parseFloat(currentSet.rightHand.systolic) || 0;
//       const rightDiastolic = parseFloat(currentSet.rightHand.diastolic) || 0;

//       const bothHandsSystolicResultsAverage = (leftSystolic + rightSystolic) / 2 + 0.5;
//       const bothHandsDiastolicResultsAverage = (leftDiastolic + rightDiastolic) / 2;

//       setBothHandsResultsAverage({
//         systolic: bothHandsSystolicResultsAverage,
//         diastolic: bothHandsDiastolicResultsAverage,
//       });
//     }
//   };

//   const addBloodPressureSet = () => {
//     const newSet = {
//       id: bloodPressureSets.length + 1,
//       isDefault: false,
//       leftHand: { systolic: '', diastolic: '' },
//       rightHand: { systolic: '', diastolic: '' },
//     };
//     setBloodPressureSets([...bloodPressureSets, newSet]);
//     setCurrentSetId(newSet.id);
//   };

//   const removeBloodPressureSet = (id: number) => {
//     setBloodPressureSets(bloodPressureSets.filter((set) => set.id !== id));
//   };

//   const calculateWarnings = (systolic: number, diastolic: number, type: 'left' | 'right' | 'average') => {
//     return getWarnings({
//       temperature,
//       systolicBP: systolic,
//       diastolicBP: diastolic,
//       heartRate,
//       respiratoryRate,
//       spO2: leftHandOxygen,
//       symptoms,
//     }).filter((warning) => warning.type === 'bloodPressure')
//       .map((warning) => ({
//         ...warning,
//         type,
//       }));
//   };

//   const handleGetResult = () => {
//     const leftHandHasValues = bloodPressureSets.some(
//       (set) => set.leftHand.systolic && set.leftHand.diastolic
//     );
//     const rightHandHasValues = bloodPressureSets.some(
//       (set) => set.rightHand.systolic && set.rightHand.diastolic
//     );

//     if (leftHandHasValues && !rightHandHasValues) {
//       setShowModal(true);
//     } else if (leftHandHasValues && rightHandHasValues) {
//       const currentSet = bloodPressureSets.find((set) => set.id === currentSetId);
//       if (currentSet) {
//         const leftSystolic = parseFloat(currentSet.leftHand.systolic) || 0;
//         const leftDiastolic = parseFloat(currentSet.leftHand.diastolic) || 0;
//         const rightSystolic = parseFloat(currentSet.rightHand.systolic) || 0;
//         const rightDiastolic = parseFloat(currentSet.rightHand.diastolic) || 0;

//         const bothHandsSystolicResultsAverage = ((leftSystolic + rightSystolic) / 2).toFixed(1);
//         const bothHandsDiastolicResultsAverage = ((leftDiastolic + rightDiastolic) / 2).toFixed(1);

//         setBothHandsResultsAverage({
//           systolic: parseFloat(bothHandsSystolicResultsAverage),
//           diastolic: parseFloat(bothHandsDiastolicResultsAverage),
//         });

//         setShowAverageWarnings(true);
//         setShowLeftHandWarnings(false);
//       }
//     } else if (leftHandHasValues) {
//       setShowLeftHandWarnings(true);
//       setShowAverageWarnings(false);
//     }
//   };

//   const handleModalYes = () => {
//     setShowModal(false);
//     setShowLeftHandWarnings(true);
//   };

//   const handleModalMeasureSecondHand = () => {
//     setShowModal(false);
//     if (rightHandSystolicRef.current) {
//       rightHandSystolicRef.current.focus();
//     }
//   };

//   return (
//     <div className='p-3 sm:p-7 rounded-lg !bg-white-bg2 dark:!bg-[#000] space-y-6'>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white-bg dark:bg-dark p-6 rounded-lg shadow-lg max-w-sm">
//             <p className="text-lg font-semibold text-pink text-center">
//               To ensure accurate results, measure blood pressure in both arms. Are you sure you want to proceed?
//             </p>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button
//                 onClick={handleModalYes}
//                 className="px-4 py-2 bg-gray-500 text-white-whites rounded hover:bg-gray-600"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={handleModalMeasureSecondHand}
//                 className="px-4 py-2 bg-pink text-white-whites rounded hover:bg-rose-500"
//               >
//                 Measure Second Arm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <NoScrollContainer>
//         <div className="flex flex-col w-full max-w-sm mx-auto p-6 bg-white-bg2 dark:!bg-[#000] rounded-xl min-h-[400px] overflow-hidden">
//           <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-50">
//             Oral Temperature
//           </h1>
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => setActiveUnit('C')}
//               className={`px-4 py-2 font-semibold ${activeUnit === 'C'
//                 ? 'bg-pink text-gray-50 shadow-lg transform scale-110 duration-100'
//                 : 'bg-gray-200'
//                 }`}
//             >
//               °C
//             </button>
//             <button
//               onClick={() => setActiveUnit('F')}
//               className={`px-4 py-2 font-semibold ${activeUnit === 'F'
//                 ? 'bg-pink text-gray-50 shadow-lg transform scale-110 duration-100'
//                 : 'bg-gray-200'
//                 }`}
//             >
//               °F
//             </button>
//           </div>
//           <div className="flex-grow flex items-center justify-center">
//             <TemperatureWheel
//               min={35.0}
//               max={39.0}
//               step={0.1}
//               defaultValue={
//                 activeUnit === 'C'
//                   ? temperature
//                   : celsiusToFahrenheitMapping[temperature.split(' ')[0]] || '98.6 °F'
//               }
//               onChange={handleTemperatureChange}
//               className="bg-[#fff] dark:bg-black !h-72 !py-9 rounded-xl shadow-inner"
//               formatValue={(value) =>
//                 value === (activeUnit === 'C' ? '35.0' : '95.0')
//                   ? `${value} and Below`
//                   : value === (activeUnit === 'C' ? '39.0' : '104.0')
//                     ? `${value} and Above`
//                     : value
//               }
//               unit={activeUnit}
//             />
//           </div>
//           {tempWarning && (
//             <div
//               className={`w-full p-3 rounded font-medium text-md text-gray-50 ${tempWarning.color === 'green'
//                 ? 'bg-green-500'
//                 : tempWarning.color === 'yellow'
//                   ? 'bg-yellow-500'
//                   : tempWarning.color === 'orange'
//                     ? 'bg-orange-500'
//                     : 'bg-red-500'
//                 }`}
//             >
//               {tempWarning.message}
//             </div>
//           )}
//         </div>
//       </NoScrollContainer>

//       <div className='border-2 rounded-lg p-2 space-y-2 border-[#e6e6e6] dark:border-black'>
//         <p className='text-center font-semibold dark:text-white-whites'>
//           Blood Pressure
//         </p>
//         {bloodPressureSets.map((set) => {
//           const leftHandWarnings = calculateWarnings(
//             parseFloat(set.leftHand.systolic),
//             parseFloat(set.leftHand.diastolic),
//             'left'
//           );
//           const rightHandWarnings = calculateWarnings(
//             parseFloat(set.rightHand.systolic),
//             parseFloat(set.rightHand.diastolic),
//             'right'
//           );

//           const hasLeftHandValues = set.leftHand.systolic && set.leftHand.diastolic;
//           const hasRightHandValues = set.rightHand.systolic && set.rightHand.diastolic;
//           const averageWarnings =
//             hasLeftHandValues && hasRightHandValues
//               ? calculateWarnings(
//                 bothHandsResultsAverage.systolic || 0,
//                 bothHandsResultsAverage.diastolic || 0,
//                 'average'
//               )
//               : [];

//           return (
//             <div
//               key={set.id}
//               className='space-y-4 relative border border-[#e6e6e6] dark:border-black p-4 rounded'
//             >
//               <button
//                 type='button'
//                 className='absolute font-bold text-3xl hover:scale-125 duration-200 top-2 right-2 text-red-500'
//                 onClick={() => removeBloodPressureSet(set.id)}
//               >
//                 -
//               </button>
//               <div className='grid grid-cols-1 sm:flex-col sm:flex sm:space-x-0 sm:space-y-3 sm:items-center md:flex md:flex-row md:space-x-8 md:space-y-0 md:items-center md:justify-center'>
//                 <BloodPressureInput
//                   hand='Left'
//                   systolic={set.leftHand.systolic}
//                   diastolic={set.leftHand.diastolic}
//                   onChange={(e: { target: { name: string; value: string; }; }) =>
//                     handleDynamicChange(
//                       set.id,
//                       'leftHand',
//                       e.target.name,
//                       e.target.value
//                     )
//                   }
//                 />
//                 <BloodPressureInput
//                   hand='Right'
//                   systolic={set.rightHand.systolic}
//                   diastolic={set.rightHand.diastolic}
//                   onChange={(e: { target: { name: string; value: string; }; }) =>
//                     handleDynamicChange(
//                       set.id,
//                       'rightHand',
//                       e.target.name,
//                       e.target.value
//                     )
//                   }
//                   ref={rightHandSystolicRef}
//                 />
//               </div>

//               {showLeftHandWarnings && leftHandWarnings.length > 0 && (
//                 <div className="bg-gray-200 dark:bg-black ring ring-gray-200 dark:ring-black shadow-lg dark:text-gray-50 p-3 rounded">
//                   <h3 className="font-bold mb-2">Left Hand Blood Pressure Warnings:</h3>
//                   <ul className="space-y-2">
//                     {leftHandWarnings.map((warning, index) => (
//                       <li key={index} className={warning.color ? `text-${warning.color}-500` : ''}>
//                         {warning.text}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {showAverageWarnings && averageWarnings.length > 0 && (
//                 <div className="bg-gray-200 dark:bg-black ring ring-gray-200 dark:ring-black shadow-lg dark:text-gray-50 p-3 rounded">
//                   <h3 className="font-bold mb-2">Average Blood Pressure Warnings:</h3>
//                   <ul className="space-y-2">
//                     {averageWarnings.map((warning, index) => (
//                       <li key={index} className={warning.color ? `text-${warning.color}-500` : ''}>
//                         {warning.text}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         <div className='flex space-x-4'>
//           <button
//             type='button'
//             onClick={addBloodPressureSet}
//             className='flex items-center font-bold text-3xl text-pink hover:scale-125 duration-200'
//           >
//             +
//           </button>
//         </div>

//         <button
//           type='button'
//           onClick={handleGetResult}
//           className='px-4 py-2 bg-pink text-white-whites rounded hover:bg-rose-500'
//         >
//           Get Result
//         </button>
//       </div>

//       <InputField
//         label='Heart Rate (bpm)'
//         name='heartRate'
//         value={heartRate || ''}
//         onChange={handleChange}
//         type='number'
//       />
//       <InputField
//         label='Respiratory Rate (breaths/min)'
//         name='respiratoryRate'
//         value={respiratoryRate || ''}
//         onChange={handleChange}
//         type='number'
//       />
//       <div className='grid grid-cols-2 gap-x-14'>
//         <InputField
//           label='Left Hand Oxygen Saturation (%)'
//           name='leftHandOxygen'
//           value={leftHandOxygen || ''}
//           onChange={handleChange}
//           type='number'
//           min={0}
//           max={100}
//         />
//         <InputField
//           label='Right Hand Oxygen Saturation (%)'
//           name='rightHandOxygen'
//           value={rightHandOxygen || ''}
//           onChange={handleChange}
//           type='number'
//           min={0}
//           max={100}
//         />
//       </div>

//       <div className='col-span-full mt-6'>
//         <label className='block text-sm dark:text-white-bg2'>Pain Scale</label>
//         <input
//           type='range'
//           name='painScale'
//           min='0'
//           max='10'
//           value={painScale || 0}
//           onChange={handleChange}
//           className='mt-1 w-full cursor-pointer'
//         />
//         <span className='block text-center dark:text-white-bg2'>
//           {painScale}/10
//         </span>
//       </div>
//     </div>
//   );
// };

// export default HealthMetricsForm;