// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-7xl font-extrabold text-yellow-400 mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
