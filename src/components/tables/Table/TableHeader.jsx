const TableHeader = ({ sortColumn, sortDirection, onSort }) => {
  const headers = [
    { label: 'Pathogen', column: 'pathogen' },
    { label: 'Illness', column: 'illness' },
    { label: 'Symptoms', column: 'symptoms' },
    { label: 'Onset & Duration', column: 'onsetTimeDuration' },
    { label: 'Prevention ', column: 'prevention' },
    { label: 'Causes', column: 'causes' },
    { label: 'Comments', column: 'comments' },
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
