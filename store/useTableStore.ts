import { create } from "zustand";
import { persist } from "zustand/middleware";

type TableState = {
  tableNumber: string | null;
  setTableNumber: (num: string) => void;
  clearTableNumber: () => void;
};

export const useTableStore = create(
  persist<TableState>(
    (set) => ({
      tableNumber: null,
      setTableNumber: (num: string) => set({ tableNumber: num }),
      clearTableNumber: () => set({ tableNumber: null }),
    }),
    { name: "table-storage" }
  )
);
