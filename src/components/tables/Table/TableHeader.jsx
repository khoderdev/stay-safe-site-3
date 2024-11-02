const TableHeader = ({ sortColumn, sortDirection, onSort }) => {
  const headers = [
    { label: 'Bacterium', column: 'bacterium' },
    { label: 'Illness', column: 'illness' },
    { label: 'Onset Time', column: 'onsetTime' },
    { label: 'Symptoms', column: 'symptoms' },
    { label: 'Duration', column: 'duration' },
    { label: 'Food Sources', column: 'foodSources' },
  ];

  return (
    <tr>
      {headers.map(({ label, column }) => (
        <th
          key={column}
          onClick={() => onSort(column)}
          className="py-2 px-4 border-b cursor-pointer"
        >
          {label} {sortColumn === column && (sortDirection === 'asc' ? '↓↑' : '↑↓')}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
