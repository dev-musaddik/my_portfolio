import React, { useState, useEffect } from 'react';
import { getEvents, createEvent, deleteEvent } from '../api/axiosInstance';
import { Trash2, Calendar, MapPin, Plus } from 'lucide-react';

const AdminEvents = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '' });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const data = await getEvents();
            setEvents(data);
        } catch (error) {
            console.error("Failed to fetch events");
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await createEvent(newEvent);
            setNewEvent({ title: '', date: '', location: '', description: '' });
            fetchEvents();
        } catch (error) {
            alert("Failed to create event");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this event?")) {
            await deleteEvent(id);
            fetchEvents();
        }
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Manage Events</h2>
            
            <form onSubmit={handleCreate} className="mb-8 grid gap-4 md:grid-cols-2">
                <input 
                    type="text" placeholder="Event Title" required
                    value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input 
                    type="date" required
                    value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input 
                    type="text" placeholder="Location"
                    value={newEvent.location} onChange={e => setNewEvent({...newEvent, location: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <input 
                    type="text" placeholder="Description"
                    value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button type="submit" className="md:col-span-2 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg font-bold flex items-center justify-center gap-2">
                    <Plus size={20} /> Add Event
                </button>
            </form>

            <div className="space-y-4">
                {events.map(event => (
                    <div key={event._id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-pink-500">
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white">{event.title}</h3>
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-4 mt-1">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(event.date).toLocaleDateString()}</span>
                                {event.location && <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>}
                            </div>
                        </div>
                        <button onClick={() => handleDelete(event._id)} className="text-red-500 hover:bg-red-100 p-2 rounded-lg">
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminEvents;
