import React from "react";
import { FormProps } from "../../utils/types"; 

const Form: React.FC<FormProps> = ({
  age,
  handleAgeChange,
  gender,
  handleGenderChange,
  smoker,
  handleSmokerChange,
  packsPerDay,
  handlePacksPerDayChange,
  yearsSmoked,
  handleYearsSmokedChange,
  isAdult,
  inputStyles,
  selectStyles,
  result,
}) => {
  const shouldDisableInputs = (age < 20 && age > 1) || (age > 75 && age < 101) || !isAdult;

  return (
    <div className="flex flex-col md:w-[50%] w-full p-4 rounded  bg-[#f0f0fe] dark:bg-black">
      <div className="grid grid-cols-2 text-left items-center md:grid-cols-1 gap-x-10 gap-y-4 md:pr-28">
        <div className="col-span-1 md:col-span-2 w-full md:flex md:justify-between text-left">
          <label className="text-lg md:text-[1.3rem]">Age</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            required
            className={`${inputStyles()} !py-[6px] !w-full md:!w-[50%] bg-white dark:!bg-[#000]`}
            aria-label="Age"
          />
        </div>

        <div className="col-span-1 md:col-span-2 w-full md:flex md:justify-between text-left">
          <label className="text-lg md:text-[1.3rem]">Gender</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            className={`${selectStyles()} !py-[5px] !w-full md:!w-[50%] bg-white dark:!bg-[#000]`}
            aria-label="Gender"
            disabled={shouldDisableInputs}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="col-span-2 flex w-full justify-between text-left items-center">
          <label className="text-lg md:text-[1.3rem] w-[60%] md:w-[40%]">Ever smoked?</label>
          <div className="flex items-center w-[50%] pl-1">
            <input
              type="checkbox"
              checked={smoker}
              onChange={handleSmokerChange}
              className="h-5 mt-1 w-5 cursor-pointer place-self-center"
              aria-label="Smoker"
              disabled={shouldDisableInputs}
            />
            <span className="ml-2 text-[1rem] mt-1">Yes</span>
          </div>
        </div>

        {smoker && (
          <>
            <div className="col-span-2 flex flex-row md:flex md:flex-col md:space-y-4 w-full mt-2">
              <div className="col-span-1 md:col-span-2 w-[60%] flex flex-col justify-end md:w-full md:flex md:flex-row md:justify-between md:items-center border-green-500">
                <label className="w-full md:w-[50%] flex flex-col text-[1rem] md:text-[1.3rem]">
                  Smoked Packs per day
                  <span className="text-[10px] md:text-[12px] font-light">(each pack equals 20 cigarettes)</span>
                </label>
                <input
                  type="number"
                  value={packsPerDay}
                  onChange={handlePacksPerDayChange}
                  required
                  className={`${inputStyles()} w-[77%] md:w-[50%] !py-[6px]`}
                  aria-label="Packs Per Day"
                  disabled={shouldDisableInputs}
                  step="0.1"
                  max="10"
                />
              </div>

              <div className="col-span-1 md:col-span-2 w-[46%] flex flex-col justify-between md:w-full md:flex md:flex-row md:justify-between">
                <label className="text-lg md:text-[1.3rem] w-full md:w-[50%]">Years smoked</label>
                <input
                  type="number"
                  value={yearsSmoked}
                  onChange={handleYearsSmokedChange}
                  required
                  className={`${inputStyles()} w-full md:w-[50%] !py-[6px]`}
                  aria-label="Years Smoked"
                  disabled={shouldDisableInputs}
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-2">
              {result && <p className="text-pink text-center md:text-left text-[1rem] md:text-lg">{result}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;