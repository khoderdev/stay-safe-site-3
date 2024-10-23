import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/authContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log("Current User: ", currentUser); // Debugging

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
