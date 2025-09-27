import { Button } from "@/components/ui/button";
import React from "react";

const CTAOrder = () => {
  return (
    <div
      className="sticky bottom-0 left-0 right-0 px-[21px] py-[16px] flex justify-between bg-white"
      style={{
        boxShadow: "0px -4px 16px #00000014",
        color: "red",
      }}
    >
      <div className="b2-b text-neutral-n900">
        Total Order
        <div className="mt-[8px] sub-h2">$4.80</div>
      </div>

      <Button className="py-[12px] px-[32px] rounded-[8px]">
        Continue to Payment
      </Button>
    </div>
  );
};

export default CTAOrder;
