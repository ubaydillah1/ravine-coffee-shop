import { create } from "zustand";
import { persist } from "zustand/middleware";

type TableState = {
  tableNumber: number | null;
  setTableNumber: (num: number) => void;
  clearTableNumber: () => void;
};

export const useTableStore = create(
  persist<TableState>(
    (set) => ({
      tableNumber: null,
      setTableNumber: (num: number) => set({ tableNumber: num }),
      clearTableNumber: () => set({ tableNumber: null }),
    }),
    { name: "table-storage" }
  )
);
