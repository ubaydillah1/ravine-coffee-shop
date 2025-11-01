"use client";

import { useUserInfoStore } from "@/store/useUserInfoStore";
import { motion } from "framer-motion";

export default function OrderTypeSwitch() {
  const { orderType, setOrderType } = useUserInfoStore();

  return (
    <div className="relative flex w-[320px] bg-gray-200 rounded-xl p-1">
      <motion.div
        layout
        initial={false}
        animate={{
          x: orderType === "DINE_IN" ? 0 : "95%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="absolute top-1 bottom-1 left-1 w-1/2 bg-white rounded-xl shadow-sm"
      />

      {/* Buttons */}
      <button
        className={`relative z-10 flex-1 py-3 text-center font-medium ${
          orderType === "DINE_IN" ? "text-black" : "text-gray-600"
        }`}
        onClick={() => setOrderType("DINE_IN")}
      >
        Dine In
      </button>

      <button
        className={`relative z-10 flex-1 py-3 text-center font-medium ${
          orderType === "TAKE_AWAY" ? "text-black" : "text-gray-600"
        }`}
        onClick={() => setOrderType("TAKE_AWAY")}
      >
        Take Away
      </button>
    </div>
  );
}
