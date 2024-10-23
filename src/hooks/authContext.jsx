import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      // Include withCredentials to ensure the JWT is stored in cookies
      const res = await axios.post("http://localhost:8800/auth/login", inputs, { withCredentials: true });
      
      // Set the current user state with user data excluding the password
      setCurrentUser(res.data);
      console.log("User logged in:", res.data);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw new Error("Login failed."); // Optionally propagate the error
    }
  };

  const logout = async () => {
    try {
      // Call the logout API to clear the JWT cookie on the server
      await axios.post("http://localhost:8800/auth/logout", {}, { withCredentials: true });
      setCurrentUser(null); // Clear current user state
      localStorage.removeItem("user"); // Optionally remove user from localStorage
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  // Update local storage whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
