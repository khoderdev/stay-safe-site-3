const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="search"
    placeholder="Search by bacterium, illness, or food source..."
    className="md:w-1/4 p-2 mb-4 border rounded-sm ml-2"
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
