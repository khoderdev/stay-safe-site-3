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
    <div className="flex flex-col md:w-[50%] w-full h-[89%] p-4 sm:p-4 mb-4 sm:mb-0 rounded drop-shadow-md">
      <form className="flex flex-col space-y-4">
        {/* Age and Gender in the same row */}
        <div className="flex flex-row sm:flex-col sm:flex gap-4 justify-center sm:justify-start sm:items-start items-center">
          <div className="flex flex-col sm:flex-row sm:justify-start items-center">
            <label className="text-md">Age</label>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              required
              className={`${inputStyles()} !py-[7px]`}
              aria-label="Age"
            />
          </div>
        </div>

        {/* Render inputs and disable based on age logic */}
        <div className="flex flex-col sm:flex-row sm:justify-start items-center">
          <label className="text-md">Gender</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            className={`${selectStyles()} !py-[10.5px] !w-32 sm:!py-[8px]`}
            aria-label="Gender"
            disabled={shouldDisableInputs} 
          >
            <option value="" ></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex items-center mb-4">
          <label className="text-md">Have you ever smoked?</label>
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
                className={`${inputStyles()} sm:mt-[-18px] !py-[7px] ml-10 sm:ml-2`}
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
                className={`${inputStyles()} !py-[7px] mr-14`}
                aria-label="Years Smoked"
                disabled={shouldDisableInputs} 
              />
            </div>
          </div>
        )}
      </form>

      {result && <p className="text-pink mt-6 text-md">{result}</p>}
    </div>
  );
};

export default Form;
