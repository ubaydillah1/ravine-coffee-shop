"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
// import ChevronUp from "@/public/assets/icons/chevron-up.svg";
// import ChevronRight from "@/public/assets/icons/chevron-right.svg";
// import Discount from "@/public/assets/icons/Discount.svg";
import React from "react";

const CTAPayment = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const totalPayment = useCartStore((state) => state.totalPrice);
  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col bg-white z-90"
      style={{
        boxShadow: "0px -4px 16px #00000014",
        color: "red",
      }}
    >
      {/* <div className="flex justify-between items-center bg-primary-b100 px-[21px] py-[12px]">
        <div className="flex items-center l2-b text-primary-b400 gap-[8px]">
          <Discount className="size-[20px]" />
          Add Promos or Vouchers
        </div>

        <ChevronRight className="size-[24px] text-neutral-n900" />
      </div> */}

      <div className="flex justify-between items-center py-[16px] px-[21px] gap-[40px]">
        <div className="b2-b text-neutral-n900 flex-1">
          <div className="flex gap-[8px] items-center">Payment Total</div>
          <div className="mt-[8px] sub-h2">
            Rp{totalPayment().toLocaleString("id-ID")}
          </div>
        </div>

        <Button
          className="py-[12px] px-[32px] rounded-[8px] flex-1"
          disabled={isSubmitting}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default CTAPayment;
