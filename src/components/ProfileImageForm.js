import React, { useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';

const ProfileImageForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const token = localStorage.getItem('token');
      await axiosInstance.put('/profile/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': token,
        },
      });
      setMessage('Profile image updated successfully!');
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage('Error uploading image.');
    }
  };

  return (
    <div className="p-8 rounded-3xl shadow-xl space-y-12 bg-white dark:bg-black">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-black dark:text-white">
        Update Profile Image
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-400 dark:border-gray-700 text-center transition-all duration-300 hover:border-black dark:hover:border-white bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">Drag & Drop your image here, or</p>
          <input type="file" id="imageUpload" className="hidden" accept="image/*" onChange={handleFileChange} />
          <label
            htmlFor="imageUpload"
            className="inline-block bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-opacity-75"
          >
            Browse File
          </label>
          {file && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Selected file: {file.name}</p>}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Max file size: 5MB. Supported formats: JPG, PNG, GIF.</p>
        </div>
        <div className="flex justify-end">
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Upload Image
            </button>
        </div>
        {message && <p className="text-center text-sm mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default ProfileImageForm;
