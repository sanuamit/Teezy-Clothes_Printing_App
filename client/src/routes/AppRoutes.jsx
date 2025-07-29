// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';

// Public Pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

// Protected Pages (User)
import Profile from '../pages/Profile';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';

// Admin Pages
import Dashboard from '../pages/Admin/Dashboard';
import ManageProducts from '../pages/Admin/ManageProducts';
import ManageOrders from '../pages/Admin/ManageOrders';
import ManageCategories from '../pages/Admin/ManageCategories';
import UploadDesigns from '../pages/Admin/UploadDesigns';

// Auth Wrapper
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes for Logged-in Users */}
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/success" element={<ProtectedRoute><Success /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      {/* Admin Routes - Protected */}
      <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin/products" element={<ProtectedRoute><ManageProducts /></ProtectedRoute>} />
      <Route path="/admin/orders" element={<ProtectedRoute><ManageOrders /></ProtectedRoute>} />
      <Route path="/admin/categories" element={<ProtectedRoute><ManageCategories /></ProtectedRoute>} />
      <Route path="/admin/upload" element={<ProtectedRoute><UploadDesigns /></ProtectedRoute>} />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
