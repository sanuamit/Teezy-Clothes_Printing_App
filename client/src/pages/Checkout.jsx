// src/pages/Checkout.jsx
import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
  const { cartItems, totalPrice, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-700 mb-6">
              {cartItems.map((item) => (
                <li key={item._id} className="py-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total Items: {totalItems}</span>
              <span>Total Price: ₹{totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => alert("Stripe payment integration coming soon!")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

