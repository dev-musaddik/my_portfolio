import React, { useState, useEffect } from 'react';
import { getPlans, createPlan, deletePlan } from '../api/axiosInstance';
import { Trash2, Calendar, Plus } from 'lucide-react';

const AdminPlans = () => {
    const [plans, setPlans] = useState([]);
    const [newPlan, setNewPlan] = useState({ title: '', targetDate: '', status: 'Planned', priority: 'Medium' });

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const data = await getPlans();
            setPlans(data);
        } catch (error) {
            console.error("Failed to fetch plans");
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await createPlan(newPlan);
            setNewPlan({ title: '', targetDate: '', status: 'Planned', priority: 'Medium' });
            fetchPlans();
        } catch (error) {
            alert("Failed to create plan");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this plan?")) {
            await deletePlan(id);
            fetchPlans();
        }
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Manage Plans</h2>
            
            <form onSubmit={handleCreate} className="mb-8 grid gap-4 md:grid-cols-2">
                <input 
                    type="text" placeholder="Plan Title" required
                    value={newPlan.title} onChange={e => setNewPlan({...newPlan, title: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input 
                    type="date" required
                    value={newPlan.targetDate} onChange={e => setNewPlan({...newPlan, targetDate: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <select 
                    value={newPlan.status} onChange={e => setNewPlan({...newPlan, status: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                    <option value="Planned">Planned</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <select 
                    value={newPlan.priority} onChange={e => setNewPlan({...newPlan, priority: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
                <button type="submit" className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <Plus size={20} /> Add Plan
                </button>
            </form>

            <div className="space-y-4">
                {plans.map(plan => (
                    <div key={plan._id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-indigo-500">
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                {plan.title}
                                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600">{plan.status}</span>
                            </h3>
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-4 mt-1">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(plan.targetDate).toLocaleDateString()}</span>
                                <span className={`text-xs px-2 py-0.5 rounded ${plan.priority === 'High' ? 'text-red-500 bg-red-100' : 'text-gray-500 bg-gray-100'}`}>
                                    {plan.priority}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(plan._id)} className="text-red-500 hover:bg-red-100 p-2 rounded-lg">
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPlans;
