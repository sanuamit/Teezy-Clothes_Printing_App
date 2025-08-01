// src/hooks/useCart.js
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => useContext(CartContext);
