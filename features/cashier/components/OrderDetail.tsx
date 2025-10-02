import React from "react";
import { Button } from "@/components/ui/button";

import OrderTypeSwitch from "@/features/cashier/components/OrderTypeSwitch";
import AddNotesOverlay from "./AddNotesOverlay";

const OrderDetail = () => {
  return (
    <div className="h-full flex flex-col justify-between min-h-0 gap-[24px]">
      <div className="flex flex-col gap-[24px] flex-1 overflow-auto">
        <div className="space-y-[16px]">
          <h1 className="sub-h1">Order Detail</h1>

          <div>
            <OrderTypeSwitch />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 space-y-[24px] hide-scrollbar">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div className="flex items-center justify-between w-full" key={i}>
                <div className="max-w-[226px] space-y-[4px]">
                  <p className="l2-b">
                    Bundling Coffee + Toast + French Fries + Mix Platter
                  </p>
                  <div className="flex gap-[16px] l2-r text-neutral-n700">
                    <span>1x</span>
                    <span>Rp20.000</span>
                  </div>
                </div>

                <p className="l2-b">Rp20.000</p>
              </div>
            ))}
        </div>
      </div>

      <div className="space-y-[12px]">
        <AddNotesOverlay />

        <div className="w-full rounded-[8px] border border-neutral-n300 p-[16px] space-y-[12px]">
          <div className="flex justify-between b2-b">
            <p>
              Subtotal <span className="text-neutral-n500">(2 menu)</span>
            </p>
            <p>Rp40.000</p>
          </div>
          <div className="flex justify-between b2-b">
            <p>Tax</p>
            <p>Rp40.000</p>
          </div>
          <div className="h-[1px] w-full bg-neutral-n200"></div>
          <div className="flex justify-between b1-b text-primary-b300">
            <p>Total</p>
            <p>Rp40.000</p>
          </div>
        </div>

        <Button className="w-full">Process Transaction</Button>
      </div>
    </div>
  );
};

export default OrderDetail;
