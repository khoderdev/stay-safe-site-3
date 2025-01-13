import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

// Helper function to check token expiration
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const { exp } = jwtDecode(token);
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = Cookies.get("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => Cookies.get("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedToken = Cookies.get("token");
    return savedToken ? !isTokenExpired(savedToken) : false;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken && !isTokenExpired(storedToken)) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setUser(decodedToken);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to decode token:", error);
        setError("Invalid token");
        logout();
      }
    } else {
      logout();
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/users/register",
        userData,
        { withCredentials: true }
      );
      const { token } = response.data;
      Cookies.set("token", token, { secure: true, sameSite: "None" });
      setToken(token);
      const decodedUser = jwtDecode(token);
      Cookies.set("user", JSON.stringify(decodedUser), {
        secure: true,
        sameSite: "None",
      });
      setUser(decodedUser);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setError(err.response?.data.message || "Registration failed");
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      // For testing purposes
      if (
        credentials.email === "test@example.com" &&
        credentials.password === "test123"
      ) {
        const testUser = {
          id: 'test-123',
          email: credentials.email,
          username: "testuser",
          name: "Test User"
        };
        setUser(testUser);
        setIsAuthenticated(true);
        Cookies.set("user", JSON.stringify(testUser));
        return true;
      }

      const response = await axios.post(
        "http://localhost:8800/users/login",
        credentials,
        { withCredentials: true }
      );
      const { token } = response.data;
      Cookies.set("token", token, { secure: true, sameSite: "None" });
      setToken(token);
      const decodedUser = jwtDecode(token);
      Cookies.set("user", JSON.stringify(decodedUser), {
        secure: true,
        sameSite: "None",
      });
      setUser(decodedUser);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setError(err.response?.data.message || "Login failed");
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
