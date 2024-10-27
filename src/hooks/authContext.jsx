// // import React, { createContext, useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { jwtDecode } from "jwt-decode";

// // const AuthContext = createContext();

// // export const AuthContexProvider = ({ children }) => {
// //   // State for managing user data, token, loading state, and errors
// //   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
// //   const [token, setToken] = useState(() => localStorage.getItem('token'));
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Load user from localStorage on initial render
// //     const storedToken = localStorage.getItem('token');
// //     if (storedToken) {
// //       try {
// //         // Decode token to get user data
// //         const decodedToken = jwtDecode(storedToken);
// //         setUser(decodedToken); // Set user state from decoded token
// //       } catch (error) {
// //         console.error('Failed to decode token:', error);
// //         setError('Invalid token');
// //       }
// //     }
// //     setLoading(false);
// //   }, []);

// //   const register = async (userData) => {
// //     try {
// //       const response = await axios.post('https://api.staysafeaa.org/users/register', userData, { withCredentials: true });
// //       const { token } = response.data;
// //       localStorage.setItem('token', token);
// //       setToken(token);
// //       const decodedUser = jwtDecode(token); // Decode token to get user data
// //       localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
// //       setUser(decodedUser); // Update user state after registration
// //     } catch (err) {
// //       setError(err.response?.data.message || 'Registration failed');
// //     }
// //   };

// //   const login = async (credentials) => {
// //     try {
// //       const response = await axios.post('https://api.staysafeaa.org/users/login', credentials, { withCredentials: true });
// //       const { token } = response.data;
// //       localStorage.setItem('token', token);
// //       setToken(token);
// //       const decodedUser = jwtDecode(token); // Decode token to get user data
// //       localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
// //       setUser(decodedUser); // Update user state after logging in
// //     } catch (err) {
// //       setError(err.response?.data.message || 'Login failed');
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem("user"); // Clear user from localStorage
// //     setToken(null);
// //     setUser(null); // Reset user state on logout
// //   };

// //   // Store user in localStorage whenever it changes
// //   useEffect(() => {
// //     if (user) {
// //       localStorage.setItem("user", JSON.stringify(user));
// //     } else {
// //       localStorage.removeItem("user");
// //     }
// //   }, [user]);

// //   const value = {
// //     user,
// //     token,
// //     loading,
// //     error,
// //     register,
// //     login,
// //     logout,
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children} {/* Render children only when not loading */}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthContext;





// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

// const AuthContext = createContext();

// export const AuthContexProvider = ({ children }) => {
//   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
//   const [token, setToken] = useState(() => localStorage.getItem('token'));
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const isTokenExpired = (token) => {
//     if (!token) return true;
//     const { exp } = jwtDecode(token);
//     return Date.now() >= exp * 1000;
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken && !isTokenExpired(storedToken)) {
//       try {
//         const decodedToken = jwtDecode(storedToken);
//         setUser(decodedToken);
//       } catch (error) {
//         console.error('Failed to decode token:', error);
//         setError('Invalid token');
//         logout();
//       }
//     } else {
//       logout();
//     }
//     setLoading(false);
//   }, []);


//   const register = async (userData) => {
//     try {
//       const response = await axios.post('https://api.staysafeaa.org/users/register', userData, { withCredentials: true });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       setToken(token);
//       const decodedUser = jwtDecode(token); // Decode token to get user data
//       localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
//       setUser(decodedUser); // Update user state after registration
//     } catch (err) {
//       setError(err.response?.data.message || 'Registration failed');
//     }
//   };

//   const login = async (credentials) => {
//     try {
//       const response = await axios.post('https://api.staysafeaa.org/users/login', credentials, { withCredentials: true });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       setToken(token);
//       const decodedUser = jwtDecode(token); // Decode token to get user data
//       localStorage.setItem("user", JSON.stringify(decodedUser)); // Save user data to localStorage
//       setUser(decodedUser); // Update user state after logging in
//     } catch (err) {
//       setError(err.response?.data.message || 'Login failed');
//     }
//   };


//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem("user");
//     setToken(null);
//     setUser(null);
//     setError(null);
//   };

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [user]);

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

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  // State for managing user data, loading state, and errors
  const [user, setUser] = useState(() => JSON.parse(Cookies.get('user') || null));
  const [token, setToken] = useState(() => Cookies.get('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isTokenExpired = (token) => {
    if (!token) return true;
    const { exp } = jwtDecode(token);
    return Date.now() >= exp * 1000;
  };

  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (storedToken && !isTokenExpired(storedToken)) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setUser(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        setError('Invalid token');
        logout();
      }
    } else {
      logout();
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post('https://api.staysafeaa.org/users/register', userData, { withCredentials: true });
      const { token } = response.data;
      Cookies.set('token', token, { secure: true, sameSite: 'None' }); // Set Secure and SameSite
      setToken(token);
      const decodedUser = jwtDecode(token);
      Cookies.set('user', JSON.stringify(decodedUser), { secure: true, sameSite: 'None' }); // Same as above
      setUser(decodedUser);
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post('https://api.staysafeaa.org/users/login', credentials, { withCredentials: true });
      const { token } = response.data;
      Cookies.set('token', token, { secure: true, sameSite: 'None' }); // Same as above
      setToken(token);
      const decodedUser = jwtDecode(token);
      Cookies.set('user', JSON.stringify(decodedUser), { secure: true, sameSite: 'None' }); // Same as above
      setUser(decodedUser);
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  const logout = () => {
    Cookies.remove('token'); // Remove token from cookies
    Cookies.remove('user'); // Clear user from cookies
    setToken(null);
    setUser(null);
    setError(null);
  };

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
