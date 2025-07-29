// src/services/orderService.js
import API from "./api";

// Create a new order
export const createOrder = async (orderData) => {
  const res = await API.post("/orders", orderData);
  return res.data;
};

// Get all orders made by the current user
export const getUserOrders = async () => {
  const res = await API.get("/orders/my-orders");
  return res.data;
};

// Get a single order by its ID
export const getOrderById = async (id) => {
  const res = await API.get(`/orders/${id}`);
  return res.data;
};
