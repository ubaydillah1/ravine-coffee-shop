"use client";

import { isCurrentlyLoggingOut, useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Role } from "@/features/auth/types/user";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { isAuthenticated, user } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    setHydrated(useAuthStore.persist.hasHydrated());
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (isCurrentlyLoggingOut()) return;

    if (!isAuthenticated) {
      router.replace("/login");
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      router.replace("/login");
    }
  }, [hydrated, isAuthenticated, user, allowedRoles, router]);

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
