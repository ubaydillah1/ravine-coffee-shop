"use client";

import React from "react";
import ShoppingCart from "@/public/assets/icons/shopping-cart.svg";
import { useCartStore } from "@/store/useCartStore";

const CheckoutButton = () => {
  const itemsCount = useCartStore((state) => state.itemsCount());

  return (
    <div className="fixed right-[0] left-[0] bottom-[21px] px-[21px]">
      <div className="h-[64px] bg-primary-b300 flex shadow-lg rounded-[8px] overflow-hidden">
        <div className="relative flex-center w-[59px] bg-white">
          <ShoppingCart className="text-primary-b300" />
          <div className="absolute flex-center text-white l3-b bg-primary-b300 rounded-full max-h-[16px] px-[5px] py-[5px] top-[7px] right-[7px]">
            1
          </div>
        </div>
        <div className="px-[16px] py-[8px] flex justify-between items-center flex-1">
          <div className="flex-col flex justify-between h-full">
            <p className="l2-r text-white">Total</p>
            <p className="l2-r text-white">$9.9</p>
          </div>
          <p className="l2-b text-white">CHECK OUT ({`${itemsCount}`})</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
