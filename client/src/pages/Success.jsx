// src/pages/Success.jsx
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-lg text-gray-400 mb-8">
        Thank you for your order. We’ve received your payment.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
