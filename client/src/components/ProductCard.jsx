// src/components/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '../stores/useCartStore';
import { formatPrice } from '../utils/formatPrice';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-yellow-600 font-bold text-lg">
            ₹{formatPrice(product.price)}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full transition"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
