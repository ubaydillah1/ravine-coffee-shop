"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OrderTypeSwitch() {
  const [selected, setSelected] = useState<"dinein" | "takeaway">("dinein");

  return (
    <div className="relative flex w-[320px] bg-gray-200 rounded-xl p-1">
      <motion.div
        layout
        initial={false}
        animate={{
          x: selected === "dinein" ? 0 : "95%",
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
          selected === "dinein" ? "text-black" : "text-gray-600"
        }`}
        onClick={() => setSelected("dinein")}
      >
        Dine In
      </button>

      <button
        className={`relative z-10 flex-1 py-3 text-center font-medium ${
          selected === "takeaway" ? "text-black" : "text-gray-600"
        }`}
        onClick={() => setSelected("takeaway")}
      >
        Take Away
      </button>
    </div>
  );
}
