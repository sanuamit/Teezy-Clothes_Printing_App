// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import ManageProducts from "./pages/Admin/ManageProducts";
import ManageOrders from "./pages/Admin/ManageOrders";
import ManageCategories from "./pages/Admin/ManageCategories";
import UploadDesigns from "./pages/Admin/UploadDesigns";

// Context Providers
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";

// Custom Hooks
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    // logic to save a product or form
    console.log("Saving...");
    setShowToast(true);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <Header />

          <Routes>
            {/* User-facing Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
            <Route path="/admin/categories" element={<ManageCategories />} />
            <Route path="/admin/upload" element={<UploadDesigns />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Simulate Save Button (for Toast) - placed above Footer */}
          <div className="py-8 text-center bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <button
              onClick={handleSave}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded transition duration-300"
            >
              Simulate Save
            </button>
          </div>

          {/* Global Toast Message */}
          <Toast
            message="Data saved successfully!"
            show={showToast}
            onClose={() => setShowToast(false)}
          />

          <Footer />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
