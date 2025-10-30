"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useTableStore } from "@/store/useTableStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessfulPaymenPage = () => {
  const tableNumber = useTableStore((state) => state.tableNumber);
  const router = useRouter();

  return (
    <div className="h-screen bg-white flex flex-col px-[20px] sm:px-[40px]">
      <Header title="QRIS" withBackArrow={true} />

      <main className="flex flex-center flex-col flex-1 gap-[35px]">
        <div className="text-center space-y-[24px]">
          <div className="size-[240px] mx-auto overflow-hidden relative">
            <Image
              src="/assets/images/order-completed.png"
              alt="success"
              fill
              className="bg-cover"
            />
          </div>

          <div className="space-y-[8px]">
            <p className="b1-b">Payment Successful!</p>
            <p className="b2-r text-neutral-n700 max-w-[309px]">
              Thank you! Your payment was completed successfully.
            </p>
          </div>
        </div>

        <Button
          className="w-full max-w-[348px]"
          onClick={() => {
            if (tableNumber) {
              router.push(`/menu/t/${tableNumber}`);
            } else {
              router.push("/");
            }
          }}
        >
          New Order
        </Button>
      </main>
    </div>
  );
};

export default SuccessfulPaymenPage;
