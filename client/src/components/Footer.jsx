// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-4 mt-auto border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        
        <p className="mb-2 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-medium">🛍️Teezy</span>. All rights reserved.
        </p>
        
        <div className="space-x-4 text-xs text-gray-500 text-center md:text-right">
          <span className="hover:text-gray-300 transition-colors">🔒 Stripe Secured</span>
          <span className="hover:text-gray-300 transition-colors">🖼️ Cloudinary Images</span>
          <span className="hover:text-gray-300 transition-colors">🛡️ JWT Auth</span>
        </div>

      </div>
    </footer>
  );
}

