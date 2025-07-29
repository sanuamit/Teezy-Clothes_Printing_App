// src/pages/Home.jsx

import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const categories = [
  { name: "T-Shirts", description: "Custom printed t-shirts for every occasion." },
  { name: "Hoodies", description: "High-quality printed hoodies and jackets." },
  { name: "Caps", description: "Stylish caps with your brand or design." },
];

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-yellow-400">
          Welcome to <span className="text-white">Teezy</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Design, customize, and print your apparel seamlessly with powerful tech.
          Powered by MERN, secured with JWT, and enriched with Cloudinary & Stripe.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
          >
            Start Designing
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-700 hover:text-white transition"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-10 text-xs text-gray-600">
          <span className="mr-3">MongoDB + Express + React + Node</span> |{" "}
          <span className="mx-3">Cloudinary</span> |{" "}
          <span className="mx-3">Stripe Payments</span> |{" "}
          <span className="ml-3">JWT Auth</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard key={index} category={cat} />
        ))}
      </div>
    </section>
  );
}
