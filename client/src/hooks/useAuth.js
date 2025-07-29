// src/hooks/useAuth.js

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Custom hook to use AuthContext easily in components
export const useAuth = () => {
  return useContext(AuthContext);
};
