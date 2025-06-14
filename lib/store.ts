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
            // For services, don't add duplicates - but you might want to handle this differently
            return state;
          }
        } else {
          // Add new item with appropriate quantity
          return { 
            items: [...state.items, { 
              ...item, 
              quantity: item.type === 'crystal' ? (item.quantity || 1) : 1 
            }] 
          };
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
            item.id === itemId && quantity > 0 ? { ...item, quantity } : item
          ).filter(item => item.quantity !== 0), // Remove items with 0 quantity
        })),
        
      clearCart: () => set({ items: [] }),
      
      total: () => {
        const state = get();
        
        // Calculate base total for all items
        const baseTotal = state.items.reduce((sum, item) => {
          const itemQuantity = item.quantity || 1;
          let itemPrice = item.price * itemQuantity;
          
          // Add energizing cost for ALL energized items (both crystals and services)
          if (item.energized) {
            itemPrice += 49 * itemQuantity;
          }
          
          return sum + itemPrice;
        }, 0);
        
        // Calculate discount based on crystal count
        const crystalItems = state.items.filter(item => item.type === 'crystal');
        const totalCrystalCount = crystalItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const hasDiscount = totalCrystalCount >= 2;
        
        // Apply 5% discount if 2 or more crystals
        if (hasDiscount) {
          const discountAmount = baseTotal * 0.05;
          return Math.round((baseTotal - discountAmount) * 100) / 100; // Round to 2 decimal places
        }
        
        return Math.round(baseTotal * 100) / 100; // Round to 2 decimal places
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);