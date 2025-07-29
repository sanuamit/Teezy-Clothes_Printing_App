// src/pages/Admin/ManageCategories.jsx
import { useState } from "react";

export default function ManageCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "T-Shirts" },
    { id: 2, name: "Hoodies" },
    { id: 3, name: "Custom Prints" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() === "") return;
    const newId = categories.length + 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory("");
  };

  const handleDeleteCategory = (id) => {
    const filtered = categories.filter((cat) => cat.id !== id);
    setCategories(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Product Categories</h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="p-2 rounded-md text-black"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-md"
          >
            <span>{cat.name}</span>
            <button
              onClick={() => handleDeleteCategory(cat.id)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
