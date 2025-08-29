import React from "react";
import { useTheme } from "../contexts/ThemeContext";


const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 py-4 shadow-md 
                  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} 
                  transition-colors duration-500`}
    >
      <span className="text-xl font-bold">MyApp</span>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
