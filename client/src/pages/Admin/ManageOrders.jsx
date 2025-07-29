// src/pages/Admin/ManageOrders.jsx
import { useEffect, useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your backend or dummy data
    setOrders([
      {
        id: 1,
        customer: "Amit Kumar",
        status: "Processing",
        date: "2025-07-28",
        total: 2500,
      },
      {
        id: 2,
        customer: "John Doe",
        status: "Delivered",
        date: "2025-07-25",
        total: 1200,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-300 dark:border-gray-700"
              >
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.status}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">₹{order.total}</td>
                <td className="p-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                    View
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2">
                    Update
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
