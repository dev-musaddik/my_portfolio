import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { updateProfileImage } from '../api/adminApi';

const AboutMeSection = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const res = await updateProfileImage(formData);
      dispatch({ type: 'USER_UPDATED', payload: res });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/20 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex items-center mb-4">
        <img
          src={user?.profileImage || '/musa.png'}
          alt="Profile"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={handleImageUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Upload Image
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">{user?.name}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </motion.div>
  );
};

export default AboutMeSection;
