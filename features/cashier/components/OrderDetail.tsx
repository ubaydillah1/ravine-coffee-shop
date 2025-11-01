"use client";

import React from "react";
import OrderTypeSwitch from "@/features/cashier/components/OrderTypeSwitch";
import AddNotesAction from "./AddNotesAction";
import OrderAction from "./OrderAction";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { SwipeableItem } from "./SwipeableItem";
import { AnimatePresence, motion } from "framer-motion";

const OrderDetail = () => {
  const { totalItems, items, removeItem, taxAmount, subTotal, totalPrice } =
    useCartStore();

  return (
    <div
      className={cn(
        "h-full flex flex-col justify-between min-h-0 gap-[24px] overflow-hidden",
        totalItems() === 0 && "hidden"
      )}
    >
      <div className="flex flex-col gap-[24px] flex-1 overflow-hidden">
        <div className="space-y-[16px]">
          <h1 className="sub-h1">Order Detail</h1>
          <div>
            <OrderTypeSwitch />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 hide-scrollbar">
          <motion.div layout className="flex flex-col overflow-hidden">
            <AnimatePresence mode="sync">
              {items.map((item) => (
                <motion.div
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.15 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="overflow-hidden"
                >
                  <SwipeableItem item={item} onRemove={removeItem} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="space-y-[12px]">
        <AddNotesAction />
        <div className="w-full rounded-[8px] border border-neutral-n300 p-[16px] space-y-[12px]">
          <div className="flex justify-between b2-b">
            <p>
              Subtotal{" "}
              <span className="text-neutral-n500">({totalItems()} menu)</span>
            </p>
            <p>Rp{subTotal().toLocaleString("id-ID")}</p>
          </div>
          <div className="flex justify-between b2-b">
            <p>Tax</p>
            <p>Rp{taxAmount().toLocaleString("id-ID")}</p>
          </div>
          <div className="h-[1px] w-full bg-neutral-n200"></div>
          <div className="flex justify-between b1-b text-primary-b300">
            <p>Total</p>
            <p>Rp{totalPrice().toLocaleString("id-ID")}</p>
          </div>
        </div>
        <OrderAction />
      </div>
    </div>
  );
};

export default OrderDetail;
