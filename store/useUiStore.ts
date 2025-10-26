import { create } from "zustand";

type UIState = {
  errorMessage: string | null;
  setError: (message: string) => void;
  clearError: () => void;
  isErrorOpen: boolean;
};

export const useUIStore = create<UIState>((set) => ({
  errorMessage: null,
  isErrorOpen: false,

  setError: (message) =>
    set({
      errorMessage: message,
      isErrorOpen: true,
    }),

  clearError: () =>
    set({
      errorMessage: null,
      isErrorOpen: false,
    }),
}));
