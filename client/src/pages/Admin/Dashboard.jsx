// src/pages/Admin/Dashboard.jsx
import { useState } from 'react';
import { FiMenu, FiUser, FiSettings, FiLogOut, FiHome } from 'react-icons/fi';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-gray-800 transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-6">
          <span className="text-xl font-bold">{isSidebarOpen ? 'Admin' : ""}</span>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FiMenu className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-4 mt-8">
          <NavItem icon={<FiHome />} label="Dashboard" isOpen={isSidebarOpen} />
          <NavItem icon={<FiUser />} label="Users" isOpen={isSidebarOpen} />
          <NavItem icon={<FiSettings />} label="Settings" isOpen={isSidebarOpen} />
          <NavItem icon={<FiLogOut />} label="Logout" isOpen={isSidebarOpen} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="text-3xl font-semibold mb-4">Admin Dashboard</header>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card title="Total Users" value="1,240" />
          <Card title="Orders" value="320" />
          <Card title="Revenue" value="$8,450" />
        </section>
      </main>
    </div>
  );
}

function NavItem({ icon, label, isOpen }) {
  return (
    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
      {icon}
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
