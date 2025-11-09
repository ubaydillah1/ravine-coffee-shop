import { DefaultEventsMap } from "@socket.io/component-emitter";
import { io, Socket } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const getSocket = () => {
  if (!socket) {
    socket = io("http://localhost:5000");
  }
  return socket;
};
