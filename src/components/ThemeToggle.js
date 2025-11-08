import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, cycleTheme } = useContext(ThemeContext);

  const getTransform = () => {
    if (theme === 'dark') return 'translateX(100%)';
    return 'translateX(0)';
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 bg-gray-300 dark:bg-gray-600"
    >
      <span
        className="absolute w-6 h-6 bg-background dark:bg-background-dark rounded-full shadow-md transform transition-transform duration-300"
        style={{ transform: getTransform() }}
      ></span>
      <span className="absolute left-2 text-xs font-semibold">☀️</span>
      <span className="absolute right-2 text-xs font-semibold">🌙</span>
    </button>
  );
};

export default ThemeToggle;