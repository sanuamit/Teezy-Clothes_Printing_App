// src/services/productService.js
import API from "./api";

// Fetch all products
export const getAllProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

// Get a single product by ID
export const getProductById = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};

// Create a new product
export const createProduct = async (productData) => {
  const res = await API.post("/products", productData);
  return res.data;
};

// Update a product
export const updateProduct = async (id, updatedData) => {
  const res = await API.put(`/products/${id}`, updatedData);
  return res.data;
};

// Delete a product
export const deleteProduct = async (id) => {
  const res = await API.delete(`/products/${id}`);
  return res.data;
};
