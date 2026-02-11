import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import DailyRoutineSection from '../sections/DailyRoutineSection'; // Import DailyRoutineSection

const Dashboard = () => {
    const [plans, setPlans] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No token found, please log in.');
                    setLoading(false);
                    return;
                }

                const [plansData, eventsData] = await Promise.all([
                    axiosInstance.get('/plans'),
                    axiosInstance.get('/events')
                ]);

                setPlans(plansData.data);
                setEvents(eventsData.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                // setError('Failed to fetch dashboard data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-xl text-text-primary dark:text-text-primary-dark">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500 dark:text-red-400 text-xl">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-background dark:bg-background-dark">
                <h1 className="text-3xl font-bold text-center mb-8 text-text-primary dark:text-text-primary-dark">Welcome Back</h1>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Plans Section */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                            🚀 Upcoming Plans
                        </h2>
                        {plans.length > 0 ? (
                            <ul className="space-y-3">
                                {plans.map(plan => (
                                    <li key={plan._id} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-indigo-500">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{plan.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(plan.targetDate).toLocaleDateString()} • <span className="capitalize">{plan.status}</span></p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 italic">No plans set yet.</p>
                        )}
                    </div>

                    {/* Events Section */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-600 dark:text-pink-400">
                            📅 Key Events
                        </h2>
                        {events.length > 0 ? (
                            <ul className="space-y-3">
                                {events.map(event => (
                                    <li key={event._id} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-pink-500">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{event.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                                        {event.location && <p className="text-xs text-gray-400 mt-1">📍 {event.location}</p>}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400 italic">No upcoming events.</p>
                        )}
                    </div>
                </div>
            </div>
            {/* Daily Routine Section for authenticated users */}
            <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg shadow-lg bg-background dark:bg-background-dark">
                <DailyRoutineSection />
            </div>
        </div>
    );
};

export default Dashboard;