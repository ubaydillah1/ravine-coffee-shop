import { OrderCreateResponseData } from "@/features/user/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type OrderState = {
  OrderInformation: OrderCreateResponseData | null;
  setOrderData: (data: OrderCreateResponseData) => void;
  clearOrderData: () => void;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      OrderInformation: null,
      setOrderData: (data) =>
        set({
          OrderInformation: data,
        }),

      clearOrderData: () =>
        set({
          OrderInformation: null,
        }),
    }),
    {
      name: "order-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ OrderInformation: state.OrderInformation }),
    }
  )
);
