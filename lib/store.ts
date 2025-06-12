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
  quantity?: number;
};

type CartStore = {
  items: ServiceItem[];
  addItem: (item: ServiceItem) => void;
  removeItem: (itemId: string) => void;
  updateItem: (itemId: string, updates: Partial<ServiceItem>) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        // Check if item already exists
        const existingItemIndex = state.items.findIndex(existingItem => existingItem.id === item.id);
        
        if (existingItemIndex >= 0) {
          // If it's a crystal, increase quantity
          if (item.type === 'crystal') {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: (updatedItems[existingItemIndex].quantity || 1) + 1
            };
            return { items: updatedItems };
          } else {
            // For services, don't add duplicates
            return state;
          }
        } else {
          // Add new item with quantity 1
          return { items: [...state.items, { ...item, quantity: item.type === 'crystal' ? 1 : undefined }] };
        }
      }),
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
      updateItemQuantity: (itemId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      total: () => {
        const state = get();
        const crystalItems = state.items.filter(item => item.type === 'crystal');
        const totalCrystalCount = crystalItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const hasDiscount = totalCrystalCount >= 2;
        
        // Calculate base total
        const baseTotal = state.items.reduce((sum, item) => {
          const itemQuantity = item.quantity || 1;
          let itemPrice = item.price * itemQuantity;
          // Only add energizing cost for non-crystal items
          if (item.type !== 'crystal' && item.energized) {
            itemPrice += 49 * itemQuantity;
          }
          return sum + itemPrice;
        }, 0);
        
        // Apply 5% discount if 2 or more crystals
        const discountAmount = hasDiscount ? Math.round(baseTotal * 0.05) : 0;
        return baseTotal - discountAmount;
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);