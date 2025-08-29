import React, { useState } from "react";
import '~@/App.css';
import Navbar from "../Navbar.component";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
    const {theme} = useTheme();
    const [formData,setFormData] = useState({
        email:"",
        username:"",
        password:"",
    });

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    };

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };
    return (
        <>
        <Navbar/>
         <div className={`min-h-screen flex items-center justify-center ${theme === "dark"?"bg-gray-900":"bg-white"} transition-all`}>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            required
          />    
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="text-white mb-4 block text-center">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-bold"
        >
          Login
        </button>
      </form>
    </div>
        </>
    )
};

export default LoginForm;