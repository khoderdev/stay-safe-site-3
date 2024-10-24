// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// const PrivateRoute = ({ children }) => {
//   const { currentUser } = useContext(useAuth);
//   console.log("Current User: ", currentUser);

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Call the hook directly
  console.log("Current User: ", user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
