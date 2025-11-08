import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfoNav = () => {
    return (
        <>
            <Link to="/blogs" className="text-text-primary dark:text-text-primary-dark hover:bg-primary/20 dark:hover:bg-primary-dark/20 px-3 py-2 rounded-md transition-all duration-200">Blog</Link>
            <Link to="/register" className="text-text-primary dark:text-text-primary-dark hover:bg-primary/20 dark:hover:bg-primary-dark/20 px-3 py-2 rounded-md transition-all duration-200">Register</Link>
            <Link to="/login" className="text-text-primary dark:text-text-primary-dark hover:bg-primary/20 dark:hover:bg-primary-dark/20 px-3 py-2 rounded-md transition-all duration-200">Login</Link>
        </>
    );
};

export default PersonalInfoNav;