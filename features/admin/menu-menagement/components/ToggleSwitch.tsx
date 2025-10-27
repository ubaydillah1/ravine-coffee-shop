"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useUpdateActiveStatusProduct } from "../hooks/useUpdateActiveStatusProduct";
import { toastError, toastSuccess } from "@/components/ui/sonner";

interface ToggleSwitchProps {
  productId: string;
  defaultActive: boolean;
}

const ToggleSwitch = ({ productId, defaultActive }: ToggleSwitchProps) => {
  const [active, setActive] = useState(defaultActive);
  const { mutate } = useUpdateActiveStatusProduct({});

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !active;
    setActive(next);
    mutate(
      { id: productId, active: next },
      {
        onError: () => toastError("Failed to update status"),
        onSuccess: () => toastSuccess("Status has been updated"),
      }
    );
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-[40px] h-[22px] rounded-full flex items-center transition-colors px-[2px] ${
        active ? "justify-end bg-[#a37343]" : "justify-start bg-[#d4d4d4]"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="w-[18px] h-[18px] bg-white rounded-full shadow-sm"
      />
    </button>
  );
};

export default ToggleSwitch;
