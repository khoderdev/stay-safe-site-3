import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let success;
      if (isLogin) {
        success = await login(formData);
      } else {
        success = await register(formData);
      }
      
      if (success) {
        navigate('/book-appointment');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTestUser = () => {
    setIsLogin(true);
    setFormData({
      username: 'testuser',
      email: 'test@example.com',
      password: 'test123',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700">
            <h2 className="text-2xl font-bold text-white text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-blue-100 text-center mt-2 text-sm">
              {isLogin ? 'Use test@example.com / test123' : 'Sign up with any details'}
            </p>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
              
              <button
                type="button"
                onClick={handleTestUser}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors mb-4"
              >
                Use Test Account
              </button>

              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="w-full text-blue-500 hover:text-blue-600"
              >
                {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
