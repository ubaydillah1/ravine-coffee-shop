"use client";

import { useCartStore } from "@/store/useCartStore";
import React from "react";

const PaymentDetails = () => {
  const { subTotal, taxAmount, totalPrice, totalItems } = useCartStore();

  if (totalItems() === 0) return null;

  return (
    <div className="rounded-[8px] p-[16px] border border-neutral-n300 flex flex-col gap-[12px]">
      <strong className="text-center">Payment Details</strong>

      <div className="flex justify-between b2-b">
        <p>
          Sub Total{" "}
          <span className="text-neutral-n500">({totalItems()} Menu)</span>
        </p>
        Rp{subTotal().toLocaleString("id-ID")}
      </div>
      <div className="flex justify-between b2-b">
        <p>Tax</p>
        Rp{taxAmount().toLocaleString("id-ID")}
      </div>

      <div className="w-full h-[1px] bg-neutral-n300"></div>

      <div className="flex justify-between b2-b text-primary-b300">
        <p>Total</p>
        Rp{totalPrice().toLocaleString("id-ID")}
      </div>
    </div>
  );
};

export default PaymentDetails;
