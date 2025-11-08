import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { axiosInstance } from '../api/axiosInstance';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [error, setError] = useState(null);
    const { loadUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setError('Passwords do not match');
        } else {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify({ name, email, password });
                const res = await axiosInstance.post('/auth/register', body, config);
                localStorage.setItem('token', res.data.token);
                await loadUser();
                navigate('/dashboard');
            } catch (err) {
                console.error(err.response.data);
                setError(err.response.data.msg || err.response.data.errors[0].msg);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-background dark:bg-background-dark">
                <h1 className="text-3xl font-bold text-center mb-6 text-text-primary dark:text-text-primary-dark">Sign Up</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={e => onSubmit(e)} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                            required
                            className="w-full p-3 rounded-md bg-background/50 dark:bg-background-dark/50 text-text-primary dark:text-text-primary-dark placeholder-text-primary/50 dark:placeholder-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            className="w-full p-3 rounded-md bg-background/50 dark:bg-background-dark/50 text-text-primary dark:text-text-primary-dark placeholder-text-primary/50 dark:placeholder-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minLength="6"
                            required
                            className="w-full p-3 rounded-md bg-background/50 dark:bg-background-dark/50 text-text-primary dark:text-text-primary-dark placeholder-text-primary/50 dark:placeholder-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                            minLength="6"
                            required
                            className="w-full p-3 rounded-md bg-background/50 dark:bg-background-dark/50 text-text-primary dark:text-text-primary-dark placeholder-text-primary/50 dark:placeholder-text-primary-dark/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 rounded-md bg-primary dark:bg-primary-dark text-background dark:text-background-dark font-semibold hover:bg-primary/80 dark:hover:bg-primary-dark/80 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:ring-offset-2 dark:focus:ring-offset-background-dark transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center text-text-primary/70 dark:text-text-primary-dark/70">
                    Already have an account? <Link to="/login" className="text-text-primary dark:text-text-primary-dark hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;