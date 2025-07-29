// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your actual backend URL
  withCredentials: true, // Enables cookies for cross-site requests
});

// Automatically attach token to every request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Optional: handle response errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can also handle global errors like token expiry here
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized access – maybe token expired.");
      // Optional: redirect to login or notify user
    }
    return Promise.reject(error);
  }
);

export default API;
