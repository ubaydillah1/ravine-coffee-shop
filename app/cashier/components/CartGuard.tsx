"use client";

import NotFoundOrder from "@/features/user/order/components/NotFoundOrder";
import { useCartStore } from "@/store/useCartStore";
import { ReactNode, useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

type CartGuardProps = {
  children: ReactNode;
};

const CartGuard = ({ children }: CartGuardProps) => {
  const totalItems = useCartStore((state) => state.totalItems());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  if (totalItems === 0) {
    return <NotFoundOrder />;
  }

  return <>{children}</>;
};

export default CartGuard;
