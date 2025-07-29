// src/stores/useCartStore.jsx
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item._id === product._id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== id),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
