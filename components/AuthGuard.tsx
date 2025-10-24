"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Role } from "@/features/auth/types/user";

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { isAuthenticated, user } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);

  // Tunggu sampai Zustand selesai rehydrate
  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    setHydrated(useAuthStore.persist.hasHydrated()); // jaga-jaga kalau udah hydrate duluan
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) {
      redirect("/login");
    } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      redirect("/unauthorized");
    }
  }, [hydrated, isAuthenticated, user, allowedRoles]);

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;
  if (allowedRoles && user && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
