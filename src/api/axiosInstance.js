// baseURL: 'http://localhost:5001/api', // Set the base URL for all requests
// baseURL: 'https://my-portfolio-backend-three-sand.vercel.app/api', // Set the base URL for all requests

import axios from 'axios';

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api', // Local backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = async () => {
    try {
      const res = await axiosInstance.get('/projects');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };
  
  export const getSkills = async () => {
    try {
      const res = await axiosInstance.get('/skills');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  // Contact API
  export const submitContactMessage = async (data) => {
    try {
      const res = await axiosInstance.post('/contact', data);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const getContactMessages = async () => {
    try {
      const res = await axiosInstance.get('/contact');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const deleteContactMessage = async (id) => {
    try {
      const res = await axiosInstance.delete(`/contact/${id}`);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  // Events API
  export const getEvents = async () => {
    try {
      const res = await axiosInstance.get('/events');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const createEvent = async (data) => {
    try {
      const res = await axiosInstance.post('/events', data);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const deleteEvent = async (id) => {
    try {
      const res = await axiosInstance.delete(`/events/${id}`);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  // Plans API
  export const getPlans = async () => {
    try {
      const res = await axiosInstance.get('/plans');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const createPlan = async (data) => {
    try {
      const res = await axiosInstance.post('/plans', data);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };

  export const deletePlan = async (id) => {
    try {
      const res = await axiosInstance.delete(`/plans/${id}`);
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };
  