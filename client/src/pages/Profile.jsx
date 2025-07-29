// src/pages/Profile.jsx
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock fetching user data (replace with actual auth or API call)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login"; // redirect to login page
  };

  if (!user) {
    return (
      <div className="p-6 text-center text-xl font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 space-y-4">
        <div>
          <label className="text-gray-600 dark:text-gray-300">Name:</label>
          <p className="text-lg font-semibold">{user.name}</p>
        </div>
        <div>
          <label className="text-gray-600 dark:text-gray-300">Email:</label>
          <p className="text-lg font-semibold">{user.email}</p>
        </div>
        <div className="flex justify-between pt-4">
          <button
            onClick={() => alert("Update Profile Coming Soon")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
