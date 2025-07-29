// src/services/authService.js
import API from "./api";

export const register = async (userData) => {
  const res = await API.post("/auth/register", userData);
  return res.data;
};

export const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  return res.data;
};

export const logout = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};

export const getUserProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};
