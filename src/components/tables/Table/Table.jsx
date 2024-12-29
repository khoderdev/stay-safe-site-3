// import { useState, useMemo } from 'react';
// import SearchBar from './SearchBar';
// import Filter from './Filters';
// import TableHeader from './TableHeader';
// import TableRow from './TableRow';
// import DetailsModal from './DetailsModal';
// import { data } from '../data';

// const FoodSafetyTable = () => {
//   // State for each column-specific search term
//   const [pathogenSearch, setPathogenSearch] = useState('');
//   const [illnessSearch, setIllnessSearch] = useState('');
//   const [symptomsSearch, setSymptomsSearch] = useState('');
//   const [onsetSearch, setOnsetSearch] = useState('');
//   const [preventionSearch, setPreventionSearch] = useState('');

//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [selectedSeverity, setSelectedSeverity] = useState('All');
//   const [selectedEntry, setSelectedEntry] = useState(null);

//   // Sorting functionality
//   const toggleSort = (column) => {
//     setSortDirection(sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc');
//     setSortColumn(column);
//   };

//   // Filtered data based on individual column searches
//   const filteredData = useMemo(() => {
//     return data
//       .filter((item) =>
//         (!pathogenSearch || (item.pathogen && item.pathogen.toLowerCase().includes(pathogenSearch.toLowerCase()))) &&
//         (!illnessSearch || (item.illness && item.illness.toLowerCase().includes(illnessSearch.toLowerCase()))) &&
//         (!symptomsSearch || (item.symptoms && item.symptoms.toLowerCase().includes(symptomsSearch.toLowerCase()))) &&
//         (!onsetSearch || (item.onset && item.onset.toLowerCase().includes(onsetSearch.toLowerCase()))) &&
//         (!preventionSearch || (item.prevention && item.prevention.toLowerCase().includes(preventionSearch.toLowerCase())))
//       )
//       .filter((item) => selectedSeverity === 'All' || item.severity === selectedSeverity);
//   }, [pathogenSearch, illnessSearch, symptomsSearch, onsetSearch, preventionSearch, selectedSeverity]);

//   // Sorted data
//   const sortedData = useMemo(() => {
//     if (!sortColumn) return filteredData;
//     return [...filteredData].sort((a, b) => {
//       const order = sortDirection === 'asc' ? 1 : -1;
//       return a[sortColumn] < b[sortColumn] ? -order : a[sortColumn] > b[sortColumn] ? order : 0;
//     });
//   }, [filteredData, sortColumn, sortDirection]);

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Foodborne Illnesses and Bacteria</h2>

//       {/* Filter Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
//         <Filter selectedSeverity={selectedSeverity} onChange={setSelectedSeverity} />
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white-bg border border-gray-300 rounded-lg shadow-xs">
//           <thead>
//             <tr className=" text-gray-700 text-sm font-semibold">
//               <th className="py-3">
//                 <SearchBar className='w-full' searchTerm={pathogenSearch} onSearch={setPathogenSearch} />
//               </th>
//               <th className="py-3">
//                 <SearchBar searchTerm={illnessSearch} onSearch={setIllnessSearch} />
//               </th>
//               <th className="py-3">
//                 <SearchBar searchTerm={symptomsSearch} onSearch={setSymptomsSearch} />
//               </th>
//               <th className="py-3">
//                 <SearchBar searchTerm={onsetSearch} onSearch={setOnsetSearch} />
//               </th>
//               <th className="py-3">
//                 <SearchBar searchTerm={preventionSearch} onSearch={setPreventionSearch} />
//               </th>
//             </tr>
//             <TableHeader sortColumn={sortColumn} sortDirection={sortDirection} onSort={toggleSort} />
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {sortedData.map((item, index) => (
//               <TableRow key={index} item={item} onClick={() => setSelectedEntry(item)} />
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for Details */}
//       {selectedEntry && (
//         <DetailsModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
//       )}
//     </div>

//   );
// };

// export default FoodSafetyTable;
import { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filters';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import DetailsModal from './DetailsModal';
import { data } from '../data';

const FoodSafetyTable = () => {
	// State for each column-specific search term
	const [pathogenSearch, setPathogenSearch] = useState('');
	const [illnessSearch, setIllnessSearch] = useState('');
	const [symptomsSearch, setSymptomsSearch] = useState('');
	const [onsetSearch, setOnsetSearch] = useState('');
	const [preventionSearch, setPreventionSearch] = useState('');

	const [sortColumn, setSortColumn] = useState(null);
	const [sortDirection, setSortDirection] = useState('asc');
	const [selectedSeverity, setSelectedSeverity] = useState('All');
	const [selectedEntry, setSelectedEntry] = useState(null);

	// Sorting functionality
	const toggleSort = (column) => {
		setSortDirection(
			sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc'
		);
		setSortColumn(column);
	};

	// Filtered data based on individual column searches
	const filteredData = useMemo(() => {
		return data
			.filter(
				(item) =>
					(!pathogenSearch ||
						(item.pathogen &&
							item.pathogen
								.toLowerCase()
								.includes(pathogenSearch.toLowerCase()))) &&
					(!illnessSearch ||
						(item.illness &&
							item.illness
								.toLowerCase()
								.includes(illnessSearch.toLowerCase()))) &&
					(!symptomsSearch ||
						(item.symptoms &&
							item.symptoms
								.toLowerCase()
								.includes(symptomsSearch.toLowerCase()))) &&
					(!onsetSearch ||
						(item.onset &&
							item.onset.toLowerCase().includes(onsetSearch.toLowerCase()))) &&
					(!preventionSearch ||
						(item.prevention &&
							item.prevention
								.toLowerCase()
								.includes(preventionSearch.toLowerCase())))
			)
			.filter(
				(item) =>
					selectedSeverity === 'All' || item.severity === selectedSeverity
			);
	}, [
		pathogenSearch,
		illnessSearch,
		symptomsSearch,
		onsetSearch,
		preventionSearch,
		selectedSeverity,
	]);

	// Sorted data
	const sortedData = useMemo(() => {
		if (!sortColumn) return filteredData;
		return [...filteredData].sort((a, b) => {
			const order = sortDirection === 'asc' ? 1 : -1;
			return a[sortColumn] < b[sortColumn]
				? -order
				: a[sortColumn] > b[sortColumn]
				? order
				: 0;
		});
	}, [filteredData, sortColumn, sortDirection]);

	// Helper function to handle empty cells
	const handleEmpty = (value) => {
		return value ? value : '-';
	};

	return (
		<div className='p-4 max-w-7xl mx-auto'>
			<h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
				Foodborne Illnesses and Bacteria
			</h2>

			{/* Filter Section */}
			<div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6'>
				<Filter
					selectedSeverity={selectedSeverity}
					onChange={setSelectedSeverity}
				/>
			</div>

			{/* Table Section */}
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white-bg border border-gray-300 rounded-lg shadow-xs'>
					<thead>
						<tr className=' text-gray-700 text-sm font-semibold'>
							<th className='py-3'>
								<SearchBar
									className='w-full'
									searchTerm={pathogenSearch}
									onSearch={setPathogenSearch}
								/>
							</th>
							<th className='py-3'>
								<SearchBar
									searchTerm={illnessSearch}
									onSearch={setIllnessSearch}
								/>
							</th>
							<th className='py-3'>
								<SearchBar
									searchTerm={symptomsSearch}
									onSearch={setSymptomsSearch}
								/>
							</th>
							<th className='py-3'>
								<SearchBar searchTerm={onsetSearch} onSearch={setOnsetSearch} />
							</th>
							<th className='py-3'>
								<SearchBar
									searchTerm={preventionSearch}
									onSearch={setPreventionSearch}
								/>
							</th>
						</tr>
						<TableHeader
							sortColumn={sortColumn}
							sortDirection={sortDirection}
							onSort={toggleSort}
						/>
					</thead>
					<tbody className='text-gray-700 text-sm'>
						{sortedData.map((item, index) => (
							<TableRow
								key={index}
								item={item}
								onClick={() => setSelectedEntry(item)}
							/>
						))}
					</tbody>
				</table>
			</div>

			{/* Modal for Details */}
			{selectedEntry && (
				<DetailsModal
					entry={selectedEntry}
					onClose={() => setSelectedEntry(null)}
				/>
			)}
		</div>
	);
};

export default FoodSafetyTable;
