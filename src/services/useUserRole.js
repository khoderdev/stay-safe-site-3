import { useEffect } from "react";
import { useAtom } from "jotai";
import { userRoleAtom } from "../atoms/store";

// Utility function for logging
const logError = (message, error) => {
  console.error(`[Error]: ${message}`, error);
};

const logInfo = (message) => {
  console.log(`[Info]: ${message}`);
};

const useUserRole = () => {
  const [userRole, setUserRole] = useAtom(userRoleAtom);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      logInfo("No token found in localStorage. Setting userRole to null.");
      setUserRole(null);
      return;
    }

    try {
      const tokenParts = token.split(".");
      if (tokenParts.length !== 3) {
        throw new Error("Invalid token format.");
      }

      const payload = JSON.parse(atob(tokenParts[1])); // Decode the token payload
      if (!payload.role) {
        throw new Error("No role found in the token payload.");
      }

      setUserRole(payload.role); // Set user role based on token
      logInfo(`User role set to: ${payload.role}`);
    } catch (error) {
      logError("Error processing token for user role", error);
      setUserRole(null); // Fallback to null in case of any errors
    }
  }, [setUserRole]);

  return userRole; // Return the user role
};

export default useUserRole;
