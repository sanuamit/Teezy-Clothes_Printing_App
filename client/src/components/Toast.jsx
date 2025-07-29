// src/components/Toast.jsx
import { useEffect } from "react";

export default function Toast({ message = "", show = false, onClose = () => {}, duration = 3000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
      {message}
    </div>
  );
}
