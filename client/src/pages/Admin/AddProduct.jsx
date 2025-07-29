// src/pages/Admin/AddProduct.jsx
import React, { useState } from "react";
import { uploadImage } from "../../services/cloudinaryService";
import { addProduct } from "../../services/productService";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    try {
      const uploaded = await uploadImage(file);
      setFormData({ ...formData, image: uploaded.url });
      setMsg("Image uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      setMsg("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData);
      setMsg("Product added successfully!");
      setFormData({
        name: "",
        category: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (err) {
      console.error("Product submission failed:", err);
      setMsg("Failed to add product");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        {loading && <p className="text-yellow-400">Uploading image...</p>}
        {formData.image && (
          <img
            src={formData.image}
            alt="Uploaded"
            className="w-32 h-32 object-cover rounded mx-auto"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-semibold"
        >
          Add Product
        </button>
        {msg && <p className="text-center text-sm text-green-400">{msg}</p>}
      </form>
    </div>
  );
}
