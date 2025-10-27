import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  quantity: number;
  subtotal?: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productId: string;
  productCategory?: string;
};

type CartState = {
  items: CartItem[];
  tax: number;
  discount: number;

  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;

  totalPrice: () => number;
  setTax: (value: number) => void;
  setDiscount: (value: number) => void;
  grandTotal: () => number;
};

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      tax: 0.1,
      discount: 0,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId
          );

          let newItems: CartItem[];
          if (existing) {
            newItems = state.items.map((i) =>
              i.productId === item.productId
                ? {
                    ...i,
                    quantity: i.quantity + item.quantity,
                    subtotal: (i.quantity + item.quantity) * i.productPrice,
                  }
                : i
            );
          } else {
            newItems = [
              ...state.items,
              {
                ...item,
                subtotal: item.quantity * item.productPrice,
              },
            ];
          }

          return { items: newItems };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),

      clearCart: () => set({ items: [] }),

      totalPrice: () =>
        get().items.reduce((acc, item) => acc + (item.subtotal ?? 0), 0),

      setTax: (value) => set({ tax: value }),
      setDiscount: (value) => set({ discount: value }),

      grandTotal: () => {
        const { totalPrice, tax, discount } = get();
        const subtotal = totalPrice();
        const taxAmount = subtotal * tax;
        const discountAmount = subtotal * discount;
        return subtotal + taxAmount - discountAmount;
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
