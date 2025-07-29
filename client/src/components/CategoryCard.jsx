// src/components/CategoryCard.jsx
import { Shirt } from "lucide-react"; // Optional icon from lucide-react

export default function CategoryCard({ category }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-yellow-100 p-3 rounded-full shadow-inner">
          <Shirt className="h-8 w-8 text-yellow-500" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{category.description}</p>
    </div>
  );
}
