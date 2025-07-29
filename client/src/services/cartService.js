// src/services/cartService.js
import API from "./api";

// Fetch all cart items for the logged-in user
export const getCartItems = async () => {
  const res = await API.get("/cart");
  return res.data;
};

// Add an item to the cart
export const addToCart = async (itemData) => {
  const res = await API.post("/cart", itemData);
  return res.data;
};

// Remove a specific item from the cart using its ID
export const removeFromCart = async (itemId) => {
  const res = await API.delete(`/cart/${itemId}`);
  return res.data;
};

// Clear the entire cart for the user
export const clearCart = async () => {
  const res = await API.delete("/cart/clear");
  return res.data;
};
