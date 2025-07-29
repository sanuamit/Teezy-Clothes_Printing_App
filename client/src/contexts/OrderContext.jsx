// src/contexts/OrderContext.jsx
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const placeOrder = async (orderData) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/orders', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders((prev) => [...prev, res.data]);
      // Optional: Toast success
      // toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Order placement failed:", error);
      // toast.error("Failed to place order!");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(res.data);
    } catch (error) {
      console.error("Fetching orders failed:", error);
      // toast.error("Failed to load orders!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, fetchOrders, loading }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
