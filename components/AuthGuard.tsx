"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Role } from "@/features/auth/types/user";
import { useUIStore } from "@/store/useUiStore";

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { isAuthenticated, user } = useAuthStore();
  const { setError, setRedirectTo } = useUIStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    setHydrated(useAuthStore.persist.hasHydrated());
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) {
      setError("You must be logged in to access this page.");
      setRedirectTo("/login");
    } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      setError("You do not have access to this page.");
      setRedirectTo("/login");
    }
  }, [hydrated, isAuthenticated, user, allowedRoles, setError, setRedirectTo]);

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-screen flex-1">
        <p className="text-gray-500">Loading authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;
  if (allowedRoles && user && !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
