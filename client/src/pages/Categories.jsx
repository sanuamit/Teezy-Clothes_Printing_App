// src/pages/Categories.jsx
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories (replace URL with your actual backend or dummy JSON)
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Explore Categories
      </h1>
      {categories.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Loading categories...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">
                {category.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category.description || "No description available."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
