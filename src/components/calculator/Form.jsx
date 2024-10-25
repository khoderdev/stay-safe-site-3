const Form = ({
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
  // Determine if inputs should be disabled
  const shouldDisableInputs = (age < 20 && age > 1) || (age > 75 && age < 101) || !isAdult;

  return (
    <div className="flex flex-col md:w-[50%] w-full p-4 rounded drop-shadow-lg bg-[#f0f0fe]">

      {/* <div className="grid grid-cols-2 text-left items-center md:grid-cols-1"> */}
      <div className="grid grid-cols-2 text-left items-center md:grid-cols-1 gap-x-10 gap-y-4 md:pr-28">

        <div className="col-span-1 md:col-span-2 w-full md:flex md:justify-between text-left ">
          <label className="text-lg md:text-[1.3rem]">Age</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            required
            className={`${inputStyles()} !py-[3px] !w-full md:!w-[50%] bg-white dark:!bg-black`}
            aria-label="Age"
          />
        </div>

        <div className="col-span-1 md:col-span-2 w-full md:flex md:justify-between text-left ">
          <label className="text-lg md:text-[1.3rem]">Gender</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            className={`${selectStyles()} !py-[3px] !w-full md:!w-[50%] bg-white dark:!bg-black`}
            aria-label="Gender"
            disabled={shouldDisableInputs}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="col-span-2 flex w-full justify-between text-left items-center ">
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
              className={`${inputStyles()} w-[77%] md:w-[50%] !py-[2px]`}
              aria-label="Packs Per Day"
              disabled={shouldDisableInputs}
            />
          </div>

          <div className="col-span-1 md:col-span-2 w-[46%] flex flex-col justify-between md:w-full md:flex md:flex-row md:justify-between">
            <label className="text-lg md:text-[1.3rem] w-full md:w-[50%]">Years smoked</label>
            <input
              type="number"
              value={yearsSmoked}
              onChange={handleYearsSmokedChange}
              required
              className={`${inputStyles()} w-full md:w-[50%] !py-[2px]`}
              aria-label="Years Smoked"
              disabled={shouldDisableInputs}
            />
          </div>
        </div>

        <div className="col-span-2 md:col-span-2">
          {result && <p className="text-pink mt-6 text-md">{result}</p>}
        </div>

      </div>

    </div >
  );
};

export default Form;


{/* <form className="flex flex-col md:h-[80%] space-y-5 border p-4 rounded-xl bg-[#f0f0fe]">
        
        <div className="flex flex-row sm:flex-col sm:flex gap-4 justify-center sm:justify-start sm:items-start items-center ">
          <div className="flex flex-col sm:flex-row sm:justify-start items-center">
            <label className="text-md">Age</label>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              required
              className={`${inputStyles()} !w-full md:!w-28 md:!ml-12 !py-[2px]`}
              aria-label="Age"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center !w-full !md:w-24 !py-[7px]">
            <label className="text-md">Gender</label>
            <select
              value={gender}
              onChange={handleGenderChange}
              className={`${selectStyles()} !py-[3px] !w-full md:!w-28 !ml-3 bg-white dark:!bg-black `}
              aria-label="Gender"
              disabled={shouldDisableInputs}
            >
              <option value="" ></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

        </div>

        <div className="flex items-center mb-4">
          <label className="text-md">Ever smoked?</label>
          <div className="flex items-center ml-4">
            <input
              type="checkbox"
              checked={smoker}
              onChange={handleSmokerChange}
              className="h-4 w-4"
              aria-label="Smoker"
              disabled={shouldDisableInputs}
            />
            <span className="ml-2 text-md">Yes</span>
          </div>
        </div>

        {smoker && (
          <div className="flex sm:flex-col gap-2">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center">
              <label className="flex flex-col text-sm sm:text-md">
                Packs of cigarettes smoked per day
                <span className="text-[15px] font-light">(each pack equals 20 cigarettes)</span>
              </label>
              <input
                type="number"
                value={packsPerDay}
                onChange={handlePacksPerDayChange}
                required
                className={`${inputStyles()}!w-full md:!w-28 !ml-3 !py-[2px]`}
                aria-label="Packs Per Day"
                disabled={shouldDisableInputs}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-end sm:justify-start items-center">
              <label className="text-md mr-9 sm:mr-1">Years smoked</label>
              <input
                type="number"
                value={yearsSmoked}
                onChange={handleYearsSmokedChange}
                required
                className={`${inputStyles()} !w-full md:!w-28 !ml-3 !py-[2px]`}
                aria-label="Years Smoked"
                disabled={shouldDisableInputs}
              />
            </div>
          </div>
        )}
      </form> */}