// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useOrder } from '../contexts/OrderContext';
import {
  ShoppingCart,
  UserCircle,
  LogOut,
  LayoutDashboard,
  Shirt,
  Package,
  Upload,
  ShieldCheck,
  LogIn,
} from 'lucide-react';

export default function Header() {
  const { user, logout } = useAuth();
  const { orders } = useOrder();

  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition">
          🛍️Tee<span className="text-white">zy</span>
        </Link>

        <ul className="flex space-x-6 items-center font-medium">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
              }
            >
              <Shirt className="w-5 h-5" />
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
              }
            >
              <Package className="w-5 h-5" />
              Categories
            </NavLink>
          </li>

          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
              }
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {orders.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full animate-bounce">
                  {orders.length}
                </span>
              )}
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                  }
                >
                  <UserCircle className="w-5 h-5" />
                  Account
                </NavLink>
              </li>

              {/* Admin Panel */}
              {user?.isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/admin/dashboard"
                      className={({ isActive }) =>
                        `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                      }
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/manage-products"
                      className={({ isActive }) =>
                        `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                      }
                    >
                      <Shirt className="w-5 h-5" />
                      Manage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/manage-orders"
                      className={({ isActive }) =>
                        `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                      }
                    >
                      <ShieldCheck className="w-5 h-5" />
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/upload-designs"
                      className={({ isActive }) =>
                        `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                      }
                    >
                      <Upload className="w-5 h-5" />
                      Upload
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-red-500 hover:text-yellow-400 transition"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition flex items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                }
              >
                <LogIn className="w-5 h-5" />
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
