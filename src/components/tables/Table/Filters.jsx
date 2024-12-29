const SeverityFilter = ({ selectedSeverity, onChange }) => {
  const handleChange = (value) => {
    const validSeverities = ["All", "Mild", "Moderate", "Severe"];
    if (validSeverities.includes(value)) {
      onChange(value);
    } else {
      console.warn(`Invalid severity level: ${value}`);
    }
  };

  return (
    <div className="mb-4">
      <label className="mr-2 text-xl font-semibold">Severity:</label>
      <select
        className="p-2 border rounded-sm"
        value={selectedSeverity}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Mild">Mild</option>
        <option value="Moderate">Moderate</option>
        <option value="Severe">Severe</option>
      </select>
    </div>
  );
};

export default SeverityFilter;
