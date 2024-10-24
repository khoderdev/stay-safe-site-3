// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContexProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   const login = async (inputs) => {
//     try {
//       const res = await axios.post("http://api.staysafeaa.org/users/login", inputs, { withCredentials: true });

//       setCurrentUser(res.data);
//       console.log("User logged in:", res.data);
//     } catch (error) {
//       console.error("Login failed:", error.response?.data || error.message);
//       throw new Error("Login failed."); // Optionally propagate the error
//     }
//   };

//   const logout = async () => {
//     try {
//       // Call the logout API to clear the JWT cookie on the server
//       await axios.post("http://api.staysafeaa.org/users/logout", {}, { withCredentials: true });
//       setCurrentUser(null); // Clear current user state
//       localStorage.removeItem("user"); // Optionally remove user from localStorage
//     } catch (error) {
//       console.error("Logout failed:", error.response?.data || error.message);
//     }
//   };

//   // Update local storage whenever currentUser changes
//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("user", JSON.stringify(currentUser));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////


// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthContexProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       // Optionally, you can fetch user data here using the token
//     }
//     setLoading(false);
//   }, []);

//   const register = async (userData) => {
//     try {
//       const response = await axios.post('http://api.staysafeaa.org/users/register', userData, { withCredentials: true });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       setToken(token);
//       setUser(userData);
//     } catch (err) {
//       setError(err.response?.data.message || 'Registration failed');
//     }
//   };

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('http://api.staysafeaa.org/users/login', credentials, { withCredentials: true });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       setToken(token);
//       setUser(credentials);
//     } catch (err) {
//       setError(err.response?.data.message || 'Login failed');
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//     setCurrentUser(null);
//     setUser(null);
//   };

//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("user", JSON.stringify(currentUser));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [currentUser]);

//   const value = {
//     user,
//     token,
//     loading,
//     error,
//     register,
//     login,
//     logout,
//   };



//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  // State for managing user data, token, loading state, and errors
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load user from localStorage on initial render
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        // Decode token to get user data
        const decodedToken = jwtDecode(storedToken);
        setUser(decodedToken); // Set user state from decoded token
      } catch (error) {
        console.error('Failed to decode token:', error);
        setError('Invalid token');
      }
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post('https://api.staysafeaa.org/users/register', userData, { withCredentials: true });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      const decodedUser = jwtDecode(token); // Decode token to get user data
      localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
      setUser(decodedUser); // Update user state after registration
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post('https://api.staysafeaa.org/users/login', credentials, { withCredentials: true });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      const decodedUser = jwtDecode(token); // Decode token to get user data
      localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
      setUser(decodedUser); // Update user state after logging in
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("user"); // Clear user from localStorage
    setToken(null);
    setUser(null); // Reset user state on logout
  };

  // Store user in localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const value = {
    user,
    token,
    loading,
    error,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};

export default AuthContext;