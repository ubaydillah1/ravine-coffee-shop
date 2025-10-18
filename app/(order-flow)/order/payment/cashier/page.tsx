import Header from "@/components/Header";
import DineInBadge from "@/features/order-flow/order/components/DineInBadge";
import React from "react";
import AlertTriangle from "@/public/assets/icons/alert-triangle.svg";
import CashierActionButton from "@/features/order-flow/order/components/CashierActionButton";

const CashierPaymentPage = () => {
  return (
    <div className="bg-white">
      <Header title="Order Summary" withBackArrow={false} />

      <main className="py-[20px] space-y-[32px]  px-[20px] sm:px-[40px]">
        <DineInBadge />

        <div className="text-center space-y-[24px]">
          <div>
            <p className="b1-b">Order Number</p>
            <p className="h3">ABCD1234</p>
          </div>

          <div className="size-[240px] mx-auto bg-black"></div>

          <div className="flex p-[16px] gap-[12px] max-w-[348px] bg-accent-y100 rounded-[8px] mx-auto">
            <AlertTriangle className="size-[24px] text-accent-y500" />
            <p className="l2-r text-left">
              <span className="font-bold">Show the QR code</span> or{" "}
              <span className="font-bold">8-digit order number</span> to our
              cashier.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-neutral-n300 my-[32px]"></div>

        <div className="space-y-[20px]">
          <p className="l1-b">Ordered Items</p>

          <div className="flex justify-between items-center">
            <div className="space-y-[4px] max-w-[226px]">
              <p className="l2-b">
                Bundling Coffee + Toast + French Fries + Mix Platter
              </p>
              <div className="gap-[16px] flex">
                <p className="l2-r text-neutral-n700">1x</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>
            </div>

            <p className="l2-b">Rp20.000</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-[4px] max-w-[226px]">
              <p className="l2-b">
                Bundling Coffee + Toast + French Fries + Mix Platter
              </p>
              <div className="gap-[16px] flex">
                <p className="l2-r text-neutral-n700">1x</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>
            </div>

            <p className="l2-b">Rp20.000</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-[4px] max-w-[226px]">
              <p className="l2-b">
                Bundling Coffee + Toast + French Fries + Mix Platter
              </p>
              <div className="gap-[16px] flex">
                <p className="l2-r text-neutral-n700">1x</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>
            </div>

            <p className="l2-b">Rp20.000</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-[4px] max-w-[226px]">
              <p className="l2-b">
                Bundling Coffee + Toast + French Fries + Mix Platter
              </p>
              <div className="gap-[16px] flex">
                <p className="l2-r text-neutral-n700">1x</p>
                <p className="l2-r text-neutral-n700">Rp20.000</p>
              </div>
            </div>

            <p className="l2-b">Rp20.000</p>
          </div>

          <div className="h-[1px] bg-neutral-n300"></div>

          <div className="space-y-[8px]">
            <div className="flex justify-between">
              <p className="b2-b">
                Sub Total <span className="text-neutral-n500">(2 menu)</span>
              </p>
              <p className="b2-b">Rp40.000</p>
            </div>

            <div className="flex justify-between">
              <p className="b2-b">Tax</p>
              <p className="b2-b">Rp40.000</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="b1-b">Total</p>
            <p className="b1-b">Rp40.000</p>
          </div>
        </div>

        <CashierActionButton />
      </main>
    </div>
  );
};

export default CashierPaymentPage;
