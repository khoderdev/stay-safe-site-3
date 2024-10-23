import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative bg-gradient-to-r from-blue-400 to-blue-600" style={{ backgroundImage: 'url("/stay2.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn z-10">
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5 text-gray-500" />
              ) : (
                <FaEye className="w-5 h-5 text-gray-500" />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="btn-3 w-full py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
          {err && <p className="text-red-500">{typeof err === "string" ? err : JSON.stringify(err)}</p>}
          <span className="block text-center">
            Do you have an account? <Link to="/login" className="text-blue ml-1 hover:underline">Login</Link>
          </span>
        </form>
      </div>
    </div>

  );
};

export default Register;
