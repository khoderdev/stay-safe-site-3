import { useState } from 'react';
import SearchBar from './Table/SearchBar';
import SeverityFilter from './Table/Filters';
import TableHeader from './Table/TableHeader';
import TableRow from './Table/TableRow';
import DetailsModal from './Table/DetailsModal';
import { data } from './data'

const FoodSafetyTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleSearch = (term) => setSearchTerm(term);
  const handleSeverityChange = (severity) => setSelectedSeverity(severity);
  const toggleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = data
    .filter(item =>
      item.bacterium.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.illness.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.foodSources.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => selectedSeverity === 'All' || item.severity === selectedSeverity);

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Foodborne Illnesses and Bacteria</h2>
      <SeverityFilter selectedSeverity={selectedSeverity} onChange={handleSeverityChange} />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <TableHeader sortColumn={sortColumn} sortDirection={sortDirection} onSort={toggleSort} />
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <TableRow key={index} item={item} onClick={() => setSelectedEntry(item)} />
          ))}
        </tbody>
      </table>

      {selectedEntry && (
        <DetailsModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
      )}
    </div>
  );
};

export default FoodSafetyTable;
