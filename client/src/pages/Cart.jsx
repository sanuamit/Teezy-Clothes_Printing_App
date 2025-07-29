// src/pages/Cart.jsx
"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button"; // Ensure this button component exists

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  if (!Array.isArray(cart)) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        Loading cart...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-600 dark:text-gray-400">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-8">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <img
                src={item.image || "https://via.placeholder.com/120"}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl border dark:border-gray-700"
              />
              <div className="flex-1 w-full space-y-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ₹{item.price?.toFixed(2) || 0}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <label htmlFor={`qty-${item._id}`} className="text-sm">
                    Quantity:
                  </label>
                  <input
                    id={`qty-${item._id}`}
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      updateQuantity(item._id, parseInt(e.target.value))
                    }
                    className="w-16 px-3 py-1 rounded border dark:border-gray-600 bg-white dark:bg-gray-700 text-center"
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg font-medium">
              <div>Total Items: {totalItems}</div>
              <div>Total Price: ₹{totalPrice.toFixed(2)}</div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button
                onClick={() => alert("Proceed to payment integration")}
                className="bg-green-600 hover:bg-green-700"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
