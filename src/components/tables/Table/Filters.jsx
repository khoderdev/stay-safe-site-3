const SeverityFilter = ({ selectedSeverity, onChange }) => (
  <div className="mb-4">
    <label className="mr-2 text-xl font-semibold">Severity:</label>
    <select
      className="p-2 border rounded"
      value={selectedSeverity}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Mild">Mild</option>
      <option value="Moderate">Moderate</option>
      <option value="Severe">Severe</option>
    </select>
  </div>
);

export default SeverityFilter;
