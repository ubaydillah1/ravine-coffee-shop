import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductCategory = "COFFEE" | "MILK" | "TEA" | "FOOD" | "SNACK" | "BUNDLE";

type CartItem = {
  quantity: number;
  subtotal: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productId: string;
  productCategory: ProductCategory;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  itemsCount: () => number;
};

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),

      clearCart: () => set({ items: [] }),

      itemsCount: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);
