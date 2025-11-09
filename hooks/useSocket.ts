/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useCallback } from "react";
import { getSocket } from "@/lib/socket";

type EventHandler = (...args: any[]) => void;

export const useSocket = () => {
  const socket = getSocket();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [latestData, setLatestData] = useState<any | null>(null);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [socket]);

  const emit = useCallback(
    (event: string, payload?: any) => {
      if (isConnected) {
        socket.emit(event, payload);
      }
    },
    [isConnected, socket]
  );

  const on = useCallback(
    (eventName: string, handler: EventHandler) => {
      socket.on(eventName, handler);
    },
    [socket]
  );

  const off = useCallback(
    (eventName: string, handler: EventHandler) => {
      socket.off(eventName, handler);
    },
    [socket]
  );

  return {
    isConnected,
    socketInstance: socket,
    emit,
    on,
    off,
    latestData,
    setLatestData,
  };
};
