// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import Table from './Table';
// import { fetchUsers } from '../../services/api';
// import AuthContext from '../../hooks/authContext';

// function UsersTable() {
//   const { user: currentUser } = useContext(AuthContext); // Get current user from useAuth
//   const [data, setData] = useState([]); // State to store fetched users data
//   const [filteredData, setFilteredData] = useState([]); // State to store filtered data for the table

//   const columns = [
//     { header: 'Username', field: 'username' },
//     { header: 'Email', field: 'email' },
//     { header: 'Role', field: 'role.name' }, // Extract the role name to display
//     { header: 'Status', field: 'status' },  // Ensure status is properly set in your data
//   ];


//   // // Function to fetch users data from the server
//   // const fetchUsers = async () => {
//   //   try {
//   //     const res = await axios.get('http://localhost:8800/users', { withCredentials: true });
//   //     setData(res.data); // Set the fetched data
//   //     setFilteredData(res.data); // Initially, set the filtered data to all users
//   //     console.log('Fetched users:', res.data);
//   //   } catch (error) {
//   //     console.error('Error fetching users:', error.response?.data || error.message);
//   //   }
//   // };

//   // Search function
//   const handleSearch = (query) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = data.filter(user =>
//       user.username.toLowerCase().includes(lowercasedQuery) ||
//       user.email.toLowerCase().includes(lowercasedQuery) ||
//       user.role.name.toLowerCase().includes(lowercasedQuery) || // Fix role access
//       user.status.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredData(filtered);
//   };

//   const handleAddItem = () => {
//     console.log('Add item clicked');
//   };

//   useEffect(() => {
//     if (currentUser) {
//       fetchUsers(setData); // Pass setData to update state
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     setFilteredData(data); // Initialize filtered data with all data
//   }, [data]);


//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Users Table</h1>
//       {currentUser ? (
//         <Table
//           columns={columns}
//           data={filteredData}
//           title="Users Table"
//           onSearch={handleSearch}
//           onAddItem={handleAddItem}
//         />
//       ) : (
//         <p>Please log in to view users.</p>
//       )}
//     </div>
//   );
// }

// export default UsersTable;
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import { fetchUsers } from '../../services/api';
import AuthContext from '../../hooks/authContext';

function UsersTable() {
  const { user: currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const columns = [
    { header: 'Username', field: 'username' },
    { header: 'Email', field: 'email' },
    { header: 'Role', field: 'role.name' },
    { header: 'Status', field: 'status' },
  ];

  // Search function
  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = data.filter(user =>
      user.username.toLowerCase().includes(lowercasedQuery) ||
      user.email.toLowerCase().includes(lowercasedQuery) ||
      user.role.name.toLowerCase().includes(lowercasedQuery) ||
      user.status.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(filtered);
  };

  const handleAddItem = () => {
    console.log('Add item clicked');
  };

  useEffect(() => {
    if (currentUser) {
      fetchUsers(setData);
    }
  }, [currentUser]);

  useEffect(() => {
    setFilteredData(data); // Initialize filtered data
  }, [data]);

  return (
    <div>
      {currentUser ? (
        <Table
          columns={columns}
          data={filteredData}
          title="Users Table"
          onSearch={handleSearch}
          onAddItem={handleAddItem}
        />
      ) : (
        <p>Please log in to view users.</p>
      )}
    </div>
  );
}

export default UsersTable;
