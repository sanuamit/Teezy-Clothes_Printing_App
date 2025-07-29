// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the Auth Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto-login on page refresh
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // Login Function
  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return { success: false, error: error.response?.data?.message || "Login failed" };
    }
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom Hook to Use Auth
export const useAuth = () => useContext(AuthContext);
