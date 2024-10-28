import axios from "axios";
// export const API_URL = "https://api.staysafeaa.org";
export const API_URL = "http://localhost:8800";

const api = axios.create({
  baseURL: API_URL,
});


// User Management
export const fetchUsers = async (setData) => {
  try {
    const res = await api.get('/users', { withCredentials: true });
    console.log('Fetched users:', res.data); // Log the data
    setData(Array.isArray(res.data) ? res.data : []); // Ensure you're setting an array
  } catch (error) {
    console.error('Error fetching users:', error.response?.data || error.message);
  }
};



export const getUsers = async (token) => {
  return api.get(`/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUserById = async (userId, token) => {
  if (!userId) {
    console.error("User ID is undefined");
    throw new Error("User ID is required");
  }

  try {
    const response = await api.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export const getTargetById = async (userId, token) => {
  try {
    const response = await axios.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await api.get(`/users/current`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error;
  }
};

export const createUser = async (userData, token) => {
  return api.post("/users", userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const registerUser = async (userData) => {
  return api.post("/users/register", userData);
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post(`${API_URL}/users/`, credentials, {
      // No token is needed in the login request
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error.response
      ? error.response.data
      : { message: "An error occurred during login" };
  }
};


export const logoutUser = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/users/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error.response
      ? error.response.data
      : { message: "An error occurred during logout" };
  }
};

export const updateUser = async (id, userData, token) => {
  return api.put(`/users/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const resetUserPassword = async (userId, data, token) => {
  return await api.put(`/users/${userId}/reset-password`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export const deleteUser = async (id, token) => {
  return api.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Role Management
export const getRoles = async (token) => {
  return api.get("/roles", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createRole = async (roleData, token) => {
  return api.post("/roles", roleData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateRole = async (id, roleData, token) => {
  return api.put(`/roles/${id}`, roleData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteRole = async (id, token) => {
  return api.delete(`/roles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Posts Management
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post("/upload", formData, {
      withCredentials: true,
    });

    // Check if response status is OK
    if (res.status >= 200 && res.status < 300) {
      return res.data; // Successfully uploaded
    } else {
      // Handle unexpected response statuses
      throw new Error(`Unexpected response: ${res.status} - ${res.statusText}`);
    }
  } catch (err) {
    // Handle specific errors
    if (err.response) {
      // Server responded with a status outside the 2xx range
      console.error("Error response data:", err.response.data);
      console.error("Error response status:", err.response.status);
      throw new Error(err.response.data.message || "File upload failed.");
    } else if (err.request) {
      // Request was made but no response was received
      console.error("No response received:", err.request);
      throw new Error("File upload failed: No response from server.");
    } else {
      // Something happened while setting up the request
      console.error("Upload error:", err.message);
      throw new Error("File upload failed: " + err.message);
    }
  }
};

export const createPost = async (postData, token) => {
  return api.post("/posts", postData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updatePost = async (postId, postData, token) => {
  return api.put(`/posts/${postId}`, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deletePost = async (postId, token) => {
  return api.delete(`/posts/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getPostById = async (postId, token) => {
  return api.get(`/posts/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createAppointment = async (appointmentData,) => {
  return api.post("/appointments", appointmentData, {
    // headers: { Authorization: `Bearer ${token}` },
  });
};