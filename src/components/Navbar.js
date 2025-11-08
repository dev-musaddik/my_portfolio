import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import PersonalInfoNav from "./PersonalInfoNav";
import HackingOverlay from "./HackingOverlay";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated, loading, user } = state;
  const [isDeveloper, setIsDeveloper] = useState(true);
  const [hacking, setHacking] = useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleToggle = () => {
    const newMode = !isDeveloper;
    setIsDeveloper(newMode);
    setHacking(true);
    setTimeout(() => setHacking(false), 1200);
  };

  const authLinks = (
    <div className="hidden md:flex space-x-6 items-center">
      {[
        { to: "/blogs", label: "Blog" },
        { to: "/dashboard", label: "Dashboard" },
        ...(user && user.role === "admin"
          ? [{ to: "/admin", label: "Admin" }]
          : []),
      ].map((link, i) => (
        <Link
          key={i}
          to={link.to}
          className="relative text-text-primary dark:text-text-primary-dark px-4 py-2 rounded-md overflow-hidden group transition-all duration-300"
        >
          <span className="relative z-10 group-hover:text-primary-dark dark:group-hover:text-primary">{link.label}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></span>
          <span className="absolute inset-0 ring-1 ring-cyan-400 dark:ring-purple-500 rounded-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
        </Link>
      ))}

      <a
        onClick={logout}
        href="#!"
        className="relative text-text-primary dark:text-text-primary-dark px-4 py-2 rounded-md overflow-hidden group transition-all duration-300"
      >
        <span className="relative z-10 group-hover:text-primary-dark dark:group-hover:text-primary">Logout</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></span>
        <span className="absolute inset-0 ring-1 ring-pink-400 dark:ring-red-500 rounded-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
      </a>
    </div>
  );

  return (
    <nav className="bg-background/80 dark:bg-background-dark/80 backdrop-blur-md p-4 shadow-2xl border border-white/10 rounded-b-2xl mx-4 mt-4 relative overflow-hidden">
      {hacking && <HackingOverlay active={true} />}

      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-text-primary dark:text-text-primary-dark text-2xl font-bold relative group"
        >
          <span className="relative z-10">My MERN Portfolio</span>
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
        </Link>

        {/* Animated Mode Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <span
            className={`font-semibold transition-colors duration-300 ${
              isDeveloper ? "text-cyan-400" : "text-text-primary/50"
            }`}
          >
            Developer
          </span>

          <button
            onClick={handleToggle}
            className="relative w-16 h-8 flex items-center bg-gray-800 dark:bg-gray-900 rounded-full p-1 cursor-pointer overflow-hidden shadow-lg border border-white/20"
          >
            <div
              className={`w-6 h-6 rounded-full transform transition-all duration-500 ease-in-out shadow-[0_0_10px_#00ffff] ${
                isDeveloper ? "translate-x-0 bg-cyan-400" : "translate-x-8 bg-purple-400"
              }`}
            >
              <div className="absolute inset-0 animate-ping rounded-full bg-white/30"></div>
            </div>
          </button>

          <span
            className={`font-semibold transition-colors duration-300 ${
              !isDeveloper ? "text-purple-400" : "text-text-primary/50"
            }`}
          >
            Personal
          </span>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex space-x-6 items-center">
          {!loading && (
            <>{!isDeveloper && (isAuthenticated ? authLinks : <PersonalInfoNav />)}</>
          )}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;