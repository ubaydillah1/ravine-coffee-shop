import { Button } from "@/components/ui/button";
import ChevronUp from "@/public/assets/icons/chevron-up.svg";
import ChevronRight from "@/public/assets/icons/chevron-right.svg";
import Discount from "@/public/assets/icons/Discount.svg";
import React from "react";

const CTAPayment = () => {
  return (
    <div
      className="sticky bottom-0 left-0 right-0 flex flex-col bg-white"
      style={{
        boxShadow: "0px -4px 16px #00000014",
        color: "red",
      }}
    >
      <div className="flex justify-between items-center bg-primary-b100 px-[21px] py-[12px]">
        <div className="flex items-center l2-b text-primary-b400 gap-[8px]">
          <Discount className="size-[20px]" />
          Add Promos or Vouchers
        </div>

        <ChevronRight className="size-[24px] text-neutral-n900" />
      </div>

      <div className="flex justify-between items-center py-[16px] px-[21px]">
        <div className="b2-b text-neutral-n900">
          <div className="flex gap-[8px] items-center">
            Payment Total <ChevronUp className="size-[16px]" />
          </div>
          <div className="mt-[8px] sub-h2">$4.80</div>
        </div>

        <Button className="py-[12px] px-[32px] rounded-[8px]">
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default CTAPayment;
