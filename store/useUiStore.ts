import { create } from "zustand";

interface UIState {
  errorMessage: string | null;
  isErrorOpen: boolean;
  redirectTo: string | null;
  setError: (message: string) => void;
  clearError: () => void;
  setRedirectTo: (path: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  errorMessage: null,
  isErrorOpen: false,
  redirectTo: null,

  setError: (message) => set({ errorMessage: message, isErrorOpen: true }),
  clearError: () => set({ errorMessage: null, isErrorOpen: false }),
  setRedirectTo: (path) => set({ redirectTo: path }),
}));
