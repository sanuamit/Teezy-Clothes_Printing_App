// src/pages/Admin/ManageProducts.jsx
import { useState, useEffect } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend or dummy JSON
    fetch("/api/products") // update with actual endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Manage All Products</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-400">{product.description}</p>
              <p className="mt-2 font-bold">₹{product.price}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                  Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available to manage.</p>
      )}
    </div>
  );
}
