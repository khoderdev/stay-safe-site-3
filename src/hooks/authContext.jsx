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
      const response = await axios.post('http://localhost:8800/users/register', userData, { withCredentials: true });
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
      const response = await axios.post('http://localhost:8800/users/login', credentials, { withCredentials: true });
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
