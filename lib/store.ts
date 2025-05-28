import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ServiceItem = {
  id: string;
  name: string;
  price: number;
  questions: number;
  description: string;
};

type CartStore = {
  items: ServiceItem[];
  addItem: (item: ServiceItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, item) => sum + item.price, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);