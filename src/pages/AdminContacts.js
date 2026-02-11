import React, { useEffect, useState } from 'react';
import { getContactMessages, deleteContactMessage } from '../api/axiosInstance';
import { Trash2, Mail, Calendar, User } from 'lucide-react';

const AdminContacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const data = await getContactMessages();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteContactMessage(id);
        setMessages(messages.filter(msg => msg._id !== id));
      } catch (error) {
        alert("Failed to delete message");
      }
    }
  };

  if (loading) return <div className="p-8 text-center">Loading messages...</div>;

  return (
    <div className="p-6 md:p-10 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Inquiries</h1>
      
      {messages.length === 0 ? (
        <div className="text-gray-500 italic">No messages found.</div>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                      <User size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{msg.name}</h3>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Mail size={14} /> {msg.email}
                      </div>
                   </div>
                </div>
                <button 
                  onClick={() => handleDelete(msg._id)}
                  className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-gray-700 dark:text-gray-300 mb-4">
                {msg.message}
              </div>

              <div className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar size={12} />
                {new Date(msg.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
