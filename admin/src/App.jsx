export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Top Navigation */}
      <header className="flex justify-between items-center bg-white shadow-md rounded-lg px-6 py-4 mb-8">
        <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Welcome, Admin</span>
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Users</h2>
          <p className="text-3xl font-bold text-blue-500">1,245</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Orders</h2>
          <p className="text-3xl font-bold text-green-500">320</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-purple-500">$12,450</p>
        </div>
      </main>
    </div>
  );
}
