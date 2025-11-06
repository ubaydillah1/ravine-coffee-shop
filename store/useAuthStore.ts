"use client";

import { User } from "@/features/auth/types/user";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
};

let isLoggingOut = false;

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      login: (token, user) => set({ token, user, isAuthenticated: true }),
      logout: () => {
        isLoggingOut = true;
        set({ token: null, user: null, isAuthenticated: false });
      },
    }),
    { name: "auth-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export const isCurrentlyLoggingOut = () => isLoggingOut;
