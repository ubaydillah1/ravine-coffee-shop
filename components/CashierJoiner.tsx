"use client";

import { useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { SOCKET_EVENTS } from "./constants/socketEvents";

export const CashierJoiner = () => {
  const { isConnected, emit } = useSocket();

  useEffect(() => {
    console.log("isConnected", isConnected);
    if (isConnected) {
      console.log("JOINED");
      emit(SOCKET_EVENTS.CASHIER.JOIN_ROOM);
    }
  }, [isConnected, emit]);

  return null;
};
