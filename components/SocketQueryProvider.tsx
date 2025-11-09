"use client";

import { getOrdersQueryKey } from "@/features/cashier/hooks/useGetOrders";
import { getSocket } from "@/lib/socket";
import { useOrderStore } from "@/store/useOrderStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SOCKET_EVENTS } from "./constants/socketEvents";

type PaymentStatus = "CANCELLED" | "FAILED" | "PENDING" | "SUCCESS";

const SocketQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const socket = getSocket();
  const orderId = useOrderStore((state) => state.OrderInformation?.order.id);

  useEffect(() => {
    const handleOrderPaid = () => {
      console.log("Refresh Order");
      queryClient.invalidateQueries({ queryKey: getOrdersQueryKey({}) });
    };

    const handlePaymentStatus = (data: {
      orderId: string;
      status: PaymentStatus;
    }) => {
      if (data.orderId === orderId) {
        if (data.status === "SUCCESS") {
          router.replace(`/successful-payment`);
        } 
      }
    };

    socket.on(SOCKET_EVENTS.CASHIER.REFRESH_ORDER, handleOrderPaid);
    socket.on(SOCKET_EVENTS.ORDER.PAYMENT_STATUS, handlePaymentStatus);

    return () => {
      socket.off(SOCKET_EVENTS.CASHIER.REFRESH_ORDER, handleOrderPaid);
      socket.off(SOCKET_EVENTS.ORDER.PAYMENT_STATUS, handlePaymentStatus);
    };
  }, [queryClient, socket, router, orderId]);

  return <div>{children}</div>;
};

export default SocketQueryProvider;
