"use client";

import { CartItem } from "@/store/useCartStore";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export const SwipeableItem = ({
  item,
  onRemove,
}: {
  item: CartItem;
  onRemove: (productId: string) => void;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-5, 5]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      whileTap={{ scale: 0.95 }}
      onDragEnd={(e, info) => {
        if (Math.abs(info.offset.x) > 150) {
          onRemove(item.productId);
        }
      }}
      className="flex items-center justify-between w-full bg-white rounded-lg p-4 cursor-grab active:cursor-grabbing transition-all"
    >
      <div className="max-w-[226px] space-y-[4px]">
        <p className="l2-b">{item.productName}</p>
        <div className="flex gap-[16px] l2-r text-neutral-n700">
          <span>{item.quantity}x</span>
          <span>Rp{item.productPrice.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <p className="l2-b text-neutral-n800">
        Rp{(Number(item.productPrice) * item.quantity).toLocaleString("id-ID")}
      </p>
    </motion.div>
  );
};
