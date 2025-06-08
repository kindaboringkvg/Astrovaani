import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ServiceItem = {
  id: string;
  name: string;
  price: number;
  questions?: number;
  description: string;
  type: 'service' | 'crystal';
  energized?: boolean;
};

type CartStore = {
  items: ServiceItem[];
  addItem: (item: ServiceItem) => void;
  removeItem: (itemId: string) => void;
  updateItem: (itemId: string, updates: Partial<ServiceItem>) => void;
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
      updateItem: (itemId, updates) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, ...updates } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, item) => {
        let itemPrice = item.price;
        if (item.type === 'crystal' && item.energized) {
          itemPrice += 49;
        }
        return sum + itemPrice;
      }, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);