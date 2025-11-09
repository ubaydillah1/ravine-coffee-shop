"use client";

import { useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { SOCKET_EVENTS } from "./constants/socketEvents";

type OrderTrackerProps = {
  orderId: string;
};

export const OrderTrackerJoiner = ({ orderId }: OrderTrackerProps) => {
  const { isConnected, emit } = useSocket();

  useEffect(() => {
    if (isConnected && orderId) {
      emit(SOCKET_EVENTS.ORDER.JOIN_ROOM, orderId);
    }
  }, [isConnected, orderId, emit]);

  return null;
};
