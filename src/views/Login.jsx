// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, error } = useAuth();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Login
          </button>
          {err && <p className="text-red-500">{err}</p>}
          <span className="block text-center">
            Don't you have an account? <Link to="/register" className="text-blue hover:underline">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;


// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { loginUser, API_URL } from "../services/api"; // Adjust the import path as necessary

// // function Login() {
// //   const INITIAL_LOGIN_OBJ = {
// //     email: "",
// //     password: "",
// //     username: "",
// //   };

// //   const [loading, setLoading] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
// //   const [err, setError] = useState(null);
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);


// //   // const handleChange = (e) => {
// //   //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   // };


// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setErrorMessage("");

// //     if (loginObj.email.trim() === "")
// //       return setErrorMessage("Email is required!");
// //     if (loginObj.password.trim() === "")
// //       return setErrorMessage("Password is required!");

// //     try {
// //       setLoading(true);
// //       const response = await axios.post(`${API_URL}/users/login`, {
// //         email: loginObj.email,
// //         username: loginObj.username,
// //         password: loginObj.password,
// //       });

// //       localStorage.setItem("token", response.data.token);
// //       setLoading(false);
// //       navigate("/app/welcome");
// //     } catch (error) {
// //       setLoading(false);
// //       if (error.response) {
// //         setErrorMessage(
// //           error.response.data.message || "An error occurred. Please try again."
// //         );
// //       } else if (error.request) {
// //         setErrorMessage(
// //           "Network error. Please check your connection and try again."
// //         );
// //       } else {
// //         setErrorMessage("An unexpected error occurred. Please try again.");
// //       }
// //     }
// //   };

// //   const updateFormValue = ({ updateType, value }) => {
// //     setErrorMessage("");
// //     setLoginObj({ ...loginObj, [updateType]: value });
// //   };

// //   // import { useState, useContext } from "react";
// //   // import { Link, useNavigate } from "react-router-dom";
// //   // import { AuthContext } from "../hooks/AuthContext";
// //   // import { FaEye, FaEyeSlash } from "react-icons/fa";

// //   // const Login = () => {
// //   //   const [inputs, setInputs] = useState({
// //   //     username: "",
// //   //     password: "",
// //   //   });
// //   //   const [err, setError] = useState(null);
// //   //   const [showPassword, setShowPassword] = useState(false);

// //   //   const navigate = useNavigate();
// //   //   const { login } = useContext(AuthContext);

// //   //   const handleChange = (e) => {
// //   //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   //   };

// //   //   const handleSubmit = async (e) => {
// //   //     e.preventDefault();
// //   //     try {
// //   //       await login(inputs);
// //   //       navigate("/");
// //   //     } catch (err) {
// //   //       setError(err.response.data);
// //   //     }
// //   //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen relative" style={{ backgroundImage: 'url("/stay2.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
// //       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

// //       <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn z-10">
// //         <h1 className="text-2xl font-semibold text-center">Login</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             required
// //             type="text"
// //             placeholder="Username"
// //             name="username"
// //             onChange={updateFormValue}
// //             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
// //           />
// //           <div className="relative">
// //             <input
// //               required
// //               type={showPassword ? "text" : "password"}
// //               placeholder="Password"
// //               name="password"
// //               onChange={updateFormValue}
// //               className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
// //             />
// //             <span
// //               className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
// //               onMouseDown={() => setShowPassword(true)}
// //               onMouseUp={() => setShowPassword(false)}
// //               onMouseLeave={() => setShowPassword(false)}
// //             >
// //               {showPassword ? (
// //                 <FaEyeSlash className="w-5 h-5 text-gray-500" />
// //               ) : (
// //                 <FaEye className="w-5 h-5 text-gray-500" />
// //               )}
// //             </span>
// //           </div>
// //           <button
// //             type="submit"
// //             className="btn-3 w-full py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
// //           >
// //             Login
// //           </button>
// //           {err && <p className="text-red-500">{err}</p>}
// //           <span className="block text-center">
// //             Don't you have an account?
// //             <Link to="/register" className="text-blue ml-2 hover:underline">Register</Link>
// //           </span>
// //         </form>
// //       </div>
// //     </div>

// //   );
// // };

// // export default Login;
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { API_URL } from "../services/api";

// function Login() {
//   const INITIAL_LOGIN_OBJ = {
//     email: "",
//     password: "",
//     username: "",
//   };

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (loginObj.username.trim() === "")
//       return setErrorMessage("username is required!");
//     if (loginObj.email.trim() === "")
//       return setErrorMessage("email is required!");
//     if (loginObj.password.trim() === "")
//       return setErrorMessage("Password is required!");

//     try {
//       setLoading(true);
//       const response = await axios.post(`${API_URL}/users/login`, {
//         email: loginObj.email,
//         username: loginObj.username,
//         password: loginObj.password,
//       });

//       localStorage.setItem("token", response.data.token);
//       setLoading(false);
//       navigate("/");
//     } catch (error) {
//       setLoading(false);
//       if (error.response) {
//         setErrorMessage(
//           error.response.data.message || "An error occurred. Please try again."
//         );
//       } else if (error.request) {
//         setErrorMessage(
//           "Network error. Please check your connection and try again."
//         );
//       } else {
//         setErrorMessage("An unexpected error occurred. Please try again.");
//       }
//     }
//   };

//   const updateFormValue = (e) => {
//     const { name, value } = e.target;
//     setErrorMessage("");
//     setLoginObj({ ...loginObj, [name]: value });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen relative" style={{ backgroundImage: 'url("/stay2.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

//       <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn z-10">
//         <h1 className="text-2xl font-semibold text-center">Login</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             required
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={updateFormValue}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//           />
//           <input
//             required
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={updateFormValue}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//           />
//           <div className="relative">
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               name="password"
//               onChange={updateFormValue}
//               className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             />
//             <span
//               className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//               onMouseDown={() => setShowPassword(true)}
//               onMouseUp={() => setShowPassword(false)}
//               onMouseLeave={() => setShowPassword(false)}
//             >
//               {showPassword ? (
//                 <FaEyeSlash className="w-5 h-5 text-gray-500" />
//               ) : (
//                 <FaEye className="w-5 h-5 text-gray-500" />
//               )}
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="btn-3 w-full py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
//           >
//             Login
//           </button>
//           {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//           <span className="block text-center">
//             Don't you have an account?
//             <Link to="/register" className="text-blue ml-2 hover:underline">Register</Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



